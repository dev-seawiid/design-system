'use client'

import { cn } from '@/utils/cn'
import dynamic from 'next/dynamic'
import { useMemo } from 'react'
import type { HTMLAttributes, ReactNode, Ref } from 'react'

/*
 * 히스토리: children 방식 미사용 이유
 * - 이전에는 <RotatingSphere><RotatingSphereItem>1</RotatingSphereItem>...</RotatingSphere> 형태로
 *   자식을 넘기고, getItemsFromChildren에서 child.type === RotatingSphereItem 또는 displayName으로
 *   "아이템인지" 판별했습니다.
 * - React Server Component에서 만든 자식은 직렬화 과정을 거치면서 함수/타입 참조가 클라이언트와
 *   달라져, 클라이언트에서 아이템으로 인식되지 않는 문제가 발생했습니다. (직렬화된 트리에는
 *   props는 넘어오지만 type/displayName은 환경에 따라 동일하게 유지되지 않음)
 * - 그래서 children + RotatingSphereItem API를 제거하고, 직렬화 가능한 데이터만 넘기는
 *   items: RotatingSphereItemInput[] prop 기반 API로 통일했습니다. RSC/클라이언트 구분 없이 동작합니다.
 */

const RotatingSphereCanvas = dynamic(
  () =>
    import('./RotatingSphereCanvas').then((m) => m.RotatingSphereCanvas),
  { ssr: false }
)

export type RotatingSphereItemVariant = 'circle' | 'rectangle'

export interface RotatingSphereItemInput {
  content: ReactNode
}

export interface RotatingSphereProps extends HTMLAttributes<HTMLDivElement> {
  /** 구에 표시할 아이템 목록. RSC/클라이언트 구분 없이 동일하게 동작. */
  items: RotatingSphereItemInput[]
  /** 아이템 모양. 전체 통일 (circle: 원형, rectangle: 태그형). 미지정 시 content가 string/number면 circle, 아니면 그대로. */
  variant?: RotatingSphereItemVariant
  radius?: number
  speed?: number
  autoRotate?: boolean
  className?: string
  ref?: Ref<HTMLDivElement>
}

/** 내부/Canvas에서 사용. 위치가 계산된 아이템 타입 */
export interface NormalizedSphereItem {
  id: number
  content: ReactNode
  variant?: RotatingSphereItemVariant
  x: number
  y: number
  z: number
}

const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5))

function getSpherePoint(index: number, total: number): { x: number; y: number; z: number } {
  const y = 1 - (index / Math.max(total - 1, 1)) * 2
  const radiusAtY = Math.sqrt(1 - y * y)
  const theta = GOLDEN_ANGLE * index
  const x = Math.cos(theta) * radiusAtY
  const z = Math.sin(theta) * radiusAtY
  return { x, y, z }
}

function normalizeItems(
  input: RotatingSphereItemInput[],
  variant: RotatingSphereItemVariant | undefined
): NormalizedSphereItem[] {
  return input.map((item, index) => {
    const { x, y, z } = getSpherePoint(index, input.length)
    return { id: index, content: item.content, variant, x, y, z }
  })
}

/**
 * RotatingSphere
 *
 * 3D 구 형태로 아이템이 회전하는 애니메이션. items prop으로만 데이터 전달 (RSC 호환).
 * three/Canvas는 클라이언트에서만 로드됩니다.
 */
export function RotatingSphere({
  items,
  variant,
  radius = 2,
  speed = 0.5,
  autoRotate = true,
  className,
  ref,
  ...props
}: RotatingSphereProps) {
  const normalizedItems = useMemo(
    () => (items.length ? normalizeItems(items, variant) : []),
    [items, variant]
  )

  if (!normalizedItems.length) {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-center justify-center',
          'min-h-[400px] w-full',
          className
        )}
        {...props}
      >
        <div className="text-center text-sm text-definition-fog-500">No items to display</div>
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn(
        'relative flex items-center justify-center',
        'cursor-grab active:cursor-grabbing',
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
      <RotatingSphereCanvas
        normalizedItems={normalizedItems}
        radius={radius}
        speed={speed}
        autoRotate={autoRotate}
      />
    </div>
  )
}
