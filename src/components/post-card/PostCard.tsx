import { cn } from '@/utils/cn'
import React from 'react'
import { Badge } from '../badge/Badge'

export interface PostCardProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  summary?: string
  date: string
  readingTime?: number
  image?: string
  tags?: string[]
  href?: string
  variant?: 'grid' | 'list'
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
  image,
  tags,
  href,
  variant = 'grid',
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
        variant === 'grid' && 'wg-flex wg-flex-col',
        variant === 'list' && 'wg-flex wg-flex-row wg-gap-4',
        className
      )}
      {...props}
    >
      {variant === 'grid' && (
        <div className="wg-flex wg-flex-col wg-items-start wg-justify-between wg-gap-4 md:wg-gap-6">
          {image && (
            <a
              href={href}
              className={cn(
                'wg-relative wg-block wg-shrink-0 wg-w-full',
                'wg-aspect-[3/2]',
                'wg-pt-0 wg-pr-3 wg-pb-3 wg-pl-0',
                'wg-transition-all wg-ease-in-out',
                'hover:wg-pt-1 hover:wg-pr-2 hover:wg-pb-2 hover:wg-pl-1'
              )}
            >
              <img
                src={image}
                alt={title}
                className="wg-absolute wg-inset-0 wg-w-full wg-h-full wg-rounded-xl wg-shadow-2xl wg-object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
              <div
                className={cn(
                  'wg-absolute wg-top-3 wg-right-0 wg-bottom-0 wg-left-3',
                  'wg-rounded-xl wg-border-2 wg-border-neutral-800 dark:wg-border-neutral-400',
                  'wg-bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,.1)_25%,rgba(0,0,0,.1)_50%,transparent_50%,transparent_75%,rgba(0,0,0,.1)_75%,rgba(0,0,0,.1))]',
                  'wg-bg-[length:20px_20px] wg-opacity-20'
                )}
              />
            </a>
          )}
          <div className="wg-w-full wg-space-y-3">
            <div className="wg-flex wg-items-center wg-gap-x-1.5 wg-text-sm wg-text-neutral-600 dark:wg-text-neutral-400">
              <time dateTime={date}>{formatDate(date)}</time>
              {readingTime && (
                <>
                  <span className="wg-mx-1 wg-text-neutral-400">/</span>
                  <span>{Math.ceil(readingTime)} mins read</span>
                </>
              )}
            </div>
            <div className="wg-group wg-relative">
              <h3 className="wg-text-xl wg-leading-6 wg-font-semibold">
                {href ? (
                  <a
                    href={href}
                    className="wg-relative wg-inline-block wg-transition-colors hover:wg-text-primary-500"
                  >
                    {title}
                    <span className="wg-absolute wg-bottom-0 wg-left-0 wg-h-0.5 wg-w-0 wg-bg-primary-500 wg-transition-all group-hover:wg-w-full" />
                  </a>
                ) : (
                  title
                )}
              </h3>
              {summary && (
                <p className="wg-mt-2 wg-line-clamp-2 wg-text-sm wg-leading-6 wg-text-neutral-600 dark:wg-text-neutral-500 md:wg-mt-3">
                  {summary}
                </p>
              )}
            </div>
            {tags && tags.length > 0 && (
              <div className="wg-flex wg-gap-2 wg-flex-wrap">
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
        <div className="wg-flex wg-gap-4 wg-w-full">
          {image && (
            <a
              href={href}
              className="wg-shrink-0 wg-w-32 wg-h-24 wg-rounded-lg wg-overflow-hidden wg-relative wg-block"
            >
              <img
                src={image}
                alt={title}
                className="wg-absolute wg-inset-0 wg-w-full wg-h-full wg-object-cover"
                loading="lazy"
              />
            </a>
          )}
          <div className="wg-flex-1 wg-space-y-2">
            <div className="wg-flex wg-items-center wg-gap-x-1.5 wg-text-xs wg-text-neutral-600 dark:wg-text-neutral-400">
              <time dateTime={date}>{formatDate(date)}</time>
              {readingTime && (
                <>
                  <span className="wg-mx-1 wg-text-neutral-400">/</span>
                  <span>{Math.ceil(readingTime)} mins read</span>
                </>
              )}
            </div>
            <h3 className="wg-text-lg wg-font-semibold">
              {href ? (
                <a href={href} className="wg-hover:wg-text-primary-500 wg-transition-colors">
                  {title}
                </a>
              ) : (
                title
              )}
            </h3>
            {summary && (
              <p className="wg-text-sm wg-text-neutral-600 dark:wg-text-neutral-500 wg-line-clamp-2">
                {summary}
              </p>
            )}
            {tags && tags.length > 0 && (
              <div className="wg-flex wg-gap-2 wg-flex-wrap">
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
