export default defineNuxtRouteMiddleware(async (to, from) => {
    console.log('➜Middleware triggered: from', from.path || 'SSR 加載', 'to', to.path);

    if (to.path === '/') {
        console.log('Redirecting to /dashboard...')
        return navigateTo('/dashboard'); // 重定向邏輯
    }
});
