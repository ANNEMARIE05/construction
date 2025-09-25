<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-r from-gray-900 to-gray-800">
      <div class="absolute inset-0">
        <img 
          src="../assets/grue-industrielle-ciel-bleu.webp" 
          alt="Constructions"
          class="w-full h-full object-cover opacity-20"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Nos <span class="gradient-text">Constructions</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Découvrez nos réalisations et projets de construction en Côte d'Ivoire
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
                placeholder="Rechercher un projet, une ville ou un type de construction..."
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
            <h3 class="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Types de construction</h3>
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
                <option value="date-desc">Date (récent)</option>
                <option value="date-asc">Date (ancien)</option>
                <option value="budget-desc">Budget (élevé)</option>
                <option value="budget-asc">Budget (faible)</option>
              </select>
            </div>

            <!-- Results Count -->
            <div class="flex items-center">
              <span class="text-gray-400 text-sm">
                {{ filteredAndSortedConstructions.length }} projet{{ filteredAndSortedConstructions.length > 1 ? 's' : '' }} trouvé{{ filteredAndSortedConstructions.length > 1 ? 's' : '' }}
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

    <!-- Constructions Grid -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white">
            Nos <span class="gradient-text">Constructions</span>
          </h2>
        </div>

        <!-- Loading Animation -->
        <div v-if="isLoading" class="flex justify-center items-center py-20">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
        </div>

        <!-- Construction Cards -->
        <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="(construction, index) in filteredAndSortedConstructions" 
            :key="construction.id"
            class="group rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            :class="getCardColorClass(construction.category)"
            :data-animate="index % 2 === 0 ? 'animate-fade-up-right' : 'animate-fade-up-left'"
            :style="`animation-delay: ${index * 0.1}s`"
          >
                <!-- Image -->
                <div class="relative overflow-hidden h-64">
                  <img 
                    :src="construction.image" 
                    :alt="construction.name"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <!-- Status Badge -->
                  <div class="absolute top-4 right-4">
                    <span 
                      class="px-3 py-1 text-xs font-semibold rounded-full"
                      :class="construction.status === 'Terminé' 
                        ? 'bg-green-500 text-white' 
                        : construction.status === 'En cours'
                        ? 'bg-yellow-500 text-white'
                        : 'bg-blue-500 text-white'"
                    >
                      {{ construction.status }}
                    </span>
                  </div>
                  <!-- Rating -->
                  <div class="absolute top-4 left-4">
                    <div class="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
                      <svg class="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span class="text-gray-800 text-sm font-medium">{{ construction.rating }}</span>
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-6">
                  <!-- Location -->
                  <div class="flex items-center text-sm mb-3" :class="getTextColorClass(construction.category)">
                    <svg class="w-4 h-4 mr-2" :class="getIconColorClass(construction.category)" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    {{ construction.location }}
                  </div>

                  <!-- Project Details -->
                  <div class="flex items-center gap-4 mb-4 text-sm" :class="getTextColorClass(construction.category)">
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" :class="getIconColorClass(construction.category)" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      <span>{{ construction.features.length }} chambres</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" :class="getIconColorClass(construction.category)" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                      </svg>
                      <span>{{ construction.duration }}</span>
                    </div>
                    <div class="flex items-center">
                      <svg class="w-4 h-4 mr-1" :class="getIconColorClass(construction.category)" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                      </svg>
                      <span>{{ construction.completion }}%</span>
                    </div>
                  </div>

                  <!-- Price -->
                  <div class="mb-4">
                    <span class="text-2xl font-bold" :class="getPriceColorClass(construction.category)">
                      {{ (construction.budget / 1000000).toFixed(0) }}M FCFA
                    </span>
                  </div>

                  <!-- Action Button -->
                  <button 
                    @click="viewDetails(construction)"
                    class="w-full px-6 py-3 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg rounded"
                    :class="getButtonColorClass(construction.category)"
                  >
                    Voir les détails
                  </button>
                </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredAndSortedConstructions.length === 0" class="text-center py-12">
          <div class="text-6xl mb-4">🏗️</div>
          <h3 class="text-2xl font-bold text-white mb-4">Aucun projet trouvé</h3>
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


    <!-- Statistics Section -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos <span class="gradient-text">Réalisations</span> en Chiffres
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Plus de 20 ans d'expérience dans le domaine de la construction en Côte d'Ivoire
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center" data-animate="animate-fade-up">
            <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">150+</div>
            <div class="text-white text-lg font-semibold mb-1">Projets Réalisés</div>
            <div class="text-gray-400 text-sm">Depuis 2003</div>
          </div>
          <div class="text-center" data-animate="animate-fade-up">
            <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">2.5M</div>
            <div class="text-white text-lg font-semibold mb-1">m² Construits</div>
            <div class="text-gray-400 text-sm">Tous secteurs confondus</div>
          </div>
          <div class="text-center" data-animate="animate-fade-up">
            <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">98%</div>
            <div class="text-white text-lg font-semibold mb-1">Satisfaction Client</div>
            <div class="text-gray-400 text-sm">Clients satisfaits</div>
          </div>
          <div class="text-center" data-animate="animate-fade-up">
            <div class="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">25</div>
            <div class="text-white text-lg font-semibold mb-1">Villes Desservies</div>
            <div class="text-gray-400 text-sm">À travers la Côte d'Ivoire</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Projets <span class="gradient-text">Phares</span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez nos réalisations les plus emblématiques qui ont marqué l'architecture ivoirienne
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Featured Project 1 -->
          <div class="group" data-animate="animate-fade-right">
            <div class="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=400&fit=crop" 
                alt="Complexe Résidentiel Les Jardins"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold mb-2">Complexe Résidentiel Les Jardins</h3>
                <p class="text-gray-200">Abidjan, Cocody</p>
              </div>
            </div>
            <div class="text-gray-300">
              <p class="mb-4">
                Un complexe résidentiel moderne de 50 logements avec espaces verts, parking souterrain 
                et toutes les commodités modernes. Ce projet a révolutionné l'habitat urbain à Abidjan.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-yellow-400 font-semibold">2.5M FCFA</span>
                <span class="text-sm">Terminé en 2023</span>
              </div>
            </div>
          </div>

          <!-- Featured Project 2 -->
          <div class="group" data-animate="animate-fade-left">
            <div class="relative overflow-hidden rounded-lg mb-6">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=400&fit=crop" 
                alt="Centre Commercial Riviera"
                class="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div class="absolute bottom-4 left-4 text-white">
                <h3 class="text-2xl font-bold mb-2">Centre Commercial Riviera</h3>
                <p class="text-gray-200">Abidjan, Riviera</p>
              </div>
            </div>
            <div class="text-gray-300">
              <p class="mb-4">
                Un centre commercial de 3 étages avec 120 boutiques, restaurants et cinéma. 
                Le plus grand centre commercial de l'Afrique de l'Ouest avec parking de 500 places.
              </p>
              <div class="flex items-center justify-between">
                <span class="text-yellow-400 font-semibold">4.5M FCFA</span>
                <span class="text-sm">En cours - 75%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Nos <span class="gradient-text">Services</span>
          </h2>
          <p class="text-gray-300 text-lg max-w-2xl mx-auto">
            Une gamme complète de services pour tous vos besoins en construction
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-all duration-300" data-animate="animate-fade-up">
            <div class="text-yellow-400 text-4xl mb-4">🏗️</div>
            <h3 class="text-xl font-bold text-white mb-3">Construction Générale</h3>
            <p class="text-gray-300 mb-4">
              Construction de bâtiments résidentiels, commerciaux et industriels avec les meilleurs standards de qualité.
            </p>
            <ul class="text-gray-400 text-sm space-y-1">
              <li>• Bâtiments résidentiels</li>
              <li>• Centres commerciaux</li>
              <li>• Usines et entrepôts</li>
            </ul>
          </div>

          <div class="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-all duration-300" data-animate="animate-fade-up">
            <div class="text-yellow-400 text-4xl mb-4">🛣️</div>
            <h3 class="text-xl font-bold text-white mb-3">Infrastructure</h3>
            <p class="text-gray-300 mb-4">
              Réalisation d'infrastructures routières, ponts et ouvrages d'art pour le développement du pays.
            </p>
            <ul class="text-gray-400 text-sm space-y-1">
              <li>• Routes et autoroutes</li>
              <li>• Ponts et viaducs</li>
              <li>• Ouvrages d'art</li>
            </ul>
          </div>

          <div class="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-all duration-300" data-animate="animate-fade-up">
            <div class="text-yellow-400 text-4xl mb-4">🏥</div>
            <h3 class="text-xl font-bold text-white mb-3">Bâtiments Publics</h3>
            <p class="text-gray-300 mb-4">
              Construction d'établissements de santé, d'éducation et d'infrastructures publiques.
            </p>
            <ul class="text-gray-400 text-sm space-y-1">
              <li>• Hôpitaux et cliniques</li>
              <li>• Écoles et universités</li>
              <li>• Bâtiments administratifs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Vous avez un projet de construction ?
        </h2>
        <p class="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
          Notre équipe d'experts est prête à réaliser votre projet avec la même qualité 
          et le même professionnalisme que nos réalisations.
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

    <!-- Construction Details Modal -->
    <ConstructionDetailsModal 
      :is-open="isDetailsModalOpen"
      :construction="selectedConstruction"
      @close="closeDetailsModal"
      @request-quote="openQuoteModal"
      @contact-us="contactUs"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useScrollAnimations } from '../composables/useAnimations'
