<script setup lang="ts">
import { useMenu } from '@/stores/useMenu';
import { useRouterStore } from '@/stores/useRoute';
import SectionArea from './components/sectionArea.vue';

const menuStore = useMenu();
const routerStore = useRouterStore();

// 若尚未取得自動生成的路由，這裡可呼叫取得方法
routerStore.fetchAutoRoutes();

console.log('menuList', menuStore.menuList);
console.log('autoRoutes', routerStore.autoRoutes);
</script>

<template>
    <div>
        <!--        <iframe id="game-area" class="game-iframe" src="https://www.yiv.com/games/Sweet-Doll-Dressup-Makeup/index.html" style="width: 100%" :allowfullscreen="true" /> -->

        <SectionArea />
    </div>
</template>

<style scoped>

</style>
