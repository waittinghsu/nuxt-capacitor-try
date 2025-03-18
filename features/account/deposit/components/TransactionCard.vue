// features/account/components/TransactionCard.vue
// 交易卡片組件
<script setup lang="ts">
defineProps<{
    title: string
    amount: number
    description: string
    progress: number
}>();
</script>

<template>
    <q-card flat class="q-mb-sm bg-deep-purple-6">
        <q-card-section>
            <div class="row justify-between items-center">
                <div class="text-subtitle1">
                    {{ title }}
                </div>
                <div class="text-h6">
                    {{ amount }}
                </div>
            </div>
            <div class="text-caption q-mt-sm" style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;">
                {{ description }}
            </div>
            <q-linear-progress class="q-mt-sm" :value="progress" />
        </q-card-section>
    </q-card>
</template>
