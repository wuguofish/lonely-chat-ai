<template>
    <article class="flex flex-col rounded-lg border border-line bg-paper-2 overflow-hidden transition-shadow hover:shadow-lg">
        <a v-if="project.image" :href="mainUrl" target="_blank" rel="noopener" class="block aspect-video bg-paper overflow-hidden">
            <img :src="project.image" :alt="project.title" loading="lazy"
                :class="project.fit === 'contain' ? 'object-contain p-3' : 'object-cover object-top'"
                class="w-full h-full" />
        </a>
        <a v-else :href="mainUrl" target="_blank" rel="noopener"
            class="aspect-video bg-paper flex flex-col justify-end gap-1 p-4 border-b border-line font-cubic">
            <span class="text-accent text-sm">&gt; open source</span>
            <span class="text-ink-2 text-sm break-all leading-snug">{{ repoPath }}</span>
        </a>
        <div class="p-4 flex flex-col gap-3 flex-1">
            <h4 class="font-cubic text-xl leading-tight">
                <a :href="mainUrl" target="_blank" rel="noopener"
                    class="block text-center bg-block text-on-block px-3 py-1 rounded hover:opacity-90">
                    {{ project.title }}
                </a>
            </h4>
            <p class="flex text-ink-2 flex-1">
                <span class="w-6 flex-none">＞</span>
                <span class="flex-1">{{ project.description }}</span>
            </p>
            <ul v-if="project.links" class="flex flex-wrap gap-2 font-cubic text-sm">
                <li v-for="link in project.links" :key="link.url">
                    <a :href="link.url" target="_blank" rel="noopener"
                        class="inline-block border border-mint text-mint rounded px-2 py-0.5 hover:bg-mint hover:text-paper">
                        {{ link.label }}
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    project: { type: Object, required: true }
});

const mainUrl = computed(() => props.project.url ?? props.project.links?.[0]?.url ?? '#');
const repoPath = computed(() => mainUrl.value.replace(/^https?:\/\//, '').replace(/\/$/, ''));
</script>
