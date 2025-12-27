import { cn } from '@/utils/cn'
import React from 'react'

// 간단한 Hash 아이콘 컴포넌트
const HashIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
)

export interface ProjectTag {
  label: string
  icon?: React.ReactNode
}

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string | React.ReactNode
  logo?: string
  logoAlt?: string
  tags?: ProjectTag[]
  href?: string
  className?: string
  ref?: React.Ref<HTMLDivElement>
}

/**
 * ProjectCard 컴포넌트
 *
 * 프로젝트를 표시하는 카드 컴포넌트입니다.
 * 로고, 제목, 설명, 태그, 외부 링크를 지원합니다.
 * wujie-blog-next의 실제 프로젝트 페이지 디자인을 참고했습니다.
 */
export function ProjectCard({
  title,
  description,
  logo,
  logoAlt,
  tags,
  href,
  className,
  ref,
  ...props
}: ProjectCardProps) {
  const ExternalLinkIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 256 256"
      className="wg-h-4 wg-w-4 wg-text-gray-400 group-hover:wg-cursor-pointer group-hover:wg-text-primary dark:wg-text-gray-500"
    >
      <path d="M192,64V168L88,64Z" opacity="0.2" />
      <path d="M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z" />
    </svg>
  )

  const cardContent = (
    <div
      ref={ref}
      className={cn(
        'wg-group wg-relative wg-flex wg-flex-col wg-gap-3',
        'wg-rounded-lg wg-border wg-border-gray-200 wg-border-opacity-60',
        'wg-bg-white wg-p-6',
        'dark:wg-border-gray-700 dark:wg-bg-gray-800',
        'wg-transition-all hover:wg-shadow-lg',
        className
      )}
      {...props}
    >
      {/* Header: Logo + External Link Icon */}
      <div className="wg-flex wg-items-start wg-justify-between">
        {logo && (
          <div className="wg-shrink-0">
            <img
              src={logo}
              alt={logoAlt || title}
              className="wg-h-12 wg-w-12 wg-rounded-lg wg-object-contain"
            />
          </div>
        )}
        {href && (
          <div className="wg-shrink-0">
            <ExternalLinkIcon />
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="wg-text-xl wg-font-bold wg-leading-tight wg-tracking-tight wg-text-gray-900 dark:wg-text-gray-100">
        {title}
      </h2>

      {/* Description */}
      <div className="wg-text-sm wg-leading-relaxed wg-text-gray-600 dark:wg-text-gray-400">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="wg-mt-auto wg-flex wg-flex-wrap wg-gap-x-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="wg-group wg-flex wg-items-center wg-justify-center wg-space-x-0.5"
            >
              {tag.icon ? (
                <span className="wg-flex wg-items-center">{tag.icon}</span>
              ) : (
                <HashIcon className="wg-h-3 wg-w-3 wg-text-muted-foreground" />
              )}
              <span className="wg-text-xs wg-tracking-tighter wg-text-muted-foreground">
                {tag.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="wg-block wg-no-underline"
        aria-label={`Link to ${title}`}
        title={`Link to ${title}`}
      >
        {cardContent}
      </a>
    )
  }

  return cardContent
}
