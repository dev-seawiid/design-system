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
      className="h-4 w-4 text-definition-fog-400 group-hover:cursor-pointer group-hover:text-role-primary-500 dark:text-definition-fog-500"
    >
      <path d="M192,64V168L88,64Z" opacity="0.2" />
      <path d="M192,56H88a8,8,0,0,0-5.66,13.66L128.69,116,58.34,186.34a8,8,0,0,0,11.32,11.32L140,127.31l46.34,46.35A8,8,0,0,0,200,168V64A8,8,0,0,0,192,56Zm-8,92.69-38.34-38.34h0L107.31,72H184Z" />
    </svg>
  )

  const cardContent = (
    <div
      ref={ref}
      className={cn(
        'group relative flex flex-col gap-3',
        'rounded-lg border border-semantic-border',
        'bg-white p-6',
        'dark:border-semantic-border dark:bg-definition-fog-800',
        'transition-all hover:shadow-lg',
        className
      )}
      {...props}
    >
      {/* Header: Logo + External Link Icon */}
      <div className="flex items-start justify-between">
        {logo && (
          <div className="shrink-0">
            <img
              src={logo}
              alt={logoAlt || title}
              className="h-12 w-12 rounded-lg object-contain"
            />
          </div>
        )}
        {href && (
          <div className="shrink-0">
            <ExternalLinkIcon />
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold leading-tight tracking-tight text-definition-fog-900 dark:text-definition-fog-100">
        {title}
      </h2>

      {/* Description */}
      <div className="text-sm leading-relaxed text-definition-fog-600 dark:text-definition-fog-400">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-x-2">
          {tags.map((tag, index) => (
            <div key={index} className="group flex items-center justify-center space-x-0.5">
              {tag.icon ? (
                <span className="flex items-center">{tag.icon}</span>
              ) : (
                <HashIcon className="h-3 w-3 text-muted-foreground" />
              )}
              <span className="text-xs tracking-tighter text-muted-foreground">{tag.label}</span>
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
        className="block no-underline"
        aria-label={`Link to ${title}`}
        title={`Link to ${title}`}
      >
        {cardContent}
      </a>
    )
  }

  return cardContent
}
