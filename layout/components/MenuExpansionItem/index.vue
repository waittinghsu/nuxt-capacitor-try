<!-- components/MenuExpansionItem.vue -->
<script setup>
import MenuExpansionItem from '/layout/components/MenuExpansionItem';

const props = defineProps({
    menu: {
        type: Object,
        required: true,
    },
});
console.log('props', props);
function getIcon(key) {
    const iconMap = {
        userProfile: 'person',
        cmdb: 'dashboard',
        businessManagement: 'business',
        physicalMachineRoomManagement: 'storage',
        platformMgmt: 'settings',
        indexPage: 'home',
        productConfigurable: 'category',
        moduleConfigurable: 'widgets',
        businessConfigurable: 'work',
        physicalMachineRoom: 'computer',
        physicalEquipmentCabinet: 'computer',
        ruleMgmt: 'lock',
        menuConfig: 'menu',
        apiAudit: 'api',
        deptMgmt: 'group',
        userMgmt: 'group',
    };
    return iconMap[key] || 'menu';
}

function navigateTo(item) {
    // 根据 key 定义路由映射
    const routeMap = {
        indexPage: '/dashboard',
        userProfile: '/profile',
        productConfigurable: '/product',
        moduleConfigurable: '/module',
        businessConfigurable: '/business',
        physicalMachineRoom: '/machine-room',
        physicalEquipmentCabinet: '/equipment-cabinet',
        ruleMgmt: '/permissions',
        menuConfig: '/menu-config',
        apiAudit: '/api-audit',
        deptMgmt: '/department',
        userMgmt: '/users',
    };

    const route = routeMap[item.key];
    if (route) {
        navigateTo(route);
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
