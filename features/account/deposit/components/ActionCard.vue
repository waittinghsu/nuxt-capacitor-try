// features/account/components/ActionGrid.vue
// 四個功能方塊的組件
<script setup lang="ts">
const actions = [
    { icon: 'upload', label: 'Upload' },
    { icon: 'savings', label: 'Virtual Card' },
    { icon: 'style', label: '優惠' },
    { icon: 'diversity_1', label: '我的最愛' },
];
</script>

<template>
    <div class="row q-col-gutter-sm q-pa-md bg-deep">
        <div v-for="action in actions" :key="action.label" class="col-3">
            <q-btn class="full-width shadow-9" color="black" no-caps style="height: 80px; border-radius: 16px;">
                <div class="column items-center">
                    <q-icon color="purple" :name="action.icon" size="36px" />
                </div>
            </q-btn>
            <div class="q-mt-sm text-caption text-center">
                {{ action.label }}
            </div>
        </div>
    </div>
</template>
