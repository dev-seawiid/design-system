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
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    tags: ['React', 'Next.js'],
    href: '/blog/getting-started-nextjs-15',
    variant: 'grid',
  },
  decorators: [
    (Story) => (
      <div className="wg-max-w-md">
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
    image: 'https://images.unsplash.com/photo-1561070791-2526d94fc507?w=600&h=400&fit=crop',
    tags: ['Design', 'Storybook'],
    href: '/blog/building-design-system',
    variant: 'list',
  },
}

export const WithoutImage: Story = {
  args: {
    title: 'TypeScript Best Practices',
    summary: 'Tips and tricks for writing better TypeScript code in your projects.',
    date: '2024-12-15',
    readingTime: 6,
    tags: ['TypeScript', 'Programming'],
    href: '/blog/typescript-best-practices',
    variant: 'grid',
  },
}

export const PostGrid: Story = {
  render: () => (
    <div className="wg-grid wg-gap-6 md:wg-grid-cols-2 lg:wg-grid-cols-3">
      <PostCard
        title="Getting Started with Next.js 15"
        summary="Learn how to build modern web applications with Next.js 15."
        date="2024-12-24"
        readingTime={5}
        image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
        tags={['React', 'Next.js']}
        href="/blog/getting-started-nextjs-15"
        variant="grid"
      />
      <PostCard
        title="Building a Design System"
        summary="A comprehensive guide to creating and maintaining a design system."
        date="2024-12-20"
        readingTime={8}
        image="https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop"
        tags={['Design', 'Storybook']}
        href="/blog/building-design-system"
        variant="grid"
      />
      <PostCard
        title="TypeScript Best Practices"
        summary="Tips and tricks for writing better TypeScript code."
        date="2024-12-15"
        readingTime={6}
        image="https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop"
        tags={['TypeScript', 'Programming']}
        href="/blog/typescript-best-practices"
        variant="grid"
      />
    </div>
  ),
}
