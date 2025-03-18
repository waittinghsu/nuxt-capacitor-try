// features/account/components/BalanceDisplay.vue
// 用於顯示用戶餘額的組件
<script setup lang="ts">
const { balance } = defineProps<{
    balance: number
}>();
</script>

<template>
    <div class="balance-display q-pa-md text-center text-white">
        <div class="text-h6">
            總計餘額
        </div>
        <div class="text-h4">
            {{ balance }}
        </div>
    </div>
</template>
