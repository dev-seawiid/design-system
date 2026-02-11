import type { Meta, StoryObj } from '@storybook/react'
import { ProfileCard } from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
  title: 'Cards/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '프로필 정보를 표시하는 카드 컴포넌트입니다. leohuynh.dev의 프로필 카드 디자인을 참고했습니다. **imageSlot**은 필수 prop이며, Next에서는 next/image를 전달할 수 있습니다. 헤더 이미지가 없으면 `imageSlot={null}`을 넘깁니다.',
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
    imageSlot: null,
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
        title: 'Letter To Teo',
        artist: 'seawiid',
        songUrl: 'https://open.spotify.com/track/40KI0wagmeuyHxBALolhDL',
        albumImageUrl:
          'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a20c45c816b0670f30c01ae5',
      },
    },
    imageSlot: (
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=550&h=350&fit=crop"
        alt="Profile header"
        className="h-full w-full object-cover"
        style={{ objectPosition: '50% 15%' }}
      />
    ),
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
    imageSlot: (
      <img
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=550&h=350&fit=crop"
        alt="Profile header"
        className="h-full w-full object-cover"
        style={{ objectPosition: '50% 15%' }}
      />
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '550px', margin: '0 auto' }}>
        <Story />
      </div>
    ),
  ],
}

