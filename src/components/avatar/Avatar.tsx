import { cn } from '@/utils/cn'
import type { HTMLAttributes, ReactNode, Ref } from 'react'
import { ClientSlot } from '../client/ClientSlot'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /** 이미지 슬롯 (next/image 사용 권장). 이미지 없으면 null → fallback 표시 */
  imageSlot?: ReactNode
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
  shape?: 'circle' | 'square'
  ref?: Ref<HTMLDivElement>
}

/**
 * Avatar 컴포넌트
 *
 * 사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다.
 * next/image를 쓰려면 imageSlot으로 전달하세요 (PostCard 이미지와 동일 패턴).
 * 이미지가 없을 경우 fallback 텍스트를 표시합니다.
 * React 19에서는 ref를 일반 prop으로 전달합니다.
 */
export function Avatar({
  imageSlot,
  alt = '',
  size = 'md',
  fallback,
  shape = 'circle',
  className,
  ref,
  ...props
}: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
  }

  const hasImageSlot = imageSlot != null && imageSlot !== ''
  const fallbackDisplay = fallback || (alt ? alt.charAt(0).toUpperCase() : '?')
  const ariaLabel = alt || fallback || 'User avatar'

  const slotClassName = cn(
    'h-full w-full block',
    '[&>*]:h-full [&>*]:w-full [&>img]:object-cover [&>img]:h-full [&>img]:w-full',
    shape === 'circle' ? 'rounded-full [&>img]:rounded-full' : 'rounded-md [&>img]:rounded-md'
  )

  return (
    <div
      ref={ref}
      role="img"
      aria-label={ariaLabel}
      className={cn(
        'inline-flex items-center justify-center font-medium bg-semantic-muted text-neutral-600',
        'dark:bg-neutral-800 dark:text-neutral-300',
        sizeClasses[size],
        shape === 'circle' ? 'rounded-full' : 'rounded-md',
        'overflow-hidden',
        className
      )}
      {...props}
    >
      {hasImageSlot ? (
        <ClientSlot className={slotClassName}>{imageSlot}</ClientSlot>
      ) : (
        <span className="font-semibold" aria-hidden="true">
          {fallbackDisplay}
        </span>
      )}
    </div>
  )
}
