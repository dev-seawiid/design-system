import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from './Avatar'

const meta: Meta<typeof Avatar> = {
  title: 'Foundation/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '사용자 프로필 이미지를 표시하는 아바타 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    fallback: 'JD',
  },
}

export const WithImage: Story = {
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    alt: 'John Doe',
    fallback: 'JD',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="wg-flex wg-items-center wg-gap-4">
      <Avatar size="sm" fallback="S" />
      <Avatar size="md" fallback="M" />
      <Avatar size="lg" fallback="L" />
      <Avatar size="xl" fallback="XL" />
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div className="wg-flex wg-items-center wg-gap-4">
      <Avatar shape="circle" fallback="C" />
      <Avatar shape="square" fallback="S" />
    </div>
  ),
}

export const WithFallback: Story = {
  render: () => (
    <div className="wg-flex wg-items-center wg-gap-4">
      <Avatar fallback="JD" />
      <Avatar fallback="AB" />
      <Avatar fallback="CD" />
    </div>
  ),
}
