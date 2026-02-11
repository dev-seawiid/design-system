import type { Meta, StoryObj } from '@storybook/react'
import * as si from 'simple-icons'
import type { RotatingSphereItemInput } from './RotatingSphere'
import { RotatingSphere } from './RotatingSphere'

const meta: Meta<typeof RotatingSphere> = {
  title: 'Effects/RotatingSphere',
  component: RotatingSphere,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '3D 구 형태로 아이템들이 회전하는 애니메이션. items prop으로 전달하면 RSC에서도 그대로 사용 가능합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['circle', 'rectangle'],
      description: '아이템 모양 (전체 통일)',
    },
    radius: {
      control: { type: 'number', min: 1, max: 5, step: 0.1 },
      description: '구의 반지름 (3D 단위)',
    },
    speed: {
      control: { type: 'number', min: 0, max: 2, step: 0.1 },
      description: '회전 속도',
    },
    autoRotate: {
      control: 'boolean',
      description: '자동 회전 여부',
    },
  },
}

export default meta
type Story = StoryObj<typeof RotatingSphere>

/** 숫자 원형 (circle 기본) */
const defaultItems: RotatingSphereItemInput[] = Array.from({ length: 20 }, (_, i) => ({
  content: i + 1,
}))

export const Default: Story = {
  args: {
    items: defaultItems,
    radius: 2,
    speed: 0.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="h-[600px] w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

/** 이모지/커스텀 노드 */
const iconItems: RotatingSphereItemInput[] = [
  '⚛️', '⚡', '🎨', '🚀', '💻', '🌟', '🔥', '✨', '🎯', '📦',
  '🔧', '🌐', '📱', '🎮', '🧩', '🔒', '📊', '🎵', '🌈',
].map((emoji) => ({
  content: <span className="text-4xl">{emoji}</span>,
}))

export const WithIcons: Story = {
  args: {
    items: iconItems,
    radius: 2,
    speed: 0.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="h-[600px] w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

/** variant="rectangle" 태그형 (컴포넌트 레벨에서 한 번만 지정) */
const tagItems: RotatingSphereItemInput[] = Array.from({ length: 12 }, (_, i) => ({
  content: `Tag ${i + 1}`,
}))

export const WithText: Story = {
  args: {
    items: tagItems,
    variant: 'rectangle',
    radius: 2.5,
    speed: 0.3,
    autoRotate: true,
  },
  render: (args) => (
    <div className="h-[600px] w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

/** autoRotate 끄고 마우스 드래그로 회전 */
export const ManualControl: Story = {
  args: {
    items: defaultItems,
    radius: 2,
    speed: 0.5,
    autoRotate: false,
  },
  render: (args) => (
    <div className="h-[600px] w-full">
      <div className="mb-4 text-center text-sm text-definition-fog-600 dark:text-definition-fog-400">
        마우스로 드래그하여 회전시킬 수 있습니다
      </div>
      <RotatingSphere {...args} />
    </div>
  ),
}

export const FastRotation: Story = {
  args: {
    items: defaultItems,
    radius: 2,
    speed: 1.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="h-[600px] w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

export const SlowRotation: Story = {
  args: {
    items: defaultItems.slice(0, 15),
    radius: 2,
    speed: 0.2,
    autoRotate: true,
  },
  render: (args) => (
    <div className="h-[600px] w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

const techIconKeys = [
  'siHtml5', 'siCss', 'siJavascript', 'siTypescript', 'siReact', 'siVuedotjs',
  'siNextdotjs', 'siMysql', 'siPostgresql', 'siDrizzle', 'siNodedotjs',
  'siOpenjdk', 'siPython', 'siNginx', 'siVercel', 'siDocker', 'siGit',
  'siGithub', 'siSupabase', 'siCloudflare', 'siAndroidstudio', 'siIos',
  'siApple', 'siWechat',
] as const

const renderSimpleIcon = (iconKey: string) => {
  const icon = si[iconKey as keyof typeof si] as
    | { path: string; hex: string; title: string }
    | undefined
  if (!icon) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-definition-fog-200 text-definition-fog-600">
        {iconKey.substring(2, 4).toUpperCase()}
      </div>
    )
  }
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '48px', height: '48px', fill: `#${icon.hex}` }}
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  )
}

export const TechStackIcons: Story = {
  args: {
    items: techIconKeys.map((key) => ({ content: renderSimpleIcon(key) })),
    radius: 2,
    speed: 0.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="h-[600px] w-full">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-semibold text-definition-fog-900 dark:text-definition-fog-100">
          Technology Stack Icons
        </h3>
        <p className="mt-2 text-sm text-definition-fog-600 dark:text-definition-fog-400">
          {techIconKeys.length}개의 기술 스택 아이콘이 3D 구 형태로 회전합니다
        </p>
      </div>
      <RotatingSphere {...args} />
    </div>
  ),
}
