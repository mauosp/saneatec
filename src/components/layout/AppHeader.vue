<script setup>
import { ref, watch } from 'vue';
import BrandLogo from '@/components/ui/BrandLogo.vue';
import { navLinks } from '@/data/siteData';

defineProps({
  isScrolled: { type: Boolean, default: false },
  activeSection: { type: String, default: 'inicio' },
});

const menuOpen = ref(false);

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

const closeMenu = () => {
  menuOpen.value = false;
};
</script>

<template>
  <header
    class="header"
    :class="{ 'header--scrolled': isScrolled, 'header--menu-open': menuOpen }"
  >
    <div
      v-show="menuOpen"
      class="nav__overlay"
      @click="closeMenu"
      aria-hidden="true"
    />

    <nav class="nav container">
      <BrandLogo
        variant="dark"
        size="md"
        show-name
        class="nav__brand"
        @click="closeMenu"
      />

      <button
        class="nav__toggle"
        @click="menuOpen = !menuOpen"
        :aria-expanded="menuOpen"
        aria-label="Menú"
      >
        <span></span><span></span><span></span>
      </button>

      <ul class="nav__links">
        <li v-for="link in navLinks" :key="link.id">
          <a
            :href="link.href"
            :class="{ active: activeSection === link.id }"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
        <li class="nav__links-cta">
          <a href="#contacto" class="btn btn--primary btn--full" @click="closeMenu">
            Solicitar cotización
          </a>
        </li>
      </ul>

      <a href="#contacto" class="nav__cta btn btn--primary" @click="closeMenu">
        Solicitar cotización
      </a>
    </nav>
  </header>
</template>
