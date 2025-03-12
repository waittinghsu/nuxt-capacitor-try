<script setup lang="ts">
import type { AppMenuItem } from '@/stores/useMenu';
import MenuItem from '@/layout/components/Menu/MenuItem.vue'; // 這樣可以遞迴使用
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{
    menu: AppMenuItem
}>();

const router = useRouter();

const hasChildren = computed(() => {
    return props.menu.children && props.menu.children.length > 0;
});

function navigateTo() {
    router.push(props.menu.route);
}
</script>

<template>
    <!-- 如果有子選單，使用展開元件 -->
    <q-expansion-item v-if="hasChildren" :label="menu.label" :icon="menu.icon" expand-separator>
        <q-list>
            <MenuItem v-for="child in menu.children" :key="child.key" :menu="child" />
        </q-list>
    </q-expansion-item>

    <!-- 無子選單則直接使用 q-item -->
    <q-item v-else v-ripple clickable @click="navigateTo">
        <q-item-section avatar>
            <q-icon :name="menu.icon" />
        </q-item-section>
        <q-item-section>
            {{ menu.label }}
        </q-item-section>
    </q-item>
</template>
