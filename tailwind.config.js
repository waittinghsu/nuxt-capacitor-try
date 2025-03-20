import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
        './features/**/*.{js,vue,ts}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--q-primary)',
                    light: 'var(--q-primary-light)',
                    dark: 'var(--q-primary-dark)',
                     50: 'var(--q-primary-50)',
                    100: 'var(--q-primary-100)',
                    200: 'var(--q-primary-200)',
                    300: 'var(--q-primary-300)',
                    400: 'var(--q-primary-400)',
                    500: 'var(--q-primary-500)',
                    600: 'var(--q-primary-600)',
                    700: 'var(--q-primary-700)',
                    800: 'var(--q-primary-800)',
                    900: 'var(--q-primary-900)',
                },
                secondary: {
                    DEFAULT: 'var(--q-secondary)',
                    light: 'var(--q-secondary-light)',
                    dark: 'var(--q-secondary-dark)',
                    50: 'var(--q-secondary-50)',
                    100: 'var(--q-secondary-100)',
                    200: 'var(--q-secondary-200)',
                    300: 'var(--q-secondary-300)',
                    400: 'var(--q-secondary-400)',
                    500: 'var(--q-secondary-500)',
                    600: 'var(--q-secondary-600)',
                    700: 'var(--q-secondary-700)',
                    800: 'var(--q-secondary-800)',
                    900: 'var(--q-secondary-900)',
                },
                info: 'var(--q-info)',
                success: 'var(--q-success)',
                warning: 'var(--q-warning)',
                danger: 'var(--q-danger)',
                // primary: {
                //     50: '#f2ebff',
                //     100: '#e1d4ff',
                //     200: '#c4aaff',
                //     300: '#a178ff',  // hover 淺紫
                //     400: '#8a5aff',
                //     500: '#7A4EFF',  // 主色
                //     600: '#6a41e6',
                //     700: '#5C34C4',  // active 深紫
                //     800: '#4a28a1',
                //     900: '#391d7d',
                // },
                // secondary: {
                //     50: '#fff0f8',
                //     100: '#ffe0f0',
                //     200: '#ffc2e0',
                //     300: '#FFAFE0',  // 淺粉
                //     400: '#ff7acb',
                //     500: '#FF5ABD',  // 主粉
                //     600: '#e94ca3',
                //     700: '#cc3c88',
                //     800: '#a32c6b',
                //     900: '#7a1f4f',
                // },
                // neutral: {
                //     50: '#fafafa',
                //     100: '#f2f2f2',
                //     200: '#e5e5e5',
                //     300: '#d4d4d4',
                //     400: '#a3a3a3',
                //     500: '#737373',
                //     600: '#525252',
                //     700: '#404040',
                //     800: '#262626',
                //     900: '#1A1A1A',  // 用於深背景 or 文字
                // },
                // semantic: {
                //     success: '#2AD07E',
                //     warning: '#FFC542',
                //     danger: '#FF4D4F',
                //     info: '#4DAFFF',
                // },
            },
        },
    },
    plugins: [],
    prefix: 'tw-',
}

export default config
