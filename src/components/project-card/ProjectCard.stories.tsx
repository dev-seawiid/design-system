import type { Meta, StoryObj } from '@storybook/react'
import { ProjectCard } from './ProjectCard'

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

const meta: Meta<typeof ProjectCard> = {
  title: 'Cards/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '프로젝트를 표시하는 카드 컴포넌트입니다. 로고, 제목, 설명, 태그, 외부 링크를 지원합니다. wujie-blog-next의 실제 프로젝트 페이지 디자인을 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '프로젝트 제목',
    },
    description: {
      control: 'text',
      description: '프로젝트 설명',
    },
    logo: {
      control: 'text',
      description: '로고 이미지 URL',
    },
    logoAlt: {
      control: 'text',
      description: '로고 이미지 alt 텍스트',
    },
    tags: {
      control: 'object',
      description: '태그 배열',
    },
    href: {
      control: 'text',
      description: '외부 링크 URL',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
  args: {
    title: 'MakeBanner.ai',
    description: 'The #1 AI Banner Generator. Professional Visuals, Zero Design Skills.',
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    href: 'https://makebanner.ai',
    tags: [{ label: 'AI' }, { label: 'Banner Generator' }],
  },
}

export const WithMultipleTags: Story = {
  args: {
    title: 'Prompt Ultra AI',
    description: 'The AI Prompt Generator That Unlocks Your Creativity',
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    href: 'https://promptultra.ai',
    tags: [{ label: 'AI' }, { label: 'Prompt' }],
  },
}

export const WithIconTags: Story = {
  args: {
    title: 'JoyFlix AI',
    description: "The Only AI Video Generator You'll Ever Need",
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    href: 'https://joyflix.ai',
    tags: [
      { label: 'AI', icon: <HashIcon className="wg-h-3 wg-w-3" /> },
      { label: 'Video', icon: <HashIcon className="wg-h-3 wg-w-3" /> },
    ],
  },
}

export const WithoutLink: Story = {
  args: {
    title: 'Sketch To',
    description: 'AI Image Generator',
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    tags: [{ label: 'AI' }, { label: 'Image' }],
  },
}

export const WithoutLogo: Story = {
  args: {
    title: 'URL to Any',
    description: 'An All-in-One Web Content Conversion Tool',
    href: 'https://www.urltoany.com',
    tags: [{ label: 'Tools' }],
  },
}

export const LongDescription: Story = {
  args: {
    title: '独立开发沉思录',
    description: '分享关于独立开发技术、产品、设计、营销、个人成长的内容，每周发布一篇周刊',
    logo: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop',
    href: 'https://www.hackthinking.com',
    tags: [{ label: 'Blog' }],
  },
}

export const GridLayout: Story = {
  render: () => (
    <div className="wg-grid wg-grid-cols-1 wg-gap-4 md:wg-grid-cols-2 lg:wg-grid-cols-3">
      <ProjectCard
        title="MakeBanner.ai"
        description="The #1 AI Banner Generator. Professional Visuals, Zero Design Skills."
        logo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
        href="https://makebanner.ai"
        tags={[{ label: 'AI' }, { label: 'Banner Generator' }]}
      />
      <ProjectCard
        title="Ice Breaker Gen"
        description="Free Ice Breaker Generator: Find Perfect Ice Breaker Games"
        logo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
        href="https://icebreakergen.com"
        tags={[{ label: 'Ice Breaker Games' }]}
      />
      <ProjectCard
        title="Prompt Ultra AI"
        description="The AI Prompt Generator That Unlocks Your Creativity"
        logo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
        href="https://promptultra.ai"
        tags={[{ label: 'AI' }, { label: 'Prompt' }]}
      />
      <ProjectCard
        title="JoyFlix AI"
        description="The Only AI Video Generator You'll Ever Need"
        logo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
        href="https://joyflix.ai"
        tags={[{ label: 'AI' }, { label: 'Video' }]}
      />
      <ProjectCard
        title="SidePal"
        description="A browser extension to copilot with AI, very fast and safety."
        logo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
        href="https://chromewebstore.google.com"
        tags={[{ label: 'AI' }, { label: 'Browser Extension' }]}
      />
      <ProjectCard
        title="SVG to 3D"
        description="Transform 2D Designs to 3D Models"
        logo="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop"
        href="https://www.svgto3d.com"
        tags={[{ label: '3D' }]}
      />
    </div>
  ),
}
