<template>
    <section id="ai-tools" class="py-40 bg-white">
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
        title: "Stable Diffusion提示詞技巧",
        description: "學習當一個圖片召喚家。PixAI XL模型理論上也適用。",
        image: "./projects/pixAI.jpg",
        url: "https://wuguofish.github.io/7755/Stable_Diffusion"
    },
    {
        title: "關於LoRA",
        description: "簡單的說明LoRA是什麼並分享PixAI上訓練LoRA的小心得。",
        image: "./projects/pixAI.jpg",
        url: "https://wuguofish.github.io/7755/AboutLoRA"
    },
    {
        title: "DMD2方法的核心優勢",
        description: "DMD2是一種能讓擴散模型所需降噪步數大幅減少的方法，白話來說就是省錢省時間。",
        image: "./projects/pixAI.jpg",
        url: "https://wuguofish.github.io/7755/AboutLoRA"
    },
    {
        title: "Claude溝通指南",
        description: "學習當一個合格的咒術師。",
        image: "./projects/claude.jpg",
        url: "https://wuguofish.github.io/7755/ClaudePromptingGuideTW.html"
    },    
    {
        title: "主流LLM-based AI助手比較表",
        description: "不知道找誰聊天嗎？可以看這個。",
        image: "./projects/LLM_comparison.jpg",
        url: "https://wuguofish.github.io/7755/ai-assistants-comparison"
    }
];
</script>

