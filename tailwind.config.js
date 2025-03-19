/** @type {import('tailwindcss').Config} */
import { baseColors } from './design-tokens/colors'

export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
        // 添加 features 目錄
        './features/**/*.{js,vue,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: baseColors.primary,
                secondary: baseColors.secondary,
                neutral: baseColors.neutral,
                semantic: baseColors.semantic,
            },
        },
    },
    plugins: [],
    prefix: 'tw-',
}
