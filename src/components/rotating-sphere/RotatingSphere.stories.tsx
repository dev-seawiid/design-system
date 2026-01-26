import type { Meta, StoryObj } from '@storybook/react'
import * as si from 'simple-icons'
import { RotatingSphere, RotatingSphereItem } from './RotatingSphere'

const meta: Meta<typeof RotatingSphere> = {
  title: 'Effects/RotatingSphere',
  component: RotatingSphere,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '3D 구 형태로 아이템들이 회전하는 애니메이션 컴포넌트입니다. wujie-blog-next의 홈페이지 3D 회전 애니메이션을 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
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

// Generate sphere points using Fibonacci sphere algorithm
const generateSpherePoints = (count: number): RotatingSphereItem[] => {
  const items: RotatingSphereItem[] = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const theta = goldenAngle * i
    const x = Math.cos(theta) * radius
    const z = Math.sin(theta) * radius

    items.push({
      id: i,
      content: (
        <div className="wg-flex wg-h-12 wg-w-12 wg-items-center wg-justify-center wg-rounded-full wg-bg-primary-500 wg-text-white wg-text-lg wg-font-bold">
          {i + 1}
        </div>
      ),
      x,
      y,
      z,
    })
  }

  return items
}

export const Default: Story = {
  args: {
    items: generateSpherePoints(20),
    radius: 2,
    speed: 0.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="wg-h-[600px] wg-w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

export const WithIcons: Story = {
  args: {
    items: [
      { id: 1, content: <span className="wg-text-4xl">⚛️</span>, x: 1, y: 0, z: 0 },
      { id: 2, content: <span className="wg-text-4xl">⚡</span>, x: -1, y: 0, z: 0 },
      { id: 3, content: <span className="wg-text-4xl">🎨</span>, x: 0, y: 1, z: 0 },
      { id: 4, content: <span className="wg-text-4xl">🚀</span>, x: 0, y: -1, z: 0 },
      { id: 5, content: <span className="wg-text-4xl">💻</span>, x: 0, y: 0, z: 1 },
      { id: 6, content: <span className="wg-text-4xl">🌟</span>, x: 0, y: 0, z: -1 },
      { id: 7, content: <span className="wg-text-4xl">🔥</span>, x: 0.7, y: 0.7, z: 0 },
      { id: 8, content: <span className="wg-text-4xl">✨</span>, x: -0.7, y: -0.7, z: 0 },
    ],
    radius: 2,
    speed: 0.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="wg-h-[600px] wg-w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

export const WithText: Story = {
  args: {
    items: generateSpherePoints(12).map((item, index) => ({
      ...item,
      content: (
        <div
          className="wg-rounded-lg wg-px-4 wg-py-2 wg-text-white"
          style={{ background: 'var(--wg-gradient-shallow-beach-to-deep-sea)' }}
        >
          <span className="wg-text-sm wg-font-semibold">Tag {index + 1}</span>
        </div>
      ),
    })),
    radius: 2.5,
    speed: 0.3,
    autoRotate: true,
  },
  render: (args) => (
    <div className="wg-h-[600px] wg-w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

export const ManualControl: Story = {
  args: {
    items: generateSpherePoints(20),
    radius: 2,
    speed: 0.5,
    autoRotate: false,
  },
  render: (args) => (
    <div className="wg-h-[600px] wg-w-full">
      <div className="wg-mb-4 wg-text-center wg-text-sm wg-text-gray-600 dark:wg-text-gray-400">
        마우스로 드래그하여 회전시킬 수 있습니다
      </div>
      <RotatingSphere {...args} />
    </div>
  ),
}

export const FastRotation: Story = {
  args: {
    items: generateSpherePoints(30),
    radius: 2,
    speed: 1.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="wg-h-[600px] wg-w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

export const SlowRotation: Story = {
  args: {
    items: generateSpherePoints(15),
    radius: 2,
    speed: 0.2,
    autoRotate: true,
  },
  render: (args) => (
    <div className="wg-h-[600px] wg-w-full">
      <RotatingSphere {...args} />
    </div>
  ),
}

// wujieli.com에서 사용하는 기술 스택 아이콘들
// simple-icons의 실제 키 이름으로 매핑
const techIconKeys = [
  'siHtml5',
  'siCss', // siCss3가 없으므로 siCss 사용
  'siJavascript',
  'siTypescript',
  'siReact',
  'siVuedotjs',
  'siNextdotjs',
  'siMysql',
  'siPostgresql',
  'siDrizzle',
  'siNodedotjs',
  'siOpenjdk', // siJava가 없으므로 siOpenjdk 사용
  'siPython',
  'siNginx',
  'siVercel',
  'siDocker',
  'siGit',
  'siGithub',
  'siSupabase',
  'siCloudflare',
  'siAndroidstudio',
  'siIos',
  'siApple',
  'siWechat',
] as const

// Simple Icons를 사용하여 아이콘 렌더링
const renderSimpleIcon = (iconKey: string) => {
  const icon = si[iconKey as keyof typeof si] as
    | { path: string; hex: string; title: string }
    | undefined

  if (!icon) {
    console.warn(`Icon not found for key: ${iconKey}`)
    return (
      <div className="wg-flex wg-h-12 wg-w-12 wg-items-center wg-justify-center wg-rounded-full wg-bg-gray-200 wg-text-gray-600">
        {iconKey.substring(2, 4).toUpperCase()}
      </div>
    )
  }

  const svgPath = icon.path
  const hex = icon.hex

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: '48px',
        height: '48px',
        fill: `#${hex}`,
      }}
    >
      <title>{icon.title}</title>
      <path d={svgPath} />
    </svg>
  )
}

// 기술 스택 아이콘으로 구 생성
const generateTechSpherePoints = (): RotatingSphereItem[] => {
  const items: RotatingSphereItem[] = []
  const goldenAngle = Math.PI * (3 - Math.sqrt(5))

  techIconKeys.forEach((iconKey, i) => {
    const y = 1 - (i / (techIconKeys.length - 1)) * 2
    const radius = Math.sqrt(1 - y * y)
    const theta = goldenAngle * i
    const x = Math.cos(theta) * radius
    const z = Math.sin(theta) * radius

    items.push({
      id: iconKey,
      content: renderSimpleIcon(iconKey),
      x,
      y,
      z,
    })
  })

  return items
}

export const TechStackIcons: Story = {
  args: {
    items: generateTechSpherePoints(),
    radius: 2,
    speed: 0.5,
    autoRotate: true,
  },
  render: (args) => (
    <div className="wg-h-[600px] wg-w-full">
      <div className="wg-mb-4 wg-text-center">
        <h3 className="wg-text-lg wg-font-semibold wg-text-gray-900 dark:wg-text-gray-100">
          Technology Stack Icons (wujieli.com style)
        </h3>
        <p className="wg-mt-2 wg-text-sm wg-text-gray-600 dark:wg-text-gray-400">
          {techIconKeys.length}개의 기술 스택 아이콘이 3D 구 형태로 회전합니다
        </p>
      </div>
      <RotatingSphere {...args} />
    </div>
  ),
}
