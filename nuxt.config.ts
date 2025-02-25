export default defineNuxtConfig({
    ssr: false,   // 關閉 SSR → 只在 Client 端進行渲染
    nitro: {
        preset: 'static' // 替代原來的 target: 'static'
    },
    devServer: {
        port: 6969 // 推荐使用 devServer
    },
    // 加載模塊
    modules: [
        '@pinia/nuxt',
    ],
    alias: {
    },
    // 基本應用配置
    app: {
        baseURL: '/', // 設置靜態部署時的基礎路徑
    },
    // 開發工具
    devtools: {
        enabled: true,
    },
    // PostCSS 和全局樣式支持
    css: [
        '@/assets/css/main.css',
        // Quasar 基本樣式
        'quasar/dist/quasar.css',
        // 其它 Quasar 需要的圖示、或不同風格
        '@quasar/extras/material-icons/material-icons.css',

    ], // 示例：加載全局樣式
    postcss: {
        plugins: {
            autoprefixer: {},
        },
    },
    build: {
        transpile: [
            'quasar',
        ],
    },
    compatibilityDate: '2025-02-04',
    vite: {
        css: {
            devSourcemap: true,
        },
        ssr: {
            noExternal: ['@capacitor/core', '@capacitor/cli', '@capacitor/ios', 'quasar'],
        },
        // 如果需要自定義配置，可以在這裡添加
        optimizeDeps: {
            include: ['vue', 'vue-router']
        }
    },

});
