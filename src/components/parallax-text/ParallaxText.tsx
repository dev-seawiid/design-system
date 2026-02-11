import { cn } from '@/utils/cn'
import type { HTMLAttributes, Ref } from 'react'
import { ParallaxTextRow } from './ParallaxTextRow'

/**
 * 텍스트 항목 하나. text 필수, href는 옵션.
 * - href 있으면 → 클릭 시 해당 링크(외부 링크는 target="_blank")
 * - href 없으면 → 텍스트만 표시(클릭 불가)
 */
export interface ParallaxTextItem {
  text: string
  href?: string
}

export interface ParallaxTextProps extends HTMLAttributes<HTMLDivElement> {
  /** 스크롤할 텍스트 항목. { text, href? } 형태. href 있으면 링크, 없으면 텍스트만 */
  items: ParallaxTextItem[]
  baseVelocity?: number
  /** 한 row에 넣을 항목 개수 */
  itemsPerRow?: number
  pauseOnHover?: boolean
  className?: string
  ref?: Ref<HTMLDivElement>
}

/**
 * ParallaxText 컴포넌트
 *
 * 스크롤 시 텍스트가 parallax 효과로 움직이는 애니메이션입니다.
 * 여러 row로 나뉘어 각 row마다 반대 방향으로 흐릅니다.
 * Azurtelier.com의 ParallaxText를 참고했습니다.
 * 애니메이션 로직은 ParallaxTextRow(클라이언트)에만 있어 서버 컴포넌트에서 사용 가능합니다.
 */
export function ParallaxText({
  items,
  baseVelocity = 1,
  itemsPerRow = 3,
  pauseOnHover = true,
  className,
  ref,
  ...props
}: ParallaxTextProps) {
  const rows: ParallaxTextItem[][] = []

  for (let i = 0; i < items.length; i += itemsPerRow) {
    const rowItems = items.slice(i, i + itemsPerRow)
    if (rowItems.length > 0) {
      rows.push(rowItems)
    }
  }

  return (
    <div
      ref={ref}
      className={cn('space-y-2 overflow-hidden', 'py-4', 'bg-algae-to-shallow-beach', className)}
      {...props}
    >
      {rows.map((rowItems, index) => {
        const rowDirection = index % 2 === 0 ? 1 : -1

        return (
          <ParallaxTextRow
            key={index}
            items={rowItems}
            baseVelocity={baseVelocity}
            direction={rowDirection}
            pauseOnHover={pauseOnHover}
          />
        )
      })}
    </div>
  )
}
