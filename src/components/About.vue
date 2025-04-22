<template>
    <section id="about" class="py-20 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 font-cubic">AI工具小筆記</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        title: "Claude溝通指南",
        description: "學習當一個合格的咒術師。",
        image: "/projects/claude.jpg",
        url: "https://wuguofish.github.io/7755/ClaudePromptingGuideTW.html"
    },
    {
        title: "Stable Diffusion提示詞技巧",
        description: "學習當一個圖片召喚家。PixAI XL模型理論上也適用。",
        image: "/projects/pixAI.jpg",
        url: "https://wuguofish.github.io/7755/Stable_Diffusion"
    },
    {
        title: "主流LLM-based AI助手比較表",
        description: "不知道找誰聊天嗎？可以看這個。",
        image: "/projects/LLM_comparison.jpg",
        url: "https://wuguofish.github.io/7755/ai-assistants-comparison"
    },
    {
        title: "請SUNO唱台語歌",
        description: "用SUNO寫一首激昂的台語歌吧！懶得備份，所以直接貼threads的串文。",
        image: "/projects/freeWill.jpg",
        url: "https://www.threads.net/@atoneplaygame/post/DGVYlycSzSI?xmt=AQGzVU8TrPXBVIqyzj4ADRqflOGnIEPO7z4538RKFgkjDA"
    }
];
</script>