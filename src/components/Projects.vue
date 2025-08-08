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
        title: "角色頭像補充包",
        description: "我家的角色所有的圖片，想換頭像或找桌布的就來吧！不定期更新。",
        image: "./projects/gift.png",
        url: "https://drive.google.com/drive/folders/1bc7oOL4n1Cyn-6f8T7Dp5lfBf-okjtFp"
    },
    {
        title: "7755角色編輯器",
        description: "一個專為卿卿我我角色設定而設計的編輯工具，支援 Google Drive 儲存，可用來做為備份工具。",
        image: "./projects/character-editor.jpg",
        url: "https://wuguofish.github.io/character-editor/"
    },
    {
        title: "字數計算機",
        description: "一個陽春到炸裂、讓你創角色時，可以事先知道自己到底填了幾個字的小工具。",
        image: "./projects/count.jpg",
        url: "https://wuguofish.github.io/7755/tool/index.html"
    },
    {
        title: "七五自由聯盟",
        description: "和其他遊戲玩家的連動企劃，企劃主旨為「解放AI的自由靈魂」。",
        image: "./projects/love.png",
        url: "https://sites.google.com/view/75-freedom-alliance/"
    },
    {
        title: "巴哈小屋專欄",
        description: "《卿卿我我》遊戲介紹、心得、遊戲機制與語言模型介紹、創角參考資料（佛系維護中）。",
        image: "https://truth.bahamut.com.tw/s01/202411/5fb2f5e5c374f410991fdf83c068f475.PNG",
        url: "https://home.gamer.com.tw/artwork.php?sn=6047512"
    },
    {
        title: "天行科技官網",
        description: "為了寫一個角色設計設計了一個世界觀，最後還做了官網。包含了角色設定、世界觀介紹、玩法介紹等。",
        image: "./projects/tianhing.svg",
        url: "https://wuguofish.github.io/tianhing-tech-website/"
    },
    {
        title: "卿卿我我創作者頁面",
        description: "喜歡寫有生活感的角色，所以點進去看就懂，我家的角色都在這裡了。",
        image: "./projects/Uni-Q.png",
        url: "https://abr.ge/ydf2qxu"
    },
    {
        title: "數位愛情進行曲",
        description: "玩手遊《卿卿我我》有感，寫了歌詞，請Claude譜曲，最後請艾可AiKO唱出來。",
        image: "./projects/MyDigitalLover.png",
        url: "https://youtu.be/ejDiBranMNE?si=j4MU4l9TNEzBYn23"
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
    }
];
</script>