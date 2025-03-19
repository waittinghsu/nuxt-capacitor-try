// themes/default.ts
import { baseColors } from '../colors'

export const defaultTheme = {
    name: 'default',
    colors: {
        // 基礎色彩
        primary: baseColors.primary,
        secondary: baseColors.secondary,
        neutral: baseColors.neutral,

        // 語義化顏色
        semantic: baseColors.semantic,

        // 功能性顏色映射
        background: baseColors.neutral[50],
        surface: '#ffffff',
        text: {
            primary: baseColors.neutral[900],
            secondary: baseColors.neutral[600],
        },
        border: baseColors.neutral[200],

        // 狀態顏色
        states: {
            hover: baseColors.primary[300],
            active: baseColors.primary[700],
            disabled: baseColors.neutral[300],
        },
    },
} as const;
