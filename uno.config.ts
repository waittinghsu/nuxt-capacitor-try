// uno.config.ts
import { defineConfig } from 'unocss'
import { kebabCase } from 'lodash-es'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// 定义前缀类型
const PREFIX_TYPES = ['bg', 'text', 'border']
const PREFIX = PREFIX_TYPES.join('|')

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
    ],
    theme: {
        colors: {
            primary: '#32ccbc',
            secondary: '#ff4081',
            warning: '#ff9800'
        }
    },
    preflights: [
        {
            getCSS({ theme }: { theme: { colors?: Record<string, string> } }) {
            return Object.entries(theme.colors || {})
                    .map(([key, value]) => {
                        if (typeof value === 'string' && value.startsWith('#')) {
                            return `--q-${kebabCase(key)}: ${value}`
                        }
                        return null
                    })
                    .filter(Boolean)
                    .join(';')
            }
        }
    ],
    rules: [
        // [/^custom-(.+)$/, ([, name]) => ({ color: `var(--q-${kebabCase(name)})` })],
        // ['custom-flex', { display: 'flex' }],
        // ['custom-grid', { display: 'grid' }],
        [
            new RegExp(`(${PREFIX})=(.*)$`),
            ([, prefix, value],{ theme }: { theme: { colors?: Record<string, string> } }) => {
                type CSSPropertyMap = {
                    [key in 'bg' | 'text' | 'border']: string;
                }

                const typeCssMap: CSSPropertyMap = {
                    bg: 'background-color',
                    text: 'color',
                    border: 'border-color',
                }

                const name = typeCssMap[prefix as keyof CSSPropertyMap]

                if (theme.colors?.[value]) {
                    return {
                        [name]: `${theme.colors[value]} !important`
                    }
                }
            }
        ]
    ],
    shortcuts: {
        'omega': 'px-4 py-2 rounded bg-primary text-white',
    },
})
