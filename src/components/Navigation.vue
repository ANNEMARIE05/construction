<template>
  <div class="fixed top-0 w-full z-50">
    <!-- Top Contact Bar -->
    <div class="bg-slate-100 text-slate-700 py-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center text-sm">
          <!-- Contact Info -->
          <div class="flex items-center space-x-6">
            <span>Adresse: Côte d'Ivoire | BP - 124 Bouake 01</span>
            <span>(+225) 07 08 31 89 76 / 07 08 11 11 32</span>
          </div>
          
          <!-- Social Media Icons -->
          <div class="flex items-center space-x-4">
            <a href="#" class="text-slate-700 hover:text-slate-800 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" class="text-slate-700 hover:text-slate-800 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" class="text-slate-700 hover:text-slate-800 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" class="text-slate-700 hover:text-slate-800 transition-colors">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav class="bg-white text-slate-800 transition-all duration-300 shadow-sm" :class="scrolled ? 'shadow-lg' : ''">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center h-16">
          <!-- Logo -->
          <div class="flex items-center">
            <router-link to="/" class="flex items-center space-x-3 group">
              <div class="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="../assets/logo.png" alt="">
              </div>
              <span class="text-slate-800 font-bold text-xl constructo-heading">AIGC - BTP</span>
            </router-link>
          </div>

          <!-- Navigation Links - Centered -->
          <div class="hidden md:flex items-center space-x-4 flex-1 justify-center">
            <router-link 
              v-for="item in navigationItems" 
              :key="item.name"
              :to="item.href"
              class="constructo-text transition-colors duration-300 relative group px-2 py-2"
              :class="isActiveRoute(item.href) 
                ? 'bg-slate-800 text-white' 
                : 'text-slate-700 hover:text-slate-800'"
            >
              {{ item.name }}
              <span 
                v-if="!isActiveRoute(item.href)"
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"
              ></span>
            </router-link>
          </div>

          <!-- CTA Button -->
          <div class="hidden md:flex items-center">
            <button 
              @click="openQuoteModal"
              class="constructo-button px-6 py-2"
            >
              DEMANDER UN DEVIS
            </button>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button 
              @click="toggleMobileMenu"
              class="text-slate-700 hover:text-slate-800 transition-colors duration-300"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="mobileMenuOpen" class="md:hidden bg-slate-50 border-t border-slate-200">
        <div class="px-4 py-4 space-y-4">
          <router-link 
            v-for="item in navigationItems" 
            :key="item.name"
            :to="item.href"
            @click="closeMobileMenu"
            class="block constructo-text transition-colors duration-300 py-2 px-3"
            :class="isActiveRoute(item.href) 
              ? 'bg-slate-800 text-white' 
              : 'text-slate-700 hover:text-slate-800'"
          >
            {{ item.name }}
          </router-link>
          <button 
            @click="openQuoteModal"
            class="w-full constructo-button px-6 py-3 mt-4"
          >
            DEMANDER UN DEVIS
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const $route = useRoute()

const navigationItems = [
  { name: 'ACCUEIL', href: '/' },
  { name: 'À PROPOS', href: '/about' },
  { name: 'NOS RÉALISATIONS', href: '/realisations' },
  { name: 'ÉQUIPEMENT', href: '/equipment' },
  { name: 'CONTACT', href: '/contact' }
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const isActiveRoute = (href: string) => {
  return $route.path === href
}

const openQuoteModal = () => {
  // Émettre un événement pour ouvrir le modal de devis
  emit('openQuoteModal')
  closeMobileMenu()
}

const emit = defineEmits<{
  openQuoteModal: []
}>()

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
