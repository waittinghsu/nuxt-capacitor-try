<script setup lang="ts">
import { colors } from 'quasar'

const currentTheme = ref('purple')

const currentColorVars = ref({})


const changeToGreen = () => {
  document.documentElement.setAttribute('data-theme', 'green')
  currentTheme.value = 'green'


  // const root = document.querySelector(':root')
  // root && root.style.setProperty('--q-primary', '#7abe43')
  //
  // // 讀取當前的 CSS 變數值來確認是否設置成功
  // const styles = getComputedStyle(document.documentElement)
  // currentColorVars.value = {
  //   'primary': styles.getPropertyValue('--q-primary'),
  //   'computed-color': styles.getPropertyValue('color-primary')
  // }

}

const changeToPurple = () => {
  document.documentElement.setAttribute('data-theme', 'purple')
  currentTheme.value = 'purple'

  // const root = document.querySelector(':root')
  // root && root.style.setProperty('--q-primary', '#32ccbc')
  //
  // // 讀取當前的 CSS 變數值來確認是否設置成功
  // const styles = getComputedStyle(document.documentElement)
  // currentColorVars.value = {
  //   'primary': styles.getPropertyValue('--q-primary'),
  //   'computed-color': styles.getPropertyValue('color-primary')
  // }
  console.log(colors);
}

onMounted(() => {
  // const styles = getComputedStyle(document.documentElement)
  // currentColorVars.value = {
  //   'primary': styles.getPropertyValue('--q-primary'),
  //   'computed-color': styles.getPropertyValue('color-primary')
  // }
})


</script>

<template>
    <div class="q-pa-md">
      <!-- 測試區塊 -->
      <div class="row q-col-gutter-md q-mb-md">
        <!-- Quasar 的顏色類 -->
        <div class="bg-primary q-pa-md text-white">Quasar bg-primary</div>
        <button class="omega">按鈕</button>

        <!-- Tailwind 的顏色類 -->
        <div class="tw-bg-primary-600 tw-p-4 text-white">Tailwind tw-bg-primary</div>
        <div class="test-box tw-bg-primary-700 q-pa-md">
          測試區塊
        </div>
        <div class="color-box q-mt-md">
          <pre>{{ currentColorVars }}</pre>
        </div>

      </div>

      <div class="q-pa-md q-gutter-sm">
        <q-btn
            color="primary"
            :label="currentTheme === 'green' ? '切換為紫色主題' : '切換為綠色主題'"
            @click="currentTheme === 'green' ? changeToPurple() : changeToGreen()"
        />
        <q-btn style="background: #FF0080; color: white" label="Fuchsia" />
        <q-btn color="white" text-color="black" label="Standard" />
        <q-btn color="primary" label="Primary" />
        <q-btn color="secondary" label="Secondary" />
        <q-btn color="amber" glossy label="Amber" />
        <q-btn color="brown-5" label="Brown 5" />
        <q-btn color="deep-orange" glossy label="Deep Orange" />
        <q-btn color="purple" label="Purple" />
        <q-btn color="black" label="Black" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
.q-img {
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
}
</style>
<style lang="scss">

.color-box {
  width: 200px;
  height: 100px;
  background-color: var(--q-primary-700);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

</style>
