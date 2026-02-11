# 🎨 @wiid-get/design-system

<div align="center">

[![npm version](https://img.shields.io/npm/v/@wiid-get/design-system.svg)](https://www.npmjs.com/package/@wiid-get/design-system) [![npm downloads](https://img.shields.io/npm/dm/@wiid-get/design-system.svg)](https://www.npmjs.com/package/@wiid-get/design-system) [![GitHub stars](https://img.shields.io/github/stars/dev-seawiid/design-system.svg?style=social&label=Star)](https://github.com/dev-seawiid/design-system/stargazers) [![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://main--694bd12c77799d8f51b85e38.chromatic.com/)

</div>

> ⚠️ **개발 중 (Development)**
>
> 이 라이브러리는 현재 **개발 중**입니다. **1.0.0 버전 이전에는 프로덕션 환경에서의 사용을 권장하지 않습니다.**
>
> - API가 변경될 수 있습니다
> - Breaking changes가 발생할 수 있습니다
> - 버그가 있을 수 있습니다
>
> 실험적 사용이나 피드백 제공을 목적으로 사용하시는 것을 권장합니다.

<div align="center">

Next.js 프로젝트를 위한 커스텀 디자인 시스템 컴포넌트 라이브러리입니다. 재사용 가능한 UI 컴포넌트와 테마 시스템을 제공합니다.

</div>

## 📑 목차

- [⚠️ 개발 상태](#️-개발-상태)
- [⚡ 빠른 시작](#-빠른-시작)
- [📦 설치](#-설치)
- [🚀 사용법](#-사용법)
- [🎨 테마](#-테마)
- [📚 컴포넌트](#-컴포넌트)
- [🛠 개발자 가이드](#-개발자-가이드)
- [📝 라이선스](#-라이선스)

---

## ⚠️ 개발 상태

이 라이브러리는 현재 **개발 중**입니다.

### 현재 버전: 0.0.11 (Pre-1.0.0)

**1.0.0 버전 이전에는 프로덕션 환경에서의 사용을 권장하지 않습니다.**

#### 주의사항

- ⚠️ **API 변경 가능**: 컴포넌트 API나 props가 변경될 수 있습니다
- ⚠️ **Breaking Changes**: 마이너 버전 업데이트 시 breaking changes가 발생할 수 있습니다
- ⚠️ **버그 가능성**: 아직 발견되지 않은 버그가 있을 수 있습니다
- ⚠️ **문서 부족**: 일부 기능에 대한 문서가 불완전할 수 있습니다

#### 권장 사용 사례

- ✅ 실험적 프로젝트나 프로토타입
- ✅ 피드백 제공 및 테스트
- ✅ 개발 환경에서의 사용
- ✅ 개인 프로젝트

#### 프로덕션 사용

1.0.0 버전이 릴리스되면 안정적인 API와 더 나은 문서화를 제공할 예정입니다. 프로덕션 환경에서 사용하기 전에 1.0.0 버전을 기다리시거나, 사용 시 주의를 기울여 주세요.

---

## ⚡ 빠른 시작

### 1. 설치

```bash
pnpm add @wiid-get/design-system next@^16.0.0 react@^19.0.0 react-dom@^19.0.0 tailwindcss@>=4.0.0
```

### 2. CSS import

CSS 파일을 생성하고 다음을 추가하세요:

```css
/* app/globals.css 또는 src/index.css */
@import 'tailwindcss';
@import '@wiid-get/design-system/index.css';
@source '../node_modules/@wiid-get/design-system';
```

그리고 layout 파일에서 CSS 파일을 import:

```tsx
// app/layout.tsx (Next.js App Router)
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
```

### 3. 컴포넌트 사용

```tsx
import { Avatar, Badge, PostCard } from '@wiid-get/design-system'

export default function Page() {
  return (
    <div>
      <Avatar src="/avatar.jpg" alt="User" />
      <Badge variant="primary">New</Badge>
      <PostCard title="Hello World" date="2024-01-01" />
    </div>
  )
}
```

> 💡 **더 많은 예제와 컴포넌트 목록은 [Storybook 문서](https://main--694bd12c77799d8f51b85e38.chromatic.com/)를 확인하세요.**

---

## 📦 설치

### 기본 설치

```bash
pnpm add @wiid-get/design-system
# 또는
npm install @wiid-get/design-system
# 또는
yarn add @wiid-get/design-system
```

### 필수 peerDependencies

다음 패키지들을 함께 설치해야 합니다:

```bash
pnpm add next@^16.0.0 react@^19.0.0 react-dom@^19.0.0 tailwindcss@>=4.0.0
```

### 선택적 의존성

일부 컴포넌트는 추가 패키지가 필요합니다. 해당 컴포넌트를 사용할 때만 설치하면 됩니다:

- **GithubContributions**: `react-github-calendar@^5.0.0`
- **RotatingSphere**: `three@>=0.180.0`, `@react-three/fiber@>=9.0.0`, `@react-three/drei@>=10.0.0`

> 💡 **팁**: 선택적 의존성은 `peerDependenciesMeta`로 표시되어 있어, 설치하지 않아도 npm 경고가 표시되지 않습니다.

---

## 🚀 사용법

### 1. CSS 스타일 import (필수)

디자인 시스템의 스타일을 사용하려면 CSS 파일을 import해야 합니다.

#### Next.js App Router

1. CSS 파일 생성 및 설정:

```css
/* app/globals.css */
@import 'tailwindcss';
@import '@wiid-get/design-system/index.css';
@source '../node_modules/@wiid-get/design-system';
```

2. Layout 파일에서 CSS import:

```tsx
// app/layout.tsx
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
```

#### Next.js Pages Router

1. CSS 파일 생성 및 설정:

```css
/* styles/globals.css */
@import 'tailwindcss';
@import '@wiid-get/design-system/index.css';
@source '../node_modules/@wiid-get/design-system';
```

2. `_app.tsx`에서 CSS import:

```tsx
// pages/_app.tsx
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

#### React (Vite, CRA 등)

1. CSS 파일 생성 및 설정:

```css
/* src/index.css 또는 src/globals.css */
@import 'tailwindcss';
@import '@wiid-get/design-system/index.css';
@source '../node_modules/@wiid-get/design-system';
```

2. 진입점 파일에서 CSS import:

```tsx
// src/main.tsx 또는 src/index.tsx
import './index.css'
```

> ⚠️ **중요**:
>
> - Tailwind CSS를 **먼저** import한 후 디자인 시스템 CSS를 import해야 합니다.
> - `@source` 디렉티브는 Tailwind v4에서 외부 패키지의 소스를 지정하는 데 사용됩니다. 디자인 시스템의 Tailwind 유틸리티 클래스를 사용하려면 반드시 필요합니다.
> - Tailwind v4는 CSS 파일 내에서 `@import "tailwindcss";`를 사용해야 합니다. JavaScript/TypeScript 파일에서 `import 'tailwindcss'`를 직접 사용할 수 없습니다.
> - PostCSS 플러그인(`@tailwindcss/postcss`)이 필요합니다. `postcss.config.js` 파일을 확인하세요.

### 2. Tailwind 유틸리티 클래스 사용

CSS를 import하면 디자인 시스템의 색상과 그라데이션을 Tailwind 유틸리티 클래스로 사용할 수 있습니다:

```tsx
// 색상
<div className="bg-primary-500 text-white">Primary 색상</div>
<div className="text-secondary-600">Secondary 색상</div>

// 그라데이션
<div className="bg-shallow-beach-to-deep-sea text-white p-4">
  그라데이션 배경
</div>

// 시맨틱 색상
<div className="bg-background text-foreground border-border">
  시맨틱 색상
</div>
```

> **참고**: Tailwind v4는 CSS-first 접근 방식을 사용하므로 별도의 config 파일이나 preset 설정이 필요 없습니다.

### 3. 컴포넌트 사용

#### 기본 컴포넌트

대부분의 컴포넌트는 메인 export에서 사용할 수 있습니다:

```tsx
import {
  Avatar,
  Badge,
  PostCard,
  ProfileCard,
  ProjectCard,
  ParallaxText,
  SpotifyNowPlaying,
  SpotifyLastPlayed,
  TypingText,
} from '@wiid-get/design-system'
```

#### Optional Dependency 컴포넌트

일부 컴포넌트는 별도 export 경로에서 import해야 합니다:

```tsx
// GithubContributions 사용 시
import { GithubContributions } from '@wiid-get/design-system/github-contributions'
// react-github-calendar 설치 필요

// RotatingSphere 사용 시
import { RotatingSphere } from '@wiid-get/design-system/rotating-sphere'
// three, @react-three/fiber, @react-three/drei 설치 필요
```

**타입은 메인 export에서도 사용 가능:**

```tsx
import type { GithubContributionsProps, RotatingSphereProps } from '@wiid-get/design-system'
```

> 📚 **모든 컴포넌트 목록과 상세한 사용법은 [Storybook 문서](https://main--694bd12c77799d8f51b85e38.chromatic.com/)를 참조하세요.**

---

## 🎨 테마

이 디자인 시스템은 Light와 Dark 테마를 지원합니다.

### 테마 전환

`data-theme` 속성을 사용하여 테마를 전환할 수 있습니다:

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

테마 토큰을 TypeScript에서 직접 사용할 수도 있습니다:

```tsx
import { lightTheme, darkTheme, type Theme } from '@wiid-get/design-system'

const theme: Theme = lightTheme
// theme.colors, theme.spacing 등 사용 가능
```

---

## 📚 컴포넌트

### 메인 export 컴포넌트

다음 컴포넌트들은 메인 export에서 사용할 수 있습니다:

- `Avatar` - 사용자 프로필 이미지
- `Badge` - 태그, 카테고리, 상태 표시
- `PostCard` - 블로그 포스트 카드
- `ProfileCard` - 프로필 카드
- `ProjectCard` - 프로젝트 카드
- `ParallaxText` - 패럴랙스 스크롤 텍스트
- `SpotifyNowPlaying` - Spotify 현재 재생 중 표시
- `SpotifyLastPlayed` - Spotify 최근 재생 목록
- `TypingText` - 타이핑 효과 텍스트

### 별도 export 컴포넌트

다음 컴포넌트들은 별도 export 경로에서 사용해야 합니다:

- `GithubContributions` - GitHub 기여도 그래프 (`@wiid-get/design-system/github-contributions`)
- `RotatingSphere` - 3D 회전 구체 (`@wiid-get/design-system/rotating-sphere`)

> 📖 **각 컴포넌트의 상세한 사용법과 예제는 [Storybook 문서](https://main--694bd12c77799d8f51b85e38.chromatic.com/)를 확인하세요.**

---

## 🛠 개발자 가이드

### 로컬 개발

```bash
# 저장소 클론
git clone <repository-url>
cd design-system

# 의존성 설치
pnpm install

# Storybook 실행 (컴포넌트 개발)
pnpm storybook
```

Storybook은 `http://localhost:6006`에서 실행되며, 코드 수정 시 자동으로 반영됩니다.

> **참고**:
>
> - `pnpm storybook`: 컴포넌트 개발 및 문서화용 (권장)
> - `pnpm dev`: 라이브러리 빌드용 (다른 프로젝트에서 링크로 사용할 때만 필요)

### 로컬 프로젝트에서 테스트

#### pnpm link

```bash
# 디자인 시스템 디렉토리에서
pnpm link --global

# 프로젝트 디렉토리에서
pnpm link --global @wiid-get/design-system
```

#### yalc

```bash
# yalc 설치 (전역)
npm install -g yalc

# 디자인 시스템 디렉토리에서
yalc push

# 프로젝트 디렉토리에서
yalc add @wiid-get/design-system
```

### 테스트

```bash
# 모든 테스트 실행
pnpm test

# UI 모드로 테스트 실행
pnpm test:ui

# 커버리지 리포트 생성
pnpm test:coverage
```

### 빌드

```bash
pnpm build
```

빌드된 파일은 `dist/` 디렉토리에 생성됩니다:

- `dist/index.js` - ESM 형식의 메인 컴포넌트 번들
- `dist/index.d.ts` - TypeScript 타입 정의 파일
- `dist/index.css` - 프리빌드된 CSS 스타일 파일
- `dist/{컴포넌트명}.js` - Optional dependency 컴포넌트 별도 번들

### npm 배포

이 라이브러리는 `package.json`의 `files` 필드를 사용하여 배포할 파일만 명시적으로 선언합니다:

- `dist/` - 빌드된 파일들 (CSS 파일 포함)
- `README.md` - 문서
- `LICENSE` - 라이선스

> **참고**: Tailwind v4 CSS-first 방식을 사용하므로, CSS 파일(`dist/index.css`)에 모든 테마 설정이 포함되어 있습니다.

---

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
