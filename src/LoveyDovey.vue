<template>
  <div class="min-h-screen flex flex-col">
    <Header :nav="nav" home-href="./" subtitle="卿卿我我專區" :show-poem="false" />
    <main class="flex-1">
      <section class="py-24">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold font-cubic">卿卿我我相關</h2>
          <p class="mt-3 text-ink-2 text-lg max-w-3xl">
            《卿卿我我》是我接觸生成式 AI 應用的契機之一。這裡留著那段時間做的工具和企劃，過時的已經下架，現在只在朋友出新角色時幫忙測角。
          </p>
          <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <ProjectCard v-for="work in loveydoveyWorks" :key="work.title" :project="work" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ProjectCard from './components/ProjectCard.vue'
import { loveydoveyWorks } from './data/projects.js'

const nav = [
  { label: '回首頁', href: './' },
  { label: 'Side Project', href: './#side-project' },
  { label: '人機協同成果', href: './#collab' }
]
</script>
