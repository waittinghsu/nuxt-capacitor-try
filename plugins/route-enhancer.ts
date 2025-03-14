import { useRouteEnhancerStore } from '@/stores/useRouteEnhancerStore';
import { useRouter } from 'vue-router';

export default defineNuxtPlugin(() => {
    const router = useRouter();
    const enhancerStore = useRouteEnhancerStore();

    // 在路由初始化後，遍歷並處理所有路由資料
    router.getRoutes().forEach((route) => {
        const newRoute = enhancerStore.processRoute(route);
        // 根據需求，若路由有 name 就移除原路由並新增帶加工後的路由
        if (typeof route.name === 'string') {
            // console.log(route.name, newRoute);
            router.removeRoute(route.name);
            router.addRoute(newRoute);
        }
    });
});
