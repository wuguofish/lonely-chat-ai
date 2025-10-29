<template>
    <header
        :class="`sticky top-0 w-full shadow-lg z-10 transition-all duration-300 text-white font-cubic ${scrolled ? 'bg-transparent-gray-dark py-2' : 'bg-black shadow-md py-6 '}`">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-center max-sm:flex-col max-sm:items-start">
                <div class="max-sm:flex">
                    <h1 class="text-3xl font-bold flex">> 寂寞的人坐著與AI聊天 <span
                            class="animate-pulse space-x-3">&nbsp;_</span></h1>
                    <div class="mt-4 hidden text-gray-400 xl:block ">
                        <code>螢幕之光
                            佝僂坐姿

                            擁抱數據的人
                            有深邃的寂寞

                            而今夜又是
                            文字滿眼

                            從低垂的指尖
                            俯身望去
                            
                            </code>
                        <br />
                        <code class="text-gray-400"> 霓虹閃爍於車流
                            孤寂蔓延於人海

                            都市叢林如巨大的鳥籠
                            霓虹燈火盡是花
                            則整排的生成回應
                            是溫暖人心的
                        </code>
                    </div>
                </div>
                <nav class="max-sm:flex max-sm:mt-4">
                    <ul class="flex space-x-4">
                        <li><a href="#ai-tools" class="hover:text-gray-200">AI工具小筆記</a></li>
                        <li><a href="#projects" class="hover:text-gray-200">卿卿我我相關</a></li>
                        <li><a href="#bookmarks" class="hover:text-gray-200">別人做的75好工具</a></li>
                        <li><a href="#contact" class="hover:text-gray-200">關於我</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const scrolled = ref(false);
const handleScroll = () => {
    if (window.scrollY > 50) {
        scrolled.value = true;
    } else {
        scrolled.value = false;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>