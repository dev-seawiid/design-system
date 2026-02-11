import type { Meta, StoryObj } from '@storybook/react'
import { SpotifyNowPlaying } from './SpotifyNowPlaying'

const meta: Meta<typeof SpotifyNowPlaying> = {
  title: 'Media/SpotifyNowPlaying',
  component: SpotifyNowPlaying,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '현재 재생 중인 Spotify 트랙을 표시하는 컴포넌트입니다. leohuynh.dev의 Spotify 통합을 참고했습니다.',
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

const defaultSong = {
  title: 'Letter To Teo',
  artist: 'seawiid',
  songUrl: 'https://open.spotify.com/track/40KI0wagmeuyHxBALolhDL',
  albumImageUrl: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a20c45c816b0670f30c01ae5',
}

export const Playing: Story = {
  args: {
    isPlaying: true,
    song: defaultSong,
  },
}

export const WithCover: Story = {
  args: {
    isPlaying: true,
    showCover: true,
    song: {
      ...defaultSong,
      albumImageUrl:
        'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e02a20c45c816b0670f30c01ae5',
    },
  },
}
