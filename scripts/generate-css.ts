import { writeFileSync } from 'fs'
import { join } from 'path'
import { darkTheme } from '../src/theme/dark.js'
import { generateCssVars } from '../src/theme/generate-css-vars.js'
import { lightTheme } from '../src/theme/light.js'

const cssContent = `/* 
 * 디자인 시스템 CSS 변수 및 유틸리티 클래스
 * 
 * 이 파일은 CSS 변수와 Tailwind 유틸리티 클래스를 포함합니다.
 * Tailwind의 기본 reset 스타일(base)은 포함하지 않아 다른 프로젝트와의 충돌을 방지합니다.
 * 
 * 이 파일은 자동 생성됩니다. src/theme/light.ts와 dark.ts를 수정한 후
 * pnpm generate:css를 실행하여 재생성하세요.
 */

@tailwind utilities;

:root {
${generateCssVars(lightTheme)}
}

[data-theme='dark'] {
${generateCssVars(darkTheme)}
}

/* 커스텀 유틸리티 클래스 */
.wg-gradient-primary-to-secondary {
  background: var(--wg-gradient-primary-to-secondary);
}
.wg-gradient-primary-to-tertiary {
  background: var(--wg-gradient-primary-to-tertiary);
}
.wg-gradient-secondary-to-tertiary {
  background: var(--wg-gradient-secondary-to-tertiary);
}
.wg-gradient-primary-to-accent {
  background: var(--wg-gradient-primary-to-accent);
}
.wg-gradient-secondary-to-accent {
  background: var(--wg-gradient-secondary-to-accent);
}
.wg-gradient-tertiary-to-accent {
  background: var(--wg-gradient-tertiary-to-accent);
}
.wg-gradient-accent-to-primary {
  background: var(--wg-gradient-accent-to-primary);
}
`

const outputPath = join(process.cwd(), 'src/styles/globals.css')
writeFileSync(outputPath, cssContent, 'utf-8')
console.log('✅ CSS variables generated successfully:', outputPath)
