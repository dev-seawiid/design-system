import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * className 유틸리티 함수
 * clsx와 tailwind-merge를 결합하여 클래스명을 병합하고 충돌을 해결합니다.
 *
 * @param inputs - 병합할 클래스명들
 * @returns 병합된 클래스명 문자열
 *
 * @example
 * ```tsx
 * cn('wg-p-4', 'wg-bg-blue-500', { 'wg-text-white': isActive })
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
