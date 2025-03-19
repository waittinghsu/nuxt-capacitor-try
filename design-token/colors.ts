// colors.ts
export const baseColors = {
    primary: {
        50: '#f2ebff',
        100: '#e1d4ff',
        200: '#c4aaff',
        300: '#a178ff',  // hover 淺紫
        400: '#8a5aff',
        500: '#7A4EFF',  // 主色
        600: '#6a41e6',
        700: '#5C34C4',  // active 深紫
        800: '#4a28a1',
        900: '#391d7d',
    },
    secondary: {
        50: '#fff0f8',
        100: '#ffe0f0',
        200: '#ffc2e0',
        300: '#FFAFE0',  // 淺粉
        400: '#ff7acb',
        500: '#FF5ABD',  // 主粉
        600: '#e94ca3',
        700: '#cc3c88',
        800: '#a32c6b',
        900: '#7a1f4f',
    },
    neutral: {
        50: '#fafafa',
        100: '#f2f2f2',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#1A1A1A',  // 用於深背景 or 文字
    },
    semantic: {
        success: '#2AD07E',
        warning: '#FFC542',
        danger: '#FF4D4F',
        info: '#4DAFFF',
    },
    gradient: {
        purplePink: 'linear-gradient(90deg, #7A4EFF 0%, #FF7ACB 100%)',
        bluePurple: 'linear-gradient(90deg, #4DAFFF 0%, #7A4EFF 100%)',
    },
} as const;
