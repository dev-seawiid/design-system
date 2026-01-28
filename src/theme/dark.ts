import { Theme } from './tokens'

// 색상 팔레트: 이름 기반 정의 (dark에 맞게 반전)
const palette = {
  'shallow-beach': {
    50: '#134e4a', // 가장 진한 해초색 (light의 900)
    100: '#115e59', // 매우 진한 해초색 (light의 800)
    200: '#0f766e', // 더 진한 해초색 (light의 700)
    300: '#0d9488', // 진한 해초색 (light의 600)
    400: '#14b8a6', // 메인 해초색 (light의 500)
    500: '#2dd4bf', // 선명한 해초색 (light의 400)
    600: '#5eead4', // 중간 밝기 해초색 (light의 300)
    700: '#99f6e4', // 밝은 해초색 (light의 200)
    800: '#ccfbf1', // 연한 해초색 (light의 100)
    900: '#f0fdfa', // 매우 연한 해초색 (light의 50)
  },
  algae: {
    50: '#064e3b', // 가장 진한 얕은 해변색 (light의 900)
    100: '#065f46', // 매우 진한 얕은 해변색 (light의 800)
    200: '#047857', // 더 진한 얕은 해변색 (light의 700)
    300: '#059669', // 진한 얕은 해변색 (light의 600)
    400: '#10b981', // 메인 얕은 해변색 (light의 500)
    500: '#34d399', // 선명한 얕은 해변색 (light의 400)
    600: '#6ee7b7', // 중간 밝기 얕은 해변색 (light의 300)
    700: '#a7f3d0', // 밝은 얕은 해변색 (light의 200)
    800: '#d1fae5', // 연한 얕은 해변색 (light의 100)
    900: '#ecfdf5', // 매우 연한 얕은 해변색 (light의 50)
  },
  'deep-sea': {
    50: '#164e63', // 가장 진한 심해색 (light의 900)
    100: '#155e75', // 매우 진한 심해색 (light의 800)
    200: '#0e7490', // 더 진한 심해색 (light의 700)
    300: '#0891b2', // 진한 심해색 (light의 600)
    400: '#06b6d4', // 메인 심해색 (light의 500)
    500: '#22d3ee', // 선명한 심해색 (light의 400)
    600: '#67e8f9', // 중간 밝기 심해색 (light의 300)
    700: '#a5f3fc', // 밝은 심해색 (light의 200)
    800: '#cffafe', // 연한 심해색 (light의 100)
    900: '#ecfeff', // 매우 연한 심해색 (light의 50)
  },
  sunset: {
    50: '#7f1d1d', // 가장 진한 노을색 (light의 900)
    100: '#991b1b', // 매우 진한 노을색 (light의 800)
    200: '#b91c1c', // 더 진한 노을색 (light의 700)
    300: '#dc2626', // 진한 노을색 (light의 600)
    400: '#ef4444', // 메인 노을색 (light의 500)
    500: '#f87171', // 선명한 노을색 (light의 400)
    600: '#fca5a5', // 중간 밝기 노을색 (light의 300)
    700: '#fecaca', // 밝은 노을색 (light의 200)
    800: '#fee2e2', // 연한 노을색 (light의 100)
    900: '#fef2f2', // 매우 연한 노을색 (light의 50)
  },
  'golden-light': {
    50: '#78350f', // 가장 진한 황금빛 (light의 900)
    100: '#92400e', // 매우 진한 황금빛 (light의 800)
    200: '#b45309', // 더 진한 황금빛 (light의 700)
    300: '#d97706', // 진한 황금빛 (light의 600)
    400: '#f59e0b', // 메인 황금빛 (light의 500)
    500: '#fbbf24', // 선명한 황금빛 (light의 400)
    600: '#fcd34d', // 중간 밝기 황금빛 (light의 300)
    700: '#fde68a', // 밝은 황금빛 (light의 200)
    800: '#fef3c7', // 연한 황금빛 (light의 100)
    900: '#fffbeb', // 매우 연한 황금빛 (light의 50)
  },
  sand: {
    50: '#7d5629', // 가장 진한 모래색 (light의 900)
    100: '#9a6d3a', // 매우 진한 모래색 (light의 800)
    200: '#b8854a', // 더 진한 모래색 (light의 700)
    300: '#d49e5f', // 진한 모래색 (light의 600)
    400: '#e4b17a', // 메인 모래색 (light의 500)
    500: '#edc49a', // 선명한 모래색 (light의 400)
    600: '#f5d5b8', // 중간 밝기 모래색 (light의 300)
    700: '#fae5d3', // 밝은 모래색 (light의 200)
    800: '#fdf4f0', // 연한 모래색 (light의 100)
    900: '#fefaf8', // 매우 연한 모래색 (light의 50)
  },
  fog: {
    50: '#171717',
    100: '#262626',
    200: '#404040',
    300: '#525252',
    400: '#737373',
    500: '#a3a3a3',
    600: '#d4d4d4',
    700: '#e5e5e5',
    800: '#f5f5f5',
    900: '#fafafa',
  },
}

export const darkTheme: Theme = {
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
    background: '#171717',
    foreground: palette['shallow-beach'][900], // shallow-beach 900
    muted: palette.fog[50], // fog 50
    'muted-foreground': palette.fog[700], // fog 700
    border: palette.fog[200], // fog 200
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
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.4)',
  },
}
