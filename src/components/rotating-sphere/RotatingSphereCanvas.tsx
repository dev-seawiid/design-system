'use client'

import { Html, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Suspense, useMemo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import type { Group } from 'three'
import { Vector3 } from 'three'
import type { NormalizedSphereItem } from './RotatingSphere'

interface SphereItemProps {
  item: NormalizedSphereItem
  position: Vector3
}

const isPlainContent = (content: ReactNode): content is string | number =>
  typeof content === 'string' || typeof content === 'number'

const SphereItem: FC<SphereItemProps> = ({ item, position }) => {
  const groupRef = useRef<Group>(null)
  const { camera } = useThree()

  useFrame(() => {
    if (groupRef.current && camera) {
      groupRef.current.lookAt(camera.position)
    }
  })

  const useCircleStyle =
    item.variant === 'circle' || (item.variant == null && isPlainContent(item.content))
  const useRectangleStyle = item.variant === 'rectangle'

  const inner = useCircleStyle ? (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-role-primary-500 text-white text-lg font-bold">
      {item.content}
    </div>
  ) : useRectangleStyle ? (
    <div className="rounded-lg px-4 py-2 text-white bg-shallow-beach-to-deep-sea">
      <span className="text-sm font-semibold">{item.content}</span>
    </div>
  ) : (
    item.content
  )

  return (
    <group ref={groupRef} position={position}>
      <Html center transform occlude={false} distanceFactor={5}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '80px',
            height: '80px',
            fontSize: '48px',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          {inner}
        </div>
      </Html>
    </group>
  )
}

interface SphereGroupProps {
  items: NormalizedSphereItem[]
  radius: number
  speed: number
  autoRotate: boolean
}

const SphereGroup: FC<SphereGroupProps> = ({ items, radius, speed, autoRotate }) => {
  const groupRef = useRef<Group>(null)

  useFrame(() => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += speed * 0.01
      groupRef.current.rotation.x += speed * 0.01
    }
  })

  const itemPositions = useMemo(() => {
    return items.map((item) => {
      const length = Math.sqrt(item.x * item.x + item.y * item.y + item.z * item.z)
      const normalizedX = item.x / length
      const normalizedY = item.y / length
      const normalizedZ = item.z / length

      return new Vector3(normalizedX * radius, normalizedY * radius, normalizedZ * radius)
    })
  }, [items, radius])

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <SphereItem key={item.id} item={item} position={itemPositions[index]} />
      ))}
    </group>
  )
}

export interface RotatingSphereCanvasProps {
  normalizedItems: NormalizedSphereItem[]
  radius: number
  speed: number
  autoRotate: boolean
}

/**
 * three/Canvas를 사용하는 실제 구 렌더링 컴포넌트.
 * 서버에서 로드되지 않도록 진입점에서 dynamic(ssr: false)으로만 불러옵니다.
 */
export function RotatingSphereCanvas({
  normalizedItems,
  radius,
  speed,
  autoRotate,
}: RotatingSphereCanvasProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, radius * 3], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -10]} intensity={0.5} />
      <Suspense fallback={null}>
        <SphereGroup
          items={normalizedItems}
          radius={radius}
          speed={speed}
          autoRotate={autoRotate}
        />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={autoRotate}
        autoRotateSpeed={speed * 10}
      />
    </Canvas>
  )
}
