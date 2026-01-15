import { Theme } from './tokens'

/**
 * ColorScale을 Tailwind config 형식으로 변환
 * 투명도 지원을 위해 rgb() 형식과 <alpha-value> 플레이스홀더 사용
 *
 * @example
 * // 생성되는 형식:
 * // primary: {
 * //   '500': 'rgb(var(--wg-color-primary-500) / <alpha-value>)'
 * // }
 *
 * // 사용 예시:
 * // <div className="wg-bg-primary-500" />           // 불투명
 * // <div className="wg-bg-primary-500/50" />        // 50% 투명도
 * // <div className="wg-bg-primary-500/0.5" />       // 0.5 투명도
 * // <div className="wg-text-primary-500/75" />      // 75% 투명도
 */
function generateColorScaleConfig(
  scale: Record<string | number, string> | { [key: number]: string; [key: string]: string },
  prefix: string
) {
  const config: Record<string, string> = {}
  Object.entries(scale).forEach(([key]) => {
    // rgb(var(--wg-color-primary-500) / <alpha-value>) 형식으로 설정
    // Tailwind가 wg-bg-primary-500/50 같은 클래스를 rgba로 변환할 수 있게 함
    // <alpha-value>는 Tailwind가 런타임에 투명도 값으로 치환함
    config[key] = `rgb(var(--wg-${prefix}-${key}) / <alpha-value>)`
  })
  return config
}

/**
 * 테마에서 Tailwind config의 colors 섹션 생성
 *
 * @example
 * // 사용 예시:
 * // <div className="wg-bg-primary-500/50" />        // 50% 투명도
 * // <div className="wg-bg-background/80" />          // 배경색 80% 투명도
 * // <div className="wg-border-border/30" />           // 테두리 30% 투명도
 * // <div className="wg-text-foreground/90" />        // 텍스트 90% 투명도
 *
 * @note
 * 타입 캐스팅 (as unknown as Record<...>) 사용 이유:
 * - Theme 인터페이스의 ColorScale 타입이 Record<string, string>과 구조적으로는 동일하나
 *   TypeScript의 구조적 타이핑 제약으로 인해 명시적 캐스팅 필요
 * - 개선 방향: Theme 인터페이스를 더 평탄한 구조로 리팩토링하면 캐스팅 제거 가능
 */
export function generateTailwindColors(theme: Theme) {
  const { colors } = theme

  return {
    // ColorScale 색상들 (투명도 지원)
    primary: generateColorScaleConfig(
      colors.primary as unknown as Record<string | number, string>,
      'color-primary'
    ),
    secondary: generateColorScaleConfig(
      colors.secondary as unknown as Record<string | number, string>,
      'color-secondary'
    ),
    tertiary: generateColorScaleConfig(
      colors.tertiary as unknown as Record<string | number, string>,
      'color-tertiary'
    ),
    accent: generateColorScaleConfig(
      colors.accent as unknown as Record<string | number, string>,
      'color-accent'
    ),
    success: generateColorScaleConfig(colors.success, 'color-success'),
    warning: generateColorScaleConfig(colors.warning, 'color-warning'),
    error: generateColorScaleConfig(colors.error, 'color-error'),
    info: generateColorScaleConfig(colors.info, 'color-info'),
    neutral: generateColorScaleConfig(
      colors.neutral as unknown as Record<string | number, string>,
      'color-neutral'
    ),
    // 단일 색상들 (투명도 지원)
    background: 'rgb(var(--wg-color-background) / <alpha-value>)',
    foreground: 'rgb(var(--wg-color-foreground) / <alpha-value>)',
    muted: {
      DEFAULT: 'rgb(var(--wg-color-muted) / <alpha-value>)',
      foreground: 'rgb(var(--wg-color-muted-foreground) / <alpha-value>)',
    },
    border: 'rgb(var(--wg-color-border) / <alpha-value>)',
    ring: 'rgb(var(--wg-color-ring) / <alpha-value>)',
  }
}

/**
 * 테마에서 Tailwind config의 spacing 섹션 생성
 */
export function generateTailwindSpacing(theme: Theme) {
  const { spacing } = theme
  const config: Record<string, string> = {}
  Object.entries(spacing).forEach(([key]) => {
    config[key] = `var(--wg-spacing-${key})`
  })
  return config
}

/**
 * 테마에서 Tailwind config의 borderRadius 섹션 생성
 */
export function generateTailwindBorderRadius(theme: Theme) {
  const { border } = theme
  const config: Record<string, string> = {}
  Object.entries(border.radius).forEach(([key]) => {
    const varKey = key === 'DEFAULT' ? 'md' : key
    config[varKey === 'md' ? 'DEFAULT' : varKey] = `var(--wg-border-radius-${varKey})`
  })
  return config
}

/**
 * 테마에서 Tailwind config의 boxShadow 섹션 생성
 */
export function generateTailwindBoxShadow(theme: Theme) {
  const { shadow } = theme
  const config: Record<string, string> = {}
  Object.entries(shadow).forEach(([key]) => {
    const varKey = key === 'DEFAULT' ? 'md' : key
    config[varKey === 'md' ? 'DEFAULT' : varKey] = `var(--wg-shadow-${varKey})`
  })
  return config
}

/**
 * 테마에서 Tailwind config의 backgroundImage 섹션 생성
 * 그라데이션을 Tailwind 유틸리티 클래스로 사용할 수 있게 함
 *
 * @example
 * // 사용 예시 (wg- prefix 사용):
 * // <div className="wg-bg-shallow-beach-to-deep-sea" />
 * // <div className="wg-bg-shallow-beach-to-algae" />
 * // <div className="wg-bg-sunset-to-golden-light" />
 *
 * // Tailwind의 backgroundImage는 bg- prefix를 사용하므로
 * // wg- prefix와 결합하여 wg-bg-{gradient-name} 형태로 사용
 */
export function generateTailwindBackgroundImage(theme: Theme) {
  const { gradients } = theme
  const config: Record<string, string> = {}

  Object.entries(gradients).forEach(([key]) => {
    // CSS 변수를 참조하여 그라데이션 사용
    // wg-bg-shallow-beach-to-deep-sea 같은 클래스로 사용 가능
    config[key] = `var(--wg-gradient-${key})`
  })

  return config
}
