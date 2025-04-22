<template>
  <div class="min-h-screen">
    <Header />
    <main class="pt-20">
      <Projects />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>