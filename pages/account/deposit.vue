<!-- pages/account/deposit.vue -->
<script setup lang="ts">
import type { Card, Transaction } from '@/features/account/deposit/types';
import ActionGrid from '@/features/account/deposit/components/ActionCard.vue';
import BalanceDisplay from '@/features/account/deposit/components/BalanceDisplay.vue';
import SlideItem from '@/features/account/deposit/components/SlideItem.vue';
import TransactionCard from '@/features/account/deposit/components/TransactionCard.vue';
import { ref } from 'vue';

const totalBalance = ref<number>(100000);

const transactions = ref<Transaction[]>([
    {
        title: '定期存款',
        amount: 50000,
        description: '這是一個長期定期存款，年利率3.5%，期限12個月',
        progress: 0.3,
    },
    {
        title: '定期存款',
        amount: 50000,
        description: '這是一個長期定期存款，年利率3.5%，期限12個月',
        progress: 0.3,
    },
    {
        title: '定期存款',
        amount: 50000,
        description: '這是一個長期定期存款，年利率3.5%，期限12個月',
        progress: 0.3,
    },
    {
        title: '定期存款',
        amount: 50000,
        description: '這是一個長期定期存款，年利率3.5%，期限12個月',
        progress: 0.3,
    },
    // ... 更多交易記錄
]);
const cardList = ref<Card[]>([
    {
        name: 'FB',
        title: 'FuBon Bank',
        info: 'OMIYAGE',
    },
    {
        name: 'EB',
        title: 'E.SUN Bank',
        info: 'StarLux',
    },
    {
        name: 'CB',
        title: 'Cathay Bank',
        info: 'Cube',
    },
]);
</script>

<template>
    <q-page>
        <!-- 上半部深色區域 -->
        <div class="bg-grey-10">
            <BalanceDisplay :balance="totalBalance" />

            <!-- 滑動項目 -->
            <SlideItem :card-list="cardList" />

            <!-- 功能方塊 -->
            <ActionGrid />
        </div>

        <!-- 下半部淺色區域 -->
        <div class="bg-deep-purple-2 q-pa-md">
            <TransactionCard
                v-for="(transaction, index) in transactions"
                :key="index"
                v-bind="transaction"
            />
        </div>
    </q-page>
</template>

<style lang="scss" scoped>
.q-page {
  background: var(--q-dark);
}

.bg-grey-1 {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
