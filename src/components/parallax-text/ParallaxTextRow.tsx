'use client'

import { cn } from '@/utils/cn'
import { useCallback, useEffect, useRef, useState } from 'react'
import type { Ref } from 'react'
import type { ParallaxTextItem } from './ParallaxText'

export interface ParallaxTextRowProps {
  items: ParallaxTextItem[]
  baseVelocity: number
  direction: number
  pauseOnHover: boolean
}

/**
 * 단일 row의 parallax 텍스트 애니메이션. 스크롤/requestAnimationFrame 등 클라이언트 전용 로직만 담당합니다.
 */
export function ParallaxTextRow({
  items,
  baseVelocity,
  direction,
  pauseOnHover,
  ref,
}: ParallaxTextRowProps & { ref?: Ref<HTMLDivElement> }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const baseXRef = useRef(0)
  const scrollVelocityRef = useRef(0)
  const smoothVelocityRef = useRef(0)
  const directionFactorRef = useRef(direction)
  const currentVelocityRef = useRef(baseVelocity * direction)
  const prevVelocityRef = useRef(baseVelocity * direction)
  const [isHovered, setIsHovered] = useState(false)
  const lastTimeRef = useRef(performance.now())

  const smoothVelocity = useCallback((target: number, current: number): number => {
    const damping = 0.1
    return current + (target - current) * damping
  }, [])

  const wrap = useCallback((min: number, max: number, value: number): number => {
    const range = max - min
    return ((((value - min) % range) + range) % range) + min
  }, [])

  useEffect(() => {
    if (!scrollRef.current || items.length === 0) return

    currentVelocityRef.current = baseVelocity * direction
    prevVelocityRef.current = baseVelocity * direction
    directionFactorRef.current = 1

    let lastScrollY = window.scrollY
    let lastTime = performance.now()

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = performance.now()
      const deltaTime = currentTime - lastTime
      const deltaScroll = currentScrollY - lastScrollY

      if (deltaTime > 0) {
        const velocity = (deltaScroll / deltaTime) * 1000
        scrollVelocityRef.current = Math.abs(velocity)
        if (velocity < 0) {
          directionFactorRef.current = -1
        } else if (velocity > 0) {
          directionFactorRef.current = 1
        }
      }

      lastScrollY = currentScrollY
      lastTime = currentTime
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTimeRef.current
      lastTimeRef.current = currentTime

      smoothVelocityRef.current = smoothVelocity(
        scrollVelocityRef.current,
        smoothVelocityRef.current
      )

      const velocityFactor = Math.min(smoothVelocityRef.current / 20, 5)

      if (isHovered && pauseOnHover) {
        prevVelocityRef.current = currentVelocityRef.current
        currentVelocityRef.current = 0
      } else {
        currentVelocityRef.current = prevVelocityRef.current || baseVelocity * direction
      }

      let moveBy = currentVelocityRef.current * (deltaTime / 1000)
      moveBy += directionFactorRef.current * moveBy * velocityFactor

      baseXRef.current += moveBy

      const wrappedX = wrap(-45, -20, baseXRef.current)

      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateX(${wrappedX}%)`
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [baseVelocity, direction, isHovered, pauseOnHover, items.length, smoothVelocity, wrap])

  if (items.length === 0) {
    return null
  }

  const duplicatedItems = [...items, ...items, ...items, ...items]

  const renderItem = (item: ParallaxTextItem, index: number) => {
    const { text, href } = item

    const content = (
      <span
        className={cn(
          'mx-6 text-3xl font-black uppercase',
          'text-white hover:text-role-primary-300',
          'dark:text-neutral-900 dark:hover:text-role-primary-400',
          'xl:text-7xl',
          'tracking-[1px]',
          'leading-[0.8]',
          'transition-colors'
        )}
      >
        {text}
      </span>
    )

    if (href) {
      return (
        <a
          key={`${text}-${index}`}
          href={href}
          className="shrink-0 cursor-pointer no-underline"
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        >
          {content}
        </a>
      )
    }

    return (
      <span key={`${text}-${index}`} className="shrink-0">
        {content}
      </span>
    )
  }

  return (
    <div
      ref={ref}
      className={cn('relative overflow-hidden w-full', 'whitespace-nowrap', 'leading-[0.8]')}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={scrollRef}
        className={cn(
          'inline-flex items-center',
          'will-change-transform',
          'font-black uppercase',
          'whitespace-nowrap'
        )}
        style={{
          transform: 'translateX(0%)',
        }}
      >
        {duplicatedItems.map((item, index) => renderItem(item, index))}
      </div>
    </div>
  )
}
