'use client'

import { cn } from '@/utils/cn'
import React, { useState } from 'react'

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
  const [imageError, setImageError] = useState(false)

  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
    xl: 'h-16 w-16 text-lg',
  }

  const showFallback = !src || imageError

  return (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center justify-center font-medium bg-semantic-muted text-neutral-600',
        'dark:bg-neutral-800 dark:text-neutral-300',
        sizeClasses[size],
        shape === 'circle' ? 'rounded-full' : 'rounded-md',
        className
      )}
      {...props}
    >
      {showFallback ? (
        <span className="font-semibold">
          {fallback || (alt ? alt.charAt(0).toUpperCase() : '?')}
        </span>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn(
            'h-full w-full object-cover',
            shape === 'circle' ? 'rounded-full' : 'rounded-md'
          )}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  )
}
