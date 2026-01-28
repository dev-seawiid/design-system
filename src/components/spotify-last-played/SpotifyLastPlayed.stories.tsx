import type { Meta, StoryObj } from '@storybook/react'
import { SpotifyLastPlayed } from './SpotifyLastPlayed'

const meta: Meta<typeof SpotifyLastPlayed> = {
  title: 'Media/SpotifyLastPlayed',
  component: SpotifyLastPlayed,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '현재 재생 중이거나 최근 재생한 Spotify 트랙을 표시하는 컴포넌트입니다. leohuynh.dev의 "Side quests and activities" 섹션의 LastPlayed 컴포넌트를 참고했습니다.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof SpotifyLastPlayed>

// Using placeholder images that are more reliable
const sampleTrack = {
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  albumImageUrl:
    'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  songUrl: 'https://open.spotify.com/track/0VjIjW4GlUZ9YafZejv2bQ',
  playedAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(), // 30 minutes ago
}

export const CurrentlyPlaying: Story = {
  args: {
    track: sampleTrack,
    isPlaying: true,
  },
}

export const LastPlayed: Story = {
  args: {
    track: {
      ...sampleTrack,
      playedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    },
    isPlaying: false,
  },
}

export const WithoutExternalLink: Story = {
  args: {
    track: sampleTrack,
    isPlaying: false,
    showExternalLink: false,
  },
}

export const CustomExternalLink: Story = {
  args: {
    track: sampleTrack,
    isPlaying: false,
    externalLinkUrl: 'https://open.spotify.com/user/custom',
  },
}

export const InActivitiesSection: Story = {
  render: () => (
    <div className="space-y-4 md:space-y-8 pt-8">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold sm:text-2xl sm:leading-10 md:text-4xl">
          Side quests and activities
        </h3>
      </div>
      <div className="border-t border-neutral-200 dark:border-neutral-700" />
      <div className="pt-2 md:pt-0 space-y-6">
        <SpotifyLastPlayed
          track={{
            title: 'As It Was',
            artist: 'Harry Styles',
            albumImageUrl:
              'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
            songUrl: 'https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7',
          }}
          isPlaying={true}
        />
      </div>
    </div>
  ),
}
