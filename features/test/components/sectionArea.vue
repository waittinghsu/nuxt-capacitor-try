<script setup lang="ts">

</script>

<template>
    <div class="q-pa-md" style="max-width: 500px">
        <p>q-gutter-xs</p>
        <div class="q-gutter-xs">
            <q-btn v-for="n in 7" :key="`xs-${n}`" color="brown" label="Button" />
        </div>

        <p class="q-mt-md">
            q-gutter-sm
        </p>
        <div class="q-gutter-sm">
            <q-btn v-for="n in 7" :key="`sm-${n}`" color="teal" label="Button" />
        </div>

        <p class="q-mt-md">
            q-gutter-md
        </p>
        <div class="q-gutter-md">
            <q-btn v-for="n in 7" :key="`md-${n}`" color="accent" label="Button" />
        </div>

        <p class="q-mt-md">
            q-gutter-lg
        </p>
        <div class="q-gutter-lg">
            <q-btn v-for="n in 7" :key="`lg-${n}`" color="red" label="Button" />
        </div>

        <p class="q-mt-md">
            q-gutter-xl
        </p>
        <div class="q-gutter-xl">
            <q-btn v-for="n in 7" :key="`xl-${n}`" color="indigo" label="Button" />
        </div>
    </div>
</template>

<style scoped>

</style>
