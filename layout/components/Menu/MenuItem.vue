<script setup lang="ts">
import type { AppMenuItem } from '@/stores/useMenu';
import MenuItem from '@/layout/components/Menu/MenuItem.vue'; // 這樣可以遞迴使用
import { computed } from 'vue';

const { menu, level } = defineProps<{
    menu: AppMenuItem
    level: number
}>();

// const router = useRouter();

const hasChildren = computed(() => {
    return menu.children && menu.children.length > 0;
});

function navigateToByMenu() {
    navigateTo({ name: menu.routeName });
}
</script>

<template>
    <!-- 如果有子選單，使用展開元件 -->
    <q-expansion-item v-if="hasChildren" :label="menu.label" :icon="menu.icon" :header-inset-level="level" :content-inset-level="level + 1" expand-separator>
        <q-list>
            <MenuItem v-for="child in menu.children" :key="child.key" :menu="child" :level=" level + 1" />
        </q-list>
    </q-expansion-item>

    <!-- 無子選單則直接使用 q-item -->
    <q-item v-else v-ripple clickable @click="navigateToByMenu">
        <q-item-section avatar>
            <q-icon :name="menu.icon" />
        </q-item-section>
        <q-item-section>
            {{ menu.label }}
        </q-item-section>
    </q-item>
</template>
