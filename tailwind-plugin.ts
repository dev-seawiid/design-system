import plugin from 'tailwindcss/plugin'
import { lightTheme } from './src/theme/light'
import type { Theme } from './src/theme/tokens'
import { convertGradientHexToRgb, hexToRgb } from './src/utils/color'

/**
 * CSS 변수 이름에 --wg- prefix 추가
 */
function cssVarName(name: string): string {
  return `--wg-${name}`
}

/**
 * ColorScale 객체를 CSS 변수 객체로 변환
 */
function generateColorScaleVarsObject(
  scale: Record<string | number, string> | { [key: number]: string; [key: string]: string },
  prefix: string
): Record<string, string> {
  const vars: Record<string, string> = {}
  Object.entries(scale).forEach(([key, value]) => {
    const rgb = hexToRgb(value)
    vars[cssVarName(`${prefix}-${key}`)] = rgb
  })
  return vars
}

/**
 * 테마에서 CSS 변수 객체 생성
 */
function generateCssVarsObject(theme: Theme): Record<string, string> {
  const { colors, gradients } = theme
  const vars: Record<string, string> = {}

  // Primary Colors
  Object.assign(
    vars,
    generateColorScaleVarsObject(
      colors.primary as unknown as Record<string | number, string>,
      'color-primary'
    )
  )

  // Secondary Colors
  Object.assign(
    vars,
    generateColorScaleVarsObject(
      colors.secondary as unknown as Record<string | number, string>,
      'color-secondary'
    )
  )

  // Tertiary Colors
  Object.assign(
    vars,
    generateColorScaleVarsObject(
      colors.tertiary as unknown as Record<string | number, string>,
      'color-tertiary'
    )
  )

  // Accent Colors
  Object.assign(
    vars,
    generateColorScaleVarsObject(
      colors.accent as unknown as Record<string | number, string>,
      'color-accent'
    )
  )

  // Success Colors
  Object.assign(vars, generateColorScaleVarsObject(colors.success, 'color-success'))

  // Warning Colors
  Object.assign(vars, generateColorScaleVarsObject(colors.warning, 'color-warning'))

  // Error Colors
  Object.assign(vars, generateColorScaleVarsObject(colors.error, 'color-error'))

  // Info Colors
  Object.assign(vars, generateColorScaleVarsObject(colors.info, 'color-info'))

  // Neutral Colors
  Object.assign(
    vars,
    generateColorScaleVarsObject(
      colors.neutral as unknown as Record<string | number, string>,
      'color-neutral'
    )
  )

  // Semantic Colors
  vars[cssVarName('color-background')] = hexToRgb(colors.background)
  vars[cssVarName('color-foreground')] = hexToRgb(colors.foreground)
  vars[cssVarName('color-muted')] = hexToRgb(colors.muted)
  vars[cssVarName('color-muted-foreground')] = hexToRgb(colors['muted-foreground'])
  vars[cssVarName('color-border')] = hexToRgb(colors.border)
  vars[cssVarName('color-ring')] = hexToRgb(colors.ring)

  // Gradients
  Object.entries(gradients).forEach(([key, value]) => {
    const gradientWithRgb = convertGradientHexToRgb(value)
    vars[cssVarName(`gradient-${key}`)] = gradientWithRgb
  })

  return vars
}

/**
 * Tailwind plugin that injects CSS variables into :root
 * This allows the preset to reference CSS variables without requiring a separate CSS file
 */
export default plugin(({ addBase }) => {
  const cssVars = generateCssVarsObject(lightTheme)

  addBase({
    ':root': cssVars,
  })
})
