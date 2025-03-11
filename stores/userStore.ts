import { defineStore } from 'pinia';

interface User {
    id: number
    name: string
    email: string
}

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [] as User[],
    }),
    actions: {
        async fetchUsers() {
            // 模擬從 API 獲取數據
            this.users = await $fetch('/api/v1/users');
        },
        async fetchUserById(id: number): Promise<User | undefined> {
            // 模擬從 API 獲取用戶詳細數據
            const users = await $fetch('/api/users');
            return (users as User[]).find((user: User) => user.id === id);
        },
    },
});
