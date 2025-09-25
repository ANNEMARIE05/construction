<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-r from-gray-900 to-gray-800">
      <div class="absolute inset-0">
        <img 
          src="https://i0.wp.com/blog.archibien.com/wp-content/uploads/grue-industrielle-ciel-bleu.jpg?fit=1480%2C900&ssl=1" 
          alt="Equipment"
          class="w-full h-full object-cover opacity-20"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Nos <span class="gradient-text">Engins</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Découvrez notre large gamme d'engins de construction disponibles à la location
        </p>
      </div>
    </section>

    <!-- Filters and Search -->
    <section class="py-16 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Search Bar -->
        <div class="mb-8">
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Rechercher un engin, une marque ou un modèle..."
                class="w-full px-6 py-4 pl-14 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-lg shadow-lg"
              />
              <svg class="absolute left-5 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button 
                v-if="searchQuery"
                @click="clearSearch"
                class="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400 hover:text-white transition-colors"
              >
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Filters Row -->
        <div class="flex flex-col xl:flex-row gap-6 items-start xl:items-center justify-between">
          <!-- Category Filter -->
          <div class="w-full xl:w-auto">
            <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Catégories</h3>
            <div class="flex flex-wrap gap-2">
              <button 
                v-for="category in categories" 
                :key="category"
                @click="filterByCategory(category)"
                class="px-4 py-2 font-medium transition-all duration-300 text-sm"
                :class="selectedCategory === category 
                  ? 'bg-yellow-400 text-gray-900 shadow-lg' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <!-- Sort and View Options -->
          <div class="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">
            <!-- Sort -->
            <div class="w-full sm:w-auto">
              <h3 class="text-white font-semibold mb-2 text-sm uppercase tracking-wide">Trier par</h3>
              <select 
                v-model="sortBy"
                class="w-full sm:w-auto px-4 py-2 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm"
              >
                <option value="name">Nom (A-Z)</option>
                <option value="price-asc">Prix (croissant)</option>
                <option value="price-desc">Prix (décroissant)</option>
                <option value="rating">Note (élevée)</option>
              </select>
            </div>

            <!-- Results Count -->
            <div class="flex items-center">
              <span class="text-gray-400 text-sm">
                {{ filteredAndSortedEquipment.length }} engin{{ filteredAndSortedEquipment.length > 1 ? 's' : '' }} trouvé{{ filteredAndSortedEquipment.length > 1 ? 's' : '' }}
              </span>
            </div>
          </div>
        </div>

        <!-- Active Filters -->
        <div v-if="selectedCategory !== 'Tous' || searchQuery" class="mt-6 pt-6 border-t border-gray-700">
          <div class="flex flex-wrap items-center gap-3">
            <span class="text-gray-400 text-sm">Filtres actifs :</span>
            
            <div v-if="selectedCategory !== 'Tous'" class="flex items-center bg-yellow-400/20 text-yellow-400 px-3 py-1 text-sm">
              <span>{{ selectedCategory }}</span>
              <button @click="filterByCategory('Tous')" class="ml-2 hover:text-yellow-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div v-if="searchQuery" class="flex items-center bg-yellow-400/20 text-yellow-400 px-3 py-1 text-sm">
              <span>"{{ searchQuery }}"</span>
              <button @click="clearSearch" class="ml-2 hover:text-yellow-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <button 
              v-if="selectedCategory !== 'Tous' || searchQuery"
              @click="clearAllFilters"
              class="text-gray-400 hover:text-white text-sm underline"
            >
              Effacer tout
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Grid -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(equipment, index) in filteredAndSortedEquipment" 
            :key="equipment.id"
            class="group bg-gray-800 overflow-hidden hover-lift transition-all duration-300 hover:bg-gray-700 rounded-lg"
            :class="`animate-slide-up`"
            :style="`animation-delay: ${index * 0.05}s`"
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
                <span class="text-2xl font-bold text-white">{{ equipment.price.toLocaleString() }} FCFA<span class="text-sm text-gray-400">/jour</span></span>
              </div>
              
              <h3 class="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {{ equipment.name }}
              </h3>
              
              <p class="text-gray-300 text-sm mb-4 line-clamp-2">
                {{ equipment.description }}
              </p>

              <!-- Specifications -->
              <div class="mb-4">
                <h4 class="text-sm font-semibold text-white mb-2">Spécifications :</h4>
                <ul class="space-y-1">
                  <li 
                    v-for="spec in equipment.specifications.slice(0, 2)" 
                    :key="spec"
                    class="text-xs text-gray-400 flex items-center"
                  >
                    <svg class="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ spec }}
                  </li>
                </ul>
              </div>

              <!-- Features -->
              <div class="flex flex-wrap gap-2 mb-6">
                <span 
                  v-for="feature in equipment.features.slice(0, 3)" 
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

        <!-- No Results -->
        <div v-if="filteredAndSortedEquipment.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">🔍</div>
          <h3 class="text-2xl font-bold text-white mb-4">Aucun engin trouvé</h3>
          <p class="text-gray-400 mb-6">Essayez de modifier vos critères de recherche</p>
          <button 
            @click="clearFilters"
            class="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 font-semibold transition-all duration-300"
          >
            Réinitialiser les filtres
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Besoin d'aide pour choisir ?
        </h2>
        <p class="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
          Notre équipe d'experts est à votre disposition pour vous conseiller et vous accompagner 
          dans le choix de vos équipements.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="openQuoteModal"
            class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Demander un devis
          </button>
          <router-link 
            to="/contact"
            class="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 text-center"
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
import { ref, computed } from 'vue'
import { equipmentData, type Equipment } from '@/data/mockData'
import EquipmentDetailsModal from '@/components/EquipmentDetailsModal.vue'

const emit = defineEmits<{
  openQuoteModal: []
}>()

const isDetailsModalOpen = ref(false)
const selectedEquipment = ref<Equipment | null>(null)

const equipment = equipmentData
const searchQuery = ref('')
const selectedCategory = ref('Tous')
const sortBy = ref('name')

const categories = ['Tous', 'Excavation', 'Terrassement', 'Levage', 'Béton', 'Compactage']

const filteredAndSortedEquipment = computed(() => {
  let filtered = equipment

  // Filter by category
  if (selectedCategory.value !== 'Tous') {
    filtered = filtered.filter(eq => eq.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(eq => 
      eq.name.toLowerCase().includes(query) ||
      eq.description.toLowerCase().includes(query) ||
      eq.category.toLowerCase().includes(query)
    )
  }

  // Sort
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'price-asc':
        return a.price - b.price
      case 'price-desc':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return filtered
})

const filterByCategory = (category: string) => {
  selectedCategory.value = category
}

const clearSearch = () => {
  searchQuery.value = ''
}

const clearAllFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'Tous'
  sortBy.value = 'name'
}

const clearFilters = () => {
  clearAllFilters()
}

const viewDetails = (equipment: Equipment) => {
  selectedEquipment.value = equipment
  isDetailsModalOpen.value = true
}

const addToQuote = (_equipment: Equipment) => {
  emit('openQuoteModal')
}

const openQuoteModal = () => {
  emit('openQuoteModal')
}

const closeDetailsModal = () => {
  isDetailsModalOpen.value = false
  selectedEquipment.value = null
}

const addEquipmentToQuote = (_equipment: Equipment) => {
  closeDetailsModal()
  emit('openQuoteModal')
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
