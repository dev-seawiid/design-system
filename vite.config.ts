import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true }), tsconfigPaths()],
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
      },
    },
  },
})
