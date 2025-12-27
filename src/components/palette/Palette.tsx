import { darkTheme, lightTheme } from '@/theme'
import { cn } from '@/utils/cn'

interface PaletteProps {
  theme?: 'light' | 'dark'
  className?: string
  title?: string
  description?: string
  children?: React.ReactNode
}

export function Palette({
  theme = 'light',
  className,
  title,
  description,
  children,
}: PaletteProps) {
  const currentTheme = theme === 'light' ? lightTheme : darkTheme
  const colors = currentTheme.colors

  return (
    <div
      className={cn(
        'wg-p-6 wg-rounded-lg wg-border wg-border-border',
        theme === 'light' ? 'wg-bg-white' : 'wg-bg-gray-900',
        className
      )}
      data-theme={theme}
    >
      {title && (
        <h2 className="wg-text-2xl wg-font-bold wg-mb-6" style={{ color: colors.foreground }}>
          {title}
        </h2>
      )}
      {description && (
        <p
          className="wg-text-sm wg-text-muted-foreground wg-mb-4"
          style={{ color: colors['muted-foreground'] }}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  )
}

import type { ColorScale as ColorScaleType } from '@/theme/tokens'

export function ColorScaleDisplay({
  name,
  scale,
  themeColors,
}: {
  name: string
  scale: ColorScaleType | Record<string, string> | string | null | undefined
  themeColors: typeof lightTheme.colors
}) {
  if (!scale) {
    return null
  }

  if (typeof scale === 'string') {
    return (
      <div className="wg-mb-6">
        <h3
          className="wg-text-sm wg-font-semibold wg-mb-2"
          style={{ color: themeColors.foreground }}
        >
          {name}
        </h3>
        <div className="wg-flex wg-items-center wg-gap-2">
          <div
            className="wg-w-16 wg-h-16 wg-rounded-md wg-border"
            style={{ backgroundColor: scale, borderColor: themeColors.border }}
          />
          <div className="wg-flex wg-flex-col">
            <span className="wg-text-xs wg-font-mono" style={{ color: themeColors.foreground }}>
              {scale}
            </span>
          </div>
        </div>
      </div>
    )
  }

  if (typeof scale !== 'object' || Array.isArray(scale)) {
    return null
  }

  const scaleKeys = Object.keys(scale).sort((a, b) => {
    const numA = parseInt(a)
    const numB = parseInt(b)
    if (!isNaN(numA) && !isNaN(numB)) return numA - numB
    return a.localeCompare(b)
  })

  const scaleRecord = scale as Record<string, string>

  return (
    <div className="wg-mb-6">
      <h3 className="wg-text-sm wg-font-semibold wg-mb-3" style={{ color: themeColors.foreground }}>
        {name}
      </h3>
      <div className="wg-flex wg-flex-wrap wg-gap-2">
        {scaleKeys.map((key) => (
          <div key={key} className="wg-flex wg-flex-col wg-items-center wg-gap-1">
            <div
              className="wg-w-12 wg-h-12 wg-rounded-md wg-border wg-shadow-sm"
              style={{ backgroundColor: scaleRecord[key], borderColor: themeColors.border }}
            />
            <span
              className="wg-text-xs wg-font-mono"
              style={{ color: themeColors['muted-foreground'] }}
            >
              {key}
            </span>
            <span
              className="wg-text-xs wg-font-mono"
              style={{ color: themeColors['muted-foreground'] }}
            >
              {scaleRecord[key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
