import type { RouteRecordNormalized } from 'vue-router';
// stores/routeEnhancerStore.ts
import { defineStore } from 'pinia';

export interface RouteMetaConfigItem {
    alias: string
    route: string
    meta: {
        title: string
        icon: string
        [key: string]: any
    }
}
// title 只是方便前端看這路由是什麼名字 到時候會用多語系檔來讀文字
const routeConfig: RouteMetaConfigItem[] = [
    { alias: 'App_Test', route: 'test', meta: { title: '測試頁面', icon: 'quiz' } },
    { alias: 'Dashboard', route: 'dashboard', meta: { title: 'Dashboard', icon: 'home' } },
    { alias: 'UserProfile', route: 'profile', meta: { title: '個人中心', icon: 'person' } },
    { alias: 'Account', route: 'account', meta: { title: '帳務管理', icon: 'paid' } },
    { alias: 'Deposit', route: 'account-deposit', meta: { title: '存款', icon: 'currency_exchange' } },
    { alias: 'Withdrawal', route: 'account-withdrawal', meta: { title: '提款', icon: 'sell' } },
    { alias: 'Activity', route: 'activity', meta: { title: '活动', icon: 'currency_bitcoin' } },
    { alias: 'Promo', route: 'promo', meta: { title: '促銷', icon: 'flood' } },
    { alias: 'Report', route: 'report', meta: { title: '報表', icon: 'description' } },
    { alias: 'VIP', route: 'vip', meta: { title: 'VIP', icon: 'star' } },
    { alias: 'FAQ', route: 'about', meta: { title: 'FAQ', icon: 'help' } },
];
export const useRouteEnhancerStore = defineStore('routeEnhancer', {
    state: () => ({
        // 重組資料方便後續 給processRoute以及 processMenu 查找
        routeMetaConfig: new Map<string, RouteMetaConfigItem>(routeConfig.reduce((acc: [string, RouteMetaConfigItem][], routeObj) => {
            acc.push([routeObj.alias, routeObj]);
            acc.push([routeObj.route, routeObj]);
            return acc;
        }, [])),
    }),
    actions: {
        processRoute(route: RouteRecordNormalized): RouteRecordNormalized {
            let enhancedMeta = { ...route.meta };
            if (typeof route.name === 'string' && this.routeMetaConfig.has(route.name)) {
                const config = this.routeMetaConfig.get(route.name);
                if (config) {
                    enhancedMeta = { ...enhancedMeta, ...config.meta, alias: config.alias };
                }
            }
            return {
                ...route,
                meta: enhancedMeta,
                children: Object.prototype.toString.call(route.children) === '[object Object]' && route.children.length > 0
                    ? route.children.map((child: any) => this.processRoute(child as RouteRecordNormalized))
                    : [],
            };
        },
    },
});
