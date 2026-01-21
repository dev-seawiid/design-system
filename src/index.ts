// css를 dist에 포함시키기 위해 추가
import './styles/globals.css' // 이 한 줄이 있으면 Vite가 빌드 시 dist에 CSS를 뱉습니다.

// Components
export { Avatar, type AvatarProps } from './components/avatar'
export { Badge, type BadgeProps } from './components/badge'
// GithubContributions는 optional dependency를 사용하므로 별도 export 경로로 분리
// 타입만 메인에서 export (타입은 번들에 포함되지 않음)
export type { GithubContributionsProps } from './components/github-contributions'
// 컴포넌트는 '@wiid-get/design-system/github-contributions'에서 import
export { ParallaxTags, type ParallaxTagsProps } from './components/parallax-tags'
export { PostCard, type PostCardProps } from './components/post-card'
export { ProfileCard, type ProfileCardInfo, type ProfileCardProps } from './components/profile-card'
export { ProjectCard, type ProjectCardProps, type ProjectTag } from './components/project-card'
// RotatingSphere는 optional dependency를 사용하므로 별도 export 경로로 분리
// 타입만 메인에서 export (타입은 번들에 포함되지 않음)
export type { RotatingSphereItem, RotatingSphereProps } from './components/rotating-sphere'
// 컴포넌트는 '@wiid-get/design-system/rotating-sphere'에서 import
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
