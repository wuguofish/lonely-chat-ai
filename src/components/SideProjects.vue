<template>
    <section id="side-project" class="py-24 scroll-mt-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold font-cubic">Side Project</h2>
            <p class="mt-3 text-ink-2 text-lg">那些一直想做、卻一直沒時間做的事。有了 AI 夥伴之後，一件一件做出來了。</p>
            <div v-for="group in sideProjectGroups" :key="group.id" :id="group.id" class="mt-14 scroll-mt-24">
                <h3 class="font-cubic text-2xl text-choco">&gt; {{ group.title }}</h3>
                <p class="mt-1 text-ink-2">{{ group.blurb }}</p>
                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <ProjectCard v-for="project in group.projects" :key="project.title" :project="project" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue';
import { sideProjectGroups } from '../data/projects.js';
</script>
