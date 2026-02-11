import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
    '@storybook/addon-themes',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {},
  async viteFinal(config) {
    const merged = mergeConfig(config, {
      // Tailwind 4는 PostCSS 설정을 postcss.config.js에서 처리
      // Storybook은 postcss.config.js를 자동으로 읽음
    })
    // preserve-directives는 라이브러리 빌드용. Storybook이 iframe.html 등을 JS로 파싱하려다 에러 나므로 제거
    merged.plugins = (merged.plugins ?? []).filter(
      (p: unknown) => (p as { name?: string })?.name !== 'preserve-directives'
    )
    return merged
  },
}

export default config
