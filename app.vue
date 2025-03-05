<script setup>
import material from '/assets/images/material-bg.png';
import MenuExpansionItem from '/layout/components/MenuExpansionItem';

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
console.log('menuList', menuList);
const menuList2 = [
    {
        key: 'userProfile',
        name: '個人中心',
        children: [
            {
                key: 'indexPage',
                name: '首頁Dashboard',
                children: [],
            },
        ],
    },
    {
        key: 'cmdb',
        name: '首页',
        children: [
            {
                key: 'indexPage',
                name: '首頁Dashboard',
                children: [],
            },
        ],
    },
    {
        key: 'businessManagement',
        name: '业务管理[new]',
        children: [
            {
                key: 'productConfigurable',
                name: '产品',
                children: [],
            },
            {
                key: 'moduleConfigurable',
                name: '模块',
                children: [

                ],
            },
            {
                key: 'businessConfigurable',
                name: '业务',
                children: [],
            },
        ],
    },
    {
        key: 'physicalMachineRoomManagement',
        name: '实体机房[new]',
        children: [
            {
                key: 'physicalMachineRoom',
                name: '实体机房',
                children: [],
            },
            {
                key: 'physicalEquipmentCabinet',
                name: '实体机柜',
                children: [],
            },
        ],
    },
    {
        key: 'platformMgmt',
        name: '平台管理',
        children: [
            {
                key: 'ruleMgmt',
                name: '权限管理',
                children: [],
            },
            {
                key: 'menuConfig',
                name: '菜单管理',
                children: [],
            },
            {
                key: 'apiAudit',
                name: 'API审计',
                children: [],
            },
            {
                key: 'deptMgmt',
                name: '部门管理',
                children: [],
            },
            {
                key: 'userMgmt',
                name: '用户管理',
                children: [],
            },
        ],
    },
];
console.log('menuList2', menuList2);
</script>

<template>
    <div class="">
        <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
            <q-header elevated>
                <q-toolbar class="glossy">
                    <q-btn flat round dense icon="menu" class="q-mr-sm" @click="drawer = !drawer" />
                    <q-avatar>
                        <img src="assets/svg/logo-light.svg">
                    </q-avatar>
                    <q-toolbar-title class="text-center">
                        Quasar Framework
                    </q-toolbar-title>
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
                    <q-tab name="images" label="Game" />
                    <q-tab name="videos" label="Videos" />
                    <q-tab name="articles" label="Articles" />
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
                    <q-list>
                        <MenuExpansionItem
                            v-for="(menu, index) in menuList2"
                            :key="index"
                            :menu="menu"
                        />
                    </q-list>
                </q-scroll-area>
                <q-img class="absolute-top" :src="material" style="height: 150px">
                    <div class="absolute-bottom bg-transparent">
                        <q-avatar size="56px" class="q-mb-sm">
                            <img src="assets/images/avatar.png">
                        </q-avatar>
                        <div class="text-weight-bold">
                            Razvan Stoenescu
                        </div>
                        <div>@rstoenescu</div>
                    </div>
                </q-img>
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
