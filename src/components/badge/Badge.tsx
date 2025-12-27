import { cn } from '@/utils/cn'
import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  ref?: React.Ref<HTMLSpanElement>
}

/**
 * Badge 컴포넌트
 *
 * 태그, 카테고리, 상태 등을 표시하는 작은 라벨 컴포넌트입니다.
 * 블로그 포스트의 태그, 프로젝트 카테고리 등에 사용됩니다.
 */
export function Badge({
  variant = 'default',
  size = 'md',
  className,
  children,
  ref,
  ...props
}: BadgeProps) {
  return (
    <span
      ref={ref}
      className={cn(
        'wg-inline-flex wg-items-center wg-font-medium wg-rounded-full',
        // Variant styles
        variant === 'default' &&
          'wg-bg-neutral-100 wg-text-neutral-800 dark:wg-bg-neutral-800 dark:wg-text-neutral-200',
        variant === 'primary' &&
          'wg-bg-primary-100 wg-text-primary-700 dark:wg-bg-primary-900 dark:wg-text-primary-300',
        variant === 'secondary' &&
          'wg-bg-secondary-100 wg-text-secondary-700 dark:wg-bg-secondary-900 dark:wg-text-secondary-300',
        variant === 'success' &&
          'wg-bg-green-100 wg-text-green-700 dark:wg-bg-green-900 dark:wg-text-green-300',
        variant === 'warning' &&
          'wg-bg-yellow-100 wg-text-yellow-700 dark:wg-bg-yellow-900 dark:wg-text-yellow-300',
        variant === 'error' &&
          'wg-bg-error-100 wg-text-error-700 dark:wg-bg-error-900 dark:wg-text-error-300',
        variant === 'outline' &&
          'wg-border wg-border-neutral-300 wg-bg-transparent wg-text-foreground dark:wg-border-neutral-700',
        // Size styles
        size === 'sm' && 'wg-px-2 wg-py-0.5 wg-text-xs',
        size === 'md' && 'wg-px-2.5 wg-py-1 wg-text-xs',
        size === 'lg' && 'wg-px-3 wg-py-1.5 wg-text-sm',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
