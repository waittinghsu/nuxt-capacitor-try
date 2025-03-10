<script setup lang="ts">
// 模擬數據
function makeData(index: number) {
    return {
        level: `VIP ${index}`,
        betAmount: Math.floor(Math.random() * 1000000000),
        activeMember: Math.floor(Math.random() * 100),
        bonus: Math.floor(Math.random() * 1000),
    };
}
const data = Array.from({ length: 20 }).fill(1).map((val, index) => makeData(index));
// 分頁設定
const pagination = ref({
    sortBy: 'level',
    descending: false,
    page: 1,
    rowsPerPage: 50, // 每頁 50 筆
    rowsNumber: data.length,
});

// 表格列定義
const columns = [
    {
        name: 'level',
        label: '等級',
        field: 'level',
        align: 'left' as const, // 使用 as const 來固定
    },
    {
        name: 'betAmount',
        label: 'Bet Amount(PKR)',
        field: 'betAmount',
        align: 'right' as const, // 使用 as const 來固定
        format: (val: number) => `PKR $${val.toLocaleString()}`,
    },
    {
        name: 'activeMember',
        label: '活躍會員',
        field: 'activeMember',
        align: 'right' as const, // 使用 as const 來固定
    },
    {
        name: 'bonus',
        label: '獎金',
        field: 'bonus',
        align: 'right' as const, // 使用 as const 來固定
        format: (val: number) => `$${val.toLocaleString()}`,
    },
];
</script>

<template>
    <div class="q-pa-md">
        <div class="flex q-gutter-md q-gutter-sm justify-center">
            <span class="gradient-text text-h3">EARN YOU</span>
            <span class="gradient-text">PKR 1680000 WEEKLY</span>
        </div>
        <q-table
            :rows="data"
            :columns="columns"
            :pagination="pagination"
            row-key="level"
            dark
            flat
            bordered
            class="bg-deep-purple-5"
        >
            <template #header="props">
                <q-tr :props="props">
                    <q-th
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                        class="text-white"
                    >
                        {{ col.label }}
                    </q-th>
                </q-tr>
            </template>

            <template #body="props">
                <q-tr :props="props">
                    <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                        class="text-white"
                    >
                        {{ col.value }}
                    </q-td>
                </q-tr>
            </template>
        </q-table>
    </div>
</template>

<style lang="scss" scoped>
.q-table {
  th {
    font-weight: bold;
    font-size: 0.9em;  // 標題字體大小
  }

  td {
    font-size: 0.85em;  // 內容字體大小
  }

  // 調整 padding 使表格更緊湊
  :deep(.q-td), :deep(.q-th) {
    padding: 4px 8px;
  }
}

// 調整標題大小
.text-h6 {
  font-size: 1.1em;
}
.gradient-text {
  font-weight: bold;
  background: linear-gradient(180deg, #ffcc4d, #d8860b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}
</style>
