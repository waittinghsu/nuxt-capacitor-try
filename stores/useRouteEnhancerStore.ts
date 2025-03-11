import type { RouteRecordNormalized } from 'vue-router';
// stores/routeEnhancerStore.ts
import { defineStore } from 'pinia';

interface RouteMetaConfigItem {
    alias: string
    meta: {
        title: string
        icon: string
        [key: string]: any
    }
}
export const useRouteEnhancerStore = defineStore('routeEnhancer', {
    state: () => ({
        // 例如將 routeMetaConfig 放入 state 中
        routeMetaConfig: new Map<string, RouteMetaConfigItem>([
            ['account-deposit', { alias: 'Deposit', meta: { title: '入金', icon: 'exchange' } }],
            // 其他設定
        ]),
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
