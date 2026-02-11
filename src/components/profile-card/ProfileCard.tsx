import { cn } from '@/utils/cn'
import type { HTMLAttributes, ReactNode, Ref } from 'react'
import { Avatar } from '../avatar/Avatar'
import { ClientSlot } from '../client/ClientSlot'
import { SpotifyNowPlaying } from '../spotify-now-playing/SpotifyNowPlaying'
import { ProfileCardTilt } from './ProfileCardTilt'

export interface ProfileCardInfo {
  name: string
  title: string
  bio?: string
  avatar?: string
  socialLinks?: Array<{
    label: string
    href: string
    icon?: ReactNode
  }>
}

export interface ProfileCardProps extends HTMLAttributes<HTMLDivElement> {
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
  /**
   * 헤더 이미지 슬롯. 외부 Next 프로젝트에서는 next/image, next/link를 사용해 전달할 수 있습니다.
   * 이미지 없으면 null.
   */
  imageSlot: ReactNode
  ref?: Ref<HTMLDivElement>
}

/**
 * ProfileCard 컴포넌트
 *
 * 프로필 정보를 표시하는 카드 컴포넌트입니다.
 * leohuynh.dev의 프로필 카드 디자인을 참고했습니다.
 * tilt 효과만 ProfileCardTilt(클라이언트)에서 처리해 서버 컴포넌트 페이지에서 사용 가능합니다.
 */
export function ProfileCard({
  info,
  spotify,
  imageSlot,
  className,
  ref,
  ...props
}: ProfileCardProps) {
  const hasImage = imageSlot != null && imageSlot !== ''

  return (
    <ProfileCardTilt
      ref={ref}
      className={className}
      aria-label={`Profile: ${info.name}`}
      {...props}
    >
      {hasImage && (
        <div
          className="relative w-full overflow-hidden [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>a]:block [&>a]:h-full [&>a]:w-full [&>a>img]:h-full [&>a>img]:w-full [&>a>img]:object-cover"
          style={{ aspectRatio: '383/240' }}
        >
          <ClientSlot
            className="h-full w-full *:h-full *:w-full [&>img]:object-cover [&>img]:object-[50%_15%] [&>a]:block [&>a]:h-full [&>a]:w-full [&>a>img]:h-full [&>a>img]:w-full [&>a>img]:object-cover [&>a>img]:object-[50%_15%]"
            style={{ objectPosition: '50% 15%' }}
          >
            {imageSlot}
          </ClientSlot>
        </div>
      )}

      {spotify != null && (
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

      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <Avatar
            size="lg"
            fallback={info.name.charAt(0)}
            alt={info.name}
            imageSlot={
              info.avatar ? (
                <img
                  src={info.avatar}
                  alt={info.name}
                  className="h-full w-full object-cover rounded-full"
                />
              ) : undefined
            }
          />
          <div>
            <h2 className="text-xl font-bold">{info.name}</h2>
            <p className="text-sm text-muted-foreground">{info.title}</p>
          </div>
        </div>
        {info.bio != null && info.bio !== '' && (
          <p className="text-sm mb-4 text-semantic-muted-foreground">{info.bio}</p>
        )}
        {info.socialLinks != null && info.socialLinks.length > 0 && (
          <nav className="flex gap-3 flex-wrap" aria-label="Social links">
            {info.socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-role-primary-500 hover:underline wg-focus-ring"
              >
                {link.icon != null && (
                  <span className="mr-1" aria-hidden="true">
                    {link.icon}
                  </span>
                )}
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>

      <span className="h-1.5 bg-deep-sea-to-sand" aria-hidden="true" />
    </ProfileCardTilt>
  )
}
