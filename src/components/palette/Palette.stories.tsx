import { darkTheme, lightTheme } from '@/theme'
import type { Meta, StoryObj } from '@storybook/react'
import { ColorScaleDisplay, Palette } from './Palette'

const meta: Meta<typeof Palette> = {
  title: 'Foundation/Palette',
  component: Palette,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          '디자인 시스템에 정의된 색상만 사용됩니다. 각 섹션별로 분리된 스토리를 통해 색상 정의, 역할 매핑, 상태 색상, 시맨틱 색상, 그라데이션을 확인할 수 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    theme: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Palette>

// 색상 정의
export const ColorDefinitions: Story = {
  render: (_, context) => {
    const theme = (context.globals.theme as 'light' | 'dark') || 'light'
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    const palette = currentTheme.palette
    const colors = currentTheme.colors

    return (
      <div style={{ minHeight: '100vh', padding: '1rem' }}>
        <Palette
          theme={theme}
          title={`Color Definitions (${theme})`}
          description="바다와 관련된 색상명을 사용합니다. 모든 색상은 이 Color Definitions에 정의된 색상만 사용됩니다."
        >
          <div className="wg-space-y-6">
            <ColorScaleDisplay
              name="Shallow Beach"
              scale={palette['shallow-beach']}
              themeColors={colors}
            />
            <ColorScaleDisplay name="Algae" scale={palette.algae} themeColors={colors} />
            <ColorScaleDisplay name="Deep Sea" scale={palette['deep-sea']} themeColors={colors} />
            <ColorScaleDisplay name="Sunset" scale={palette.sunset} themeColors={colors} />
            <ColorScaleDisplay
              name="Golden Light"
              scale={palette['golden-light']}
              themeColors={colors}
            />
            <ColorScaleDisplay name="Sand" scale={palette.sand} themeColors={colors} />
            <ColorScaleDisplay name="Fog" scale={palette.fog} themeColors={colors} />
          </div>
        </Palette>
      </div>
    )
  },
}

// 역할 매핑
export const Roles: Story = {
  render: (_, context) => {
    const theme = (context.globals.theme as 'light' | 'dark') || 'light'
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    const colors = currentTheme.colors

    return (
      <div style={{ minHeight: '100vh', padding: '1rem' }}>
        <Palette theme={theme} title={`Roles (${theme})`}>
          <div>
            <h3
              className="wg-text-lg wg-font-semibold wg-mb-4"
              style={{ color: colors.foreground }}
            >
              Role Mapping (Palette → Role)
            </h3>
            <div className="wg-space-y-6">
              <div>
                <p className="wg-text-sm wg-text-muted-foreground wg-mb-2">
                  Primary = Shallow Beach | Secondary = Deep Sea | Tertiary = Sand | Accent = Sunset
                </p>
              </div>
              <ColorScaleDisplay
                name="Primary (Shallow Beach)"
                scale={colors.primary}
                themeColors={colors}
              />
              <ColorScaleDisplay
                name="Secondary (Deep Sea)"
                scale={colors.secondary}
                themeColors={colors}
              />
              <ColorScaleDisplay
                name="Tertiary (Sand)"
                scale={colors.tertiary}
                themeColors={colors}
              />
              <ColorScaleDisplay
                name="Accent (Sunset)"
                scale={colors.accent}
                themeColors={colors}
              />
            </div>
          </div>
        </Palette>
      </div>
    )
  },
}

// 상태 색상
export const StatusColors: Story = {
  render: (_, context) => {
    const theme = (context.globals.theme as 'light' | 'dark') || 'light'
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    const colors = currentTheme.colors

    return (
      <div style={{ minHeight: '100vh', padding: '1rem' }}>
        <Palette theme={theme} title={`Status Colors (${theme})`}>
          <div>
            <h3
              className="wg-text-lg wg-font-semibold wg-mb-4"
              style={{ color: colors.foreground }}
            >
              Status Colors
            </h3>
            <div className="wg-space-y-6">
              <div>
                <p className="wg-text-sm wg-text-muted-foreground wg-mb-2">
                  Success = Algae | Warning = Golden Light | Error = Sunset | Info = Deep Sea
                </p>
              </div>
              <ColorScaleDisplay
                name="Success (Algae)"
                scale={colors.success}
                themeColors={colors}
              />
              <ColorScaleDisplay
                name="Warning (Golden Light)"
                scale={colors.warning}
                themeColors={colors}
              />
              <ColorScaleDisplay name="Error (Sunset)" scale={colors.error} themeColors={colors} />
              <ColorScaleDisplay name="Info (Deep Sea)" scale={colors.info} themeColors={colors} />
            </div>
          </div>
        </Palette>
      </div>
    )
  },
}

// 시맨틱 색상
export const SemanticColors: Story = {
  render: (_, context) => {
    const theme = (context.globals.theme as 'light' | 'dark') || 'light'
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    const colors = currentTheme.colors

    return (
      <div style={{ minHeight: '100vh', padding: '1rem' }}>
        <Palette theme={theme} title={`Semantic Colors (${theme})`}>
          <div>
            <h3
              className="wg-text-lg wg-font-semibold wg-mb-4"
              style={{ color: colors.foreground }}
            >
              Semantic Colors
            </h3>
            <div className="wg-space-y-6">
              <div>
                <p className="wg-text-sm wg-text-muted-foreground wg-mb-2">
                  Foreground = Shallow Beach 900 | Muted = Shallow Beach 50 | Muted Foreground =
                  Shallow Beach 700 | Border = Shallow Beach 100 | Ring = Shallow Beach 500
                </p>
                <p className="wg-text-xs wg-text-muted-foreground">
                  Background는 직접 정의된 색상입니다 (light: #ffffff, dark: #171717)
                </p>
              </div>
              <div className="wg-grid wg-grid-cols-2 md:wg-grid-cols-3 wg-gap-4">
                <ColorScaleDisplay
                  name="Background"
                  scale={colors.background}
                  themeColors={colors}
                />
                <ColorScaleDisplay
                  name="Foreground (Shallow Beach 900)"
                  scale={colors.foreground}
                  themeColors={colors}
                />
                <ColorScaleDisplay
                  name="Muted (Shallow Beach 50)"
                  scale={colors.muted}
                  themeColors={colors}
                />
                <ColorScaleDisplay
                  name="Muted Foreground (Shallow Beach 700)"
                  scale={colors['muted-foreground']}
                  themeColors={colors}
                />
                <ColorScaleDisplay
                  name="Border (Shallow Beach 100)"
                  scale={colors.border}
                  themeColors={colors}
                />
                <ColorScaleDisplay
                  name="Ring (Shallow Beach 500)"
                  scale={colors.ring}
                  themeColors={colors}
                />
              </div>
            </div>
          </div>
        </Palette>
      </div>
    )
  },
}

// 그라데이션
export const Gradients: Story = {
  render: (_, context) => {
    const theme = (context.globals.theme as 'light' | 'dark') || 'light'
    const currentTheme = theme === 'light' ? lightTheme : darkTheme
    const colors = currentTheme.colors
    const gradients = currentTheme.gradients

    return (
      <div style={{ minHeight: '100vh', padding: '1rem' }}>
        <Palette theme={theme} title={`Gradients (${theme})`}>
          <div>
            <h3
              className="wg-text-sm wg-font-semibold wg-mb-3"
              style={{ color: colors.foreground }}
            >
              Gradients
            </h3>
            <div className="wg-grid wg-grid-cols-1 md:wg-grid-cols-2 wg-gap-4">
              {Object.entries(gradients).map(([name, gradient]) => (
                <div key={name} className="wg-flex wg-flex-col wg-gap-2">
                  <h4 className="wg-text-xs wg-font-semibold" style={{ color: colors.foreground }}>
                    {name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
                  </h4>
                  <div
                    className="wg-w-full wg-h-24 wg-rounded-lg wg-border"
                    style={{ background: gradient, borderColor: colors.border }}
                  />
                  <span
                    className="wg-text-xs wg-font-mono"
                    style={{ color: colors['muted-foreground'] }}
                  >
                    {gradient}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Palette>
      </div>
    )
  },
}
