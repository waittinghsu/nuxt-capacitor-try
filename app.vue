<script setup>
const tab = ref('images');
</script>

<template>
    <div class="">
        <q-layout view="lHh lpr lFf" container style="height: 100vh" class="shadow-2 rounded-borders">
            <q-header elevated>
                <q-toolbar class="glossy">
                    <q-btn flat round dense icon="menu" class="q-mr-sm" />
                    <q-avatar>
                        <img src="assets/images/cdn.png">
                    </q-avatar>
                    <q-toolbar-title>Quasar Framework</q-toolbar-title>
                    <nav>
                        <!--            <NuxtLink to="/" exact>首頁</NuxtLink> -->
                        <!--            <NuxtLink to="/dashboard" exact>控制台(Dashboard)</NuxtLink> -->
                        <!--            <NuxtLink to="/about" exact>關於我們</NuxtLink> -->
                        <!--            <NuxtLink to="/test" exact>TEST</NuxtLink> -->
                    </nav>
                    <q-btn flat round dense icon="whatshot" />
                </q-toolbar>
            </q-header>
            <q-page-container>
                <main>
                    <NuxtPage /> <!-- 必須保留，用於渲染子路由頁面 -->
                </main>
            </q-page-container>
            <q-footer bordered class="bg-grey-3 text-primary">
                <!--                <q-toolbar class="glossy"> -->
                <!--                    <q-toolbar-title>Footer</q-toolbar-title> -->
                <!--                </q-toolbar> -->
                <q-tabs v-model="tab" no-caps active-color="primary" indicator-color="transparent" class="text-grey-8">
                    <q-tab name="images" label="Images" />
                    <q-tab name="videos" label="Videos" />
                    <q-tab name="articles" label="Articles" />
                </q-tabs>
            </q-footer>
            <!--          <q-footer bordered class="bg-grey-3 text-primary"> -->
            <!--            <q-tabs no-caps active-color="primary" indicator-color="transparent" class="text-grey-8" v-model="tab"> -->
            <!--              <q-tab name="images" label="Images" /> -->
            <!--              <q-tab name="videos" label="Videos" /> -->
            <!--              <q-tab name="articles" label="Articles" /> -->
            <!--            </q-tabs> -->
            <!--          </q-footer> -->
        </q-layout>
    </div>
<!--  <div> -->
<!--    <header> -->
<!--      &lt;!&ndash; 全局導航 &ndash;&gt; -->
<!--      <nav> -->
<!--        <NuxtLink to="/" exact>首頁</NuxtLink> -->
<!--        <NuxtLink to="/dashboard" exact>控制台(Dashboard)</NuxtLink> -->
<!--        <NuxtLink to="/about" exact>關於我們</NuxtLink> -->
<!--        <NuxtLink to="/test" exact>TEST</NuxtLink> -->
<!--      </nav> -->
<!--    </header> -->

<!--    &lt;!&ndash; 主內容區域 &ndash;&gt; -->
<!--    <main> -->
<!--      <NuxtPage /> &lt;!&ndash; 必須保留，用於渲染子路由頁面 &ndash;&gt; -->
<!--    </main> -->

<!--    <footer> -->
<!--      <p>© 2023 我的網站. All rights reserved.</p> -->
<!--    </footer> -->

<!--    &lt;!&ndash; 無障礙支持 &ndash;&gt; -->
<!--    <NuxtRouteAnnouncer /> -->
<!--  </div> -->
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
