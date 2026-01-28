import { cn } from '@/utils/cn'
import React from 'react'

export interface SpotifyNowPlayingProps extends React.HTMLAttributes<HTMLDivElement> {
  song?: {
    title: string
    artist: string
    albumImageUrl?: string
    songUrl?: string
  }
  isPlaying?: boolean
  showCover?: boolean
  ref?: React.Ref<HTMLDivElement>
}

/**
 * SpotifyNowPlaying 컴포넌트
 *
 * 현재 재생 중인 Spotify 트랙을 표시하는 컴포넌트입니다.
 * leohuynh.dev의 Spotify 통합을 참고했습니다.
 */
export function SpotifyNowPlaying({
  song,
  isPlaying = false,
  showCover = false,
  className,
  ref,
  ...props
}: SpotifyNowPlayingProps) {
  const SpotifyIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )

  if (!isPlaying || !song) {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-2 px-3 py-1.5',
          'bg-neutral-900 text-neutral-200',
          className
        )}
        {...props}
      >
        <SpotifyIcon />
        <div className="flex items-center gap-2">
          <p className="font-medium">Not Playing</p>
          <span className="text-neutral-400">–</span>
          <p className="text-neutral-400">Spotify</p>
        </div>
      </div>
    )
  }

  const { title, artist, albumImageUrl, songUrl } = song

  return (
    <div
      ref={ref}
      className={cn(
        'flex items-center gap-2 px-3 py-1.5',
        'bg-neutral-900 text-neutral-200',
        className
      )}
      {...props}
    >
      {showCover && albumImageUrl ? (
        <img
          src={albumImageUrl}
          alt={title}
          className="h-5 w-5 shrink-0 animate-spin rounded-full border border-neutral-300"
          style={{ animationDuration: '6s' }}
        />
      ) : (
        <SpotifyIcon />
      )}
      <div className="flex items-center gap-2 truncate">
        {/* Music waves animation */}
        <div className="flex items-center gap-0.5 mr-1">
          <span className="h-3 w-0.5 bg-current animate-pulse" style={{ animationDelay: '0s' }} />
          <span className="h-4 w-0.5 bg-current animate-pulse" style={{ animationDelay: '0.2s' }} />
          <span className="h-3 w-0.5 bg-current animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
        {songUrl ? (
          <a
            href={songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium truncate hover:underline"
          >
            {title}
          </a>
        ) : (
          <p className="font-medium truncate">{title}</p>
        )}
        <span className="text-neutral-400">–</span>
        <p className="text-neutral-400 truncate">{artist}</p>
      </div>
    </div>
  )
}
