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
        'inline-flex items-center font-medium rounded-full',
        // Variant styles
        variant === 'default' &&
          'bg-semantic-muted text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
        variant === 'primary' &&
          'bg-role-primary-100 text-role-primary-700 dark:bg-role-primary-900 dark:text-role-primary-300',
        variant === 'secondary' &&
          'bg-role-secondary-100 text-role-secondary-700 dark:bg-role-secondary-900 dark:text-role-secondary-300',
        variant === 'success' &&
          'bg-status-success-100 text-status-success-700 dark:bg-status-success-900 dark:text-status-success-300',
        variant === 'warning' &&
          'bg-status-warning-100 text-status-warning-700 dark:bg-status-warning-900 dark:text-status-warning-300',
        variant === 'error' &&
          'bg-status-error-100 text-status-error-700 dark:bg-status-error-900 dark:text-status-error-300',
        variant === 'outline' &&
          'border border-neutral-300 bg-transparent text-semantic-foreground dark:border-neutral-700',
        // Size styles
        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-2.5 py-1 text-xs',
        size === 'lg' && 'px-3 py-1.5 text-sm',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
