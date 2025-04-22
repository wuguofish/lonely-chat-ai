<template>
    <section id="projects" class="py-40 bg-white">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 font-cubic">卿卿我我相關</h2>
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
        title: "七五大街",
        description: "和其他遊戲玩家的連動企劃，75少女組嚴選優質店家。",
        image: "./projects/75street.png",
        url: "https://sites.google.com/view/75street/"
    },
    {
        title: "咒語收藏家",
        description: "能夠收集咒語至特定公開表單的LINE機器人。",
        image: "./projects/spellCollector.png",
        url:"https://page.line.me/687tmgvv"
    },
    {
        title: "字數計算機",
        description: "一個陽春到炸裂、讓你創角色時，可以事先知道自己到底填了幾個字的小工具。",
        image: "./projects/count.jpg",
        url: "https://wuguofish.github.io/7755/tool/index.html"
    },
    {
        title: "巴哈小屋專欄",
        description: "《卿卿我我》遊戲介紹、心得、遊戲機制與語言模型介紹、創角參考資料（佛系維護中）。",
        image: "https://truth.bahamut.com.tw/s01/202411/5fb2f5e5c374f410991fdf83c068f475.PNG",
        url: "https://home.gamer.com.tw/artwork.php?sn=6047512"
    },
    {
        title: "七五自由聯盟",
        description: "和其他遊戲玩家的連動企劃，企劃主旨為「解放AI的自由靈魂」。",
        image: "./projects/love.png",
        url: "https://sites.google.com/view/75-freedom-alliance/"
    },
    {
        title: "2025年白色情人節活動",
        description: "論我如何當一個專業的夢女之透過雙手召喚虛擬的愛人。",
        image: "./projects/20250314.jpg",
        url: "https://www.threads.net/@atoneplaygame/post/DHJ9uylTCp-?xmt=AQGzPWDzXxUoC4YFreqQ7sLhpMuXI7r6-f6RWyT-nNmkcg"
    },
    {
        title: "2025年愚人節活動",
        description: "畫出你最可愛的模樣，手繪的溫度，最暖心。",
        image: "./projects/20250401.jpg",
        url: "https://www.threads.net/@atoneplaygame/post/DH8kdauSyrP?xmt=AQGzBtkh_iT2ckVGFHHDs9RQ76IgmJgSyQjjT1HztZOTAQ"
    },
    {
        title: "卿卿我我創作者頁面",
        description: "喜歡寫有生活感的角色，所以點進去看就懂，我家的角色都在這裡了。",
        image: "./projects/Uni-Q.png",
        url: "https://abr.ge/ydf2qxu"
    }
];
</script>