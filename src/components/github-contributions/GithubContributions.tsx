import { cn } from '@/utils/cn'
import React from 'react'
import type { Props as GitHubCalendarProps } from 'react-github-calendar'
import { GitHubCalendar } from 'react-github-calendar'

export interface GithubContributionsProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'children'
> {
  /**
   * GitHub username
   */
  username: string
  /**
   * Year to display (number or "last" for last year)
   */
  year?: number | 'last'
  /**
   * Error message to display if fetch fails
   */
  errorMessage?: string
  /**
   * Throw error if fetch fails (default: false)
   */
  throwOnError?: boolean
  /**
   * Transform data before rendering
   */
  transformData?: (
    data: Array<{ date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }>
  ) => Array<{ date: string; count: number; level: 0 | 1 | 2 | 3 | 4 }>
  /**
   * Color scheme
   */
  colorScheme?: 'light' | 'dark' | 'auto'
  /**
   * Additional props passed to react-activity-calendar
   */
  calendarProps?: Omit<
    GitHubCalendarProps,
    'username' | 'year' | 'errorMessage' | 'throwOnError' | 'transformData'
  >
  ref?: React.Ref<HTMLDivElement>
}

/**
 * GithubContributions 컴포넌트
 *
 * GitHub contribution graph (잔디밭)을 표시하는 컴포넌트입니다.
 * react-github-calendar 라이브러리를 사용합니다.
 *
 * @example
 * ```tsx
 * <GithubContributions username="wujieli0207" />
 * ```
 */
export function GithubContributions({
  username,
  year = 'last',
  errorMessage,
  throwOnError = false,
  transformData,
  colorScheme = 'auto',
  calendarProps,
  className,
  ref,
  ...props
}: GithubContributionsProps) {
  // Determine color scheme based on theme
  const getTheme = () => {
    // GitHub's default contribution colors
    const githubTheme = {
      light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
      dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    }

    return {
      light: githubTheme.light,
      dark: githubTheme.dark,
    }
  }

  return (
    <div ref={ref} className={cn('wg-github-contributions wg-w-full', className)} {...props}>
      <GitHubCalendar
        username={username}
        year={year}
        errorMessage={errorMessage}
        throwOnError={throwOnError}
        transformData={transformData}
        theme={getTheme()}
        {...calendarProps}
      />
    </div>
  )
}
