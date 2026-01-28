import type { Meta, StoryObj } from '@storybook/react'
import { ParallaxTags } from './ParallaxTags'

const meta: Meta<typeof ParallaxTags> = {
  title: 'Effects/ParallaxTags',
  component: ParallaxTags,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '스크롤 시 태그들이 parallax 효과로 움직이는 애니메이션 컴포넌트입니다. 여러 row로 나뉘어 각 row마다 반대 방향으로 흐릅니다. Azurtelier.com의 ParallaxText 컴포넌트를 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    baseVelocity: {
      control: { type: 'number', min: 0, max: 2, step: 0.1 },
      description: '기본 이동 속도',
    },
    tagsPerRow: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: '한 row에 표시할 태그 개수',
    },
    pauseOnHover: {
      control: 'boolean',
      description: '호버 시 일시 정지',
    },
  },
}

export default meta
type Story = StoryObj<typeof ParallaxTags>

const sampleTags = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Storybook',
  'Design System',
  'Web Development',
  'Frontend',
  'UI/UX',
  'Component Library',
  'JavaScript',
  'CSS',
  'HTML',
  'Node.js',
  'Vite',
]

export const Default: Story = {
  args: {
    tags: sampleTags,
    baseVelocity: 1,
    tagsPerRow: 3,
    pauseOnHover: true,
  },
}

export const FastSpeed: Story = {
  args: {
    tags: sampleTags,
    baseVelocity: 1.5,
    tagsPerRow: 3,
  },
}

export const SlowSpeed: Story = {
  args: {
    tags: sampleTags,
    baseVelocity: 0.5,
    tagsPerRow: 3,
  },
}

export const MoreTagsPerRow: Story = {
  args: {
    tags: sampleTags,
    baseVelocity: 1,
    tagsPerRow: 5,
  },
}

export const FewerTagsPerRow: Story = {
  args: {
    tags: sampleTags,
    baseVelocity: 1,
    tagsPerRow: 2,
  },
}

export const WithLinks: Story = {
  args: {
    tags: [
      { text: 'React', href: 'https://react.dev' },
      { text: 'Next.js', href: 'https://nextjs.org' },
      { text: 'TypeScript', href: 'https://www.typescriptlang.org' },
      { text: 'Tailwind CSS', href: 'https://tailwindcss.com' },
      { text: 'Storybook', href: 'https://storybook.js.org' },
      { text: 'Design System', href: '#' },
      { text: 'Web Development', href: '#' },
      { text: 'Frontend', href: '#' },
      { text: 'UI/UX', href: '#' },
      { text: 'Component Library', href: '#' },
    ],
    baseVelocity: 1,
    tagsPerRow: 3,
    pauseOnHover: true,
  },
}

export const WithScrollableContent: Story = {
  render: () => (
    <div className="min-h-[200vh]">
      <div className="py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Scroll down to see parallax tags</h1>
        <p className="text-center text-muted-foreground mb-12">
          The tags will move based on your scroll speed. Each row moves in opposite directions.
        </p>
      </div>

      <ParallaxTags tags={sampleTags} baseVelocity={1} tagsPerRow={3} pauseOnHover={true} />

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Content Section</h2>
          <p className="text-lg text-muted-foreground">
            Scroll up and down to see the parallax effect. Each row of tags moves in opposite
            directions based on your scroll velocity.
          </p>
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Section {i + 1}</h3>
                <p className="text-muted-foreground">
                  This is some content to create scrollable space. Keep scrolling to see the
                  parallax tags animation in action.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
}
