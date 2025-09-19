<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-32 bg-gradient-to-r from-gray-900 to-gray-800">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=600&fit=crop"
          alt="About us"
          class="w-full h-full object-cover opacity-20"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          À propos de <span class="gradient-text">AIGC-BTP</span>
        </h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Votre partenaire de confiance depuis plus de 15 ans dans le secteur du
          BTP
        </p>
      </div>
    </section>

    <!-- Company Story -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Notre histoire
            </h2>
            <div class="w-16 h-1 bg-yellow-400 mb-8"></div>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              <span class="font-bold">AIGC-BTP</span> (Agence Immobilière de
              Gestion de Construction de Bâtiment et Travaux Public ) est une
              jeune entreprise dynamique basée à Bouaké, au cœur de la Côte
              d'Ivoire. Fondée par des passionnés du bâtiment et des travaux
              publics, notre ambition est de participer activement au
              développement des infrastructures locales en apportant des
              solutions modernes, durables et adaptées aux besoins de notre
              communauté.
            </p>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              Nous intervenons dans plusieurs domaines du BTP : construction de
              bâtiments, rénovation, génie civil, voirie et aménagements
              extérieurs. Grâce à une équipe compétente, rigoureuse et engagée,
              nous plaçons la qualité, la sécurité et le respect des délais au
              centre de chacune de nos réalisations.
            </p>
            <p class="text-gray-600 text-lg mb-6 leading-relaxed">
              Chez <span class="font-bold">AIGC-BTP</span>, nous croyons
              fermement que l'innovation et le professionnalisme sont les
              piliers d’une croissance durable. C’est pourquoi nous misons sur
              des technologies modernes, des partenariats solides, et surtout
              sur le talent local, pour construire aujourd’hui les
              infrastructures de demain.
            </p>
            <p class="text-gray-600 text-lg leading-relaxed">
              <span class="font-bold">AIGC-BTP</span>, bâtir avec passion,
              construire pour l’avenir.
            </p>
          </div>
          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop"
              alt="Company history"
              class="shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-6">
            Nos <span class="gradient-text">Valeurs</span>
          </h2>
          <p class="text-gray-300 text-lg max-w-3xl mx-auto">
            Les principes qui guident notre action au quotidien
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            class="text-center group"
            :class="`animate-slide-up`"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div
              class="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            >
              <span class="text-4xl">{{ value.icon }}</span>
            </div>
            <h3 class="text-xl font-bold text-white mb-4">{{ value.title }}</h3>
            <p class="text-gray-300 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">
            Notre <span class="gradient-text">Équipe</span>
          </h2>
          <p class="text-gray-600 text-lg max-w-3xl mx-auto">
            Des professionnels passionnés à votre service
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="(member, index) in team"
            :key="member.name"
            class="text-center group"
            :class="`animate-slide-up`"
            :style="`animation-delay: ${index * 0.1}s`"
          >
            <div class="relative mb-6">
              <img
                :src="member.image"
                :alt="member.name"
                class="w-48 h-48 object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
              />
              <div
                class="absolute inset-0 bg-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              ></div>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {{ member.name }}
            </h3>
            <p class="text-yellow-400 font-medium mb-3">
              {{ member.position }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ member.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section ref="statsSection" class="py-20 bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="text-center"
            :class="{ 'animate-fade-in-up': statsVisible }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="text-4xl md:text-5xl font-bold text-white mb-2">
              {{ statsVisible ? stat.animatedValue : "0" }}
            </div>
            <div class="text-yellow-400 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Rejoignez nos clients satisfaits
        </h2>
        <p class="text-gray-800 text-lg mb-8 max-w-2xl mx-auto">
          Découvrez pourquoi plus de 1000 entreprises nous font confiance pour
          leurs projets de construction.
        </p>
        <button
          @click="openQuoteModal"
          class="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Demander un devis
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const emit = defineEmits<{
  openQuoteModal: [];
}>();

const statsSection = ref<HTMLElement>();
const statsVisible = ref(false);

const openQuoteModal = () => {
  emit("openQuoteModal");
};

const values = [
  {
    icon: "🎯",
    title: "Excellence",
    description:
      "Nous nous engageons à fournir des services de la plus haute qualité, en respectant les délais et en dépassant les attentes de nos clients.",
  },
  {
    icon: "🤝",
    title: "Confiance",
    description:
      "La transparence et l'honnêteté sont au cœur de nos relations. Nous construisons des partenariats durables basés sur la confiance mutuelle.",
  },
  {
    icon: "🚀",
    title: "Innovation",
    description:
      "Nous investissons continuellement dans les dernières technologies et formations pour offrir des solutions modernes et efficaces.",
  },
];

const team = [
  {
    name: "Jean Dupont",
    position: "Directeur Général",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    description:
      "Fondateur de l'entreprise avec plus de 20 ans d'expérience dans le BTP.",
  },
  {
    name: "Marie Martin",
    position: "Directrice Commerciale",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    description:
      "Spécialiste des relations clients et du développement commercial.",
  },
  {
    name: "Pierre Durand",
    position: "Responsable Technique",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    description:
      "Expert en maintenance et réparation d'engins de construction.",
  },
];

const stats = ref([
  {
    value: "1000+",
    label: "Clients satisfaits",
    animatedValue: "0+",
    targetValue: 1000,
    suffix: "+",
  },
  {
    value: "500+",
    label: "Engins disponibles",
    animatedValue: "0+",
    targetValue: 500,
    suffix: "+",
  },
  {
    value: "15+",
    label: "Années d'expérience",
    animatedValue: "0+",
    targetValue: 15,
    suffix: "+",
  },
  {
    value: "24/7",
    label: "Support technique",
    animatedValue: "0/7",
    targetValue: 24,
    suffix: "/7",
  },
]);

// Animation de comptage progressif
const animateCounter = (stat: any, duration: number = 2000) => {
  const startTime = Date.now();
  const startValue = 0;
  const endValue = stat.targetValue;

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Fonction d'easing pour une animation plus fluide
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentValue = Math.floor(
      startValue + (endValue - startValue) * easeOutQuart
    );

    stat.animatedValue = currentValue + stat.suffix;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
};

// Intersection Observer pour déclencher l'animation
const setupIntersectionObserver = () => {
  if (!statsSection.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !statsVisible.value) {
          statsVisible.value = true;

          // Démarrer l'animation de comptage pour chaque statistique avec un délai
          stats.value.forEach((stat, index) => {
            setTimeout(() => {
              animateCounter(stat);
            }, index * 200);
          });

          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(statsSection.value);
};

onMounted(() => {
  // Setup intersection observer
  setupIntersectionObserver();
});
</script>

<style scoped>
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>
