import react from '@vitejs/plugin-react'
import path from 'path'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true }), tsconfigPaths(), preserveDirectives()],
  build: {
    cssCodeSplit: true, // CSS를 별도 파일로 추출하도록 강제
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'github-contributions': path.resolve(__dirname, 'src/github-contributions.ts'),
        'rotating-sphere': path.resolve(__dirname, 'src/rotating-sphere.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'next',
        'tailwindcss',
        'react/jsx-runtime',
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        'react-github-calendar',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // 배럴 export를 유지하면서 서버 컴포넌트를 지원하기 위한 핵심 설정
        preserveModules: true, // 파일을 합치지 말고 원본 구조대로 쪼개서 빌드
        preserveModulesRoot: 'src', // src 디렉토리를 기준으로 경로 유지
        entryFileNames: '[name].js', // index.js, Badge.js 등으로 이름 유지
      },
      // Tree-shaking 최적화
      treeshake: {
        moduleSideEffects: false, // 사용하지 않는 컴포넌트는 완전히 제거
      },
    },
  },
})
