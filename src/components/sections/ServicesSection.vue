<script setup>
import { ref, computed } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { services, serviceTabs } from '@/data/siteData';

const activeTab = ref('all');
const hoveredService = ref(null);

const filteredServices = computed(() => {
  if (activeTab.value === 'all') return services;
  return services.filter(
    (service) => service.category === activeTab.value || service.category === 'all'
  );
});
</script>

<template>
  <section id="servicios" class="section services">
    <div class="container">
      <SectionHeader
        tag="Nuestros servicios"
        title="Soluciones para cada necesidad"
        description="Ofrecemos servicios especializados adaptados a hogares y negocios con los más altos estándares de calidad."
      />

      <div class="services__tabs">
        <button
          v-for="tab in serviceTabs"
          :key="tab.id"
          class="services__tab"
          :class="{ active: activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <span class="services__tab-icon" v-html="tab.icon"></span>
          {{ tab.label }}
        </button>
      </div>

      <TransitionGroup name="service" tag="div" class="services__grid">
        <article
          v-for="service in filteredServices"
          :key="service.title"
          class="service-card"
          @mouseenter="hoveredService = service.title"
          @mouseleave="hoveredService = null"
          :class="{ 'service-card--hover': hoveredService === service.title }"
        >
          <div class="service-card__icon" v-html="service.icon"></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <ul>
            <li v-for="item in service.items" :key="item">{{ item }}</li>
          </ul>
        </article>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.service-enter-active,
.service-leave-active {
  transition: all 0.35s ease;
}

.service-enter-from,
.service-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
</style>
