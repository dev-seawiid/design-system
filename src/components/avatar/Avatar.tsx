import { cn } from '@/utils/cn'
import React from 'react'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  fallback?: string
  shape?: 'circle' | 'square'
  ref?: React.Ref<HTMLDivElement>
}

/**
 * Avatar 컴포넌트
 *
 * 사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다.
 * 이미지가 없을 경우 fallback 텍스트를 표시합니다.
 */
export function Avatar({
  src,
  alt = '',
  size = 'md',
  fallback,
  shape = 'circle',
  className,
  ref,
  ...props
}: AvatarProps) {
  const [imageError, setImageError] = React.useState(false)

  const sizeClasses = {
    sm: 'wg-h-8 wg-w-8 wg-text-xs',
    md: 'wg-h-10 wg-w-10 wg-text-sm',
    lg: 'wg-h-12 wg-w-12 wg-text-base',
    xl: 'wg-h-16 wg-w-16 wg-text-lg',
  }

  const showFallback = !src || imageError

  return (
    <div
      ref={ref}
      className={cn(
        'wg-inline-flex wg-items-center wg-justify-center wg-font-medium wg-bg-neutral-100 wg-text-neutral-600',
        'dark:wg-bg-neutral-800 dark:wg-text-neutral-300',
        sizeClasses[size],
        shape === 'circle' ? 'wg-rounded-full' : 'wg-rounded-md',
        className
      )}
      {...props}
    >
      {showFallback ? (
        <span className="wg-font-semibold">
          {fallback || (alt ? alt.charAt(0).toUpperCase() : '?')}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            'wg-h-full wg-w-full wg-object-cover',
            shape === 'circle' ? 'wg-rounded-full' : 'wg-rounded-md'
          )}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}
