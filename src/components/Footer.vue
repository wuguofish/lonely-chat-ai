<template>
    <footer class="bg-bar text-on-bar-muted py-8 text-sm">
        <div class="container mx-auto px-4 text-center flex flex-col gap-1">
            <p class="text-on-bar">&copy; {{ year }} 阿童</p>
            <p>Made with Vue.js and TailwindCSS</p>
            <p class="font-serif">網站名稱與頁首短詩改編自　鄭愁予《寂寞的人坐著看花》</p>
            <p>字體：俐方體 11 號、台北黑體、芫荽</p>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
