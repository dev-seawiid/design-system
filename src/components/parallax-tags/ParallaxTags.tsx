import { cn } from '@/utils/cn'
import React, { useCallback, useEffect, useRef, useState } from 'react'

export interface ParallaxTagItem {
  text: string
  href?: string
}

export interface ParallaxTagsProps extends React.HTMLAttributes<HTMLDivElement> {
  tags: string[] | ParallaxTagItem[]
  baseVelocity?: number
  tagsPerRow?: number
  pauseOnHover?: boolean
  className?: string
  ref?: React.Ref<HTMLDivElement>
}

/**
 * ParallaxTagsRow 컴포넌트
 *
 * 단일 row의 parallax 태그를 렌더링합니다.
 */
interface ParallaxTagsRowProps {
  tags: string[] | ParallaxTagItem[]
  baseVelocity: number
  direction: number
  pauseOnHover: boolean
}

function ParallaxTagsRow({
  tags,
  baseVelocity,
  direction,
  pauseOnHover,
  ref,
}: ParallaxTagsRowProps & { ref?: React.Ref<HTMLDivElement> }) {
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

  // Smooth velocity calculation (damping effect)
  const smoothVelocity = useCallback((target: number, current: number): number => {
    const damping = 0.1
    return current + (target - current) * damping
  }, [])

  // Wrap function for seamless looping
  const wrap = useCallback((min: number, max: number, value: number): number => {
    const range = max - min
    return ((((value - min) % range) + range) % range) + min
  }, [])

  useEffect(() => {
    if (!scrollRef.current || tags.length === 0) return

    // Initialize: baseVelocity * direction gives the base direction
    // direction = 1 means right, -1 means left
    currentVelocityRef.current = baseVelocity * direction
    prevVelocityRef.current = baseVelocity * direction
    directionFactorRef.current = 1 // Will change based on scroll direction

    let lastScrollY = window.scrollY
    let lastTime = performance.now()

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const currentTime = performance.now()
      const deltaTime = currentTime - lastTime
      const deltaScroll = currentScrollY - lastScrollY

      if (deltaTime > 0) {
        // Calculate scroll velocity (pixels per millisecond, keep sign)
        const velocity = (deltaScroll / deltaTime) * 1000
        scrollVelocityRef.current = Math.abs(velocity)

        // Update direction factor based on scroll direction
        // This affects acceleration direction, but base direction is from baseVelocity * direction
        if (velocity < 0) {
          // Scrolling up - reverse acceleration
          directionFactorRef.current = -1
        } else if (velocity > 0) {
          // Scrolling down - normal acceleration
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

      // Smooth velocity
      smoothVelocityRef.current = smoothVelocity(
        scrollVelocityRef.current,
        smoothVelocityRef.current
      )

      // Calculate velocity factor (0 to 50 based on scroll speed)
      const velocityFactor = Math.min(smoothVelocityRef.current / 20, 5)

      // Handle hover pause
      if (isHovered && pauseOnHover) {
        prevVelocityRef.current = currentVelocityRef.current
        currentVelocityRef.current = 0
      } else {
        currentVelocityRef.current = prevVelocityRef.current || baseVelocity * direction
      }

      // Calculate movement
      // baseVelocity * direction gives the base direction (positive = right, negative = left)
      // directionFactor adjusts acceleration based on scroll direction (1 or -1)
      // velocityFactor adds acceleration based on scroll speed
      // The base direction is preserved: if direction=1 (right), it always goes right
      // directionFactor only affects acceleration, not the base direction
      let moveBy = currentVelocityRef.current * (deltaTime / 1000)

      // Add acceleration based on scroll speed and direction
      // directionFactor affects how much the scroll speed accelerates the movement
      moveBy += directionFactorRef.current * moveBy * velocityFactor

      baseXRef.current += moveBy

      // Wrap position for seamless loop
      // Using -20% to -45% range (25% per duplicate, 4 duplicates = 100%)
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
  }, [baseVelocity, direction, isHovered, pauseOnHover, tags.length, smoothVelocity, wrap])

  if (tags.length === 0) {
    return null
  }

  // Duplicate tags for seamless loop (4 times for smooth scrolling)
  const duplicatedTags = [...tags, ...tags, ...tags, ...tags]

  const renderTag = (tag: string | ParallaxTagItem, index: number) => {
    const text = typeof tag === 'string' ? tag : tag.text
    const href = typeof tag === 'string' ? undefined : tag.href

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
        {duplicatedTags.map((tag, index) => renderTag(tag, index))}
      </div>
    </div>
  )
}

/**
 * ParallaxTags 컴포넌트
 *
 * 스크롤 시 태그들이 parallax 효과로 움직이는 애니메이션 컴포넌트입니다.
 * 여러 row로 나뉘어 각 row마다 반대 방향으로 흐릅니다.
 * Azurtelier.com의 ParallaxText 컴포넌트를 참고했습니다.
 */
export function ParallaxTags({
  tags,
  baseVelocity = 1,
  tagsPerRow = 3,
  pauseOnHover = true,
  className,
  ref,
  ...props
}: ParallaxTagsProps) {
  // Split tags into rows
  const rows: (string[] | ParallaxTagItem[])[] = []

  for (let i = 0; i < tags.length; i += tagsPerRow) {
    const rowTags = tags.slice(i, i + tagsPerRow)
    if (rowTags.length > 0) {
      rows.push(rowTags)
    }
  }

  // Wrap remaining tags into the last row if needed
  if (rows.length > 0 && tags.length > rows.length * tagsPerRow) {
    const remaining = tags.slice(rows.length * tagsPerRow)
    if (remaining.length > 0) {
      const lastRow = rows[rows.length - 1]
      if (Array.isArray(lastRow)) {
        rows[rows.length - 1] = [...lastRow, ...remaining] as string[] | ParallaxTagItem[]
      }
    }
  }

  return (
    <div
      ref={ref}
      className={cn('space-y-2 overflow-hidden', 'py-4', 'bg-algae-to-shallow-beach', className)}
      {...props}
    >
      {rows.map((rowTags, index) => {
        const rowDirection = index % 2 === 0 ? 1 : -1

        return (
          <ParallaxTagsRow
            key={index}
            tags={rowTags}
            baseVelocity={baseVelocity}
            direction={rowDirection}
            pauseOnHover={pauseOnHover}
          />
        )
      })}
    </div>
  )
}
