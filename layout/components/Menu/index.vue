<script setup lang="ts">
import type { AppMenuItem } from '@/stores/useMenu';
import MenuItem from './MenuItem.vue';

const { menu } = defineProps<{
    menu: AppMenuItem[]
}>();
</script>

<template>
    <q-list>
        <MenuItem v-for="item in menu" :key="item.key" :menu="item" />
    </q-list>
</template>
