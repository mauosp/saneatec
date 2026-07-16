<script setup>
import { ref } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { processSteps } from '@/data/siteData';
import { useIntersection } from '@/composables/useIntersection';

const activeStep = ref(-1);

const { targetRef } = useIntersection(() => {
  processSteps.forEach((_, index) => {
    setTimeout(() => {
      activeStep.value = index;
    }, index * 300);
  });
}, { threshold: 0.3 });
</script>

<template>
  <section id="proceso" ref="targetRef" class="section process">
    <div class="container">
      <SectionHeader
        tag="Cómo trabajamos"
        title="Un proceso claro y eficiente"
        description="Metodología probada que garantiza resultados duraderos y un ambiente seguro."
        light
      />

      <div class="process__timeline">
        <div
          v-for="(step, index) in processSteps"
          :key="step.title"
          class="process__step"
          :class="{ 'process__step--active': activeStep >= index }"
        >
          <div class="process__number">{{ String(index + 1).padStart(2, '0') }}</div>
          <div class="process__content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