import ConstructionDetailsModal from '../components/ConstructionDetailsModal.vue'

// Initialize scroll animations
useScrollAnimations()

// Modal state
const isDetailsModalOpen = ref(false)
const selectedConstruction = ref<Construction | null>(null)
const isLoading = ref(true)

interface Construction {
  id: number
  name: string
  description: string
  category: string
  location: string
  budget: number
  duration: string
  status: string
  completion: number
  rating: number
  image: string
  features: string[]
  startDate: string
  endDate?: string
}

const emit = defineEmits<{
  openQuoteModal: []
}>()

// Mock data for constructions - Only 8 constructions with unique images
const constructionsData: Construction[] = [
  {
    id: 1,
    name: "Complexe Résidentiel Les Jardins",
    description: "Construction d'un complexe résidentiel moderne de 50 logements avec espaces verts et parking souterrain.",
    category: "Résidentiel",
    location: "Abidjan, Cocody",
    budget: 2500000000,
    duration: "18 mois",
    status: "Terminé",
    completion: 100,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1701589212543-b3cabb5423c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9ucyUyMG1haXNvbnN8ZW58MHx8MHx8fDA%3D",
    features: ["Parking souterrain", "Espaces verts", "Sécurité 24h/24", "Ascenseurs"],
    startDate: "2022-01-15",
    endDate: "2023-07-15"
  },
  {
    id: 2,
    name: "Centre Commercial Riviera",
    description: "Construction d'un centre commercial de 3 étages avec 120 boutiques, restaurants et cinéma.",
    category: "Commercial",
    location: "Abidjan, Riviera",
    budget: 4500000000,
    duration: "24 mois",
    status: "En cours",
    completion: 75,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1504202302068-15fc2055f7f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9ucyUyMG1haXNvbnN8ZW58MHx8MHx8fDA%3D",
    features: ["120 boutiques", "Restaurants", "Cinéma", "Parking 500 places"],
    startDate: "2023-03-01"
  },
  {
    id: 3,
    name: "École Primaire Moderne",
    description: "Construction d'une école primaire de 12 classes avec bibliothèque, cantine et terrain de sport.",
    category: "Éducatif",
    location: "Bouaké, Centre",
    budget: 850000000,
    duration: "12 mois",
    status: "Terminé",
    completion: 100,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=300&fit=crop",
    features: ["12 classes", "Bibliothèque", "Cantine", "Terrain de sport"],
    startDate: "2022-06-01",
    endDate: "2023-06-01"
  },
  {
    id: 4,
    name: "Hôpital Régional",
    description: "Construction d'un hôpital de 200 lits avec services d'urgence, bloc opératoire et laboratoire.",
    category: "Santé",
    location: "San-Pédro, Sud-Ouest",
    budget: 3200000000,
    duration: "30 mois",
    status: "En cours",
    completion: 60,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
    features: ["200 lits", "Urgences", "Bloc opératoire", "Laboratoire"],
    startDate: "2023-01-15"
  },
  {
    id: 5,
    name: "Pont sur la Marahoué",
    description: "Construction d'un pont de 150m de long pour relier les deux rives de la Marahoué.",
    category: "Infrastructure",
    location: "Bouaflé, Centre-Ouest",
    budget: 1800000000,
    duration: "15 mois",
    status: "Terminé",
    completion: 100,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop",
    features: ["150m de long", "2 voies", "Éclairage LED", "Sécurité renforcée"],
    startDate: "2022-09-01",
    endDate: "2023-12-01"
  },
  {
    id: 6,
    name: "Usine de Transformation",
    description: "Construction d'une usine de transformation de cacao de 5000m² avec entrepôts et bureaux.",
    category: "Industriel",
    location: "Divo, Sud",
    budget: 2200000000,
    duration: "20 mois",
    status: "Planifié",
    completion: 0,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop",
    features: ["5000m²", "Entrepôts", "Bureaux", "Laboratoire qualité"],
    startDate: "2024-03-01"
  },
  {
    id: 7,
    name: "Résidence Premium Cocody",
    description: "Construction d'une résidence de luxe de 30 appartements avec piscine et spa.",
    category: "Résidentiel",
    location: "Abidjan, Cocody",
    budget: 3800000000,
    duration: "22 mois",
    status: "En cours",
    completion: 45,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop",
    features: ["Piscine", "Spa", "Gym", "Conciergerie"],
    startDate: "2023-08-01"
  },
  {
    id: 8,
    name: "Université Moderne",
    description: "Construction d'un campus universitaire avec 5 facultés et laboratoires de recherche.",
    category: "Éducatif",
    location: "Yamoussoukro, Centre",
    budget: 5200000000,
    duration: "36 mois",
    status: "En cours",
    completion: 30,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1705237557548-bfb1597caca4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNvbnN0cnVjdGlvbnMlMjBtYWlzb25zfGVufDB8fDB8fHww",
    features: ["5 facultés", "Laboratoires", "Bibliothèque", "Amphithéâtres"],
    startDate: "2023-06-01"
  }
]

