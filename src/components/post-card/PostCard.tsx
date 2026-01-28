import { cn } from '@/utils/cn'
import React from 'react'
import { Badge } from '../badge/Badge'
import { ClientSlot } from '../client/ClientSlot'

export interface PostCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  summary?: string
  date: string
  readingTime?: number
  tags?: string[]
  variant?: 'grid' | 'list'
  imageSlot?: React.ReactNode
  titleLinkSlot?: React.ReactNode
  ref?: React.Ref<HTMLElement>
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
  imageSlot,
  titleLinkSlot,
  className,
  ref,
  ...props
}: PostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const content = (
    <article
      ref={ref}
      className={cn(
        variant === 'grid' && 'flex flex-col',
        variant === 'list' && 'flex flex-row gap-4',
        className
      )}
      {...props}
    >
      {variant === 'grid' && (
        <div className="flex flex-col items-start justify-between gap-4 md:gap-6">
          {imageSlot && (
            <div
              className={cn(
                'relative block shrink-0 w-full',
                'aspect-[3/2]',
                'pt-0 pr-3 pb-3 pl-0',
                'transition-all ease-in-out',
                'hover:pt-1 hover:pr-2 hover:pb-2 hover:pl-1'
              )}
            >
              <ClientSlot className="absolute inset-0 w-full h-full [&>*]:w-full [&>*]:h-full [&>img]:rounded-xl [&>img]:shadow-2xl [&>img]:object-cover [&>a]:block [&>a]:w-full [&>a]:h-full [&>a>img]:w-full [&>a>img]:h-full [&>a>img]:rounded-xl [&>a>img]:shadow-2xl [&>a>img]:object-cover">
                {imageSlot}
              </ClientSlot>
              <div
                className={cn(
                  'absolute top-3 right-0 bottom-0 left-3',
                  'rounded-xl border-2 border-neutral-800 dark:border-neutral-400',
                  'bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.1)_25%,rgba(0,0,0,.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,.1)_75%,rgba(0,0,0,.1))]',
                  'bg-[length:20px_20px] opacity-20',
                  'pointer-events-none'
                )}
              />
            </div>
          )}
          <div className="w-full space-y-3">
            <div className="flex flex-wrap items-center gap-x-1.5 text-sm text-neutral-600 dark:text-neutral-400">
              <time dateTime={date} className="whitespace-nowrap">
                {formatDate(date)}
              </time>
              {readingTime && (
                <>
                  <span className="text-neutral-400 whitespace-nowrap">/</span>
                  <span className="whitespace-nowrap">{Math.ceil(readingTime)} mins read</span>
                </>
              )}
            </div>
            <div className="group relative">
              <h3 className="text-xl leading-6 font-semibold">
                {titleLinkSlot ? (
                  <div className="relative inline-block">
                    <ClientSlot className="transition-colors hover:text-role-primary-500 [&>a]:no-underline [&>a]:text-inherit">
                      {titleLinkSlot}
                    </ClientSlot>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-role-primary-500 transition-all group-hover:w-full" />
                  </div>
                ) : (
                  title
                )}
              </h3>
              {summary && (
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600 dark:text-neutral-500 md:mt-3">
                  {summary}
                </p>
              )}
            </div>
            {tags && tags.length > 0 && (
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
          {imageSlot && (
            <div className="shrink-0 w-32 h-24 rounded-lg overflow-hidden relative">
              <ClientSlot className="w-full h-full [&>*]:w-full [&>*]:h-full [&>img]:object-cover [&>a]:block [&>a]:w-full [&>a]:h-full [&>a>img]:w-full [&>a>img]:h-full [&>a>img]:object-cover">
                {imageSlot}
              </ClientSlot>
            </div>
          )}
          <div className="flex-1 space-y-2">
            <div className="flex flex-wrap items-center gap-x-1.5 text-xs text-neutral-600 dark:text-neutral-400">
              <time dateTime={date} className="whitespace-nowrap">
                {formatDate(date)}
              </time>
              {readingTime && (
                <>
                  <span className="text-neutral-400 whitespace-nowrap">/</span>
                  <span className="whitespace-nowrap">{Math.ceil(readingTime)} mins read</span>
                </>
              )}
            </div>
            <h3 className="text-lg font-semibold">
              {titleLinkSlot ? (
                <ClientSlot className="hover:text-role-primary-500 transition-colors [&>a]:no-underline [&>a]:text-inherit">
                  {titleLinkSlot}
                </ClientSlot>
              ) : (
                title
              )}
            </h3>
            {summary && (
              <p className="text-sm text-neutral-600 dark:text-neutral-500 line-clamp-2">
                {summary}
              </p>
            )}
            {tags && tags.length > 0 && (
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

  return content
}
