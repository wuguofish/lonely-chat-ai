<template>
    <section id="about" class="py-20 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold mb-10 font-cubic">關於我</h2>
            <div class="flex flex-col md:flex-row items-center gap-8">
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
        </div>
    </section>
</template>

<script setup>
const name = "阿童";
const profession = "前端開發者";
const bio = "感性的工程師，理性的創作者，純愛戰士，日常觀察家，致力於散播歡樂散播愛。";
const skills = ["愛吃", "嗜睡", "常失蹤", "7755自耕農型玩家"];
</script>