<script setup lang="ts">
import type { AppMenuItem } from '@/stores/useMenu';
import MenuItem from './MenuItem.vue';

const { menu, level } = defineProps<{
    menu: AppMenuItem[]
    level: number
}>();
</script>

<template>
    <q-list>
        <MenuItem v-for="item in menu" :key="item.key" :menu="item" :level="level" />
    </q-list>
</template>
