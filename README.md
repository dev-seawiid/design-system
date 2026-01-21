# 🎨 @wiid-get/design-system

<div align="center">

[![npm version](https://img.shields.io/npm/v/@wiid-get/design-system.svg)](https://www.npmjs.com/package/@wiid-get/design-system) [![npm downloads](https://img.shields.io/npm/dm/@wiid-get/design-system.svg)](https://www.npmjs.com/package/@wiid-get/design-system) [![GitHub stars](https://img.shields.io/github/stars/dev-seawiid/design-system.svg?style=social&label=Star)](https://github.com/dev-seawiid/design-system/stargazers) [![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://main--694bd12c77799d8f51b85e38.chromatic.com/)

</div>

<div align="center">

Next.js 프로젝트를 위한 커스텀 디자인 시스템 컴포넌트 라이브러리입니다. 재사용 가능한 UI 컴포넌트와 테마 시스템을 제공합니다.

</div>

## 📑 목차

- [📦 설치](#-설치)
- [📋 peerDependencies 설치 가이드](#-peerdependencies-설치-가이드)
  - [⚠️ 필수 설치](#️-필수-설치-모든-컴포넌트-사용-시-필요)
  - [🔧 선택적 설치](#-선택적-설치-특정-컴포넌트-사용-시만-필요)
- [🚀 사용법](#-사용법)
  - [1. CSS 스타일 import (필수)](#1-css-스타일-import-필수)
  - [2. Tailwind CSS 설정 (선택사항)](#2-tailwind-css-설정-선택사항)
  - [3. 컴포넌트 사용](#3-컴포넌트-사용)
- [🎨 테마](#-테마)
- [📚 문서](#-문서)
- [🛠 개발](#-개발)
- [🧪 테스트](#-테스트)
- [📦 빌드](#-빌드)
- [📤 npm 배포](#-npm-배포)
- [📝 라이선스](#-라이선스)

## 📦 설치

```bash
pnpm add @wiid-get/design-system
# 또는
npm install @wiid-get/design-system
# 또는
yarn add @wiid-get/design-system
```

## 📋 peerDependencies 설치 가이드

이 라이브러리는 일부 의존성을 peerDependencies로 관리합니다. 사용하는 컴포넌트에 따라 필요한 패키지만 선택적으로 설치할 수 있습니다.

### ⚠️ 필수 설치 (모든 컴포넌트 사용 시 필요)

다음 패키지들은 라이브러리 사용을 위해 **반드시 설치**해야 합니다:

```bash
pnpm add next@^16.0.0 react@^19.0.0 react-dom@^19.0.0 tailwindcss@>=3.3.0
# 또는
npm install next@^16.0.0 react@^19.0.0 react-dom@^19.0.0 tailwindcss@>=3.3.0
# 또는
yarn add next@^16.0.0 react@^19.0.0 react-dom@^19.0.0 tailwindcss@>=3.3.0
```

> **참고**: `tailwindcss`는 Tailwind preset을 사용하거나 컴포넌트 스타일을 제대로 표시하기 위해 필요합니다.

### 🔧 선택적 설치 (특정 컴포넌트 사용 시만 필요)

특정 컴포넌트를 사용할 때만 필요한 의존성입니다. 해당 컴포넌트를 사용하지 않는다면 설치할 필요가 없습니다.

#### Optional Dependency를 사용하는 컴포넌트

일부 컴포넌트는 optional dependency를 사용합니다. 해당 컴포넌트를 사용하려면 필요한 패키지를 설치하고, 별도 export 경로에서 import해야 합니다.

**사용 방법:**

1. 필요한 패키지 설치 (각 컴포넌트의 문서에서 확인)
2. 별도 export 경로에서 import: `@wiid-get/design-system/{컴포넌트명}`

**예시:**

```tsx
// 형식: @wiid-get/design-system/{컴포넌트명}
import { ComponentName } from '@wiid-get/design-system/{컴포넌트명}'
// 해당 컴포넌트에 필요한 optional dependency 패키지를 설치해야 합니다
```

> **참고**: 각 컴포넌트의 정확한 패키지 요구사항은 `package.json`의 `peerDependencies` 섹션을 참조하거나 Storybook 문서를 확인하세요.

> **💡 팁**:
>
> - 필요한 컴포넌트만 사용한다면, 해당 컴포넌트에 필요한 peerDependencies만 선택적으로 설치하면 됩니다. 이렇게 하면 불필요한 의존성을 설치하지 않아 프로젝트 크기를 줄일 수 있습니다.
> - 선택적 의존성은 `peerDependenciesMeta`로 표시되어 있어, 설치하지 않아도 npm 경고가 표시되지 않습니다.
> - Optional dependency를 사용하는 컴포넌트는 별도 export 경로(`@wiid-get/design-system/{컴포넌트명}`)에서 import해야 합니다. 이렇게 하면 해당 컴포넌트를 사용하지 않을 때 optional dependency가 번들에 포함되지 않아 에러가 발생하지 않습니다.

## 🚀 사용법

### 1. CSS 스타일 import (필수)

프리빌드된 CSS 파일을 최상단 layout에 import해야 합니다.

#### Next.js App Router

```tsx
// app/layout.tsx
import '@wiid-get/design-system/index.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
```

#### Next.js Pages Router

```tsx
// pages/_app.tsx
import '@wiid-get/design-system/index.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

#### React (Vite, CRA 등)

```tsx
// src/main.tsx 또는 src/index.tsx
import '@wiid-get/design-system/index.css'
```

#### CSS @import 방식 (CSS 파일 내에서)

CSS 파일 내에서 `@import`를 사용하여 스타일을 import할 수 있습니다:

```css
/* src/index.css 또는 src/globals.css */
@import '@wiid-get/design-system/index.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

/* 나머지 스타일... */
```

> **참고**:
>
> - `@import`는 CSS 파일의 최상단에 위치해야 하며, `@tailwind` 지시어보다 앞에 와야 합니다.
> - CSS는 반드시 최상단 layout 파일에 import해야 디자인 시스템의 스타일이 올바르게 적용됩니다.

### 2. Tailwind CSS 설정 (선택사항)

Tailwind CSS preset을 사용하여 디자인 시스템의 테마 토큰을 확장할 수 있습니다.

> **참고**: `tailwind.preset.js` 파일은 자동 생성됩니다. `src/theme/light.ts`를 수정한 후 `pnpm generate:preset`을 실행하여 재생성할 수 있습니다.

#### Next.js App Router

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@wiid-get/design-system/tailwind.preset')],
  content: [
    // 디자인 시스템의 컴포넌트 경로도 포함해야 스타일이 추출됩니다
    './node_modules/@wiid-get/design-system/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // 나머지 설정...
}
```

#### Next.js Pages Router

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@wiid-get/design-system/tailwind.preset')],
  content: [
    './node_modules/@wiid-get/design-system/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // 나머지 설정...
}
```

#### ES Module 형식

```js
// tailwind.config.js
import designSystemPreset from '@wiid-get/design-system/tailwind.preset.js'

/** @type {import('tailwindcss').Config} */
export default {
  presets: [designSystemPreset],
  content: [
    './node_modules/@wiid-get/design-system/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // 나머지 설정...
}
```

> **참고**: Tailwind preset을 사용하면 디자인 시스템의 색상, spacing, borderRadius, boxShadow 등의 토큰을 Tailwind 유틸리티 클래스로 사용할 수 있습니다. 예: `wg-bg-primary-500`, `wg-p-4`, `wg-rounded-lg` 등

### 3. 컴포넌트 사용

#### 기본 컴포넌트 (메인 export)

```tsx
import { Component1, Component2, Component3 } from '@wiid-get/design-system'

export default function Page() {
  return (
    <div>
      <Component1 {...props} />
      <Component2 {...props} />
      <Component3 {...props} />
    </div>
  )
}
```

> **참고**: 사용 가능한 모든 컴포넌트 목록은 [Storybook 문서](https://main--694bd12c77799d8f51b85e38.chromatic.com/)를 참조하세요.

#### Optional Dependency를 사용하는 컴포넌트

일부 컴포넌트는 optional dependency를 사용하므로 별도 export 경로에서 import해야 합니다. 이렇게 하면 해당 컴포넌트를 사용하지 않을 때 optional dependency가 번들에 포함되지 않습니다.

**사용 방법:**

```tsx
// 별도 export 경로에서 import
// 형식: @wiid-get/design-system/{컴포넌트명}
import { ComponentName } from '@wiid-get/design-system/{컴포넌트명}'
```

**타입은 메인 export에서도 사용 가능합니다:**

```tsx
// 타입은 번들에 포함되지 않으므로 메인 export에서도 사용 가능
// 형식: import type { {ComponentName}Props } from '@wiid-get/design-system'
import type { ComponentProps } from '@wiid-get/design-system'
```

### 제공되는 컴포넌트

모든 컴포넌트 목록과 상세한 사용법은 [Storybook 문서](https://main--694bd12c77799d8f51b85e38.chromatic.com/)를 참조하세요.

#### 메인 export에서 제공되는 컴포넌트

대부분의 컴포넌트는 메인 export 경로에서 사용할 수 있습니다:

```tsx
import { Component1, Component2, ... } from '@wiid-get/design-system'
```

#### 별도 export 경로에서 제공되는 컴포넌트

Optional dependency를 사용하는 컴포넌트는 별도 export 경로에서 import해야 합니다:

```tsx
// 형식: @wiid-get/design-system/{컴포넌트명}
import { ComponentName } from '@wiid-get/design-system/{컴포넌트명}'
```

> **참고**: 어떤 컴포넌트가 별도 export 경로를 사용하는지는 각 컴포넌트의 Storybook 문서나 `package.json`의 `peerDependenciesMeta`를 확인하세요.

## 🎨 테마

이 디자인 시스템은 Light와 Dark 테마를 지원합니다. 테마는 CSS 변수를 통해 관리되며, `data-theme` 속성을 사용하여 전환할 수 있습니다.

```tsx
// 전체 페이지에 테마 적용
<html data-theme="dark">
  <body>
    <YourComponent />
  </body>
</html>

// 특정 영역에만 테마 적용
<div data-theme="dark">
  <YourComponent />
</div>
```

### 테마 토큰 사용

테마 토큰을 직접 사용할 수도 있습니다:

```tsx
import { lightTheme, darkTheme, type Theme } from '@wiid-get/design-system'

// TypeScript로 테마 타입 안전하게 사용
const theme: Theme = lightTheme
```

## 📚 문서

더 자세한 문서와 예제는 Storybook을 통해 확인할 수 있습니다.

로컬에서 Storybook을 실행하려면:

```bash
pnpm storybook
```

Storybook이 실행되면 브라우저에서 `http://localhost:6006`으로 접속할 수 있습니다.

**Storybook 개발 팁:**

- Storybook은 소스 파일(`src/`)을 직접 읽어서 사용하므로, 코드 수정 시 자동으로 반영됩니다
- 별도로 빌드(`pnpm build`)할 필요 없이 바로 개발할 수 있습니다
- 테마 전환은 Storybook 상단의 툴바에서 가능합니다

## 🛠 개발

### 로컬 개발 환경 설정

1. 저장소 클론

```bash
git clone <repository-url>
cd design-system
```

2. 의존성 설치

```bash
pnpm install
```

3. Storybook 실행 (컴포넌트 개발)

```bash
pnpm storybook
```

Storybook은 자체적으로 파일 변경을 감지하고 자동으로 반영합니다. **별도로 `pnpm dev`를 실행할 필요가 없습니다.**

> **참고**:
>
> - `pnpm storybook`: 컴포넌트 개발 및 문서화용 (권장)
> - `pnpm dev`: 라이브러리 빌드용 (다른 프로젝트에서 링크로 사용할 때만 필요)

### 로컬 프로젝트에서 테스트

#### pnpm link 사용

```bash
# 디자인 시스템 디렉토리에서
pnpm link --global

# 프로젝트 디렉토리에서
pnpm link --global @wiid-get/design-system
```

#### yalc 사용

```bash
# yalc 설치 (전역)
npm install -g yalc

# 디자인 시스템 디렉토리에서
yalc push

# 프로젝트 디렉토리에서
yalc add @wiid-get/design-system
```

## 🧪 테스트

```bash
# 모든 테스트 실행
pnpm test

# UI 모드로 테스트 실행
pnpm test:ui

# 커버리지 리포트 생성
pnpm test:coverage
```

## 📦 빌드

```bash
pnpm build
```

빌드 프로세스는 다음을 수행합니다:

1. CSS 변수 생성 (`pnpm generate:css`)
2. Tailwind preset 생성 (`pnpm generate:preset`)
3. TypeScript 컴파일
4. Vite 빌드

빌드된 파일은 `dist/` 디렉토리에 생성됩니다:

**메인 번들:**
- `dist/index.js` - ESM 형식의 메인 컴포넌트 번들
- `dist/index.d.ts` - TypeScript 타입 정의 파일
- `dist/index.css` - 프리빌드된 CSS 스타일 파일

**별도 번들 (Optional Dependency 사용 컴포넌트):**
- `dist/{컴포넌트명}.js` - 각 optional dependency 컴포넌트의 별도 번들
- `dist/{컴포넌트명}.d.ts` - 각 컴포넌트의 타입 정의 파일

**기타:**
- `tailwind.preset.js` - Tailwind CSS preset 파일 (자동 생성)

> **참고**: Optional dependency를 사용하는 컴포넌트는 별도 번들로 분리되어 있습니다. 이렇게 하면 해당 컴포넌트를 사용하지 않을 때 optional dependency가 메인 번들에 포함되지 않습니다. 어떤 컴포넌트가 별도 번들로 분리되어 있는지는 `package.json`의 `exports` 필드를 확인하세요.

## 📤 npm 배포

이 라이브러리는 `package.json`의 `files` 필드를 사용하여 배포할 파일만 명시적으로 선언합니다 (whitelist 방식):

- `dist/` - 빌드된 파일들
- `tailwind.preset.js` - Tailwind CSS preset 파일 (자동 생성)
- `README.md` - 문서
- `LICENSE` - 라이선스

npm 배포 시 위 파일들만 포함되며, 소스 코드, 테스트 파일, 설정 파일 등은 제외됩니다.

> **참고**: `tailwind.preset.js`는 빌드 시 자동으로 생성되며, `src/theme/light.ts`의 테마 설정을 기반으로 생성됩니다.

## 📝 라이선스

이 프로젝트는 [MIT License](LICENSE)로 배포됩니다.

### 라이선스 요약

MIT License는 매우 관대한 오픈소스 라이선스로, 다음을 허용합니다:

- ✅ **사용**: 개인 및 상업적 프로젝트에서 자유롭게 사용 가능
- ✅ **수정**: 코드를 수정하고 변경 가능
- ✅ **배포**: 수정된 버전을 배포 가능
- ✅ **사적 사용**: 내부 프로젝트에서 사용 가능
- ✅ **특허 사용**: 특허권 사용 가능

### 의무사항

- ⚠️ **저작권 표시**: 원본 저작권 고지와 라이선스 고지를 포함해야 함
- ⚠️ **라이선스 포함**: 배포 시 LICENSE 파일을 포함해야 함

### 면책 조항

이 소프트웨어는 "있는 그대로" 제공되며, 명시적이거나 묵시적인 어떠한 보증도 없습니다. 저자나 저작권자는 어떠한 손해에 대해서도 책임을 지지 않습니다.

자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
