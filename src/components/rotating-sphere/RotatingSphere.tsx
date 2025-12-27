import { cn } from '@/utils/cn'
import { Html, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import React, { Suspense, useMemo, useRef } from 'react'
import { Group, Vector3 } from 'three'

export interface RotatingSphereItem {
  id: string | number
  content: React.ReactNode
  x: number // -1 to 1
  y: number // -1 to 1
  z: number // -1 to 1
}

export interface RotatingSphereProps extends React.HTMLAttributes<HTMLDivElement> {
  items: RotatingSphereItem[]
  radius?: number
  speed?: number
  autoRotate?: boolean
  className?: string
  ref?: React.Ref<HTMLDivElement>
}

interface SphereItemProps {
  item: RotatingSphereItem
  position: Vector3
}

const SphereItem: React.FC<SphereItemProps> = ({ item, position }) => {
  const groupRef = useRef<Group>(null)
  const { camera } = useThree()

  useFrame(() => {
    if (groupRef.current && camera) {
      groupRef.current.lookAt(camera.position)
    }
  })

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
          {item.content}
        </div>
      </Html>
    </group>
  )
}

interface SphereGroupProps {
  items: RotatingSphereItem[]
  radius: number
  speed: number
  autoRotate: boolean
}

const SphereGroup: React.FC<SphereGroupProps> = ({ items, radius, speed, autoRotate }) => {
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

/**
 * RotatingSphere 컴포넌트
 *
 * 3D 구 형태로 아이템들이 회전하는 애니메이션 컴포넌트입니다.
 * Three.js와 @react-three/fiber를 사용하여 구현되었으며, 아이콘은 항상 정면을 바라봅니다.
 * wujieli.com의 홈페이지 3D 회전 애니메이션을 참고했습니다.
 */
export function RotatingSphere({
  items,
  radius = 2,
  speed = 0.5,
  autoRotate = true,
  className,
  ref,
  ...props
}: RotatingSphereProps) {
  if (!items || items.length === 0) {
    return (
      <div
        ref={ref}
        className={cn(
          'wg-relative wg-flex wg-items-center wg-justify-center',
          'wg-min-h-[400px] wg-w-full',
          className
        )}
        {...props}
      >
        <div className="wg-text-center wg-text-sm wg-text-gray-500">No items to display</div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        'wg-relative wg-flex wg-items-center wg-justify-center',
        'wg-cursor-grab active:wg-cursor-grabbing',
        className
      )}
      style={{
        width: `${radius * 4}rem`,
        height: `${radius * 4}rem`,
        minWidth: '400px',
        minHeight: '400px',
      }}
      {...props}
    >
      <Canvas
        camera={{ position: [0, 0, radius * 3], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <Suspense fallback={null}>
          <SphereGroup items={items} radius={radius} speed={speed} autoRotate={autoRotate} />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={autoRotate}
          autoRotateSpeed={speed * 10}
        />
      </Canvas>
    </div>
  )
}
