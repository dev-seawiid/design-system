import { cn } from '@/utils/cn'
import React from 'react'

export interface SpotifyTrack {
  title: string
  artist: string
  albumImageUrl: string
  songUrl: string
  playedAt?: string
}

export interface SpotifyLastPlayedProps extends React.HTMLAttributes<HTMLDivElement> {
  track: SpotifyTrack
  isPlaying?: boolean
  showExternalLink?: boolean
  externalLinkUrl?: string
  ref?: React.Ref<HTMLDivElement>
}

/**
 * SpotifyLastPlayed 컴포넌트
 *
 * 현재 재생 중이거나 최근 재생한 Spotify 트랙을 표시하는 컴포넌트입니다.
 * leohuynh.dev의 "Side quests and activities" 섹션의 LastPlayed 컴포넌트를 참고했습니다.
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
      className="wg-h-4 wg-w-4 wg-text-green-600"
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
      className="wg-h-4 wg-w-4"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )

  const MusicWaves = () => (
    <div className="wg-flex wg-items-center wg-gap-0.5">
      <span
        className="wg-h-3 wg-w-0.5 wg-bg-current wg-animate-pulse"
        style={{ animationDelay: '0s' }}
      />
      <span
        className="wg-h-4 wg-w-0.5 wg-bg-current wg-animate-pulse"
        style={{ animationDelay: '0.2s' }}
      />
      <span
        className="wg-h-3 wg-w-0.5 wg-bg-current wg-animate-pulse"
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  )

  return (
    <div ref={ref} className={cn('wg-flex wg-items-center wg-gap-4', className)} {...props}>
      {/* Album Art */}
      <div className="wg-relative wg-shrink-0">
        <img
          alt={track.title}
          src={track.albumImageUrl}
          className={cn(
            'wg-h-16 wg-w-16 md:wg-h-20 md:wg-w-20 wg-rounded-lg wg-object-cover',
            'wg-border wg-border-neutral-300 dark:wg-border-neutral-700',
            isPlaying && 'wg-rounded-full wg-animate-spin',
            isPlaying && '[animation-duration:8s]'
          )}
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            const target = e.target as HTMLImageElement
            target.src =
              'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
          }}
        />
        <div className="wg-absolute wg--right-1 wg--bottom-1 wg-flex wg-items-center wg-justify-center wg-rounded-full wg-bg-white wg-p-1.5 wg-shadow-md">
          <MusicIcon />
        </div>
      </div>

      {/* Track Info */}
      <div className="wg-flex wg-grow wg-items-center wg-justify-between wg-gap-4">
        <div className="wg-flex wg-items-start wg-justify-between">
          <div className="wg-min-w-0 wg-flex-1">
            {isPlaying ? (
              <div className="wg-mb-1 wg-flex wg-items-center wg-gap-2 wg-font-medium">
                <MusicWaves />
                <a
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wg-font-semibold wg-transition-colors hover:wg-text-primary-500"
                >
                  <span className="wg-relative wg-inline-block">
                    {track.title}
                    <span className="wg-absolute wg-bottom-0 wg-left-0 wg-h-0.5 wg-w-full wg-bg-primary-500" />
                  </span>
                </a>
              </div>
            ) : (
              <p className="wg-mb-1 wg-font-medium">
                <span className="wg-font-medium wg-text-neutral-600 dark:wg-text-neutral-400">
                  Last played:
                </span>{' '}
                <a
                  href={track.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wg-font-semibold wg-transition-colors hover:wg-text-primary-500"
                >
                  <span className="wg-relative wg-inline-block">
                    {track.title}
                    <span className="wg-absolute wg-bottom-0 wg-left-0 wg-h-0.5 wg-w-0 wg-bg-primary-500 wg-transition-all hover:wg-w-full" />
                  </span>
                </a>
              </p>
            )}
            <p className="wg-line-clamp-1 wg-text-sm wg-text-neutral-600 wg-italic dark:wg-text-neutral-400">
              {track.artist}
            </p>
          </div>
        </div>

        {/* Status & External Link */}
        <div className="wg-hidden wg-items-center wg-gap-3 md:wg-flex">
          {isPlaying ? (
            <span className="wg-ml-4 wg-flex-shrink-0 wg-rounded-full wg-bg-green-100 wg-px-2.5 wg-py-0.5 wg-text-sm wg-text-green-700 dark:wg-bg-green-900 dark:wg-text-green-300">
              Playing
            </span>
          ) : (
            track.playedAt && (
              <span className="wg-ml-4 wg-flex-shrink-0 wg-rounded-full wg-bg-neutral-200 wg-px-2.5 wg-py-0.5 wg-text-sm wg-text-neutral-700 dark:wg-bg-neutral-700 dark:wg-text-neutral-300">
                {getTimeAgo(track.playedAt)}
              </span>
            )
          )}
          {showExternalLink && (
            <a
              href={externalLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="wg-rounded wg-p-2 wg-text-neutral-700 wg-transition-colors hover:wg-bg-neutral-200 dark:wg-text-neutral-300 dark:hover:wg-bg-neutral-700"
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
