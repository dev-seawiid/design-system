import type { Meta, StoryObj } from '@storybook/react'
import { ParallaxText } from './ParallaxText'

const meta: Meta<typeof ParallaxText> = {
  title: 'Effects/ParallaxText',
  component: ParallaxText,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '스크롤 시 텍스트가 parallax 효과로 움직이는 애니메이션입니다. 여러 row로 나뉘어 각 row마다 반대 방향으로 흐릅니다. Azurtelier.com의 ParallaxText를 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    baseVelocity: {
      control: { type: 'number', min: 0, max: 2, step: 0.1 },
      description: '기본 이동 속도',
    },
    itemsPerRow: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: '한 row에 표시할 항목 개수',
    },
    pauseOnHover: {
      control: 'boolean',
      description: '호버 시 일시 정지',
    },
  },
}

export default meta
type Story = StoryObj<typeof ParallaxText>

const sampleItems = [
  { text: 'React' },
  { text: 'Next.js' },
  { text: 'TypeScript' },
  { text: 'Tailwind CSS' },
  { text: 'Storybook' },
  { text: 'Design System' },
  { text: 'Web Development' },
  { text: 'Frontend' },
  { text: 'UI/UX' },
  { text: 'Component Library' },
  { text: 'JavaScript' },
  { text: 'CSS' },
  { text: 'HTML' },
  { text: 'Node.js' },
  { text: 'Vite' },
]

export const Default: Story = {
  args: {
    items: sampleItems,
    baseVelocity: 1,
    itemsPerRow: 3,
    pauseOnHover: true,
  },
}

export const FastSpeed: Story = {
  args: {
    items: sampleItems,
    baseVelocity: 1.5,
    itemsPerRow: 3,
  },
}

export const SlowSpeed: Story = {
  args: {
    items: sampleItems,
    baseVelocity: 0.5,
    itemsPerRow: 3,
  },
}

export const MoreItemsPerRow: Story = {
  args: {
    items: sampleItems,
    baseVelocity: 1,
    itemsPerRow: 5,
  },
}

export const FewerItemsPerRow: Story = {
  args: {
    items: sampleItems,
    baseVelocity: 1,
    itemsPerRow: 2,
  },
}

/** href 있으면 링크, 없으면 텍스트만. 일부만 링크 넣기 */
export const WithOptionalLinks: Story = {
  args: {
    items: [
      { text: 'React', href: 'https://react.dev' },
      { text: 'Next.js', href: 'https://nextjs.org' },
      { text: 'TypeScript' },
      { text: 'Tailwind CSS', href: 'https://tailwindcss.com' },
      { text: 'Storybook' },
      { text: 'Design System', href: 'https://storybook.js.org' },
      { text: 'Web Development' },
      { text: 'Frontend', href: 'https://developer.mozilla.org' },
      { text: 'UI/UX' },
      { text: 'Component Library', href: 'https://github.com' },
    ],
    baseVelocity: 1,
    itemsPerRow: 3,
    pauseOnHover: true,
  },
}

/** 전부 링크 있는 경우 (외부 링크 위주) */
export const WithLinks: Story = {
  args: {
    items: [
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
    itemsPerRow: 3,
    pauseOnHover: true,
  },
}

export const WithScrollableContent: Story = {
  render: () => (
    <div className="min-h-[200vh]">
      <div className="py-20 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Scroll down to see parallax text</h1>
        <p className="text-center text-muted-foreground mb-12">
          The text will move based on your scroll speed. Each row moves in opposite directions.
        </p>
      </div>

      <ParallaxText items={sampleItems} baseVelocity={1} itemsPerRow={3} pauseOnHover={true} />

      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-bold">Content Section</h2>
          <p className="text-lg text-muted-foreground">
            Scroll up and down to see the parallax effect. Each row moves in opposite directions
            based on your scroll velocity.
          </p>
          <div className="space-y-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="p-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Section {i + 1}</h3>
                <p className="text-muted-foreground">
                  This is some content to create scrollable space. Keep scrolling to see the
                  parallax text animation in action.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ),
}
