import { cn } from '@/utils/cn'
import type { HTMLAttributes, ReactNode, Ref } from 'react'
import { Badge } from '../badge/Badge'
import { ClientSlot } from '../client/ClientSlot'

export interface PostCardProps extends HTMLAttributes<HTMLElement> {
  title: string
  summary?: string
  date: string
  readingTime?: number
  tags?: string[]
  variant?: 'grid' | 'list'
  /** true면 새 포스트 뱃지를 표시 */
  isNew?: boolean
  /** 이미지 슬롯 (next/image 사용 가능). 이미지 없으면 null */
  imageSlot: ReactNode
  /** 제목 링크 슬롯 (next/link 사용 가능). 링크 없으면 null이면 제목만 표시 */
  titleLinkSlot: ReactNode
  ref?: Ref<HTMLElement>
}

/**
 * PostCard 컴포넌트
 *
 * 블로그 포스트를 표시하는 카드 컴포넌트입니다.
 * leohuynh.dev의 포스트 카드 디자인을 참고했습니다.
 */
export function PostCard({
  title,
  summary,
  date,
  readingTime,
  tags,
  variant = 'grid',
  isNew = false,
  imageSlot,
  titleLinkSlot,
  className,
  ref,
  ...props
}: PostCardProps) {
  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString)
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <article
      ref={ref}
      aria-label={title}
      className={cn(
        variant === 'grid' && 'flex flex-col',
        variant === 'list' && 'flex flex-row gap-4',
        className
      )}
      {...props}
    >
      {variant === 'grid' && (
        <div className="flex flex-col items-start justify-between gap-4 md:gap-6">
          {imageSlot != null && imageSlot !== '' && (
            <div
              className={cn(
                'relative block shrink-0 w-full',
                'pt-0 pr-3 pb-3 pl-0',
                'transition-all duration-150 ease-in-out',
                'hover:pt-1 hover:pr-2 hover:pb-2 hover:pl-1'
              )}
            >
              {/* 보더 박스: 원본(leohuynh.dev)처럼 z-[-1]로 이미지 뒤에 두어 테두리가 이미지 주변을 감싸도록 함 */}
              <div
                className={cn(
                  'absolute top-3 right-0 bottom-0 left-3 z-0',
                  'rounded-xl border-2 border-gray-800 dark:border-gray-200',
                  'pointer-events-none'
                )}
              />
              <div className="relative z-10 w-full aspect-[3/2] overflow-hidden rounded-xl border border-gray-800/5 dark:border-white/10 shadow-2xl">
                <ClientSlot className="block w-full h-full object-cover [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
                  {imageSlot}
                </ClientSlot>
                {isNew && (
                  <span className="absolute top-2 right-2 z-10" aria-label="새 포스트">
                    <Badge variant="error" size="xs" className="animate-pulse">
                      New
                    </Badge>
                  </span>
                )}
              </div>
            </div>
          )}
          <div className="w-full space-y-3">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <time dateTime={date} className="whitespace-nowrap">
                {formatDate(date)}
              </time>
              {readingTime != null && readingTime > 0 && (
                <>
                  <span className="text-neutral-400 whitespace-nowrap">/</span>
                  <span className="whitespace-nowrap">{Math.ceil(readingTime)} mins read</span>
                </>
              )}
              {isNew && (imageSlot == null || imageSlot === '') && (
                <>
                  <span className="text-neutral-400" aria-hidden>·</span>
                  <Badge variant="error" size="xs" className="shrink-0 animate-pulse" aria-label="새 포스트">
                    New
                  </Badge>
                </>
              )}
            </div>
            <div className="group">
              <h3 className="text-xl leading-6 font-semibold">
                {titleLinkSlot != null && titleLinkSlot !== '' ? (
                  <ClientSlot className="no-underline text-inherit wg-focus-ring wg-highlighter-link hover:text-role-primary-600 rounded-sm">
                    {titleLinkSlot}
                  </ClientSlot>
                ) : (
                  title
                )}
              </h3>
              {summary != null && summary !== '' && (
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600 dark:text-neutral-500 md:mt-3">
                  {summary}
                </p>
              )}
            </div>
            {tags != null && tags.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <Badge key={tag} variant="primary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {variant === 'list' && (
        <div className="flex gap-4 w-full">
          {imageSlot != null && imageSlot !== '' && (
            <div className="shrink-0 w-32 h-24 rounded-lg overflow-hidden relative">
              <ClientSlot className="w-full h-full [&>*]:w-full [&>*]:h-full [&>img]:object-cover [&>a]:block [&>a]:w-full [&>a]:h-full [&>a>img]:w-full [&>a>img]:h-full [&>a>img]:object-cover">
                {imageSlot}
              </ClientSlot>
              {isNew && (
                <span className="absolute top-1 right-1 z-10" aria-label="새 포스트">
                  <Badge variant="error" size="xs" className="animate-pulse">New</Badge>
                </span>
              )}
            </div>
          )}
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs text-neutral-600 dark:text-neutral-400">
              <time dateTime={date} className="whitespace-nowrap">
                {formatDate(date)}
              </time>
              {readingTime != null && readingTime > 0 && (
                <>
                  <span className="text-neutral-400 whitespace-nowrap">/</span>
                  <span className="whitespace-nowrap">{Math.ceil(readingTime)} mins read</span>
                </>
              )}
              {isNew && (imageSlot == null || imageSlot === '') && (
                <>
                  <span className="text-neutral-400" aria-hidden>·</span>
                  <Badge variant="error" size="xs" className="shrink-0 animate-pulse" aria-label="새 포스트">New</Badge>
                </>
              )}
            </div>
            <h3 className="text-lg font-semibold">
              {titleLinkSlot != null && titleLinkSlot !== '' ? (
                <ClientSlot className="no-underline text-inherit wg-focus-ring wg-highlighter-link hover:text-role-primary-600 rounded-sm">
                  {titleLinkSlot}
                </ClientSlot>
              ) : (
                title
              )}
            </h3>
            {summary != null && summary !== '' && (
              <p className="text-sm text-neutral-600 dark:text-neutral-500 line-clamp-2">
                {summary}
              </p>
            )}
            {tags != null && tags.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {tags.map((tag) => (
                  <Badge key={tag} variant="primary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </article>
  )
}
