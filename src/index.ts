// css를 dist에 포함시키기 위해 추가
import './styles/globals.css' // 이 한 줄이 있으면 Vite가 빌드 시 dist에 CSS를 뱉습니다.

// Components
export { Avatar, type AvatarProps } from './components/avatar'
export { Badge, type BadgeProps } from './components/badge'
export {
  GithubContributions,
  type GithubContributionsProps,
} from './components/github-contributions'
export { ParallaxTags, type ParallaxTagsProps } from './components/parallax-tags'
export { PostCard, type PostCardProps } from './components/post-card'
export { ProfileCard, type ProfileCardInfo, type ProfileCardProps } from './components/profile-card'
export { ProjectCard, type ProjectCardProps, type ProjectTag } from './components/project-card'
export {
  RotatingSphere,
  type RotatingSphereItem,
  type RotatingSphereProps,
} from './components/rotating-sphere'
export {
  SpotifyLastPlayed,
  type SpotifyLastPlayedProps,
  type SpotifyTrack,
} from './components/spotify-last-played'
export { SpotifyNowPlaying, type SpotifyNowPlayingProps } from './components/spotify-now-playing'
export { TypingText, type TypingTextProps } from './components/typing-text'

// Theme
export {
  darkTheme,
  lightTheme,
  type ColorTokens,
  type SpacingTokens,
  type Theme,
  type TypographyTokens,
} from './theme'
