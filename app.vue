<script setup>
import { useMenu } from '@/stores/useMenu';
import LoginModal from '~/components/auth/LoginModal.vue';
import material from '/assets/images/material-bg.png';
import Menu from '/layout/components/Menu';

const menuStore = useMenu();
// 使用 storeToRefs 來保持響應性
const { appMenu } = storeToRefs(menuStore);
console.log('appMenu', appMenu.value);
const tab = ref('images');
const drawer = ref(true);

// 登入框相關
const loginModal = ref(null);
function showLoginModal() {
    loginModal.value?.show();
}
</script>

<template>
    <div class="bg-gradient-to-br from-primary to-secondary min-h-screen">
        <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
            <q-header elevated>
                <!-- 狀態列空間 -->
                <div class="status-bar" />
                <!-- 實際工具列 -->
                <q-toolbar class="glossy">
                    <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer" />
<!--                    <q-avatar>-->
<!--                        <img src="assets/svg/logo-light.svg">-->
<!--                    </q-avatar>-->
                    <q-toolbar-title class="text-center">
                        Quasar Framework
                    </q-toolbar-title>
                    <nav />
                    <q-btn flat round dense icon="whatshot" @click="showLoginModal" />
                </q-toolbar>
            </q-header>
            <q-page-container class="">
                <NuxtPage /> <!-- 必須保留，用於渲染子路由頁面 -->
            </q-page-container>
            <q-footer bordered class="">
                <q-tabs
                    v-model="tab" no-caps
                    active-color="secondary"
                    indicator-color="transparent" class="text-white footer-tabs"
                >
                    <q-route-tab icon="home" name="Home" label="Home" to="/" exact/>
<!--                    <q-tab name="Home" icon="home" label="Home" />-->
                    <q-route-tab icon="redeem" name="Promo" label="Promo" to="/promo" exact/>
<!--                    <q-tab name="Promo" icon="redeem" label="Promo" />-->
                    <q-tab name="Get" icon="coronavirus" label="Get 500" class="text-h5" />
                    <q-route-tab icon="savings" name="Earn" label="Earn" to="/account/deposit" exact/>
<!--                    <q-tab name="Earn" icon="savings" label="Earn" />-->
                    <q-tab name="Mine" icon="person" label="Mine" />
                </q-tabs>
            </q-footer>
            <q-drawer
                v-model="drawer"
                :width="200"
                :breakpoint="500"
                show-if-above
                bordered
                :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
            >
                <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
                    <Menu :menu="appMenu" :level="0" is-root />
                </q-scroll-area>
                <q-img class="absolute-top" :src="material" style="height: 150px">
                    <div class="absolute-bottom bg-transparent">
                        <q-avatar size="56px" class="q-mb-sm">
                            <img src="assets/images/avatar.png">
                        </q-avatar>
                        <div class="text-weight-bold">
                            Razvan Hsu
                        </div>
                        <div>@101Admin</div>
                    </div>
                </q-img>
            </q-drawer>
        </q-layout>
        <LoginModal ref="loginModal" />
        <NuxtRouteAnnouncer />
    </div>
</template>

<style lang="scss" scoped>
nav a {
  margin-right: 1em;
  text-decoration: none;
  color: #333;
}

.mobile-header {
  /* 適應頂部安全區域 */
  padding-top: env(safe-area-inset-top);
  /* 背景延伸到狀態列 */
  background-color: #1976d2;
}
.status-bar {
  height: env(safe-area-inset-top);
}

/* 確保內容不會被頂部遮住 */
.q-page-container {
  padding-top: calc(50px + env(safe-area-inset-top));
}

:deep(.footer-tabs) {
  .q-tabs__content {
    overflow: visible !important;
    .q-tab:nth-child(3) {
      i {
        position: absolute;
        top: -31px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 60px;
        background-color: var(--q-primary-700);
        width: 77px;
        height: 32px;
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
      }
      .q-tab__label {
        font-size: 20px;
      }
    }
  }
}
</style>
