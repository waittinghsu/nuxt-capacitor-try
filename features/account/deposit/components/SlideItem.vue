// features/account/components/SlideItem.vue
// 滑動項目組件
<script setup lang="ts">
const { title, amount } = defineProps<{
    title: string
    amount: number
}>();
</script>

<template>
    <q-slide-item>
        <template #default>
            <q-card flat class="full-width q-pa-md">
                <div class="row items-center justify-between">
                    <div class="text-subtitle1">
                        {{ title }}
                    </div>
                    <div class="text-h6">
                        {{ amount }}
                    </div>
                </div>
            </q-card>
        </template>
    </q-slide-item>
</template>
