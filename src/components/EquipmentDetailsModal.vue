<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto bg-white">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div 
        class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal panel -->
      <div class="inline-block align-bottom bg-gray-800 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <!-- Header -->
        <div class="bg-gray-700 px-6 py-4 border-b border-gray-600">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-white">
              Détails de l'équipement
            </h3>
            <button 
              @click="closeModal"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Content -->
        <div v-if="equipment" class="p-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Image -->
            <div class="relative">
              <img 
                :src="equipment.image" 
                :alt="equipment.name"
                class="w-full h-64 object-cover"
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

            <!-- Details -->
            <div>
              <div class="mb-4">
                <span class="text-yellow-400 text-sm font-medium">{{ equipment.category }}</span>
                <h2 class="text-2xl font-bold text-white mt-2">{{ equipment.name }}</h2>
                <div class="text-3xl font-bold text-yellow-400 mt-2">
                  {{ equipment.price.toLocaleString() }} FCFA<span class="text-lg text-gray-400">/jour</span>
                </div>
              </div>

              <p class="text-gray-300 mb-6 leading-relaxed">
                {{ equipment.description }}
              </p>

              <!-- Specifications -->
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-white mb-3">Spécifications techniques :</h3>
                <ul class="space-y-2">
                  <li 
                    v-for="spec in equipment.specifications" 
                    :key="spec"
                    class="text-gray-300 flex items-center"
                  >
                    <svg class="w-4 h-4 text-yellow-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    {{ spec }}
                  </li>
                </ul>
              </div>

              <!-- Features -->
              <div class="mb-6">
                <h3 class="text-lg font-semibold text-white mb-3">Caractéristiques :</h3>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="feature in equipment.features" 
                    :key="feature"
                    class="px-3 py-1 bg-gray-700 text-gray-300 text-sm"
                  >
                    {{ feature }}
                  </span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex gap-4">
                <button 
                  @click="addToQuote"
                  :disabled="!equipment.availability"
                  class="flex-1 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 px-6 py-3 font-semibold transition-all duration-300 hover:scale-105"
                >
                  {{ equipment.availability ? 'Ajouter au devis' : 'Indisponible' }}
                </button>
                <button 
                  @click="closeModal"
                  class="flex-1 bg-transparent border border-gray-600 text-gray-300 hover:bg-gray-700 px-6 py-3 font-semibold transition-all duration-300"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Equipment } from '@/data/mockData'

interface Props {
  isOpen: boolean
  equipment: Equipment | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  close: []
  addToQuote: [equipment: Equipment]
}>()

const closeModal = () => {
  emit('close')
}

const addToQuote = () => {
  if (props.equipment) {
    emit('addToQuote', props.equipment)
  }
}
</script>
