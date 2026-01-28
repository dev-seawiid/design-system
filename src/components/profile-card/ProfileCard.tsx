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
        'z-10 mb-8 scale-100 transition-all duration-200 ease-out',
        'hover:z-50 md:mb-0 md:hover:scale-[1.15]',
        className
      )}
      style={{ perspective: '600px' }}
      {...props}
    >
      <div
        style={style}
        className={cn(
          'flex flex-col overflow-hidden transition-all duration-200 ease-out',
          'md:rounded-lg',
          'shadow-lg bg-white',
          'dark:bg-neutral-900',
          'outline outline-1 outline-neutral-200',
          'dark:outline-neutral-700'
        )}
      >
        {/* Header Image */}
        {image && (
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '383/240' }}>
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover"
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
              'bg-neutral-900 px-3 py-1.5 xl:px-5',
              '[--song-color:var(--color-neutral-200)]',
              '[--artist-color:var(--color-neutral-400)]'
            )}
          />
        )}

        {/* Profile Info */}
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Avatar size="lg" src={info.avatar} fallback={info.name.charAt(0)} alt={info.name} />
            <div>
              <h2 className="text-xl font-bold">{info.name}</h2>
              <p className="text-sm text-muted-foreground">{info.title}</p>
            </div>
          </div>
          {info.bio && <p className="text-sm mb-4 text-semantic-muted-foreground">{info.bio}</p>}
          {info.socialLinks && info.socialLinks.length > 0 && (
            <div className="flex gap-3 flex-wrap">
              {info.socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-role-primary-500 hover:underline"
                >
                  {link.icon && <span className="mr-1">{link.icon}</span>}
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Gradient Border */}
        <span className="h-1.5 bg-deep-sea-to-sand" />
      </div>
    </div>
  )
}
