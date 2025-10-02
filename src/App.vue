<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'
import QuoteModal from './components/QuoteModal.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const isQuoteModalOpen = ref(false)

const openQuoteModal = () => {
  isQuoteModalOpen.value = true
}

const closeQuoteModal = () => {
  isQuoteModalOpen.value = false
}
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <Navigation @open-quote-modal="openQuoteModal" />
    <main class="pt-24">
      <RouterView @open-quote-modal="openQuoteModal" />
    </main>
    <Footer />
    <QuoteModal :is-open="isQuoteModalOpen" @close="closeQuoteModal" />
    <ScrollToTop />
  </div>
</template>

<style scoped>
</style>
