import { execSync } from 'child_process'
import { writeFileSync } from 'fs'
import { join } from 'path'
import {
  generateTailwindBackgroundImage,
  generateTailwindBorderRadius,
  generateTailwindBoxShadow,
  generateTailwindColors,
  generateTailwindSpacing,
} from '../src/theme/generate-tailwind-config'
import { lightTheme } from '../src/theme/light'

// 실제 값들을 계산
const colors = generateTailwindColors(lightTheme)
const spacing = generateTailwindSpacing(lightTheme)
const borderRadius = generateTailwindBorderRadius(lightTheme)
const boxShadow = generateTailwindBoxShadow(lightTheme)
const backgroundImage = generateTailwindBackgroundImage(lightTheme)

const presetContent = `// 외부 배포용 Tailwind preset
// 이 파일은 자동 생성됩니다. src/theme/light.ts를 수정한 후
// pnpm generate:preset을 실행하여 재생성하세요.

/** @type {import('tailwindcss').Config} */
const config = {
  prefix: 'wg-', // @wiid-get/design-system의 약자
  // content: [], // 배포용이므로 content는 비워둠 (사용자가 직접 정함)
  theme: {
    extend: {
      colors: ${JSON.stringify(colors, null, 2)},
      spacing: ${JSON.stringify(spacing, null, 2)},
      borderRadius: ${JSON.stringify(borderRadius, null, 2)},
      boxShadow: ${JSON.stringify(boxShadow, null, 2)},
      backgroundImage: ${JSON.stringify(backgroundImage, null, 2)},
    },
  },
  plugins: [],
}

export default config
`

const outputPath = join(process.cwd(), 'tailwind.preset.js')
writeFileSync(outputPath, presetContent, 'utf-8')

// Prettier로 포맷팅
try {
  execSync(`pnpm prettier --write ${outputPath}`, { stdio: 'inherit' })
} catch {
  console.warn('⚠️  Prettier formatting failed, but file was generated:', outputPath)
}

console.log('✅ Tailwind preset generated successfully:', outputPath)
