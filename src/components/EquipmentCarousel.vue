<template>
  <section id="equipment-section" class="py-20 bg-gray-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Nos <span class="gradient-text">Engins</span>
        </h2>
        <p class="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          Découvrez notre large gamme d'engins de construction disponibles à la location
        </p>
        
        <!-- Category Filter -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button 
            v-for="category in categories" 
            :key="category"
            @click="filterByCategory(category)"
            class="px-6 py-3 font-semibold transition-all duration-300"
            :class="selectedCategory === category 
              ? 'bg-yellow-400 text-gray-900' 
              : 'bg-gray-700 text-white hover:bg-gray-600'"
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- Equipment Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(equipment, index) in filteredEquipment" 
          :key="equipment.id"
          class="group bg-gray-800 overflow-hidden hover-lift transition-all duration-300 hover:bg-gray-700"
          :class="`animate-slide-up`"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <!-- Image -->
          <div class="relative overflow-hidden">
            <img 
              :src="equipment.image" 
              :alt="equipment.name"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute top-4 right-4">
              <span 
                class="px-3 py-1 text-xs font-semibold"
                :class="equipment.availability 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'"
              >
                {{ equipment.availability ? 'Disponible' : 'Indisponible' }}
              </span>
            </div>
            <div class="absolute top-4 left-4">
              <div class="flex items-center bg-gray-900/80 backdrop-blur-sm px-2 py-1">
                <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-white text-sm font-medium">{{ equipment.rating }}</span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center justify-between mb-3">
              <span class="text-yellow-400 text-sm font-medium">{{ equipment.category }}</span>
              <span class="text-2xl font-bold text-white">{{ equipment.price.toLocaleString() }} FCFA</span>
            </div>
            
            <h3 class="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
              {{ equipment.name }}
            </h3>
            
            <p class="text-gray-300 text-sm mb-4 line-clamp-2">
              {{ equipment.description }}
            </p>

            <!-- Features -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span 
                v-for="feature in equipment.features.slice(0, 2)" 
                :key="feature"
                class="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
              >
                {{ feature }}
              </span>
            </div>

            <!-- Actions -->
            <div class="flex gap-3">
              <button 
                @click="viewDetails(equipment)"
                class="flex-1 bg-transparent border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-4 py-2 font-semibold transition-all duration-300"
              >
                Détails
              </button>
              <button 
                @click="addToQuote(equipment)"
                :disabled="!equipment.availability"
                class="flex-1 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 px-4 py-2 font-semibold transition-all duration-300"
              >
                {{ equipment.availability ? 'Ajouter au devis' : 'Indisponible' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center">
        <router-link 
          to="/equipment"
          class="inline-flex items-center bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105"
        >
          Voir tous les engins
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { equipmentData, type Equipment } from '@/data/mockData'

const equipment = equipmentData
const selectedCategory = ref('Tous')

const categories = ['Tous', 'Excavation', 'Terrassement', 'Levage', 'Béton', 'Compactage']

const filteredEquipment = computed(() => {
  if (selectedCategory.value === 'Tous') {
    return equipment.slice(0, 6) // Afficher seulement 6 équipements sur la page d'accueil
  }
  return equipment.filter(eq => eq.category === selectedCategory.value)
})

const filterByCategory = (category: string) => {
  selectedCategory.value = category
}

const viewDetails = (equipment: Equipment) => {
  emit('viewEquipmentDetails', equipment)
}

const addToQuote = (equipment: Equipment) => {
  emit('addToQuote', equipment)
}

const emit = defineEmits<{
  viewEquipmentDetails: [equipment: Equipment]
  addToQuote: [equipment: Equipment]
}>()
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
