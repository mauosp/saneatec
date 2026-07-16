<script setup>
import { computed } from 'vue';
import BrandLogo from '@/components/ui/BrandLogo.vue';
import { SLOGAN, navLinks, serviceOptions } from '@/data/siteData';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
  <footer class="footer">
    <div class="container footer__content">
      <div class="footer__brand">
        <BrandLogo variant="dark" size="xl" show-name :linked="false" />
        <p>{{ SLOGAN }}</p>
      </div>

      <div class="footer__links">
        <h4>Enlaces</h4>
        <ul>
          <li v-for="link in navLinks" :key="link.id">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </div>

      <div class="footer__services">
        <h4>Servicios</h4>
        <ul>
          <li v-for="opt in serviceOptions.slice(0, 4)" :key="opt">{{ opt }}</li>
        </ul>
      </div>

      <div class="footer__contact">
        <h4>Contacto</h4>
        <ul>
          <li><a href="tel:+576044847622">(604) 484 7622</a></li>
          <li>
            <a href="https://wa.me/573243411959" target="_blank" rel="noopener">
              WhatsApp: 324 341 1959
            </a>
          </li>
          <li>
            <a href="https://wa.me/573018797576" target="_blank" rel="noopener">
              WhatsApp: 301 879 7576
            </a>
          </li>
          <li>
            <a href="mailto:Comercialimpsaneatec@gmail.com">
              Comercialimpsaneatec@gmail.com
            </a>
          </li>
          <li>Calle 57 # 31-102, Sucre Boston — Medellín</li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom container">
      <p>&copy; {{ currentYear }} Saneatec. Todos los derechos reservados.</p>
      <p class="footer__tagline">Gestión Integral en Saneamiento Ambiental</p>
    </div>
  </footer>
</template>
