<template>
    <section id="contact" class="py-40 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 font-cubic">關於我</h2>
            <div class="flex flex-col md:flex-row items-center gap-8 mb-10">
                <div class="w-full md:w-1/3">
                    <img src="/profile.jpg" alt="個人照片" class="rounded-full w-48 h-48 object-cover mx-auto shadow-lg" />
                </div>
                <div class="w-full md:w-2/3">
                    <h2 class="text-3xl font-bold mb-4">
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

            <div class=" mt-10 mb-10 mx-auto">
                <div class="flex flex-col sm:flex-row  space-y-4 sm:space-y-0 sm:space-x-6">
                    <h2 class="text-3xl font-bold font-cubic flex-1/2">出沒地點</h2>
                    <div class="grid grid-cols-3 lg:grid-cols-6 gap-2 flex-2/2">
                        <a href="https://wall.gamer.com.tw/user.php?userId=wuguofish" target="_blank"
                            class="flex items-center justify-center bg-primary text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
                            <span>巴哈姆特</span>
                        </a>
                        <a href="https://www.threads.net/@atoneplaygame" target="_blank"
                            class="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                            <span>Threads</span>
                        </a>
                        <a href="https://abr.ge/ydf2qxu" target="_blank"
                            class="flex items-center justify-center bg-pink-700 text-white px-4 py-2 rounded-lg hover:bg-pink-800 transition-colors">
                            <span>卿卿我我</span>
                        </a>
                        <a href="https://marshmallow-qa.com/inqqtj2ac4thd9a" target="_blank"
                            class="flex items-center justify-center bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-orange-800 transition-colors">
                            <span>Marshmallow</span>
                        </a>
                        <a href="https://pixai.art/zh/@atone/artworks" target="_blank"
                            class="flex items-center justify-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                            <span>PixAI</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const name = "阿童";
const profession = "前端開發者";
const bio = "感性的工程師，理性的創作者，純愛戰士，日常觀察家，致力於散播歡樂散播愛。";
const skills = ["愛吃", "嗜睡", "常失蹤", "7755自耕農型玩家"];
</script>