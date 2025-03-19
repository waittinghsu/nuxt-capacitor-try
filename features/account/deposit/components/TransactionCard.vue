// features/account/components/TransactionCard.vue
// 交易卡片組件
<script setup lang="ts">
import { useQuasar } from 'quasar';

defineProps<{
    title: string
    amount: number
    description: string
    progress: number
}>();
const $q = useQuasar();
const slideItemRef = ref<any>(null); // 用於存儲 q-slide-item 的引用

function handleLeftSlide() {
    $q.notify('Left action triggered. Resetting in 1 second.');
    setTimeout(() => {
        slideItemRef.value?.reset();
    }, 2000);
}
</script>

<template>
    <q-slide-item ref="slideItemRef" class="transparent q-mb-sm" left-color="deep-purple-3" @left="handleLeftSlide">
        <template #left>
            <div class="row items-center">
                Right content.. long <q-icon right name="alarm" />
            </div>
        </template>
        <q-card flat class="bg-deep-purple-6">
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
    </q-slide-item>
</template>
