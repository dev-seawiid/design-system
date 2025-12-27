import type { Meta, StoryObj } from '@storybook/react'
import { SpotifyNowPlaying } from './SpotifyNowPlaying'

const meta: Meta<typeof SpotifyNowPlaying> = {
  title: 'Media/SpotifyNowPlaying',
  component: SpotifyNowPlaying,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '현재 재생 중인 Spotify 트랙을 표시하는 컴포넌트입니다. leohuynh.dev의 Spotify 통합을 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpotifyNowPlaying>

export const NotPlaying: Story = {
  args: {
    isPlaying: false,
  },
}

export const Playing: Story = {
  args: {
    isPlaying: true,
    song: {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      songUrl: 'https://open.spotify.com/track/0VjIjW4GlUZ9YafZejv2bQ',
      albumImageUrl: 'https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb26',
    },
  },
}

export const WithCover: Story = {
  args: {
    isPlaying: true,
    showCover: true,
    song: {
      title: 'As It Was',
      artist: 'Harry Styles',
      songUrl: 'https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7',
      albumImageUrl: 'https://i.scdn.co/image/ab67616d0000b2732e8c3b3c4b5e6f7a8b9c0d1e',
    },
  },
}

