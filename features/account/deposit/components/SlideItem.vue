// features/account/components/SlideItem.vue
// 滑動項目組件
<script setup lang="ts">
import type { Card } from '@/features/account/deposit/types';

defineProps<{
    cardList: Card[]
}>();

const slide = ref<string>('FB');
</script>

<template>
    <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="amber"
        padding
        arrows
        height="190px"
        class="bg-grey-10 shadow-0 rounded-borders"
    >
        <q-carousel-slide v-for="card in cardList" :key="card.name" :name="card.name" class="column no-wrap flex-center">
            <!--            <q-icon name="style" size="56px" /> -->
            <q-card flat class="q-mb-sm bg-deep-purple-6" style="width: 250px; height: 150px">
                <q-card-section>
                    <div class="row justify-between items-center">
                        <div class="text-subtitle1">
                            {{ card.title }}
                        </div>
                    </div>
                    <div class="text-h4 text-center">
                        {{ card.info }}
                    </div>
                </q-card-section>
            </q-card>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <q-icon name="live_tv" size="56px" />
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
            <q-icon name="layers" size="56px" />
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
            <q-icon name="terrain" size="56px" />
        </q-carousel-slide>
    </q-carousel>
</template>
