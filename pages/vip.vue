<script setup lang="ts">

const currentTheme = ref('purple')
const changeToGreen = () => {
  document.documentElement.setAttribute('data-theme', 'green')
  currentTheme.value = 'green'
}

const changeToPurple = () => {
  document.documentElement.setAttribute('data-theme', 'purple')
  currentTheme.value = 'purple'
}


</script>

<template>
    <div class="q-pa-md">
      <!-- 測試區塊 -->
      <div class="row q-col-gutter-md q-mb-md">
        <!-- Quasar 的顏色類 -->
        <div class="bg-primary q-pa-md text-white">Quasar bg-primary</div>
        <!-- Tailwind 的顏色類 -->
        <div class="tw-bg-primary-600 tw-p-4 text-white">Tailwind tw-bg-primary</div>
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


</style>
