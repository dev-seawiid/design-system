import { Theme } from './tokens'

// 색상 팔레트: 이름 기반 정의 (algae 테마의 자연 색상)
const palette = {
  'shallow-beach': {
    50: '#f0fdfa', // 매우 연한 해초색 (청록)
    100: '#ccfbf1', // 연한 해초색
    200: '#99f6e4', // 밝은 해초색
    300: '#5eead4', // 중간 밝기 해초색
    400: '#2dd4bf', // 선명한 해초색
    500: '#14b8a6', // 메인 해초색
    600: '#0d9488', // 진한 해초색
    700: '#0f766e', // 더 진한 해초색
    800: '#115e59', // 매우 진한 해초색
    900: '#134e4a', // 가장 진한 해초색
  },
  algae: {
    50: '#ecfdf5', // 매우 연한 얕은 해변색 (밝은 청록/에메랄드)
    100: '#d1fae5', // 연한 얕은 해변색
    200: '#a7f3d0', // 밝은 얕은 해변색
    300: '#6ee7b7', // 중간 밝기 얕은 해변색
    400: '#34d399', // 선명한 얕은 해변색
    500: '#10b981', // 메인 얕은 해변색
    600: '#059669', // 진한 얕은 해변색
    700: '#047857', // 더 진한 얕은 해변색
    800: '#065f46', // 매우 진한 얕은 해변색
    900: '#064e3b', // 가장 진한 얕은 해변색
  },
  'deep-sea': {
    50: '#ecfeff', // 매우 연한 심해색 (시안)
    100: '#cffafe', // 연한 심해색
    200: '#a5f3fc', // 밝은 심해색
    300: '#67e8f9', // 중간 밝기 심해색
    400: '#22d3ee', // 선명한 심해색
    500: '#06b6d4', // 메인 심해색
    600: '#0891b2', // 진한 심해색
    700: '#0e7490', // 더 진한 심해색
    800: '#155e75', // 매우 진한 심해색
    900: '#164e63', // 가장 진한 심해색
  },
  sunset: {
    50: '#fef2f2', // 매우 연한 노을색 (붉은 계열)
    100: '#fee2e2', // 연한 노을색
    200: '#fecaca', // 밝은 노을색
    300: '#fca5a5', // 중간 밝기 노을색
    400: '#f87171', // 선명한 노을색
    500: '#ef4444', // 메인 노을색 (붉은 빨강)
    600: '#dc2626', // 진한 노을색
    700: '#b91c1c', // 더 진한 노을색
    800: '#991b1b', // 매우 진한 노을색
    900: '#7f1d1d', // 가장 진한 노을색
  },
  'golden-light': {
    50: '#fffbeb', // 매우 연한 황금빛
    100: '#fef3c7', // 연한 황금빛
    200: '#fde68a', // 밝은 황금빛
    300: '#fcd34d', // 중간 밝기 황금빛
    400: '#fbbf24', // 선명한 황금빛
    500: '#f59e0b', // 메인 황금빛
    600: '#d97706', // 진한 황금빛
    700: '#b45309', // 더 진한 황금빛
    800: '#92400e', // 매우 진한 황금빛
    900: '#78350f', // 가장 진한 황금빛
  },
  sand: {
    50: '#fefaf8', // 매우 연한 모래색
    100: '#fdf4f0', // 연한 모래색
    200: '#fae5d3', // 밝은 모래색
    300: '#f5d5b8', // 중간 밝기 모래색
    400: '#edc49a', // 선명한 모래색
    500: '#e4b17a', // 메인 모래색
    600: '#d49e5f', // 진한 모래색
    700: '#b8854a', // 더 진한 모래색
    800: '#9a6d3a', // 매우 진한 모래색
    900: '#7d5629', // 가장 진한 모래색
  },
  fog: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
}

