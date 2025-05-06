<template>
  <div class="min-h-screen">
    <Header />
    <main class="">
      <Projects />
      <Bookmarks />
      <AiTools />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import AiTools from './components/AiTools.vue'
import Bookmarks from './components/Bookmarks.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>