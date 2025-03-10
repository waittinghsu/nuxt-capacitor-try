// stores/useMenu.ts
import { defineStore } from 'pinia';

// 定義選單項目的型別
interface MenuItem {
    key: string
    name: string
    children?: MenuItem[]
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
                name: '首页',
                children: [],
            },
            {
                key: 'UserProfile',
                name: '個人中心',
                children: [],
            },
            {
                key: 'Account',
                name: '帳務管理',
                children: [
                    {
                        key: 'Deposit',
                        name: '存款',
                        children: [],
                    },
                    {
                        key: 'Withdrawal',
                        name: '提款',
                        children: [],
                    },
                ],
            },
            {
                key: 'Activity',
                name: '活动',
                children: [],
            },
            {
                key: 'Report',
                name: '報表',
                children: [],
            },
            {
                key: 'Promo',
                name: '促銷',
                children: [],
            },
            {
                key: 'VIP',
                name: 'VIP',
                children: [],
            },
            {
                key: 'FAQ',
                name: 'FAQ',
                children: [],
            },
        ] as MenuItem[],
        activeKey: '', // 當前選中的選單項目
        loading: false,
    }),

    getters: {

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
