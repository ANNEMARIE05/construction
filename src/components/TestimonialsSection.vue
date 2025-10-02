<template>
  <section class="py-20 bg-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
          Ce que disent nos <span class="gradient-text">Clients</span>
        </h2>
        <p class="text-slate-600 text-lg max-w-3xl mx-auto">
          La satisfaction de nos clients est notre priorité. Découvrez leurs témoignages.
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative">
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div 
              v-for="testimonial in testimonials" 
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white p-8 md:p-12 text-center max-w-4xl mx-auto rounded-lg shadow-lg">
                <!-- Quote Icon -->
                <div class="w-16 h-16 bg-slate-100 flex items-center justify-center mx-auto mb-8">
                  <svg class="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>

                <!-- Content -->
                <blockquote class="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed">
                  "{{ testimonial.content }}"
                </blockquote>

                <!-- Rating -->
                <div class="flex justify-center mb-6">
                  <div class="flex space-x-1">
                    <svg 
                      v-for="star in 5" 
                      :key="star"
                      class="w-6 h-6"
                      :class="star <= testimonial.rating ? 'text-amber-500' : 'text-slate-300'"
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <!-- Author -->
                <div class="flex items-center justify-center">
                  <img 
                    :src="testimonial.image" 
                    :alt="testimonial.name"
                    class="w-16 h-16 object-cover mr-4"
                  />
                  <div class="text-left">
                    <div class="text-white font-semibold text-lg">{{ testimonial.name }}</div>
                    <div class="text-yellow-400 text-sm">{{ testimonial.company }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Arrows -->
        <button 
          @click="previousSlide"
          class="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          @click="nextSlide"
          class="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Dots Indicator -->
      <div class="flex justify-center mt-8 space-x-2">
        <button 
          v-for="(_, index) in testimonials" 
          :key="index"
          @click="goToSlide(index)"
          class="w-3 h-3 transition-all duration-300"
          :class="index === currentSlide ? 'bg-amber-500' : 'bg-slate-300'"
        ></button>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { testimonialsData } from '@/data/mockData'

const testimonials = testimonialsData
const currentSlide = ref(0)

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.length
}

const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? testimonials.length - 1 : currentSlide.value - 1
}

const goToSlide = (index: number) => {
  currentSlide.value = index
}

let autoSlideInterval: number

onMounted(() => {
  // Auto-slide every 5 seconds
  autoSlideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})
</script>
