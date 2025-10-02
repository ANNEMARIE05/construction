<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Background Image with Dark Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center" 
        alt="Construction site background"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-slate-800/40"></div>
    </div>

    <!-- Content -->
    <div class="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div class="animate-fade-in">
        <p class="text-amber-400 text-lg sm:text-xl font-medium mb-4 animate-slide-bounce">
          QUALITÉ SUPÉRIEURE
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 constructo-heading animate-scale-in" style="animation-delay: 0.2s;">
          DE L'IDÉE À LA
          <span class="block animate-rotate-in" style="animation-delay: 0.4s;">RÉALISATION</span>
        </h1>
        <p class="text-white text-lg sm:text-xl mb-8 max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.6s;">
          Votre partenaire de confiance pour la location d'engins de construction et la vente de matériel BTP. 
          Des solutions professionnelles pour tous vos projets.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style="animation-delay: 0.8s;">
          <button 
            @click="scrollToEquipment"
            class="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 font-semibold transition-all duration-300"
          >
            VOIR NOS ENGINS
          </button>
          <button 
            @click="openQuoteModal"
            class="constructo-button px-8 py-4 text-lg"
          >
            DEMANDER UN DEVIS
          </button>
        </div>
      </div>
    </div>

    <!-- Navigation Dots -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
      <div class="w-2 h-2 bg-white"></div>
      <div class="w-2 h-2 bg-white/50"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openQuoteModal = () => {
  emit('openQuoteModal')
}

const scrollToEquipment = () => {
  const element = document.getElementById('equipment-section')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const emit = defineEmits<{
  openQuoteModal: []
}>()
</script>
