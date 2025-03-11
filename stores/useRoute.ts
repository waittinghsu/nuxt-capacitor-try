// stores/router.ts
import { defineStore } from 'pinia';

/**
 * 自動生成的路由基本型別
 */
export interface AppRoute {
    path: string
    name: string
    meta?: Record<string, any>
    redirect?: string
    hidden?: boolean
    children?: AppRoute[]
}
// Dashboard: { icon: 'home', route: '/dashboard' },
// UserProfile: { icon: 'person', route: '/profile' },
// Account: { icon: 'paid', route: '/account' },
// Deposit: { icon: 'exchange', route: '/account/deposit' },
// Withdrawal: { icon: 'bitcoin', route: '/account/withdrawal' },
// Activity: { icon: 'sell', route: '/activity' },
// Report: { icon: 'description', route: '/report' },
// Promo: { icon: 'flood', route: '/promo' },
// VIP: { icon: 'star', route: '/vip' },
// FAQ: { icon: 'help', route: '/about' },
// Test: { icon: '', route: '/test' },
interface RouteMetaConfigItem {
    alias: string
    meta: {
        title: string
        icon: string
        [key: string]: any
    }
}

const routeMetaConfig = new Map<string, RouteMetaConfigItem>([
    ['test', { alias: 'App_Test', meta: { title: '測試頁面', icon: 'help' } }],
    ['dashboard', { alias: 'Dashboard', meta: { title: 'Dashboard', icon: 'home' } }],
    ['account-deposit', { alias: 'Deposit', meta: { title: '入金', icon: 'exchange' } }],
]);

// 測試取值
console.log(routeMetaConfig.get('test'));

function filterRoutes(
    routes: AppRoute[],
    permissions: Record<string, boolean>,
): AppRoute[] {
    const res: AppRoute[] = [];
    routes.forEach((route) => {
        // 若權限中指定該路由不可用，直接跳過
        if (Object.prototype.hasOwnProperty.call(permissions, route.name) && !permissions[route.name]) {
            return;
        }

        // 複製當前路由，避免直接修改原配置
        const tmp: AppRoute = { ...route };
        if (tmp.children && tmp.children.length > 0) {
            tmp.children = filterRoutes(tmp.children, permissions);
        }
        res.push(tmp);
    });
    return res;
}

export const useRouterStore = defineStore('router', {
    state: () => ({
        // 將 Nuxt3 自動生成的全部路由存放在此
        autoRoutes: [] as AppRoute[],
        // 根據權限過濾後的路由配置
        filteredRoutes: [] as AppRoute[],
        routeMetaConfig,
    }),
    actions: {
        /**
         * 從 Vue Router 實例中獲取目前所有自動生成的路由配置
         */
        fetchAutoRoutes() {

        },
        /**
         * 根據權限物件過濾自動生成的路由
         * @param permissions 例如 { cmdb: true, indexPage: false, userProfile: true }
         */
        setRouters(permissions: Record<string, boolean>) {
            // 若 autoRoutes 還沒獲取，先調用 fetchAutoRoutes
            if (this.autoRoutes.length === 0) {
                this.fetchAutoRoutes();
            }
            this.filteredRoutes = filterRoutes(this.autoRoutes, permissions);
            console.log('根據權限過濾後的路由：', this.filteredRoutes);
        },
    },
});
