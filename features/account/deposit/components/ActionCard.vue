// features/account/components/ActionGrid.vue
// 四個功能方塊的組件
<script setup lang="ts">
const actions = [
    { icon: 'upload', label: '導出' },
    { icon: 'add_circle', label: '入金' },
    { icon: 'star', label: '優惠' },
    { icon: 'favorite', label: '我的最愛' },
];
</script>

<template>
    <div class="row q-col-gutter-sm q-pa-md">
        <div v-for="action in actions" :key="action.label" class="col-3">
            <q-btn flat class="full-width" style="height: 80px">
                <div class="column items-center">
                    <q-icon :name="action.icon" size="24px" />
                    <div class="q-mt-sm text-caption">
                        {{ action.label }}
                    </div>
                </div>
            </q-btn>
        </div>
    </div>
</template>
