<template>
    <section id="contact" class="py-24 scroll-mt-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold font-cubic">關於我</h2>
            <div class="mt-10 flex flex-col md:flex-row items-center gap-10">
                <img src="/profile.jpg" alt="阿童的頭像" class="rounded-full w-48 h-48 object-cover shadow-lg flex-none" />
                <div class="flex-1">
                    <h3 class="text-3xl font-bold font-cubic">阿童</h3>
                    <p class="text-xl mt-3">感性的工程師，理性的創作者，純愛戰士，日常觀察家，致力於散播歡樂散播愛。</p>
                    <ul class="flex flex-wrap gap-2 mt-6">
                        <li v-for="skill in skills" :key="skill" class="border border-line bg-paper-2 rounded-full px-3 py-1">
                            {{ skill }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-14 flex flex-col sm:flex-row gap-6 sm:items-center">
                <h3 class="text-2xl font-bold font-cubic sm:w-1/3">&gt; 出沒地點</h3>
                <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 flex-1 font-cubic text-lg">
                    <li v-for="place in places" :key="place.url">
                        <a :href="place.url" target="_blank" rel="noopener"
                            class="flex flex-col items-center justify-center text-center bg-choco text-on-choco rounded-lg px-4 py-3 hover:opacity-90 leading-tight">
                            <span>{{ place.name }}</span>
                            <span v-if="place.note" class="text-sm opacity-80">{{ place.note }}</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="mt-10 flex justify-center sm:justify-end">
                <a href="https://portaly.cc/atone0331/support" target="_blank" rel="noopener"
                    class="font-cubic text-lg border-2 border-berry text-berry rounded-full px-6 py-2 hover:bg-berry hover:text-paper transition-colors">
                    ♡ 請阿童喝手搖
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
const skills = ["愛吃", "嗜睡", "常失蹤", "興趣常換", "工具維護看心情"];
const places = [
    { name: "PixAI", url: "https://pixai.art/@atone/artworks?utm_source=eap&utm_medium=social&utm_content=atone0331" },
    { name: "Threads", url: "https://www.threads.net/@atoneplaygame" },
    { name: "pixiv", url: "https://www.pixiv.net/users/2852069" },
    { name: "GitHub", note: "wuguofish", url: "https://github.com/wuguofish" },
    { name: "GitHub", note: "Tsun-u", url: "https://github.com/Tsun-u" }
];
</script>
