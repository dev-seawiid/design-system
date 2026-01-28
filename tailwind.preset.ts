// 외부 배포용 Tailwind preset
// src/theme/light.ts를 수정하면 이 파일도 함께 업데이트하세요.

import type { Config } from 'tailwindcss'
import {
  generateTailwindBackgroundImage,
  generateTailwindColors,
} from './src/theme/generate-tailwind-config'
import { lightTheme } from './src/theme/light'
import tailwindPlugin from './tailwind-plugin'

const config: Config = {
  // content: [], // 배포용이므로 content는 비워둠 (사용자가 직접 정함)
  theme: {
    extend: {
      colors: generateTailwindColors(lightTheme),
      backgroundImage: generateTailwindBackgroundImage(lightTheme),
    },
  },
  plugins: [tailwindPlugin],
}

export default config
