<template>
  <div class="min-h-screen flex flex-col">
    <Header :nav="nav" home-href="./" subtitle="卿卿我我專區" :show-poem="false" />
    <main class="flex-1">
      <section class="py-24">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold font-cubic">卿卿我我相關</h2>
          <p class="mt-4 inline-block rounded-lg border border-dashed border-ink-2 px-4 py-2 text-ink-2">
            這一區已封存，不再更新。裡面的工具和連結照當時的樣子留著，可能已經失效。
          </p>
          <p class="mt-3 text-ink-2 text-lg max-w-3xl">
            《卿卿我我》是我接觸生成式 AI 應用的契機之一。<br />
            退坑已久，這裡留著那段時間做的工具和企劃，皆不再維護。
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
