<script setup>
const tab = ref('images');
const drawer = ref(true);
const menuList = [
    {
        icon: 'inbox',
        label: '首頁',
        separator: true,
        to: '/',
    },
    {
        icon: 'send',
        label: '控制台',
        separator: false,
        to: '/dashboard', // 控制台

    },
    {
        icon: 'delete',
        label: '關於我們',
        separator: false,
        to: '/about', // 關於我們

    },
    {
        icon: 'error',
        label: '測試頁面',
        separator: true,
        to: '/test', // 測試頁面

    },
    {
        icon: 'settings',
        label: 'Settings',
        separator: false,
    },
    {
        icon: 'feedback',
        label: 'Send Feedback',
        separator: false,
    },
    {
        icon: 'help',
        iconColor: 'primary',
        label: 'Help',
        separator: false,
    },
];
</script>

<template>
    <div class="">
        <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
            <q-header elevated>
                <q-toolbar class="glossy">
                    <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer" />
                    <q-avatar>
                        <img src="assets/images/quasar.png">
                    </q-avatar>
                    <q-toolbar-title>Quasar Framework</q-toolbar-title>
                    <nav />
                    <q-btn flat round dense icon="whatshot" />
                </q-toolbar>
            </q-header>
            <q-page-container>
                <main>
                    <NuxtPage /> <!-- 必須保留，用於渲染子路由頁面 -->
                </main>
            </q-page-container>
            <q-footer bordered class="bg-grey-3 text-primary">
                <q-tabs v-model="tab" no-caps active-color="primary" indicator-color="transparent" class="text-grey-8">
                    <q-tab name="images" label="Images" />
                    <q-tab name="videos" label="Videos" />
                    <q-tab name="articles" label="Articles" />
                </q-tabs>
            </q-footer>
            <q-drawer
                v-model="drawer"
                :width="200"
                :breakpoint="500"
                overlay
                bordered
                :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
            >
                <q-scroll-area class="fit">
                    <q-list>
                        <template v-for="(menuItem, index) in menuList" :key="index">
                            <q-item v-ripple clickable :active="menuItem.label === 'Outbox'" @click="navigateTo(menuItem.to)">
                                <q-item-section avatar>
                                    <q-icon :name="menuItem.icon" />
                                </q-item-section>
                                <q-item-section>
                                    {{ menuItem.label }}
                                </q-item-section>
                            </q-item>
                            <q-separator v-if="menuItem.separator" :key="`sep${index}`" />
                        </template>
                    </q-list>
                </q-scroll-area>
            </q-drawer>
        </q-layout>
        <NuxtRouteAnnouncer />
    </div>
</template>

<style lang="scss" scoped>
//header {
//  background-color: #f4f4f4;
//  padding: 1em;
//}
nav a {
  margin-right: 1em;
  text-decoration: none;
  color: #333;
}
//footer {
//  text-align: center;
//  padding: 1em;
//  background: #f4f4f4;
//  margin-top: 2em;
//}
</style>
