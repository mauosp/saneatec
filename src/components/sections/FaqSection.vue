<script setup>
import { ref, computed, watch } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { faqItems } from '@/data/siteData';

const faqSearch = ref('');
const openFaq = ref(null);

const filteredFaq = computed(() => {
  const query = faqSearch.value.toLowerCase().trim();
  if (!query) return faqItems;
  return faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
  );
});

watch(faqSearch, () => {
  openFaq.value = null;
});

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};
</script>

<template>
  <section id="faq" class="section faq">
    <div class="container">
      <SectionHeader tag="Preguntas frecuentes" title="Resolvemos sus dudas" />

      <div class="faq__search">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
        </svg>
        <input
          v-model="faqSearch"
          type="text"
          placeholder="Buscar pregunta..."
          aria-label="Buscar en preguntas frecuentes"
        />
      </div>

      <div class="faq__list">
        <div
          v-for="(item, index) in filteredFaq"
          :key="item.question"
          class="faq__item"
          :class="{ open: openFaq === index }"
        >
          <button class="faq__question" @click="toggleFaq(index)">
            {{ item.question }}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div class="faq__answer">
            <p>{{ item.answer }}</p>
          </div>
        </div>
        <p v-if="filteredFaq.length === 0" class="faq__empty">
          No se encontraron preguntas que coincidan con "{{ faqSearch }}".
        </p>
      </div>
    </div>
  </section>
</template>
