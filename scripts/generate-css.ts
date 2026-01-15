import { writeFileSync } from 'fs'
import { join } from 'path'
import { lightTheme } from '../src/theme/light.js'
import { darkTheme } from '../src/theme/dark.js'
import { generateCssVars } from '../src/theme/generate-css-vars.js'

const cssContent = `@tailwind base;
@tailwind components;
@tailwind utilities;

/* 
 * CSS 레이어 우선순위:
 * 1. base: 기본 스타일 및 CSS 변수 정의 (가장 낮은 우선순위)
 * 2. components: 컴포넌트 스타일
 * 3. utilities: 유틸리티 클래스 (가장 높은 우선순위)
 * 
 * 다른 프로젝트에서 사용 시 이 패키지의 스타일이 덮어쓰이지 않도록
 * @layer를 사용하여 우선순위를 명확히 합니다.
 * 
 * 이 파일은 자동 생성됩니다. src/theme/light.ts와 dark.ts를 수정한 후
 * pnpm generate:css를 실행하여 재생성하세요.
 */

@layer base {
  :root {
${generateCssVars(lightTheme)}
  }

  [data-theme='dark'] {
${generateCssVars(darkTheme)}
  }
}

/* 
 * Components Layer: 컴포넌트 스타일 정의
 * 다른 프로젝트의 컴포넌트 스타일과 충돌하지 않도록 관리
 */
@layer components {
  /* 컴포넌트별 커스텀 스타일은 필요시 여기에 추가 */
}

/* 
 * Utilities Layer: 커스텀 유틸리티 클래스
 * 패키지 사용자가 쉽게 접근할 수 있는 유틸리티 클래스 제공
 */
@layer utilities {
  /* 그라데이션 유틸리티 클래스 */
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
}
`

const outputPath = join(process.cwd(), 'src/styles/globals.css')
writeFileSync(outputPath, cssContent, 'utf-8')
console.log('✅ CSS variables generated successfully:', outputPath)
