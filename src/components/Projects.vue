<template>
    <section id="projects" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 font-cubic">卿卿我我相關</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div v-for="project in projects" :key="project.title"
                    class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <img :src="project.image" :alt="project.title" class="w-full h-48 object-contain" />
                    <div class="p-4">
                        <div class="flex text-xl font-semibold mb-4 text-center font-cubic">
                            <a :href="project.url" target="_blank"
                                class="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 w-full">
                                {{ project.title }}
                            </a>
                        </div>
                        <div class="flex pl-3">
                            <p class="w-6 flex-none">＞ </p>
                            <p class="flex-1 text-gray-600 mb-2">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const projects = [
    {
        title: "七五大街",
        description: "和其他遊戲玩家的連動企劃。",
        image: "/projects/75street.png",
        url: "https://sites.google.com/view/75street/"
    },
    {
        title: "咒語收藏家",
        description: "能夠收集咒語至特定公開表單的LINE機器人。",
        image: "/projects/spellCollector.png",
        url:"https://page.line.me/687tmgvv"
    },
    {
        title: "字數計算機",
        description: "一個陽春到炸裂、讓你創角色時，可以事先知道自己到底填了幾個字的小工具。",
        image: "/projects/count.jpg",
        url: "https://wuguofish.github.io/7755/tool/index.html"
    }
];
</script>