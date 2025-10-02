<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-800 mb-6 constructo-heading">
          NOS SERVICES
        </h2>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div 
          v-for="(service, index) in services.slice(0, 3)" 
          :key="service.id"
          class="text-center group"
          :class="`animate-scale-in`"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          <!-- Circular Icon -->
          <div class="w-24 h-24 bg-slate-100 border-2 border-slate-200 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-slate-200 transition-all duration-300">
            <span class="text-3xl text-slate-800">{{ service.icon }}</span>
          </div>

          <!-- Content -->
          <h3 class="text-xl font-bold text-slate-800 mb-4 constructo-heading">
            {{ service.title.toUpperCase() }}
          </h3>
          <p class="text-slate-600 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { servicesData } from '@/data/mockData'

const services = servicesData
</script>
