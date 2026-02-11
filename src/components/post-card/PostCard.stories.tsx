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
          '블로그 포스트를 표시하는 카드 컴포넌트입니다. leohuynh.dev의 포스트 카드 디자인을 참고했습니다.',
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

export const PostGrid: Story = {
  render: () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <PostCard
        title="Getting Started with Next.js 15"
        summary="Learn how to build modern web applications with Next.js 15."
        date="2024-12-24"
        readingTime={5}
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
    </div>
  ),
}
