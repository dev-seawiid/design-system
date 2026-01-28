'use client'

import { cn } from '@/utils/cn'
import React, { useEffect, useRef, useState } from 'react'

export interface TypingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  strings: string[]
  typeSpeed?: number
  backSpeed?: number
  loop?: boolean
  backDelay?: number
  startDelay?: number
  showCursor?: boolean
  cursorChar?: string
  ref?: React.Ref<HTMLSpanElement>
}

/**
 * TypingText 컴포넌트
 *
 * 텍스트를 타이핑 애니메이션으로 표시하는 컴포넌트입니다.
 * leohuynh.dev의 TypedBios 컴포넌트를 참고했습니다.
 */
export function TypingText({
  strings,
  typeSpeed = 40,
  backSpeed = 10,
  loop = true,
  backDelay = 1000,
  startDelay = 0,
  showCursor = true,
  cursorChar = '|',
  className,
  ref,
  ...props
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState('')
  const stateRef = useRef({
    currentStringIndex: 0,
    currentCharIndex: 0,
    isDeleting: false,
    isPaused: false,
  })
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    if (strings.length === 0) return

    const tick = () => {
      const state = stateRef.current
      const currentString = strings[state.currentStringIndex]

      if (!currentString) return

      if (state.isPaused) {
        // Paused (after finishing typing or deleting)
        state.isPaused = false
        if (state.isDeleting) {
          // Just finished deleting, move to next string
          state.isDeleting = false
          state.currentCharIndex = 0
          state.currentStringIndex = (state.currentStringIndex + 1) % strings.length
          if (!loop && state.currentStringIndex === 0) {
            return // Stop if not looping
          }
          timeoutRef.current = setTimeout(tick, backDelay)
        } else {
          // Just finished typing, start deleting
          state.isDeleting = true
          timeoutRef.current = setTimeout(tick, backDelay)
        }
      } else if (state.isDeleting) {
        // Deleting
        if (state.currentCharIndex > 0) {
          state.currentCharIndex--
          setDisplayText(currentString.substring(0, state.currentCharIndex))
          timeoutRef.current = setTimeout(tick, backSpeed)
        } else {
          // Finished deleting
          state.isPaused = true
          timeoutRef.current = setTimeout(tick, 0)
        }
      } else {
        // Typing
        if (state.currentCharIndex < currentString.length) {
          state.currentCharIndex++
          setDisplayText(currentString.substring(0, state.currentCharIndex))
          timeoutRef.current = setTimeout(tick, typeSpeed)
        } else {
          // Finished typing
          state.isPaused = true
          timeoutRef.current = setTimeout(tick, 0)
        }
      }
    }

    const initialDelay = startDelay > 0 ? startDelay : 0
    timeoutRef.current = setTimeout(tick, initialDelay)

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [strings, typeSpeed, backSpeed, backDelay, loop, startDelay])

  if (strings.length === 0) {
    return null
  }

  return (
    <span ref={ref} className={cn('inline-block', className)} {...props}>
      <span>{displayText}</span>
      {showCursor && (
        <span
          className={cn(
            'inline-block w-2 h-[1.375rem] ml-0.5',
            'text-transparent',
            'bg-neutral-800 dark:bg-neutral-100',
            'animate-pulse'
          )}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </span>
  )
}
