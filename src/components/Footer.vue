<template>
    <footer class="bg-gray-800 text-white py-6">
        <div class="container mx-auto px-4 text-center">
            <p>&copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.</p>
            <p class="mt-1 text-gray-400">Made with Vue.js and TailwindCSS</p>
        </div>
    </footer>
</template>

<script setup>
const name = "阿童";
</script>