// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // 關閉 SSR（不啟用服務端渲染）
  nitro: {
    preset: 'static' // 替代原來的 target: 'static'
  },
  devServer: {
    port: 6969 // 推荐使用 devServer
  },
  // 確保啟用 Vite
  vite: {
    // 如果需要自定義配置，可以在這裡添加
    optimizeDeps: {
      include: ['vue', 'vue-router']
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
