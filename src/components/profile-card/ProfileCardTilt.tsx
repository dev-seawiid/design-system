'use client'

import { cn } from '@/utils/cn'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { CSSProperties, MutableRefObject, ReactNode, Ref } from 'react'

export interface ProfileCardTiltProps {
  children: ReactNode
  className?: string
  /** article aria-label (e.g. "Profile: Name") */
  'aria-label'?: string
  ref?: Ref<HTMLDivElement>
}

/**
 * 마우스 기반 tilt 효과만 담당하는 클라이언트 경계.
 * ProfileCard는 서버에서 사용 가능하고, tilt만 이 컴포넌트에서 처리합니다.
 */
export function ProfileCardTilt({
  children,
  className,
  'aria-label': ariaLabel,
  ref,
}: ProfileCardTiltProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const setRef = useCallback(
    (el: HTMLDivElement | null) => {
      (innerRef as MutableRefObject<HTMLDivElement | null>).current = el
      if (typeof ref === 'function') ref(el)
      else if (ref != null) (ref as MutableRefObject<HTMLDivElement | null>).current = el
    },
    [ref]
  )
  const [style, setStyle] = useState<CSSProperties>({})

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!innerRef.current) return
    const { clientX, clientY } = e
    const { width, height, x, y } = innerRef.current.getBoundingClientRect()
    const mouseX = Math.abs(clientX - x)
    const mouseY = Math.abs(clientY - y)
    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin
    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }
    setStyle({ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    const current = innerRef.current
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseMove, onMouseLeave])

  return (
    <div
      ref={setRef}
      role="article"
      aria-label={ariaLabel}
      className={cn(
        'z-10 mb-8 scale-100 transition-all duration-200 ease-out',
        'hover:z-50 md:mb-0 md:hover:scale-[1.15]',
        className
      )}
      style={{ perspective: '600px' }}
    >
      <div
        style={style}
        className={cn(
          'flex flex-col overflow-hidden transition-all duration-200 ease-out',
          'md:rounded-lg',
          'shadow-lg bg-white',
          'dark:bg-neutral-900',
          'border border-neutral-200 dark:border-neutral-700'
        )}
      >
        {children}
      </div>
    </div>
  )
}
