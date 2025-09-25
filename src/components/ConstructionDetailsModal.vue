<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <!-- Backdrop -->
    <div class="fixed inset-0 bg-black bg-opacity-50 transition-opacity" @click="close"></div>
    
    <!-- Modal -->
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="relative bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[95vh] overflow-y-auto">
        <!-- Close Button -->
        <button 
          @click="close"
          class="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 transition-colors"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Content -->
        <div v-if="construction" class="p-0">
          <!-- Main Image -->
          <div class="relative h-96 w-full">
            <img 
              :src="construction.image" 
              :alt="construction.name"
              class="w-full h-full object-cover rounded-t-lg"
              @error="handleImageError"
              loading="lazy"
            />
            <!-- Status Badge -->
            <div class="absolute top-4 left-4">
              <span 
                class="px-4 py-2 text-sm font-semibold rounded"
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
            <div class="absolute top-4 right-4">
              <div class="flex items-center bg-white/90 backdrop-blur-sm px-3 py-2 rounded">
                <svg class="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span class="text-gray-800 font-medium">{{ construction.rating }}</span>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="p-8">
            <!-- Header -->
            <div class="mb-8">
              <div class="flex items-start justify-between mb-4">
                <div>
                  <h2 class="text-4xl font-bold text-gray-900 mb-3">{{ construction.name }}</h2>
                  <div class="flex items-center text-gray-600 mb-4">
                    <svg class="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-xl font-medium">{{ construction.location }}</span>
                  </div>
                </div>
                <div class="text-right">
                  <div class="text-5xl font-bold text-gray-900 mb-2">
                    {{ (construction.budget / 1000000).toFixed(0) }}M
                  </div>
                  <div class="text-lg text-gray-600">FCFA</div>
                </div>
              </div>
            </div>

            <!-- Description -->
            <div class="mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-3">Description du projet</h3>
              <p class="text-gray-600 leading-relaxed">{{ construction.description }}</p>
            </div>

            <!-- Project Details -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <!-- Project Info -->
              <div class="lg:col-span-2">
                <h3 class="text-2xl font-semibold text-gray-900 mb-6">Détails du projet</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                      <svg class="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                      <span class="font-semibold text-gray-900">Capacité</span>
                    </div>
                    <span class="text-gray-600">{{ construction.features.length }} chambres</span>
                  </div>
                  
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                      <svg class="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                      <span class="font-semibold text-gray-900">Durée</span>
                    </div>
                    <span class="text-gray-600">{{ construction.duration }}</span>
                  </div>
                  
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                      <svg class="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span class="font-semibold text-gray-900">Progression</span>
                    </div>
                    <span class="text-gray-600">{{ construction.completion }}%</span>
                  </div>
                  
                  <div class="bg-gray-50 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                      <svg class="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                      <span class="font-semibold text-gray-900">Début</span>
                    </div>
                    <span class="text-gray-600">{{ formatDate(construction.startDate) }}</span>
                  </div>
                  
                  <div v-if="construction.endDate" class="bg-gray-50 p-4 rounded-lg">
                    <div class="flex items-center mb-2">
                      <svg class="w-6 h-6 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                      </svg>
                      <span class="font-semibold text-gray-900">Fin</span>
                    </div>
                    <span class="text-gray-600">{{ formatDate(construction.endDate) }}</span>
                  </div>
                </div>
              </div>

              <!-- Features -->
              <div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-6">Caractéristiques</h3>
                <div class="space-y-3">
                  <div 
                    v-for="feature in construction.features" 
                    :key="feature"
                    class="flex items-center p-3 bg-gray-50 rounded-lg"
                  >
                    <svg class="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-700 font-medium">{{ feature }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Additional Images -->
            <div class="mb-8">
              <h3 class="text-2xl font-semibold text-gray-900 mb-6">Galerie d'images</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    :src="getDetailImage1(construction.category)" 
                    :alt="construction.name + ' - Détail 1'"
                    class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    @error="handleImageError"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div class="relative overflow-hidden rounded-lg shadow-lg">
                  <img 
                    :src="getDetailImage2(construction.category)" 
                    :alt="construction.name + ' - Détail 2'"
                    class="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    @error="handleImageError"
                    loading="lazy"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            <!-- Actions -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
              <button 
                @click="requestQuote"
                class="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 rounded-lg text-lg"
              >
                Demander un devis
              </button>
              <button 
                @click="contactUs"
                class="flex-1 bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 rounded-lg text-lg"
              >
                Nous contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
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

interface Props {
  isOpen: boolean
  construction: Construction | null
}

defineProps<Props>()

const emit = defineEmits<{
  close: []
  requestQuote: []
  contactUs: []
}>()

const close = () => {
  emit('close')
}

const requestQuote = () => {
  emit('requestQuote')
}

const contactUs = () => {
  emit('contactUs')
}

const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  // Fallback vers une image de construction par défaut en cas d'erreur
  img.src = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const getDetailImage1 = (category: string) => {
  const imageMap: Record<string, string> = {
    'Résidentiel': 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop',
    'Commercial': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=300&fit=crop',
    'Éducatif': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=300&fit=crop',
    'Santé': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop',
    'Infrastructure': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop',
    'Industriel': 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop',
    'Culturel': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=300&fit=crop',
    'Recherche': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop'
  }
  return imageMap[category] || 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&h=300&fit=crop'
}

const getDetailImage2 = (category: string) => {
  const imageMap: Record<string, string> = {
    'Résidentiel': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop',
    'Commercial': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop',
    'Éducatif': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=300&fit=crop',
    'Santé': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=300&fit=crop',
    'Infrastructure': 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500&h=300&fit=crop',
    'Industriel': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=300&fit=crop',
    'Culturel': 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=300&fit=crop',
    'Recherche': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=500&h=300&fit=crop'
  }
  return imageMap[category] || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&h=300&fit=crop'
}
</script>
