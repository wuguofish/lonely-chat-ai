<template>
  <div class="min-h-screen flex flex-col">
    <Header :nav="nav" />
    <main class="flex-1">
      <SideProjects />
      <Collab />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import SideProjects from './components/SideProjects.vue'
import Collab from './components/Collab.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const nav = [
  { label: 'Side Project', href: '#side-project' },
  { label: '人機協同成果', href: '#collab' },
  { label: '關於我', href: '#contact' },
  { label: '卿卿我我專區', href: './7755.html' }
]
</script>
