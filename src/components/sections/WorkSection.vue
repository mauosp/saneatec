<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { workGallery, workCategories } from '@/data/siteData';

const activeCategory = ref('all');
const activeIndex = ref(0);
const lightboxOpen = ref(false);

const filteredWorks = computed(() => {
  if (activeCategory.value === 'all') return workGallery;
  return workGallery.filter((item) => item.category === activeCategory.value);
});

const activeWork = computed(() => filteredWorks.value[activeIndex.value] ?? filteredWorks.value[0]);

watch(activeCategory, () => {
  activeIndex.value = 0;
});

const selectWork = (index) => {
  activeIndex.value = index;
};

const nextWork = () => {
  activeIndex.value = (activeIndex.value + 1) % filteredWorks.value.length;
};

const prevWork = () => {
  activeIndex.value =
    (activeIndex.value - 1 + filteredWorks.value.length) % filteredWorks.value.length;
};

const openLightbox = () => {
  lightboxOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = '';
};

const onKeydown = (event) => {
  if (!lightboxOpen.value) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === 'ArrowRight') nextWork();
  if (event.key === 'ArrowLeft') prevWork();
};

onMounted(() => {
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <section id="trabajos" class="section work">
    <div class="container">
      <SectionHeader
        tag="Trabajos realizados"
        title="Un equipo profesional en acción"
        description="Conozca de cerca cómo nuestro personal certificado ejecuta cada servicio con rigor, seguridad y compromiso."
      />

      <div class="work__filters">
        <button
          v-for="cat in workCategories"
          :key="cat.id"
          class="work__filter"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="work__showcase">
        <div class="work__main">
          <Transition name="work-fade" mode="out-in">
            <figure :key="activeWork.id" class="work__figure" @click="openLightbox">
              <img :src="activeWork.image" :alt="activeWork.title" loading="lazy" />
              <figcaption class="work__overlay">
                <span class="work__tag">
                  {{ activeWork.category === 'equipo' ? 'Capacitación' : 'Servicio en campo' }}
                </span>
                <h3>{{ activeWork.title }}</h3>
                <p>{{ activeWork.description }}</p>
                <button type="button" class="work__expand">
                  Ver en grande
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </button>
              </figcaption>
            </figure>
          </Transition>

          <div class="work__nav">
            <button type="button" class="work__nav-btn" aria-label="Anterior" @click="prevWork">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <span class="work__counter">
              {{ activeIndex + 1 }} / {{ filteredWorks.length }}
            </span>
            <button type="button" class="work__nav-btn" aria-label="Siguiente" @click="nextWork">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div class="work__thumbs">
          <button
            v-for="(item, index) in filteredWorks"
            :key="item.id"
            type="button"
            class="work__thumb"
            :class="{ active: activeIndex === index }"
            @click="selectWork(index)"
          >
            <img :src="item.image" :alt="item.title" loading="lazy" />
            <span>{{ item.title }}</span>
          </button>
        </div>
      </div>

      <div class="work__trust">
        <div class="work__trust-item">
          <strong>EPP completo</strong>
          <span>Equipo de protección en cada intervención</span>
        </div>
        <div class="work__trust-item">
          <strong>Capacitación continua</strong>
          <span>Formación permanente del personal técnico</span>
        </div>
        <div class="work__trust-item">
          <strong>Protocolos certificados</strong>
          <span>Procedimientos alineados con normativa de sanidad</span>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="lightboxOpen" class="work-lightbox" @click.self="closeLightbox">
          <button type="button" class="work-lightbox__close" aria-label="Cerrar" @click="closeLightbox">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <button type="button" class="work-lightbox__nav work-lightbox__nav--prev" @click="prevWork">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <figure class="work-lightbox__content">
            <img :src="activeWork.image" :alt="activeWork.title" />
            <figcaption>
              <h3>{{ activeWork.title }}</h3>
              <p>{{ activeWork.description }}</p>
            </figcaption>
          </figure>
          <button type="button" class="work-lightbox__nav work-lightbox__nav--next" @click="nextWork">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.work {
  background: var(--blue-dark);
  color: var(--white);
}

.work :deep(.section__tag) {
  background: rgba(245, 224, 106, 0.12);
  color: var(--yellow-light);
}

.work :deep(.section__header h2) {
  color: var(--white);
}

.work :deep(.section__header p) {
  color: rgba(255, 255, 255, 0.7);
}

.work__filters {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

.work__filter {
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.75);
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: var(--transition);
  font-family: inherit;
}

.work__filter:hover,
.work__filter.active {
  background: var(--yellow-light);
  color: var(--blue-dark);
  border-color: var(--yellow-light);
}

.work__showcase {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.work__figure {
  position: relative;
  margin: 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4 / 3;
  background: var(--black);
}

.work__figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.work__figure:hover img {
  transform: scale(1.04);
}

.work__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.75rem;
  background: linear-gradient(to top, rgba(8, 21, 40, 0.92) 0%, transparent 55%);
}

.work__tag {
  display: inline-block;
  width: fit-content;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  background: rgba(245, 224, 106, 0.2);
  color: var(--yellow-light);
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 0.75rem;
}

.work__overlay h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.work__overlay p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.55;
  margin-bottom: 1rem;
}

.work__expand {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  color: var(--yellow-light);
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
}

.work__expand svg {
  width: 16px;
  height: 16px;
}

.work__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.work__nav-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: rgba(255, 255, 255, 0.06);
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.work__nav-btn:hover {
  background: var(--yellow-light);
  color: var(--blue-dark);
  border-color: var(--yellow-light);
}

.work__nav-btn svg {
  width: 20px;
  height: 20px;
}

.work__counter {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  min-width: 48px;
  text-align: center;
}

.work__thumbs {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.work__thumb {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.65rem;
  border-radius: var(--radius);
  border: 2px solid transparent;
  background: rgba(255, 255, 255, 0.05);
  cursor: pointer;
  text-align: left;
  transition: var(--transition);
  font-family: inherit;
  color: var(--white);
}

.work__thumb:hover {
  background: rgba(255, 255, 255, 0.08);
}

.work__thumb.active {
  border-color: var(--yellow-light);
  background: rgba(245, 224, 106, 0.08);
}

.work__thumb img {
  width: 72px;
  height: 54px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
}

.work__thumb span {
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.35;
  color: rgba(255, 255, 255, 0.85);
}

.work__trust {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.work__trust-item {
  padding: 1.25rem 1.5rem;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.work__trust-item strong {
  display: block;
  color: var(--yellow-light);
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
}

.work__trust-item span {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.45;
}

.work-fade-enter-active,
.work-fade-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.work-fade-enter-from {
  opacity: 0;
  transform: scale(0.98);
}

.work-fade-leave-to {
  opacity: 0;
  transform: scale(1.01);
}

.work-lightbox {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(8, 21, 40, 0.94);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.work-lightbox__content {
  max-width: min(960px, 92vw);
  margin: 0;
}

.work-lightbox__content img {
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: var(--radius-lg);
}

.work-lightbox__content figcaption {
  margin-top: 1rem;
  text-align: center;
  color: var(--white);
}

.work-lightbox__content h3 {
  font-size: 1.2rem;
  margin-bottom: 0.35rem;
}

.work-lightbox__content p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.75);
}

.work-lightbox__close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.work-lightbox__close svg {
  width: 22px;
  height: 22px;
}

.work-lightbox__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  color: var(--white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.work-lightbox__nav--prev { left: 1.5rem; }
.work-lightbox__nav--next { right: 1.5rem; }

.work-lightbox__nav svg {
  width: 24px;
  height: 24px;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@media (max-width: 992px) {
  .work__showcase {
    grid-template-columns: 1fr;
  }

  .work__thumbs {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: 0.5rem;
  }

  .work__thumb {
    flex-direction: column;
    min-width: 140px;
    text-align: center;
  }

  .work__thumb img {
    width: 100%;
    height: 80px;
  }

  .work__trust {
    grid-template-columns: 1fr;
  }
}
</style>
