import { cn } from '@/utils/cn'
import React from 'react'
import { ClientSlot } from '../client/ClientSlot'

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
  /**
   * 로고 슬롯. 외부 Next 프로젝트에서는 next/image 사용 가능. 로고 없으면 null.
   * @example logoSlot={<Image src={logo} alt={title} width={48} height={48} className="..." />}
   */
  logoSlot: React.ReactNode
  tags?: ProjectTag[]
  /**
   * 카드 전체를 감싸는 링크 슬롯. children으로 카드 내용이 주입됨. 링크 없으면 null.
   * 외부 Next 프로젝트에서는 next/link 사용 가능.
   * @example linkSlot={<Link href={href} className="block no-underline"></Link>}
   */
  linkSlot: React.ReactElement<{ children?: React.ReactNode }> | null
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
  logoSlot,
  tags,
  linkSlot,
  className,
  ref,
  ...props
}: ProjectCardProps) {
  const hasLogo = logoSlot != null && logoSlot !== ''

  const cardContent = (
    <div
      ref={ref}
      className={cn(
        'group relative flex h-full flex-col gap-3',
        'rounded-lg border border-semantic-border',
        'bg-white p-6',
        'dark:border-semantic-border dark:bg-definition-fog-800',
        'transition-all hover:shadow-lg',
        className
      )}
      {...props}
    >
      {/* Header: Logo (linkSlot으로 카드 전체 링크 처리, next/link 사용 가능) */}
      <div className="flex shrink-0 items-start justify-between">
        {hasLogo && (
          <div className="h-12 w-12 shrink-0 [&>a]:block [&>a]:h-12 [&>a]:w-12 [&>a>img]:h-12 [&>a>img]:w-12 [&>a>img]:rounded-lg [&>a>img]:object-contain [&>img]:h-12 [&>img]:w-12 [&>img]:rounded-lg [&>img]:object-contain">
            <ClientSlot className="h-full w-full *:h-12 *:w-12 [&>img]:rounded-lg [&>img]:object-contain [&>a]:block [&>a]:h-12 [&>a]:w-12 [&>a>img]:rounded-lg [&>a>img]:object-contain">
              {logoSlot}
            </ClientSlot>
          </div>
        )}
      </div>

      {/* Title */}
      <h2 className="shrink-0 text-xl font-bold leading-tight tracking-tight text-definition-fog-900 dark:text-definition-fog-100">
        {title}
      </h2>

      {/* Description: flex-1로 남은 높이 채움 → 그리드에서 카드 높이 통일 */}
      <div className="min-h-0 flex-1 text-sm leading-relaxed text-definition-fog-600 dark:text-definition-fog-400">
        {typeof description === 'string' ? <p>{description}</p> : description}
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="mt-auto shrink-0 flex flex-wrap gap-x-2">
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

  if (linkSlot !== null) {
    return React.cloneElement(linkSlot, { children: cardContent })
  }

  return cardContent
}
