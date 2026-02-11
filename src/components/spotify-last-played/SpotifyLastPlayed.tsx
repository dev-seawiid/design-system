'use client'

import { cn } from '@/utils/cn'
import type { HTMLAttributes, Ref } from 'react'

export interface SpotifyTrack {
  title: string
  artist: string
  albumImageUrl: string
  songUrl: string
  playedAt?: string
}

export interface SpotifyLastPlayedProps extends HTMLAttributes<HTMLDivElement> {
  track: SpotifyTrack
  isPlaying?: boolean
  showExternalLink?: boolean
  externalLinkUrl?: string
  ref?: Ref<HTMLDivElement>
}

/**
 * SpotifyLastPlayed 컴포넌트
 *
 * 현재 재생 중이거나 최근 재생한 Spotify 트랙을 표시하는 컴포넌트입니다.
 * leohuynh.dev의 "Side quests and activities" 섹션 LastPlayed 컴포넌트를 참고했습니다.
 */
export function SpotifyLastPlayed({
  track,
  isPlaying = false,
  showExternalLink = true,
  externalLinkUrl = 'https://open.spotify.com',
  className,
  ref,
  ...props
}: SpotifyLastPlayedProps) {
  const getTimeAgo = (dateString?: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

    if (diffInSeconds < 60) return 'just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} mins ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  const MusicIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-status-success-600"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )

  const ExternalLinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )

  const MusicWaves = () => (
    <div className="flex items-center gap-0.5">
      <span className="h-3 w-0.5 bg-current animate-pulse" style={{ animationDelay: '0s' }} />
      <span className="h-4 w-0.5 bg-current animate-pulse" style={{ animationDelay: '0.2s' }} />
      <span className="h-3 w-0.5 bg-current animate-pulse" style={{ animationDelay: '0.4s' }} />
    </div>
  )

  return (
    <div
      ref={ref}
      role="region"
      aria-label={`Spotify track: ${track.title} by ${track.artist}`}
      className={cn('flex items-center gap-4', className)}
      {...props}
    >
      {/* Album Art */}
      <div className="relative shrink-0">
        <img
          alt={`Album cover for ${track.title}`}
          src={track.albumImageUrl}
          className={cn(
            'h-16 w-16 md:h-20 md:w-20 rounded-lg object-cover',
            'border border-neutral-300 dark:border-neutral-700',
            isPlaying && 'rounded-full animate-spin',
            isPlaying && '[animation-duration:8s]'
          )}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement
            target.src =
              'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
          }}
        />
        <div className="absolute -right-1 -bottom-1 flex items-center justify-center rounded-full bg-white p-1.5 shadow-md">
          <MusicIcon />
        </div>
      </div>

      {/* Track Info */}
      <div className="flex grow items-center justify-between gap-4">
        <div className="flex items-start justify-between">
          <div className="min-w-0 flex-1">
            {isPlaying ? (
              <div className="mb-1 flex items-center gap-2 font-medium">
                <MusicWaves />
                <a
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold transition-colors hover:text-role-primary-500 wg-focus-ring"
                  aria-label={`Listen to ${track.title} by ${track.artist} on Spotify`}
                >
                  <span className="relative inline-block">
                    {track.title}
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-role-primary-500" />
                  </span>
                </a>
              </div>
            ) : (
              <p className="mb-1 font-medium">
                <span className="font-medium text-neutral-600 dark:text-neutral-400">
                  Last played:
                </span>{' '}
                <a
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold transition-colors hover:text-role-primary-500 wg-focus-ring"
                  aria-label={`Listen to ${track.title} by ${track.artist} on Spotify`}
                >
                  <span className="relative inline-block">
                    {track.title}
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-role-primary-500 transition-all hover:w-full" />
                  </span>
                </a>
              </p>
            )}
            <p className="line-clamp-1 text-sm text-neutral-600 italic dark:text-neutral-400">
              {track.artist}
            </p>
          </div>
        </div>

        {/* Status & External Link */}
        <div className="hidden items-center gap-3 md:flex">
          {isPlaying ? (
            <span className="ml-4 flex-shrink-0 rounded-full bg-status-success-100 px-2.5 py-0.5 text-sm text-status-success-700 dark:bg-status-success-900 dark:text-status-success-300">
              Playing
            </span>
          ) : (
            track.playedAt && (
              <span className="ml-4 flex-shrink-0 rounded-full bg-neutral-200 px-2.5 py-0.5 text-sm text-neutral-700 dark:bg-neutral-700 dark:text-neutral-300">
                {getTimeAgo(track.playedAt)}
              </span>
            )
          )}
          {showExternalLink && (
            <a
              href={externalLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-700 transition-colors hover:bg-neutral-200 dark:text-neutral-300 dark:hover:bg-neutral-700 wg-focus-ring"
              aria-label="Open Spotify"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
