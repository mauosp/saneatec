<script setup>
import SectionHeader from '@/components/ui/SectionHeader.vue';
import { clients } from '@/data/siteData';

const marqueeClients = [...clients, ...clients];
</script>

<template>
  <section id="clientes" class="section clients">
    <div class="container">
      <SectionHeader
        tag="Nuestros clientes"
        title="Empresas que confían en Saneatec"
        description="Hogares y negocios de distintos sectores nos eligen por resultados confiables y un servicio profesional."
      />

      <div class="clients__highlight">
        <div class="clients__badge">
          <strong>{{ clients.length }}+</strong>
          <span>Marcas aliadas</span>
        </div>
        <p>
          Desde restaurantes y panaderías hasta empresas del sector alimenticio,
          acompañamos a organizaciones que exigen los más altos estándares de saneamiento.
        </p>
      </div>
    </div>

    <div class="clients__marquee clients__marquee--forward" aria-hidden="true">
      <div class="clients__track">
        <article v-for="(client, index) in marqueeClients" :key="`${client.name}-${index}`" class="clients__card">
          <img :src="client.logo" :alt="client.name" loading="lazy" />
        </article>
      </div>
    </div>

    <div class="clients__marquee clients__marquee--reverse" aria-hidden="true">
      <div class="clients__track">
        <article
          v-for="(client, index) in [...marqueeClients].reverse()"
          :key="`rev-${client.name}-${index}`"
          class="clients__card"
        >
          <img :src="client.logo" :alt="client.name" loading="lazy" />
        </article>
      </div>
    </div>

    <div class="container clients__grid-wrap">
      <div class="clients__grid">
        <article v-for="client in clients" :key="client.name" class="clients__grid-item">
          <img :src="client.logo" :alt="client.name" loading="lazy" />
          <span>{{ client.name }}</span>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.clients__highlight {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 880px;
  margin: -1rem auto 2.5rem;
  padding: 1.5rem 1.75rem;
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-sm);
}

.clients__badge {
  flex-shrink: 0;
  text-align: center;
  padding: 0.75rem 1.25rem;
  background: var(--blue-dark);
  color: var(--white);
  border-radius: var(--radius);
  min-width: 120px;
}

.clients__badge strong {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--yellow-light);
  line-height: 1;
}

.clients__badge span {
  font-size: 0.8rem;
  opacity: 0.85;
}

.clients__highlight p {
  color: var(--gray-600);
  font-size: 0.98rem;
  line-height: 1.65;
}

.clients__marquee {
  overflow: hidden;
  margin-bottom: 1.25rem;
  mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
}

.clients__track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  animation: marquee-forward 38s linear infinite;
}

.clients__marquee--reverse .clients__track {
  animation-name: marquee-reverse;
}

.clients__card {
  flex-shrink: 0;
  width: 200px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-sm);
}

.clients__card img {
  max-width: 100%;
  max-height: 72px;
  object-fit: contain;
}

.clients__grid-wrap {
  display: none;
}

.clients__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.clients__grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 1rem;
  background: var(--white);
  border-radius: var(--radius);
  border: 1px solid var(--gray-200);
}

.clients__grid-item img {
  max-height: 64px;
  max-width: 100%;
  object-fit: contain;
}

.clients__grid-item span {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--gray-600);
  text-align: center;
}

@keyframes marquee-forward {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes marquee-reverse {
  from { transform: translateX(-50%); }
  to { transform: translateX(0); }
}

@media (max-width: 768px) {
  .clients__highlight {
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
  }

  .clients__marquee {
    display: none;
  }

  .clients__grid-wrap {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  .clients__track {
    animation: none;
  }

  .clients__marquee {
    display: none;
  }

  .clients__grid-wrap {
    display: block;
  }
}
</style>
