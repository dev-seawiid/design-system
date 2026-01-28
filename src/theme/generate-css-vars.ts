import { convertGradientHexToRgb, hexToRgb } from '@/utils/color'
import { Theme } from './tokens'

/**
 * CSS 변수 이름에 --wg- prefix 추가
 */
function cssVarName(name: string): string {
  return `--wg-${name}`
}

/**
 * ColorScale 객체를 CSS 변수로 변환
 */
function generateColorScaleVars(
  scale: Record<string | number, string> | { [key: number]: string; [key: string]: string },
  prefix: string
): string {
  return Object.entries(scale)
    .map(([key, value]) => {
      const rgb = hexToRgb(value)
      return `    ${cssVarName(`${prefix}-${key}`)}: ${rgb};`
    })
    .join('\n')
}

/**
 * 테마에서 CSS 변수 문자열 생성
 */
export function generateCssVars(theme: Theme): string {
  const { colors, gradients } = theme
  const lines: string[] = []

  // Primary Colors
  lines.push('    /* Primary Colors */')
  lines.push(
    generateColorScaleVars(
      colors.primary as unknown as Record<string | number, string>,
      'color-primary'
    )
  )

  // Secondary Colors
  lines.push('    /* Secondary Colors */')
  lines.push(
    generateColorScaleVars(
      colors.secondary as unknown as Record<string | number, string>,
      'color-secondary'
    )
  )

  // Tertiary Colors
  lines.push('    /* Tertiary Colors */')
  lines.push(
    generateColorScaleVars(
      colors.tertiary as unknown as Record<string | number, string>,
      'color-tertiary'
    )
  )

  // Accent Colors
  lines.push('    /* Accent Colors */')
  lines.push(
    generateColorScaleVars(
      colors.accent as unknown as Record<string | number, string>,
      'color-accent'
    )
  )

  // Success Colors
  lines.push('    /* Success Colors */')
  lines.push(generateColorScaleVars(colors.success, 'color-success'))

  // Warning Colors
  lines.push('    /* Warning Colors */')
  lines.push(generateColorScaleVars(colors.warning, 'color-warning'))

  // Error Colors
  lines.push('    /* Error Colors */')
  lines.push(generateColorScaleVars(colors.error, 'color-error'))

  // Info Colors
  lines.push('    /* Info Colors */')
  lines.push(generateColorScaleVars(colors.info, 'color-info'))

  // Neutral Colors
  lines.push('    /* Neutral Colors */')
  lines.push(
    generateColorScaleVars(
      colors.neutral as unknown as Record<string | number, string>,
      'color-neutral'
    )
  )

  // Semantic Colors
  lines.push('    /* Semantic Colors */')
  lines.push(`    ${cssVarName('color-background')}: ${hexToRgb(colors.background)};`)
  lines.push(`    ${cssVarName('color-foreground')}: ${hexToRgb(colors.foreground)};`)
  lines.push(`    ${cssVarName('color-muted')}: ${hexToRgb(colors.muted)};`)
  lines.push(
    `    ${cssVarName('color-muted-foreground')}: ${hexToRgb(colors['muted-foreground'])};`
  )
  lines.push(`    ${cssVarName('color-border')}: ${hexToRgb(colors.border)};`)
  lines.push(`    ${cssVarName('color-ring')}: ${hexToRgb(colors.ring)};`)

  // Gradients
  lines.push('    /* Gradient Colors */')
  Object.entries(gradients).forEach(([key, value]) => {
    // 그라데이션 내부의 HEX 색상을 RGB로 변환
    const gradientWithRgb = convertGradientHexToRgb(value)
    lines.push(`    ${cssVarName(`gradient-${key}`)}: ${gradientWithRgb};`)
  })

  return lines.join('\n')
}
