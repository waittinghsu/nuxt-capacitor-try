<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);
const form = ref({
    username: '',
    password: '',
});

function show() {
    isVisible.value = true;
}

function hide() {
    isVisible.value = false;
}

// 暴露方法給父元件使用
defineExpose({
    show,
    hide,
});

function onSubmit() {
    // TODO: 實作登入邏輯
    console.log('登入資料：', form.value);
}
</script>

<template>
    <q-dialog
        v-model="isVisible"
        position="bottom"
        :maximized="false"
        transition-show="slide-up"
        transition-hide="slide-down"
    >
        <q-card class="login-modal">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6 text-primary">
                    登入
                </div>
                <q-space />
                <q-btn v-close-popup icon="close" flat round dense />
            </q-card-section>

            <q-card-section class="q-pt-sm">
                <q-form class="q-gutter-md" @submit="onSubmit">
                    <q-input
                        v-model="form.username"
                        filled
                        label="帳號"
                        lazy-rules
                        :rules="[val => val && val.length > 0 || '請輸入帳號']"
                    >
                        <template #prepend>
                            <q-icon name="person" color="primary" />
                        </template>
                    </q-input>

                    <q-input
                        v-model="form.password"
                        filled
                        type="password"
                        label="密碼"
                        lazy-rules
                        :rules="[val => val && val.length > 0 || '請輸入密碼']"
                    >
                        <template #prepend>
                            <q-icon name="lock" color="primary" />
                        </template>
                    </q-input>

                    <div class="row justify-center q-mt-md">
                        <q-btn
                            label="登入"
                            type="submit"
                            color="primary"
                            class="full-width"
                            rounded
                            unelevated
                        />
                    </div>
                </q-form>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>

<style scoped>
.login-modal {
  width: 100%;
  max-width: 400px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

/* 在手機版時佔滿寬度 */
@media (max-width: 599px) {
  .login-modal {
    width: 100%;
    max-width: none;
  }
}
</style>
