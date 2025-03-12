// stores/useMenu.ts
import { defineStore } from 'pinia';
import { useRouteEnhancerStore } from './useRouteEnhancerStore';

// 定義選單項目的型別
interface MenuItem {
    key: string
    name?: string
    children?: MenuItem[]
}

// 定義經過補充後的選單項目型別
export interface AppMenuItem {
    key: string
    label: string
    icon: string
    routeName: string
    children: AppMenuItem[]
}

// 定義 store 的狀態介面
interface MenuState {
    menuList: MenuItem[]
    activeKey: string
    loading: boolean
}
export const useMenu = defineStore('menu', {
    state: (): MenuState => ({
        menuList: [
            {
                key: 'Dashboard',
                children: [],
            },
            {
                key: 'UserProfile',
                children: [],
            },
            {
                key: 'Account',
                children: [
                    {
                        key: 'Deposit',
                        children: [],
                    },
                    {
                        key: 'Withdrawal',
                        children: [],
                    },
                ],
            },
            {
                key: 'Activity',
                children: [],
            },
            {
                key: 'Report',
                children: [],
            },
            {
                key: 'Promo',
                children: [],
            },
            {
                key: 'VIP',
                children: [],
            },
            {
                key: 'FAQ',
                children: [],
            },
            {
                key: 'App_Test',
                children: [],
            },
        ] as MenuItem[],
        activeKey: '', // 當前選中的選單項目
        loading: false,
    }),

    getters: {
        appMenu(state): AppMenuItem[] {
            const routeEnhancer = useRouteEnhancerStore();
            function processMenus(menus: MenuItem[]): AppMenuItem[] {
                return menus.reduce<AppMenuItem[]>((result, item) => {
                    // 若找不到對應配置則跳過這個選項
                    const routeConfig = routeEnhancer.routeMetaConfig.get(item.key);
                    if (!routeConfig) {
                        return result;
                    }
                    const children
                        = item.children && item.children.length ? processMenus(item.children) : [];
                    result.push({
                        key: item.key,
                        label: routeConfig.meta.title,
                        icon: routeConfig.meta.icon,
                        routeName: routeConfig.routeName,
                        children,
                    });
                    return result;
                }, []);
            }
            return processMenus(state.menuList);
        },
    },

    actions: {
        // 如果之後需要從 API 獲取選單數據
        async fetchMenuList() {
            this.loading = true;
            try {
                // const response = await api.getMenuList()
                // this.menuList = response.data
            }
            catch (error) {
                console.error('Failed to fetch menu list:', error);
            }
            finally {
                this.loading = false;
            }
        },
    },
});