export const lightTheme: Theme = {
  palette,
  // 역할 기반 색상: 팔레트에서 매핑
  colors: {
    // 브랜드 색상 매핑 (Color Definitions에서 조화롭게 선택)
    primary: palette['shallow-beach'], // 메인 브랜드 색상 - 청록색
    secondary: palette['deep-sea'], // Primary와 조화를 이루는 시안/블루
    tertiary: palette.sand, // 보조 색상 - 모래색 (바다 테마에 자연스러운 조화)
    accent: palette.sunset, // 강조 색상 - 붉은 계열 (대비)
    // 상태 색상 매핑 (팔레트에서 가져옴)
    success: {
      50: palette.algae[50],
      100: palette.algae[100],
      500: palette.algae[500],
      600: palette.algae[600],
      700: palette.algae[700],
    },
    warning: {
      50: palette['golden-light'][50],
      100: palette['golden-light'][100],
      500: palette['golden-light'][500],
      600: palette['golden-light'][600],
      700: palette['golden-light'][700],
    },
    error: {
      50: palette.sunset[50],
      100: palette.sunset[100],
      500: palette.sunset[500],
      600: palette.sunset[600],
      700: palette.sunset[700],
    },
    info: {
      50: palette['deep-sea'][50],
      100: palette['deep-sea'][100],
      500: palette['deep-sea'][500],
      600: palette['deep-sea'][600],
      700: palette['deep-sea'][700],
    },
    neutral: palette.fog,
    // Semantic Colors (팔레트에서 가져옴)
    background: '#ffffff',
    foreground: palette['shallow-beach'][900], // shallow-beach 900
    muted: palette['shallow-beach'][50], // shallow-beach 50
    'muted-foreground': palette['shallow-beach'][700], // shallow-beach 700
    border: palette['shallow-beach'][100], // shallow-beach 100
    ring: palette['shallow-beach'][500], // shallow-beach 500
  },
  gradients: {
    // Color Definitions 직접 조합 그라데이션
    'shallow-beach-to-deep-sea': `linear-gradient(135deg, ${palette['shallow-beach'][500]} 0%, ${palette['deep-sea'][500]} 100%)`,
    'shallow-beach-to-algae': `linear-gradient(135deg, ${palette['shallow-beach'][500]} 0%, ${palette.algae[500]} 100%)`,
    'shallow-beach-to-sand': `linear-gradient(135deg, ${palette['shallow-beach'][500]} 0%, ${palette.sand[500]} 100%)`,
    'shallow-beach-to-sunset': `linear-gradient(135deg, ${palette['shallow-beach'][500]} 0%, ${palette.sunset[500]} 100%)`,
    'shallow-beach-to-golden-light': `linear-gradient(135deg, ${palette['shallow-beach'][500]} 0%, ${palette['golden-light'][500]} 100%)`,
    'deep-sea-to-shallow-beach': `linear-gradient(135deg, ${palette['deep-sea'][500]} 0%, ${palette['shallow-beach'][500]} 100%)`,
    'deep-sea-to-algae': `linear-gradient(135deg, ${palette['deep-sea'][500]} 0%, ${palette.algae[500]} 100%)`,
    'deep-sea-to-sand': `linear-gradient(135deg, ${palette['deep-sea'][500]} 0%, ${palette.sand[500]} 100%)`,
    'deep-sea-to-sunset': `linear-gradient(135deg, ${palette['deep-sea'][500]} 0%, ${palette.sunset[500]} 100%)`,
    'deep-sea-to-golden-light': `linear-gradient(135deg, ${palette['deep-sea'][500]} 0%, ${palette['golden-light'][500]} 100%)`,
    'algae-to-shallow-beach': `linear-gradient(135deg, ${palette.algae[500]} 0%, ${palette['shallow-beach'][500]} 100%)`,
    'algae-to-deep-sea': `linear-gradient(135deg, ${palette.algae[500]} 0%, ${palette['deep-sea'][500]} 100%)`,
    'algae-to-sand': `linear-gradient(135deg, ${palette.algae[500]} 0%, ${palette.sand[500]} 100%)`,
    'algae-to-sunset': `linear-gradient(135deg, ${palette.algae[500]} 0%, ${palette.sunset[500]} 100%)`,
    'algae-to-golden-light': `linear-gradient(135deg, ${palette.algae[500]} 0%, ${palette['golden-light'][500]} 100%)`,
    'sand-to-shallow-beach': `linear-gradient(135deg, ${palette.sand[500]} 0%, ${palette['shallow-beach'][500]} 100%)`,
    'sand-to-deep-sea': `linear-gradient(135deg, ${palette.sand[500]} 0%, ${palette['deep-sea'][500]} 100%)`,
    'sand-to-algae': `linear-gradient(135deg, ${palette.sand[500]} 0%, ${palette.algae[500]} 100%)`,
    'sand-to-sunset': `linear-gradient(135deg, ${palette.sand[500]} 0%, ${palette.sunset[500]} 100%)`,
    'sand-to-golden-light': `linear-gradient(135deg, ${palette.sand[500]} 0%, ${palette['golden-light'][500]} 100%)`,
    'sunset-to-shallow-beach': `linear-gradient(135deg, ${palette.sunset[500]} 0%, ${palette['shallow-beach'][500]} 100%)`,
    'sunset-to-deep-sea': `linear-gradient(135deg, ${palette.sunset[500]} 0%, ${palette['deep-sea'][500]} 100%)`,
    'sunset-to-algae': `linear-gradient(135deg, ${palette.sunset[500]} 0%, ${palette.algae[500]} 100%)`,
    'sunset-to-sand': `linear-gradient(135deg, ${palette.sunset[500]} 0%, ${palette.sand[500]} 100%)`,
    'sunset-to-golden-light': `linear-gradient(135deg, ${palette.sunset[500]} 0%, ${palette['golden-light'][500]} 100%)`,
    'golden-light-to-shallow-beach': `linear-gradient(135deg, ${palette['golden-light'][500]} 0%, ${palette['shallow-beach'][500]} 100%)`,
    'golden-light-to-deep-sea': `linear-gradient(135deg, ${palette['golden-light'][500]} 0%, ${palette['deep-sea'][500]} 100%)`,
    'golden-light-to-algae': `linear-gradient(135deg, ${palette['golden-light'][500]} 0%, ${palette.algae[500]} 100%)`,
    'golden-light-to-sand': `linear-gradient(135deg, ${palette['golden-light'][500]} 0%, ${palette.sand[500]} 100%)`,
    'golden-light-to-sunset': `linear-gradient(135deg, ${palette['golden-light'][500]} 0%, ${palette.sunset[500]} 100%)`,
  },
  spacing: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',
    40: '160px',
    48: '192px',
    64: '256px',
  },
  typography: {
    fontFamily: {
      sans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  border: {
    radius: {
      none: '0px',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      full: '9999px',
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
  },
  shadow: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
}
