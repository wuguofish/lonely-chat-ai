<template>
    <section id="bookmarks" class="py-40 bg-gray-100">
        <div class=" container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 font-cubic">別人做的75好工具</h2>
            <div class=" mb-10">
                <p class="text-gray-600 text-lg">這些是我覺得好用的工具（但不是我做的），歡迎使用！如果有其他好用的工具，歡迎告訴我，我會更新過來。</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div v-for="project in projects" :key="project.title"
                    class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                    <div class="p-4">
                        <div class="flex text-xl font-semibold mb-4 text-center font-cubic">
                            <a :href="project.url" target="_blank"
                                class="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700 w-full">
                                {{ project.title }}
                            </a>
                        </div>
                        <div class="flex text-l mb-4 text-center font-cubic">
                            <a :href="project.source" target="_blank"
                                class="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 w-full border-2 border-gray-800">
                                來源與說明
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
        title: "拉比的工具箱",
        description: "將 txt 對話內容，美化為聊天介面 html 的工具。",
        source: "https://www.plurk.com/p/3h7283q2fs",
        url: "https://loveydovey-chat-converter.vercel.app/"
    },
    {
        title: "角色備份模板",
        description: "卿卿我我角色設定notion模板，方便大家製作、收藏、搜尋自家角色。",
        source: "https://www.plurk.com/p/3gju9gfqbi",
        url: "https://plausible-nephew-b4a.notion.site/16fadc11297c80ca9e5ae4fb3762434a"
    }
];
</script>