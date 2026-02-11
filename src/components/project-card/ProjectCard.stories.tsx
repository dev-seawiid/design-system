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

const LOGO_URL = 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop'

const meta: Meta<typeof ProjectCard> = {
  title: 'Cards/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '프로젝트를 표시하는 카드 컴포넌트입니다. wujie-blog-next의 실제 프로젝트 페이지 디자인을 참고했습니다. **logoSlot**, **linkSlot**은 필수 prop입니다. Next에서는 next/image·next/link를 전달할 수 있습니다. 로고가 없으면 `logoSlot={null}`, 링크가 없으면 `linkSlot={null}`을 넘깁니다.',
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
    logoSlot: {
      description: '로고 슬롯 (next/image 사용 가능)',
    },
    linkSlot: {
      description: '카드 전체를 감싸는 링크 슬롯 (next/link 사용 가능)',
    },
    tags: {
      control: 'object',
      description: '태그 배열',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProjectCard>

export const Default: Story = {
  args: {
    title: 'MakeBanner.ai',
    description: 'The #1 AI Banner Generator. Professional Visuals, Zero Design Skills.',
    logoSlot: (
      <img
        src={LOGO_URL}
        alt="MakeBanner.ai"
        className="h-12 w-12 rounded-lg object-contain"
      />
    ),
    linkSlot: (
      <a
        href="https://makebanner.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label="Link to MakeBanner.ai"
      />
    ),
    tags: [{ label: 'AI' }, { label: 'Banner Generator' }],
  },
}

export const WithMultipleTags: Story = {
  args: {
    title: 'Prompt Ultra AI',
    description: 'The AI Prompt Generator That Unlocks Your Creativity',
    logoSlot: (
      <img
        src={LOGO_URL}
        alt="Prompt Ultra AI"
        className="h-12 w-12 rounded-lg object-contain"
      />
    ),
    linkSlot: (
      <a
        href="https://promptultra.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label="Link to Prompt Ultra AI"
      />
    ),
    tags: [{ label: 'AI' }, { label: 'Prompt' }],
  },
}

export const WithIconTags: Story = {
  args: {
    title: 'JoyFlix AI',
    description: "The Only AI Video Generator You'll Ever Need",
    logoSlot: (
      <img
        src={LOGO_URL}
        alt="JoyFlix AI"
        className="h-12 w-12 rounded-lg object-contain"
      />
    ),
    linkSlot: (
      <a
        href="https://joyflix.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label="Link to JoyFlix AI"
      />
    ),
    tags: [
      { label: 'AI', icon: <HashIcon className="h-3 w-3" /> },
      { label: 'Video', icon: <HashIcon className="h-3 w-3" /> },
    ],
  },
}

export const WithoutLink: Story = {
  args: {
    title: 'Sketch To',
    description: 'AI Image Generator',
    logoSlot: (
      <img
        src={LOGO_URL}
        alt="Sketch To"
        className="h-12 w-12 rounded-lg object-contain"
      />
    ),
    linkSlot: null,
    tags: [{ label: 'AI' }, { label: 'Image' }],
  },
}

export const WithoutLogo: Story = {
  args: {
    title: 'URL to Any',
    description: 'An All-in-One Web Content Conversion Tool',
    logoSlot: null,
    linkSlot: (
      <a
        href="https://www.urltoany.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label="Link to URL to Any"
      />
    ),
    tags: [{ label: 'Tools' }],
  },
}

export const LongDescription: Story = {
  args: {
    title: '独立开发沉思录',
    description:
      '分享关于独立开发技术、产品、设计、营销、个人成长的内容，每周发布一篇周刊',
    logoSlot: (
      <img
        src={LOGO_URL}
        alt="独立开发沉思录"
        className="h-12 w-12 rounded-lg object-contain"
      />
    ),
    linkSlot: (
      <a
        href="https://www.hackthinking.com"
        target="_blank"
        rel="noopener noreferrer"
        className="block no-underline"
        aria-label="Link to 独立开发沉思录"
      />
    ),
    tags: [{ label: 'Blog' }],
  },
}

const projectCards = [
  {
    title: 'MakeBanner.ai',
    description:
      'The #1 AI Banner Generator. Professional Visuals, Zero Design Skills.',
    href: 'https://makebanner.ai',
    tags: [{ label: 'AI' }, { label: 'Banner Generator' }],
  },
  {
    title: 'Ice Breaker Gen',
    description: 'Free Ice Breaker Generator: Find Perfect Ice Breaker Games',
    href: 'https://icebreakergen.com',
    tags: [{ label: 'Ice Breaker Games' }],
  },
  {
    title: 'Prompt Ultra AI',
    description: 'The AI Prompt Generator That Unlocks Your Creativity',
    href: 'https://promptultra.ai',
    tags: [{ label: 'AI' }, { label: 'Prompt' }],
  },
  {
    title: 'JoyFlix AI',
    description: "The Only AI Video Generator You'll Ever Need",
    href: 'https://joyflix.ai',
    tags: [{ label: 'AI' }, { label: 'Video' }],
  },
  {
    title: 'SidePal',
    description: 'A browser extension to copilot with AI, very fast and safety.',
    href: 'https://chromewebstore.google.com',
    tags: [{ label: 'AI' }, { label: 'Browser Extension' }],
  },
  {
    title: 'SVG to 3D',
    description: 'Transform 2D Designs to 3D Models',
    href: 'https://www.svgto3d.com',
    tags: [{ label: '3D' }],
  },
]

export const GridLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projectCards.map((project) => (
        <ProjectCard
          key={project.href}
          title={project.title}
          description={project.description}
          logoSlot={
            <img
              src={LOGO_URL}
              alt={project.title}
              className="h-12 w-12 rounded-lg object-contain"
            />
          }
          linkSlot={
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full no-underline"
              aria-label={`Link to ${project.title}`}
            />
          }
          tags={project.tags}
        />
      ))}
    </div>
  ),
}
