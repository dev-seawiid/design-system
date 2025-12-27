import type { Meta, StoryObj } from '@storybook/react'
import { GithubContributions } from './GithubContributions'

const meta: Meta<typeof GithubContributions> = {
  title: 'Media/GithubContributions',
  component: GithubContributions,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'GitHub contribution graph (잔디밭)을 표시하는 컴포넌트입니다. react-github-calendar 라이브러리를 사용합니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    username: {
      control: 'text',
      description: 'GitHub username',
    },
    year: {
      control: 'text',
      description: 'Year to display (number or "last")',
    },
    colorScheme: {
      control: 'select',
      options: ['light', 'dark', 'auto'],
      description: 'Color scheme',
    },
  },
}

export default meta
type Story = StoryObj<typeof GithubContributions>

export const Default: Story = {
  args: {
    username: 'dev-seawiid',
    year: 'last',
    colorScheme: 'auto',
  },
}

export const CurrentYear: Story = {
  args: {
    username: 'dev-seawiid',
    year: new Date().getFullYear(),
    colorScheme: 'auto',
  },
}

export const WithCustomProps: Story = {
  args: {
    username: 'dev-seawiid',
    year: 'last',
    colorScheme: 'auto',
    calendarProps: {
      blockSize: 14,
      blockMargin: 4,
      fontSize: 14,
    },
  },
}

export const LightMode: Story = {
  args: {
    username: 'dev-seawiid',
    year: 'last',
    colorScheme: 'light',
  },
}

export const DarkMode: Story = {
  args: {
    username: 'dev-seawiid',
    year: 'last',
    colorScheme: 'dark',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
}