const constructions = constructionsData
const searchQuery = ref('')
const selectedCategory = ref('Tous')
const sortBy = ref('name')

const categories = ['Tous', 'Résidentiel', 'Commercial', 'Éducatif', 'Santé', 'Infrastructure', 'Industriel', 'Culturel', 'Recherche']

const filteredAndSortedConstructions = computed(() => {
  let filtered = constructions

  // Filter by category
  if (selectedCategory.value !== 'Tous') {
    filtered = filtered.filter(construction => construction.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(construction => 
      construction.name.toLowerCase().includes(query) ||
      construction.description.toLowerCase().includes(query) ||
      construction.category.toLowerCase().includes(query) ||
      construction.location.toLowerCase().includes(query)
    )
  }

  // Sort
  filtered.sort((a, b) => {
    switch (sortBy.value) {
      case 'budget-desc':
        return b.budget - a.budget
      case 'budget-asc':
        return a.budget - b.budget
      case 'date-desc':
        return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      case 'date-asc':
        return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
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

const viewDetails = (construction: Construction) => {
  selectedConstruction.value = construction
  isDetailsModalOpen.value = true
}

const closeDetailsModal = () => {
  isDetailsModalOpen.value = false
  selectedConstruction.value = null
}

const contactUs = () => {
  // Navigate to contact page or open contact modal
  console.log('Contact us')
}


const openQuoteModal = () => {
  emit('openQuoteModal')
}

// Color functions for different categories - using equipment-style colors
const getCardColorClass = (_category: string) => {
  return 'bg-gray-800'
}

const getTextColorClass = (_category: string) => {
  return 'text-gray-300'
}

const getIconColorClass = (_category: string) => {
  return 'text-yellow-400'
}

const getPriceColorClass = (_category: string) => {
  return 'text-white'
}

const getButtonColorClass = (_category: string) => {
  return 'bg-yellow-400 hover:bg-yellow-500 text-gray-900'
}

// Loading animation
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500) // Show loading for 1.5 seconds
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
