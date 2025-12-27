# @wiid-get/design-system

Next.js를 위한 디자인 시스템 컴포넌트 라이브러리입니다.

## 📦 설치

```bash
pnpm add @wiid-get/design-system
# 또는
npm install @wiid-get/design-system
# 또는
yarn add @wiid-get/design-system
```

## 🚀 사용법

### Button 컴포넌트

```tsx
import { Button } from '@wiid-get/design-system'

export default function Page() {
  return (
    <div>
      <Button variant="primary" size="md">
        Click me
      </Button>
    </div>
  )
}
```

## 🎨 테마

이 디자인 시스템은 Light와 Dark 테마를 지원합니다. 테마는 CSS 변수를 통해 관리되며, `data-theme` 속성을 사용하여 전환할 수 있습니다.

```tsx
<div data-theme="dark">
  <Button>Dark Theme Button</Button>
</div>
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

빌드된 파일은 `dist/` 디렉토리에 생성됩니다.

## 📝 라이선스

ISC
