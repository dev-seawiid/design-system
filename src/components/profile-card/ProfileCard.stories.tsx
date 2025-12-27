import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'Cards/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '프로필 정보를 표시하는 카드 컴포넌트입니다. leohuynh.dev의 프로필 카드 디자인을 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ProfileCard>

const defaultInfo = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  bio: 'Passionate about building beautiful and functional web applications.',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com', icon: '🔗' },
    { label: 'Twitter', href: 'https://twitter.com', icon: '🔗' },
  ],
}

export const Default: Story = {
  args: {
    info: defaultInfo,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '550px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithSpotify: Story = {
  args: {
    info: defaultInfo,
    spotify: {
      isPlaying: true,
      song: {
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        songUrl: 'https://open.spotify.com/track/0VjIjW4GlUZ9YafZejv2bQ',
      },
    },
    image: {
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=550&h=350&fit=crop',
      alt: 'Profile header',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '550px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

export const WithoutSpotify: Story = {
  args: {
    info: defaultInfo,
    spotify: {
      isPlaying: false,
    },
    image: {
      src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=550&h=350&fit=crop',
      alt: 'Profile header',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '550px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

