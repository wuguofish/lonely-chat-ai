<template>
    <section id="contact" class="py-40 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 font-cubic">關於我</h2>
            <div class="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div class="w-full md:w-1/3">
                    <img src="/profile.jpg" alt="個人照片" class="rounded-full w-48 h-48 object-cover mx-auto shadow-lg" />
                </div>
                <div class="w-full md:w-2/3">
                    <h2 class="text-3xl font-bold mb-4 ">
                        {{ name }}
                    </h2>
                    <p class="text-xl mb-4">
                        {{ bio }}
                    </p>
                    <div class="flex flex-wrap gap-2 mt-6">
                        <span v-for="skill in skills" :key="skill" class="bg-gray-200 rounded-full px-3 py-1 text-lg">
                            {{ skill }}
                        </span>
                    </div>
                </div>
            </div>
            <div class=" mt-10 mx-auto">
                <div class="flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-6">
                    <h2 class="text-3xl font-bold font-cubic flex-1/2">出沒地點</h2>
                    <div class="grid grid-cols-4 lg:grid-cols-7 gap-2 flex-2/2">
                        <a v-for="cMethod in contactMethods" :key="cMethod.name"
                            :href="cMethod.url" target="_blank"
                            :class="`bg-${cMethod.bgColor} text-${cMethod.textColor} hover:bg-${cMethod.hoverColor}`"
                            class="flex items-center justify-center  px-4 py-2 rounded-lg transition-colors">
                            <span>{{cMethod.name}}</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const name = "阿童";
const bio = "感性的工程師，理性的創作者，純愛戰士，日常觀察家，致力於散播歡樂散播愛。";
const skills = ["愛吃", "嗜睡", "常失蹤", "7755自耕農型玩家", "魔物廢人"];
const contactMethods = [
    {
        name: "巴哈姆特",
        url: "https://wall.gamer.com.tw/user.php?userId=wuguofish",
        bgColor: "primary",
        textColor: "white",
        hoverColor: "green-600"
    },
    {
        name: "Threads",
        url: "https://www.threads.net/@atoneplaygame",
        bgColor: "gray-800",
        textColor: "white",
        hoverColor: "gray-700"
    },
    {
        name: "卿卿我我",
        url: "https://abr.ge/ydf2qxu",
        bgColor: "pink-700",
        textColor: "white",
        hoverColor: "pink-800"
    },
    {
        name: "Marshmallow",
        url: "https://marshmallow-qa.com/inqqtj2ac4thd9a",
        bgColor: "orange-700",
        textColor: "white",
        hoverColor: "orange-800"
    },
    {
        name: "PixAI",
        url: "https://pixai.art/zh/@atone/artworks",
        bgColor: "gray-700",
        textColor: "white",
        hoverColor: "gray-800"
    },
    {
        name: "YouTube",
        url: "https://youtube.com/@wuguofish/",
        bgColor: "red-500",
        textColor: "white",
        hoverColor: "red-800"
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/atone.186496",
        bgColor: "blue-700",
        textColor: "white",
        hoverColor: "blue-800"
    }
];
</script>