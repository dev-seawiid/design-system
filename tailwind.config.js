// 디자인 시스템 내부 개발용
import tailwindPreset from './tailwind.preset.js';

/** @type {import('tailwindcss').Config} */
const config = {
  // theme.extend, prefix 내용을 전부 삭제하고 presets로 대체
  presets: [tailwindPreset], 
  // 내부 개발용 경로만 남김
  content: ['./src/**/*.{ts,tsx}'],
}

export default config
