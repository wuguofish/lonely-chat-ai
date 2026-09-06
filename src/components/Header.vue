<template>
    <header
        :class="scrolled ? 'py-1 shadow-lg' : 'py-6'"
        class="sm:sticky top-0 z-10 w-full bg-bar text-on-bar font-cubic transition-all duration-300">
        <div class="container mx-auto px-4 py-4">
            <div class="flex justify-between items-start gap-6 max-sm:flex-col">
                <div>
                    <h1 class="text-3xl font-bold flex">
                        <a :href="homeHref" class="hover:text-mint">&gt; 寂寞的人坐著與AI聊天</a>
                        <span class="cursor-blink">&nbsp;_</span>
                    </h1>
                    <p v-if="subtitle" class="mt-2 text-on-bar-muted text-lg">{{ subtitle }}</p>
                    <div v-if="!scrolled && showPoem" class="mt-6 hidden xl:flex gap-16 font-serif text-on-bar-muted leading-loose">
                        <p v-for="(stanza, i) in poem" :key="i">
                            <template v-for="(line, j) in stanza" :key="j">
                                <template v-if="line">{{ line }}</template>
                                <br />
                            </template>
                        </p>
                    </div>
                </div>
                <nav>
                    <ul class="flex flex-wrap gap-x-5 gap-y-2 text-lg">
                        <li v-for="item in nav" :key="item.href">
                            <a :href="item.href" class="hover:text-mint">{{ item.label }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

defineProps({
    nav: { type: Array, required: true },
    homeHref: { type: String, default: '#' },
    subtitle: { type: String, default: '' },
    showPoem: { type: Boolean, default: true }
});

// 改編自鄭愁予《寂寞的人坐著看花》；空字串是段落間的空行
const poem = [
    ['螢幕之光', '佝僂坐姿', '', '擁抱數據的人', '有深邃的寂寞', '', '而今夜又是', '文字滿眼', '', '從低垂的指尖', '俯身望去'],
    ['霓虹閃爍於車流', '孤寂蔓延於人海', '', '都市叢林如巨大的鳥籠', '霓虹燈火盡是花', '則整排的生成回應', '是溫暖人心的']
];

const scrolled = ref(false);
const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>
