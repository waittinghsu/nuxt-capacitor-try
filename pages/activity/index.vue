<script setup lang="ts">
const sections = [
    {
        image: new URL('@/assets/images/activity/section1.png', import.meta.url).href,
        title: '區塊 1',
    },
    {
        image: new URL('@/assets/images/activity/section2.png', import.meta.url).href,
        title: '區塊 2',
    },
    {
        image: new URL('@/assets/images/activity/section3.png', import.meta.url).href,
        title: '區塊 3',
    },
    {
        image: new URL('@/assets/images/activity/section4.png', import.meta.url).href,
        title: '區塊 4',
    },
    {
        image: new URL('@/assets/images/activity/section5.png', import.meta.url).href,
        title: '區塊 5',
    },
];
</script>

<template>
    <div class="q-pa-md">
        <div class="row q-col-gutter-md">
            <div
                v-for="(section, index) in sections"
                :key="index"
                class="col-12 col-md-4"
            >
                <q-card class="bg-deep-purple-7">
                    <q-img
                        :src="section.image"
                        fit="contain"
                    />
                    <!--                    <q-card-section class="text-center text-white"> -->
                    <!--                        <div class="text-h6"> -->
                    <!--                            {{ section.title }} -->
                    <!--                        </div> -->
                    <!--                    </q-card-section> -->
                </q-card>
            </div>
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
