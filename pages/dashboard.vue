<script setup lang="ts">
import { ref } from 'vue';
import cardImg from '/assets/images/0614.jpg';

// 計數功能
const count = ref(0);
function incrementCount() {
    count.value++;
}
// 管理 Chips 動態列表
const chips = ref([
    'Vue.js',
    'Quasar',
    'Nuxt.js',
    'capacity.js',
    'gsap',
    'axios',
]);

const newChip = ref('');

function addChip() {
    if (newChip.value.trim() !== '') {
        chips.value.push(newChip.value.trim());
        newChip.value = '';
    }
}
// 範例：刪除最後一個
function removeLastChip() {
    if (chips.value.length > 0) {
        chips.value.pop();
    }
}
</script>

<template>
    <div class="dashboard-page q-pa-md">
        <div class="flex column">
          <span class="q-mx-auto tw-font-bold tw-text-3xl">{{ count }}</span>
          <q-btn color="primary" @click="incrementCount">
            incrementCount
          </q-btn>
        </div>
        <!-- 上方 work 區塊，用來操作 chips -->
        <section class="q-mb-md">
            <h3>Work Section</h3>
            <div class="q-my-sm row items-center">
                <!-- QInput 輸入要新增的 chip 名稱 -->
                <div class="col-12 col-sm-6 q-mb-sm">
                    <q-input
                        v-model="newChip"
                        label="輸入新的 Chip"
                        filled
                        dense
                    />
                </div>

                <!-- 新增按鈕 -->
                <div class="col-12 col-sm-3 q-mb-sm">
                    <q-btn
                        label="新增 Chip"
                        color="primary"
                        class="full-width"
                        @click="addChip"
                    />
                </div>

                <!-- 移除按鈕（示範用，可自行設計要移除哪個 chip） -->
                <div class="col-12 col-sm-3 q-mb-sm">
                    <q-btn
                        label="移除最後一個 Chip"
                        color="negative"
                        class="full-width"
                        @click="removeLastChip"
                    />
                </div>
            </div>
        </section>

        <!-- 卡片列表區塊，根據 chips 動態產生 -->
        <div class="row q-col-gutter-md q-col-gutter-sm">
            <div
                v-for="(chip, index) in chips"
                :key="index"
                class="col-12 col-md-4 q-mb-md"
            >
                <q-card>
                    <!-- 上方滿版圖片 -->
                    <!--          <img src="/assets/images/0614.jpg" alt=""> -->
                    <q-img
                        :src="cardImg"
                        style="height: 350px;"
                        :alt="chip"
                        :title="chip"
                        class="cursor-pointer"
                    />

                    <!-- 下方卡片內容：顯示 chip 名稱 -->
                    <q-card-section>
                        <div class="text-h6">
                            {{ chip }}
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
