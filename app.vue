<template>
  <div>
    <header>
      <!-- 全局導航 -->
      <nav>
        <NuxtLink to="/" exact>首頁</NuxtLink>
        <NuxtLink to="/dashboard" exact>控制台(Dashboard)</NuxtLink>
        <NuxtLink to="/about" exact>關於我們</NuxtLink>
        <NuxtLink to="/test" exact>TEST</NuxtLink>
      </nav>
    </header>

    <!-- 主內容區域 -->
    <main>
      <NuxtPage /> <!-- 必須保留，用於渲染子路由頁面 -->
    </main>

    <footer>
      <p>© 2023 我的網站. All rights reserved.</p>
    </footer>

    <!-- 無障礙支持 -->
    <NuxtRouteAnnouncer />
  </div>
</template>

<script setup>

</script>

<style scoped>
header {
  background-color: #f4f4f4;
  padding: 1em;
}
nav a {
  margin-right: 1em;
  text-decoration: none;
  color: #333;
}
footer {
  text-align: center;
  padding: 1em;
  background: #f4f4f4;
  margin-top: 2em;
}
</style>
