export interface ColorScale {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
}

/**
 * 색상 팔레트: 색상 이름 기반 정의
 * algae 테마의 자연 색상을 표현하는 팔레트
 */
export interface ColorPalette {
  'shallow-beach': ColorScale // 해초 색상 - 청록색 계열
  algae: ColorScale // 얕은 해변 색상 - 밝은 청록/에메랄드 계열
  'deep-sea': ColorScale // 심해 색상 - 진한 시안/블루 계열
  sunset: ColorScale // 노을 - 붉은 계열 (빨강/오렌지/핑크)
  'golden-light': ColorScale // 황금빛 - 따뜻한 노란/오렌지 계열
  sand: ColorScale // 모래 색상 - 따뜻한 베이지/크림 계열
  fog: ColorScale // 안개 색상 - 중립 회색
}

/**
 * 역할 기반 색상 토큰: 색상 팔레트를 역할에 매핑
 */
export interface ColorTokens {
  // 브랜드 색상 (색상 팔레트에서 매핑)
  primary: ColorScale // shallow-beach → primary
  secondary: ColorScale // algae → secondary
  tertiary: ColorScale // deep-ocean → tertiary
  accent: ColorScale // sunset → accent
  // 상태 색상 (색상 팔레트에서 매핑)
  success: {
    50: string
    100: string
    500: string
    600: string
    700: string
  }
  warning: {
    50: string
    100: string
    500: string
    600: string
    700: string
  }
  error: {
    50: string
    100: string
    500: string
    600: string
    700: string
  }
  info: {
    50: string
    100: string
    500: string
    600: string
    700: string
  }
  // 중립 색상
  neutral: ColorScale
  background: string
  foreground: string
  muted: string
  'muted-foreground': string
  border: string
  ring: string
}

export interface GradientTokens {
  // Color Definitions 직접 조합 그라데이션 (양방향 포함)
  'shallow-beach-to-deep-sea': string
  'shallow-beach-to-algae': string
  'shallow-beach-to-sand': string
  'shallow-beach-to-sunset': string
  'shallow-beach-to-golden-light': string
  'deep-sea-to-shallow-beach': string
  'deep-sea-to-algae': string
  'deep-sea-to-sand': string
  'deep-sea-to-sunset': string
  'deep-sea-to-golden-light': string
  'algae-to-shallow-beach': string
  'algae-to-deep-sea': string
  'algae-to-sand': string
  'algae-to-sunset': string
  'algae-to-golden-light': string
  'sand-to-shallow-beach': string
  'sand-to-deep-sea': string
  'sand-to-algae': string
  'sand-to-sunset': string
  'sand-to-golden-light': string
  'sunset-to-shallow-beach': string
  'sunset-to-deep-sea': string
  'sunset-to-algae': string
  'sunset-to-sand': string
  'sunset-to-golden-light': string
  'golden-light-to-shallow-beach': string
  'golden-light-to-deep-sea': string
  'golden-light-to-algae': string
  'golden-light-to-sand': string
  'golden-light-to-sunset': string
}

export interface SpacingTokens {
  0: string
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  8: string
  10: string
  12: string
  16: string
  20: string
  24: string
  32: string
  40: string
  48: string
  64: string
}

export interface TypographyTokens {
  fontFamily: {
    sans: string
    mono: string
  }
  fontSize: {
    xs: string
    sm: string
    base: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
    '4xl': string
  }
  lineHeight: {
    tight: string
    normal: string
    relaxed: string
  }
  fontWeight: {
    normal: number
    medium: number
    semibold: number
    bold: number
  }
}

export interface BorderTokens {
  radius: {
    none: string
    sm: string
    md: string
    lg: string
    xl: string
    full: string
  }
  width: {
    thin: string
    medium: string
    thick: string
  }
}

export interface ShadowTokens {
  sm: string
  md: string
  lg: string
  xl: string
}

export interface Theme {
  palette: ColorPalette // 색상 팔레트 (이름 기반)
  colors: ColorTokens // 역할 기반 색상 (팔레트에서 매핑)
  gradients: GradientTokens
  spacing: SpacingTokens
  typography: TypographyTokens
  border: BorderTokens
  shadow: ShadowTokens
}

