<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
    <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <!-- Background overlay -->
      <div 
        class="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
        @click="closeModal"
      ></div>

      <!-- Modal panel -->
      <div class="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full">
        <!-- Header -->
        <div class="bg-slate-100 px-6 py-4 border-b border-slate-200">
          <div class="flex items-center justify-between">
            <h3 class="text-xl font-bold text-slate-800">
              Demande de devis
            </h3>
            <button 
              @click="closeModal"
              class="text-slate-500 hover:text-slate-700 transition-colors duration-300 magnetic"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Content -->
        <div class="px-6 py-6">
          <!-- Selected Equipment -->
          <div v-if="selectedEquipment.length > 0" class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Équipements sélectionnés</h4>
            <div class="space-y-3">
              <div 
                v-for="equipment in selectedEquipment" 
                :key="equipment.id"
                class="flex items-center justify-between bg-gray-100 p-3 border border-gray-200"
              >
                <div class="flex items-center space-x-3">
                  <img 
                    :src="equipment.image" 
                    :alt="equipment.name"
                    class="w-12 h-12 object-cover"
                  />
                  <div>
                    <div class="text-gray-900 font-medium">{{ equipment.name }}</div>
                    <div class="text-gray-600 text-sm">{{ equipment.category }}</div>
                  </div>
                </div>
                <div class="flex items-center space-x-3">
                  <span class="text-yellow-600 font-semibold">{{ equipment.price.toLocaleString() }} FCFA/jour</span>
                  <button 
                    @click="removeEquipment(equipment.id)"
                    class="text-red-500 hover:text-red-600 transition-colors duration-300 magnetic"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Quote Form -->
          <form @submit.prevent="submitQuote" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <!-- Personal Information -->
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-900">Informations personnelles</h4>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input 
                    v-model="form.fullName"
                    type="text" 
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input 
                    v-model="form.phone"
                    type="tel" 
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="+33 1 23 45 67 89"
                  />
                </div>
              </div>

              <!-- Project Information -->
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-gray-900">Informations projet</h4>
                
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Nom de l'entreprise
                  </label>
                  <input 
                    v-model="form.company"
                    type="text" 
                    class="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Durée de location (jours) *
                  </label>
                  <input 
                    v-model="form.duration"
                    type="number" 
                    min="1"
                    required
                    class="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                    placeholder="Nombre de jours"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Date de début souhaitée
                  </label>
                  <input 
                    v-model="form.startDate"
                    type="date" 
                    class="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            <!-- Additional Information -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Informations complémentaires
              </label>
              <textarea 
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                placeholder="Décrivez votre projet, localisation, contraintes particulières..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex justify-end space-x-4">
              <button 
                type="button"
                @click="closeModal"
                class="px-6 py-3 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold transition-all duration-300 magnetic"
              >
                Annuler
              </button>
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-gray-900 font-semibold transition-all duration-300 glow-effect"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { type Equipment } from '@/data/mockData'

interface QuoteForm {
  fullName: string
  email: string
  phone: string
  company: string
  duration: number | null
  startDate: string
  message: string
}

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const selectedEquipment = ref<Equipment[]>([])
const isSubmitting = ref(false)

const form = ref<QuoteForm>({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  duration: null,
  startDate: '',
  message: ''
})

const closeModal = () => {
  emit('close')
}

const removeEquipment = (equipmentId: number) => {
  selectedEquipment.value = selectedEquipment.value.filter(eq => eq.id !== equipmentId)
}

const addEquipment = (equipment: Equipment) => {
  if (!selectedEquipment.value.find(eq => eq.id === equipment.id)) {
    selectedEquipment.value.push(equipment)
  }
}

const submitQuote = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  form.value = {
    fullName: '',
    email: '',
    phone: '',
    company: '',
    duration: null,
    startDate: '',
    message: ''
  }
  
  selectedEquipment.value = []
  isSubmitting.value = false
  closeModal()
  
  // Show success message (you can implement a toast notification here)
  alert('Votre demande de devis a été envoyée avec succès !')
}

// Watch for equipment additions from parent
watch(() => props.isOpen, (newValue) => {
  if (newValue) {
    // Reset form when modal opens
    form.value = {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      duration: null,
      startDate: '',
      message: ''
    }
  }
})

// Expose methods for parent component
defineExpose({
  addEquipment
})
</script>
