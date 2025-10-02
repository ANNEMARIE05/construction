<template>
  <div>
    <!-- Hero Section -->
    <HeroSection @open-quote-modal="openQuoteModal" />
    
    <!-- Services Section -->
    <ServicesSection @open-quote-modal="openQuoteModal" />
    
    <!-- Equipment Section -->
    <EquipmentCarousel 
      @view-equipment-details="viewEquipmentDetails"
      @add-to-quote="addToQuote"
    />
    
    <!-- Testimonials Section -->
    <TestimonialsSection />
    
    <!-- About Us Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <div class="w-16 h-1 bg-amber-500 mb-6"></div>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6 constructo-heading">
              À PROPOS DE NOUS
            </h2>
            <p class="text-slate-800 text-lg font-bold mb-6 constructo-text">
              NOTRE ENTREPRISE DE CONSTRUCTION A ÉTÉ FONDÉE IL Y A 10 ANS, AU SOMMET DE LA FRÉNÉSIE DE CONSTRUCTION EN FRANCE...
            </p>
            <p class="text-slate-600 text-lg mb-6 leading-relaxed">
              Avec plus de 15 ans d'expérience dans le secteur du BTP, ArchiBat s'est imposé comme 
              un leader de la location d'engins de construction et de la vente de matériel. 
              Notre engagement envers l'excellence et la satisfaction client nous distingue.
            </p>
            <p class="text-slate-600 text-lg mb-8 leading-relaxed">
              Nous proposons une large gamme d'équipements modernes, maintenus selon les plus hauts 
              standards, accompagnés d'un service client exceptionnel et d'un support technique 24h/7j.
            </p>
            <button 
              @click="openQuoteModal"
              class="constructo-button px-8 py-4"
            >
              NOUS CONTACTER
            </button>
          </div>
          
          <!-- Image -->
          <div class="relative">
            <img 
              src="https://cdn.prod.website-files.com/657c47379cbedbe58f6d58d8/660ed30cc58c4179c186d432_lancer-son-entreprise-batiment.webp" 
              alt="Construction workers discussing plans"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
    
    <!-- Statistics Section -->
    <section ref="statsSection" class="relative py-20 bg-slate-100">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
           style="background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop');">
      </div>
      
      <!-- Content -->
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            v-for="(stat, index) in stats" 
            :key="stat.label"
            class="text-center"
            :class="{ 'animate-fade-in-up': statsVisible }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
              {{ statsVisible ? stat.animatedValue : '0' }}
            </div>
            <div class="text-slate-700 text-lg font-semibold constructo-text">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-slate-100 to-slate-200">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
          Prêt à démarrer votre projet ?
        </h2>
        <p class="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
          Contactez-nous dès aujourd'hui pour obtenir un devis personnalisé et découvrir 
          comment nous pouvons vous accompagner dans la réussite de votre projet.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="openQuoteModal"
            class="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Demander un devis gratuit
          </button>
          <router-link 
            to="/contact"
            class="bg-transparent border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 text-center"
          >
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>

    <!-- Equipment Details Modal -->
    <EquipmentDetailsModal 
      :is-open="isDetailsModalOpen"
      :equipment="selectedEquipment"
      @close="closeDetailsModal"
      @add-to-quote="addEquipmentToQuote"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import EquipmentCarousel from '@/components/EquipmentCarousel.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import EquipmentDetailsModal from '@/components/EquipmentDetailsModal.vue'
import type { Equipment } from '@/data/mockData'

const emit = defineEmits<{
  openQuoteModal: []
}>()

const isDetailsModalOpen = ref(false)
const selectedEquipment = ref<Equipment | null>(null)
const statsSection = ref<HTMLElement>()
const statsVisible = ref(false)

const openQuoteModal = () => {
  emit('openQuoteModal')
}

const viewEquipmentDetails = (equipment: Equipment) => {
  selectedEquipment.value = equipment
  isDetailsModalOpen.value = true
}

const addToQuote = (equipment: Equipment) => {
  selectedEquipment.value = equipment
  isDetailsModalOpen.value = true
}

const closeDetailsModal = () => {
  isDetailsModalOpen.value = false
  selectedEquipment.value = null
}

const addEquipmentToQuote = (_equipment: Equipment) => {
  closeDetailsModal()
  openQuoteModal()
}

const stats = ref([
  { value: '98%', label: 'CLIENTS SATISFAITS', animatedValue: '0%', targetValue: 98, suffix: '%' },
  { value: '15+', label: 'ANNÉES D\'EXPÉRIENCE', animatedValue: '0+', targetValue: 15, suffix: '+' },
  { value: '500+', label: 'PROJETS RÉALISÉS', animatedValue: '0+', targetValue: 500, suffix: '+' },
  { value: '24/7', label: 'SUPPORT CLIENT', animatedValue: '0/7', targetValue: 24, suffix: '/7' }
])

// Animation de comptage progressif
const animateCounter = (stat: any, duration: number = 2000) => {
  const startTime = Date.now()
  const startValue = 0
  const endValue = stat.targetValue
  
  const animate = () => {
    const elapsed = Date.now() - startTime
    const progress = Math.min(elapsed / duration, 1)
    
    // Fonction d'easing pour une animation plus fluide
    const easeOutQuart = 1 - Math.pow(1 - progress, 4)
    const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
    
    stat.animatedValue = currentValue + stat.suffix
    
    if (progress < 1) {
      requestAnimationFrame(animate)
    }
  }
  
  requestAnimationFrame(animate)
}

// Intersection Observer pour déclencher l'animation
const setupIntersectionObserver = () => {
  if (!statsSection.value) return
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsVisible.value) {
          statsVisible.value = true
          
          // Démarrer l'animation de comptage pour chaque statistique avec un délai
          stats.value.forEach((stat, index) => {
            setTimeout(() => {
              animateCounter(stat)
            }, index * 200)
          })
          
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.3 }
  )
  
  observer.observe(statsSection.value)
}

onMounted(() => {
  // Setup intersection observer
  setupIntersectionObserver()
})
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>
