<template>
    <section id="collab" class="py-24 bg-paper-2 border-y border-line scroll-mt-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold font-cubic">人機協同成果</h2>
            <p class="mt-3 text-ink-2 text-lg">人和 AI 一起做出來的東西。誰出力多一點，看作品就知道。</p>
            <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard v-for="work in collabWorks" :key="work.title" :project="work" />
            </div>
        </div>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import { collabWorks } from '../data/projects.js';
</script>
