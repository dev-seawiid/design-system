import type { Meta, StoryObj } from '@storybook/react'
import { PostCard } from './PostCard'

const meta: Meta<typeof PostCard> = {
  title: 'Cards/PostCard',
  component: PostCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '블로그 포스트를 표시하는 카드 컴포넌트입니다. leohuynh.dev의 포스트 카드 디자인을 참고했습니다. **imageSlot**, **titleLinkSlot**은 필수 prop이며, Next 프로젝트에서 next/image·next/link를 그대로 전달할 수 있습니다. 이미지가 없으면 `imageSlot={null}`, 제목만 표시할 때는 `titleLinkSlot={null}`을 넘깁니다.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof PostCard>

export const GridView: Story = {
  args: {
    title: 'Getting Started with Next.js 15',
    summary: 'Learn how to build modern web applications with Next.js 15 and React 19.',
    date: '2024-12-24',
    readingTime: 5,
    imageSlot: (
      <a href="/blog/getting-started-nextjs-15">
        <img
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
          alt="Getting Started with Next.js 15"
          loading="lazy"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
      </a>
    ),
    titleLinkSlot: <a href="/blog/getting-started-nextjs-15">Getting Started with Next.js 15</a>,
    tags: ['React', 'Next.js'],
    variant: 'grid',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
}

export const ListView: Story = {
  args: {
    title: 'Building a Design System',
    summary: 'A comprehensive guide to creating and maintaining a design system for your team.',
    date: '2024-12-20',
    readingTime: 8,
    imageSlot: (
      <a href="/blog/building-design-system">
        <img
          src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop"
          alt="Building a Design System"
          loading="lazy"
        />
      </a>
    ),
    titleLinkSlot: <a href="/blog/building-design-system">Building a Design System</a>,
    tags: ['Design', 'Storybook'],
    variant: 'list',
  },
}

export const WithoutImage: Story = {
  args: {
    title: 'TypeScript Best Practices',
    summary: 'Tips and tricks for writing better TypeScript code in your projects.',
    date: '2024-12-15',
    readingTime: 6,
    imageSlot: null,
    titleLinkSlot: <a href="/blog/typescript-best-practices">TypeScript Best Practices</a>,
    tags: ['TypeScript', 'Programming'],
    variant: 'grid',
  },
}

/** 새 포스트 뱃지 표시 (isNew) – 이미지 있을 때(이미지 위) / 없을 때(메타데이터 줄) */
export const NewPost: Story = {
  render: () => (
    <div className="flex flex-col gap-10">
      <section className="rounded-lg border-2 border-dashed border-role-primary-300 bg-role-primary-50/50 p-6 dark:border-role-primary-600 dark:bg-role-primary-900/20">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-role-primary-700 dark:text-role-primary-300">
          1. 이미지 있을 때
        </h3>
        <p className="mb-4 text-xs text-neutral-600 dark:text-neutral-400">
          N 뱃지가 이미지 우측 상단에 표시됩니다.
        </p>
        <div className="max-w-md">
          <PostCard
            title="Just Published: Next.js 15 Deep Dive"
            summary="A deep dive into the latest features and improvements in Next.js 15."
            date={new Date().toISOString().slice(0, 10)}
            readingTime={5}
            isNew
            imageSlot={
              <a href="/blog/nextjs-15-deep-dive">
                <img
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
                  alt="Next.js 15 Deep Dive"
                  loading="lazy"
                />
              </a>
            }
            titleLinkSlot={<a href="/blog/nextjs-15-deep-dive">Just Published: Next.js 15 Deep Dive</a>}
            tags={['React', 'Next.js']}
            variant="grid"
          />
        </div>
      </section>
      <section className="rounded-lg border-2 border-dashed border-neutral-300 bg-neutral-100/80 p-6 dark:border-neutral-600 dark:bg-neutral-800/50">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-700 dark:text-neutral-300">
          2. 이미지 없을 때
        </h3>
        <p className="mb-4 text-xs text-neutral-600 dark:text-neutral-400">
          N 뱃지가 날짜/읽기시간 줄 앞에 표시됩니다.
        </p>
        <div className="max-w-md">
          <PostCard
            title="Fresh: TypeScript 5.5 Tips"
            summary="Quick tips for getting the most out of TypeScript 5.5."
            date={new Date().toISOString().slice(0, 10)}
            readingTime={3}
            isNew
            imageSlot={null}
            titleLinkSlot={<a href="/blog/typescript-5-5-tips">Fresh: TypeScript 5.5 Tips</a>}
            tags={['TypeScript']}
            variant="grid"
          />
        </div>
      </section>
    </div>
  ),
}

/** 제목이 두 줄로 줄바꿈될 때 형광펜 호버 효과 확인용 */
export const GridViewLongTitle: Story = {
  args: {
    ...GridView.args,
    title:
      'Building a Design System: A Comprehensive Guide to Creating and Maintaining Consistency',
    summary: 'A comprehensive guide to creating and maintaining a design system for your team.',
    imageSlot: (
      <a href="/blog/building-design-system">
        <img
          src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop"
          alt="Building a Design System"
          loading="lazy"
        />
      </a>
    ),
    titleLinkSlot: (
      <a href="/blog/building-design-system">
        Building a Design System: A Comprehensive Guide to Creating and Maintaining Consistency
      </a>
    ),
    tags: ['Design', 'Storybook'],
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
}

export const PostGrid: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <PostCard
        title="Getting Started with Next.js 15"
        summary="Learn how to build modern web applications with Next.js 15."
        date="2024-12-24"
        readingTime={5}
        isNew
        imageSlot={
          <a href="/blog/getting-started-nextjs-15">
            <img
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
              alt="Getting Started with Next.js 15"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </a>
        }
        titleLinkSlot={
          <a href="/blog/getting-started-nextjs-15">Getting Started with Next.js 15</a>
        }
        tags={['React', 'Next.js']}
        variant="grid"
      />
      <PostCard
        title="Building a Design System"
        summary="A comprehensive guide to creating and maintaining a design system."
        date="2024-12-20"
        readingTime={8}
        isNew
        imageSlot={
          <a href="/blog/building-design-system">
            <img
              src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop"
              alt="Building a Design System"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </a>
        }
        titleLinkSlot={<a href="/blog/building-design-system">Building a Design System</a>}
        tags={['Design', 'Storybook']}
        variant="grid"
      />
      <PostCard
        title="TypeScript Best Practices"
        summary="Tips and tricks for writing better TypeScript code."
        date="2024-12-15"
        readingTime={6}
        imageSlot={
          <a href="/blog/typescript-best-practices">
            <img
              src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop"
              alt="TypeScript Best Practices"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </a>
        }
        titleLinkSlot={<a href="/blog/typescript-best-practices">TypeScript Best Practices</a>}
        tags={['TypeScript', 'Programming']}
        variant="grid"
      />
      <PostCard
        title="How to Create and Maintain a Design System That Scales With Your Team"
        summary="From tokens to components: a practical guide for design system adoption."
        date="2024-12-10"
        readingTime={10}
        imageSlot={
          <a href="/blog/design-system-scales">
            <img
              src="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop"
              alt="Design system at scale"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
              }}
            />
          </a>
        }
        titleLinkSlot={
          <a href="/blog/design-system-scales">
            How to Create and Maintain a Design System That Scales With Your Team
          </a>
        }
        tags={['Design', 'Scale']}
        variant="grid"
      />
    </div>
  ),
}
