<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-r from-gray-900 to-gray-800">
      <div class="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=600&fit=crop" 
          alt="Contact"
          class="w-full h-full object-cover opacity-20"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          Nous <span class="gradient-text">Contacter</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Notre équipe est à votre disposition pour répondre à toutes vos questions
        </p>
      </div>
    </section>

    <!-- Contact Info & Form -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">
              Informations de contact
            </h2>
            
            <div class="space-y-8">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Adresse</h3>
                  <p class="text-gray-600">
                     Côte d'Ivoire<br>
                     BP - 124 Bouake 01
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.949.684V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Téléphone</h3>
                  <p class="text-gray-600">(+225) 07 08 31 89 76</p>
                  <p class="text-gray-600">(+225) 07 08 11 11 32</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p class="text-gray-600">infos@aigcbtp.com</p>
                  <!-- <p class="text-gray-600">commercial@archibat.fr</p> -->
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-2">Horaires</h3>
                  <p class="text-gray-600">Lun - Ven: 8h00 - 18h00</p>
                  <p class="text-gray-600">Sam: 8h00 - 12h00</p>
                  <p class="text-gray-600">Dim: Fermé</p>
                </div>
              </div>
            </div>

            <!-- Social Media -->
            <div class="mt-12">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Suivez-nous</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-colors duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-colors duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="w-10 h-10 bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center transition-colors duration-300">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-gray-800 p-8">
            <h2 class="text-2xl font-bold text-white mb-6">
              Envoyez-nous un message
            </h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">
                    Prénom *
                  </label>
                  <input 
                    v-model="form.firstName"
                    type="text" 
                    required
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-300 mb-2">
                    Nom *
                  </label>
                  <input 
                    v-model="form.lastName"
                    type="text" 
                    required
                    class="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input 
                  v-model="form.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">
                  Téléphone
                </label>
                <input 
                  v-model="form.phone"
                  type="tel" 
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">
                  Sujet *
                </label>
                <select 
                  v-model="form.subject"
                  required
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="location">Location d'engins</option>
                  <option value="vente">Vente de matériel</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="formation">Formation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea 
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  placeholder="Décrivez votre demande..."
                ></textarea>
              </div>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-gray-900 px-6 py-4 font-semibold transition-all duration-300 hover:scale-105"
              >
                {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-white mb-4">
            Nous <span class="gradient-text">Trouver</span>
          </h2>
          <p class="text-gray-300 text-lg">
            Visitez nos locaux ou contactez-nous pour un rendez-vous
          </p>
        </div>
        
        <div class="bg-gray-800 overflow-hidden">
          <div class="h-96 bg-gray-300 flex items-center justify-center">
            <div class="text-center">
              <svg class="w-16 h-16 text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-gray-500">Carte interactive (intégration Google Maps)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">
            Questions <span class="gradient-text">Fréquentes</span>
          </h2>
          <p class="text-gray-600 text-lg">
            Trouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div class="space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="bg-gray-50 overflow-hidden"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-300"
            >
              <span class="font-semibold text-gray-900">{{ faq.question }}</span>
              <svg 
                class="w-5 h-5 text-gray-500 transition-transform duration-300"
                :class="{ 'rotate-180': faq.isOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div 
              v-if="faq.isOpen"
              class="px-6 pb-4 text-gray-600 leading-relaxed"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// const emit = defineEmits<{
//   openQuoteModal: []
// }>()

const isSubmitting = ref(false)

const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const faqs = ref([
  {
    question: "Quels sont vos délais de livraison ?",
    answer: "Nos délais de livraison varient selon la disponibilité des engins et la localisation. En général, nous pouvons livrer dans un délai de 24 à 48h pour la région parisienne et 2 à 5 jours pour les autres régions.",
    isOpen: false
  },
  {
    question: "Proposez-vous des formations pour les opérateurs ?",
    answer: "Oui, nous proposons des formations CACES pour tous nos engins. Nos formateurs certifiés se déplacent sur votre site pour former vos équipes aux bonnes pratiques d'utilisation.",
    isOpen: false
  },
  {
    question: "Quelle est votre politique de maintenance ?",
    answer: "Tous nos engins sont maintenus selon un planning strict. Nous effectuons des révisions complètes avant chaque location et proposons un service de maintenance préventive pour nos clients réguliers.",
    isOpen: false
  },
  {
    question: "Acceptez-vous les paiements échelonnés ?",
    answer: "Oui, nous proposons des solutions de financement adaptées à vos besoins. Contactez notre service commercial pour étudier les modalités de paiement qui vous conviennent.",
    isOpen: false
  },
  {
    question: "Quelle est votre zone d'intervention ?",
    answer: "Nous intervenons sur toute la France métropolitaine. Pour les livraisons, nous facturons des frais de transport selon la distance. Contactez-nous pour un devis personnalisé.",
    isOpen: false
  }
])

const toggleFaq = (index: number) => {
  faqs.value[index].isOpen = !faqs.value[index].isOpen
}

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Reset form
  form.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  // Show success message
  alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
}

// const openQuoteModal = () => {
//   emit('openQuoteModal')
// }
</script>
