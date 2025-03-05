<script setup>
// 單頁應用 redirect 中介層
definePageMeta({ middleware: 'redirect' });

// 在頁面進入時，自動導航到 /dashboard
onMounted(() => {
    navigateTo('/dashboard');
    console.log('歡迎來到首頁');
});
</script>

<template>
    <div>歡迎來到首頁</div>
</template>
