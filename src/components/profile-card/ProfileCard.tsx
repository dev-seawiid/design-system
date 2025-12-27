import { cn } from '@/utils/cn'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import { SpotifyNowPlaying } from '../spotify-now-playing/SpotifyNowPlaying'

export interface ProfileCardInfo {
  name: string
  title: string
  bio?: string
  avatar?: string
  socialLinks?: Array<{
    label: string
    href: string
    icon?: React.ReactNode
  }>
}

export interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  info: ProfileCardInfo
  spotify?: {
    isPlaying: boolean
    song?: {
      title: string
      artist: string
      albumImageUrl?: string
      songUrl?: string
    }
  }
  image?: {
    src: string
    alt: string
  }
  ref?: React.Ref<HTMLDivElement>
}

/**
 * ProfileCard 컴포넌트
 *
 * 프로필 정보를 표시하는 카드 컴포넌트입니다.
 * leohuynh.dev의 프로필 카드 디자인을 참고했습니다.
 */
export function ProfileCard({ info, spotify, image, className, ref, ...props }: ProfileCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<React.CSSProperties>({})

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!cardRef.current) return

    const { clientX, clientY } = e
    const { width, height, x, y } = cardRef.current.getBoundingClientRect()
    const mouseX = Math.abs(clientX - x)
    const mouseY = Math.abs(clientY - y)
    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    const { current } = cardRef
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  // ref forwarding 처리
  React.useEffect(() => {
    if (ref) {
      if (typeof ref === 'function') {
        ref(cardRef.current)
      } else {
        ref.current = cardRef.current
      }
    }
  }, [ref])

  return (
    <div
      ref={cardRef}
      className={cn(
        'wg-z-10 wg-mb-8 wg-scale-100 wg-transition-all wg-duration-200 wg-ease-out',
        'hover:wg-z-50 md:wg-mb-0 md:hover:wg-scale-[1.15]',
        className
      )}
      style={{ perspective: '600px' }}
      {...props}
    >
      <div
        style={style}
        className={cn(
          'wg-flex wg-flex-col wg-overflow-hidden wg-transition-all wg-duration-200 wg-ease-out',
          'md:wg-rounded-lg',
          'wg-shadow-lg wg-bg-white',
          'dark:wg-bg-neutral-900',
          'wg-outline wg-outline-1 wg-outline-neutral-200',
          'dark:wg-outline-neutral-700'
        )}
      >
        {/* Header Image */}
        {image && (
          <div
            className="wg-relative wg-w-full wg-overflow-hidden"
            style={{ aspectRatio: '383/240' }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="wg-h-full wg-w-full wg-object-cover"
              style={{ objectPosition: '50% 15%' }}
            />
          </div>
        )}

        {/* Spotify Now Playing */}
        {spotify && (
          <SpotifyNowPlaying
            isPlaying={spotify.isPlaying}
            song={spotify.song}
            className={cn(
              'wg-bg-neutral-900 wg-px-3 wg-py-1.5 xl:wg-px-5',
              '[--song-color:var(--color-neutral-200)]',
              '[--artist-color:var(--color-neutral-400)]'
            )}
          />
        )}

        {/* Profile Info */}
        <div className="wg-p-6">
          <div className="wg-flex wg-items-center wg-gap-4 wg-mb-4">
            <Avatar size="lg" src={info.avatar} fallback={info.name.charAt(0)} alt={info.name} />
            <div>
              <h2 className="wg-text-xl wg-font-bold">{info.name}</h2>
              <p className="wg-text-sm wg-text-muted-foreground">{info.title}</p>
            </div>
          </div>
          {info.bio && (
            <p className="wg-text-sm wg-mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
              {info.bio}
            </p>
          )}
          {info.socialLinks && info.socialLinks.length > 0 && (
            <div className="wg-flex wg-gap-3 wg-flex-wrap">
              {info.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wg-text-sm wg-text-primary-500 hover:wg-underline"
                >
                  {link.icon && <span className="wg-mr-1">{link.icon}</span>}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Gradient Border */}
        <span className="wg-h-1.5" style={{ background: 'var(--gradient-deep-sea-to-sand)' }} />
      </div>
    </div>
  )
}
