<template>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4 text-center">
            <p>&copy; 2025 {{ name }}. All rights reserved.</p>
            <p class="mt-1 text-gray-400">Made with Vue.js and TailwindCSS</p>
            <p class="mt-3 text-gray-400">網站名稱與頁首短詩改編自　鄭愁予《寂寞的人坐著看花》</p>
        </div>
    </footer>
</template>

<script setup>
const name = "阿童";
</script>