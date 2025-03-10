<!-- components/MenuExpansionItem.vue -->
<script setup>
import MenuExpansionItem from '/layout/components/MenuExpansionItem';

// eslint-disable-next-line unused-imports/no-unused-vars
const props = defineProps({
    menu: {
        type: Object,
        required: true,
    },
});

const router = useRouter();

function getIcon(key) {
    const iconMap = {
        Dashboard: 'home',
        UserProfile: 'person',
        Account: 'paid',
        Deposit: 'exchange',
        Withdrawal: 'bitcoin',
        Activity: 'sell',
        Report: 'description',
        Promo: 'flood',
        VIP: 'star',
        FAQ: 'help',
    };
    return iconMap[key] || 'menu';
}

function navigateTo(item) {
    // 根据 key 定义路由映射
    const routeMap = {
        UserProfile: '/profile',
        Dashboard: '/dashboard',
        account: '/account',
        Deposit: '/account/deposit',
        Withdrawal: '/account/withdrawal',
        Activity: '/activity',
        Report: '/report',
        Promo: '/promo',
        VIP: '/vip',
        FAQ: '/about',
    };

    const route = routeMap[item.key];
    if (route) {
        router.push(route);
    }
}
</script>

<template>
    <q-expansion-item
        v-if="menu.children && menu.children.length"
        :label="menu.name"
        :icon="getIcon(menu.key)"
        expand-separator
    >
        <q-list>
            <template v-for="(child, index) in menu.children" :key="index">
                <MenuExpansionItem
                    v-if="child.children && child.children.length"
                    :menu="child"
                />
                <q-item
                    v-else
                    v-ripple
                    clickable
                    @click="navigateTo(child)"
                >
                    <q-item-section avatar>
                        <q-icon :name="getIcon(child.key)" />
                    </q-item-section>
                    <q-item-section>
                        {{ child.name }}
                    </q-item-section>
                </q-item>
            </template>
        </q-list>
    </q-expansion-item>

    <q-item
        v-else
        v-ripple
        clickable
        @click="navigateTo(menu)"
    >
        <q-item-section avatar>
            <q-icon :name="getIcon(menu.key)" />
        </q-item-section>
        <q-item-section>
            {{ menu.name }}
        </q-item-section>
    </q-item>
</template>
