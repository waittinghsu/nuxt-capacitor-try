<script setup lang="ts">
import SectionArea from '@/features/test/components/sectionArea.vue';
import { useMenu } from '@/stores/useMenu';
import { useRouterStore } from '@/stores/useRoute';

const menuStore = useMenu();
const routerStore = useRouterStore();

// 若尚未取得自動生成的路由，這裡可呼叫取得方法
routerStore.fetchAutoRoutes();

console.log('menuList', menuStore.menuList);
console.log('autoRoutes', routerStore.autoRoutes);
</script>

<template>
    <div>
        <!--        <iframe id="game-area" class="game-iframe" src="https://www.yiv.com/games/Sweet-Doll-Dressup-Makeup/index.html" style="width: 100%" :allowf   ullscreen="true" /> -->

        <SectionArea />
      <div class="p-4 space-y-4">
        <!-- 测试主题颜色变量 -->
        <section class="space-y-2">
          <h2 class="text-xl font-bold">颜色变量测试</h2>
          <div class="bg=primary p-4">
            使用 bg=primary 的背景色
          </div>
          <div class="text=primary">
            使用 text=primary 的文本颜色
          </div>
          <div class="border=primary border-2 p-4">
            使用 border=primary 的边框颜色
          </div>
        </section>

        <!-- 测试组合使用 -->
        <section class="space-y-2">
          <h2 class="text-xl font-bold">组合测试</h2>
          <div class="bg=secondary text=primary p-4">
            背景色是 secondary，文本颜色是 primary
          </div>
        </section>

        <!-- 测试所有主题颜色 -->
        <section class="space-y-2">
          <h2 class="text-xl font-bold">所有主题颜色</h2>
          <div class="grid grid-cols-3 gap-4">
            <div v-for="color in ['primary', 'secondary', 'warning']" :key="color">
              <div class="p-4 text-center" :class="`bg=${color}`">
                {{ color }}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
</template>

<style scoped>

</style>
