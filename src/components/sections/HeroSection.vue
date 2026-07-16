<script setup>
import { SLOGAN, BRAND, statsData } from '@/data/siteData';
import { useCounterAnimation } from '@/composables/useIntersection';
import { useHeroEffects } from '@/composables/useHeroEffects';

const { stats, animate } = useCounterAnimation(statsData);

const {
  step,
  sectionRef,
  showcaseStyle,
  orbStyle,
  onMouseMove,
  onMouseLeave,
} = useHeroEffects(animate);
</script>

<template>
  <section
    ref="sectionRef"
    id="inicio"
    class="hero"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <div class="hero__bg">
      <div class="hero__gradient"></div>
      <div class="hero__orb hero__orb--gold" :style="orbStyle"></div>
      <div class="hero__orb hero__orb--blue"></div>
      <div class="hero__grid-lines" aria-hidden="true"></div>
    </div>

    <div class="container hero__layout">
      <div class="hero__copy">
        <span class="hero__tag" :class="{ 'is-visible': step >= 1 }">
          Profesionales certificados en Medellín
        </span>

        <h1 class="hero__title" :class="{ 'is-visible': step >= 2 }">
          Protegemos su espacio con
          <em>saneamiento de excelencia</em>
        </h1>

        <p class="hero__desc" :class="{ 'is-visible': step >= 3 }">
          Fumigación y control de plagas para hogares y comercios.
          Seguro, eficaz y con compromiso ambiental.
        </p>

        <div class="hero__actions" :class="{ 'is-visible': step >= 4 }">
          <a href="#contacto" class="btn btn--primary btn--lg hero__btn">
            Agendar servicio
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a href="#servicios" class="btn btn--ghost btn--lg">Ver servicios</a>
        </div>

        <div class="hero__stats" :class="{ 'is-visible': step >= 5 }">
          <div v-for="stat in stats" :key="stat.label" class="hero__stat">
            <strong>{{ stat.display }}{{ stat.suffix }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero__showcase" :class="{ 'is-visible': step >= 1 }" :style="showcaseStyle">
        <div class="hero__emblem">
          <div class="hero__emblem-glow"></div>
          <div class="hero__emblem-frame">
            <img
              :src="BRAND.logoLight"
              :alt="`${BRAND.shortName} logo`"
              class="hero__emblem-img"
            />
          </div>
        </div>
        <p class="hero__brand">{{ BRAND.name }}</p>
        <p class="hero__slogan">{{ SLOGAN }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero__layout {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 3rem 4rem;
  align-items: center;
  min-height: calc(100vh - 8rem);
}

.hero__copy > * {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.hero__copy > *.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.hero__tag {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  border-radius: 999px;
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--yellow-light);
  border: 1px solid rgba(245, 224, 106, 0.35);
  background: rgba(245, 224, 106, 0.08);
  margin-bottom: 1.75rem;
}

.hero__tag::before {
  content: '';
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--yellow-light);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.85); }
}

.hero__title {
  font-family: var(--font-body);
  font-size: clamp(2.4rem, 4.8vw, 3.6rem);
  font-weight: 700;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 1.25rem;
  max-width: 14ch;
}

.hero__title em {
  display: block;
  font-style: normal;
  color: var(--yellow-light);
  margin-top: 0.15em;
}

.hero__desc {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.72);
  line-height: 1.7;
  max-width: 46ch;
  margin-bottom: 2rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  margin-bottom: 2.5rem;
}

.hero__btn svg {
  width: 18px;
  height: 18px;
  transition: transform 0.25s ease;
}

.hero__btn:hover svg {
  transform: translateX(4px);
}

.hero__stats {
  display: flex;
  gap: 0.85rem;
  flex-wrap: wrap;
}

.hero__stat {
  flex: 1;
  min-width: 120px;
  padding: 1rem 1.15rem;
  border-radius: var(--radius);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  transition: border-color 0.3s ease, background 0.3s ease;
}

.hero__stat:hover {
  border-color: rgba(245, 224, 106, 0.35);
  background: rgba(245, 224, 106, 0.06);
}

.hero__stat strong {
  display: block;
  font-size: 1.65rem;
  font-weight: 700;
  color: var(--yellow-light);
  font-family: var(--font-display);
  line-height: 1.1;
}

.hero__stat span {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.55);
  margin-top: 0.2rem;
  display: block;
}

.hero__showcase {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0;
  transform: translateY(30px) scale(0.96);
  transition:
    opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.15s;
  will-change: transform;
}

.hero__showcase.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hero__emblem {
  position: relative;
  width: min(280px, 62vw);
  height: min(280px, 62vw);
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(160deg, #ffffff 0%, #eef2f8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.75rem;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.15),
    0 32px 80px rgba(0, 0, 0, 0.35),
    0 0 80px rgba(245, 224, 106, 0.12);
  animation: emblem-float 5s ease-in-out infinite;
}

.hero__emblem-frame {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78%;
  height: 78%;
  overflow: hidden;
}

.hero__emblem-img {
  display: block;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
}

.hero__emblem-glow {
  position: absolute;
  inset: -8%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(245, 224, 106, 0.25) 0%, transparent 70%);
  animation: glow-breathe 4s ease-in-out infinite;
}

@keyframes emblem-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes glow-breathe {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

.hero__brand {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--white);
  margin-bottom: 0.5rem;
}

.hero__slogan {
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--yellow-light);
  max-width: 28ch;
  line-height: 1.5;
  opacity: 0.9;
}

@media (max-width: 992px) {
  .hero__layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    min-height: auto;
    padding-top: 1rem;
  }

  .hero__showcase {
    order: -1;
  }

  .hero__copy {
    text-align: center;
  }

  .hero__title {
    max-width: none;
    margin-inline: auto;
  }

  .hero__desc {
    margin-inline: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__stats {
    justify-content: center;
  }

  .hero__stat {
    flex: 0 1 auto;
    min-width: 100px;
  }

  .hero__emblem {
    width: min(200px, 58vw);
    height: min(200px, 58vw);
    margin-bottom: 1.25rem;
  }

  .hero__emblem-frame {
    width: 82%;
    height: 82%;
  }
}

@media (max-width: 480px) {
  .hero__stats {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .hero__stat {
    width: auto;
    min-width: 0;
  }

  .hero__stat:last-child {
    grid-column: 1 / -1;
  }
}
</style>
