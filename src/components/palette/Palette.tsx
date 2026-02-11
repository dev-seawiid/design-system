import { darkTheme, lightTheme } from '@/theme'
import { cn } from '@/utils/cn'
import type { ReactNode } from 'react'

interface PaletteProps {
  theme?: 'light' | 'dark'
  className?: string
  title?: string
  description?: string
  children?: ReactNode
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
        'p-6 rounded-lg border border-border',
        theme === 'light' ? 'bg-white' : 'bg-definition-fog-900',
        className
      )}
      data-theme={theme}
    >
      {title && (
        <h2 className="text-2xl font-bold mb-6" style={{ color: colors.foreground }}>
          {title}
        </h2>
      )}
      {description && (
        <p
          className="text-sm text-muted-foreground mb-4"
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
      <div className="mb-6">
        <h3 className="text-sm font-semibold mb-2" style={{ color: themeColors.foreground }}>
          {name}
        </h3>
        <div className="flex items-center gap-2">
          <div
            className="w-16 h-16 rounded-md border"
            style={{ backgroundColor: scale, borderColor: themeColors.border }}
          />
          <div className="flex flex-col">
            <span className="text-xs font-mono" style={{ color: themeColors.foreground }}>
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
    <div className="mb-6">
      <h3 className="text-sm font-semibold mb-3" style={{ color: themeColors.foreground }}>
        {name}
      </h3>
      <div className="flex flex-wrap gap-2">
        {scaleKeys.map((key) => (
          <div key={key} className="flex flex-col items-center gap-1">
            <div
              className="w-12 h-12 rounded-md border shadow-sm"
              style={{ backgroundColor: scaleRecord[key], borderColor: themeColors.border }}
            />
            <span className="text-xs font-mono" style={{ color: themeColors['muted-foreground'] }}>
              {key}
            </span>
            <span className="text-xs font-mono" style={{ color: themeColors['muted-foreground'] }}>
              {scaleRecord[key]}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
