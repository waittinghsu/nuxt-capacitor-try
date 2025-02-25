import { useRouter } from 'vue-router';

export default defineNuxtPlugin((nuxtApp) => {
    const router = useRouter(); // 獲取 router 實例

    // 添加一個全局導航守衛
    router.beforeEach((to, from) => {
        console.log('✨Global Middleware via Plugin:✨');
        console.log('From:', from.path, 'To:', to.path);
        // 示例：攔截訪問 "/forbidden" 頁面，並跳轉到 "/login"
        if (to.path === '/forbidden') {
            return '/login'; // 返回一個路徑地址
        }

        // 自定義更多邏輯...
        // 如果沒問題，直接返回 true 或 void
        return true;
    });
});
