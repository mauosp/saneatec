<script setup>
import { computed } from 'vue';
import { BRAND } from '@/data/siteData';

const props = defineProps({
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value),
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
  },
  showName: { type: Boolean, default: false },
  linked: { type: Boolean, default: true },
});

const logoSrc = computed(() =>
  props.variant === 'light' ? BRAND.logoLight : BRAND.logoDark
);

const Tag = computed(() => (props.linked ? 'a' : 'div'));
</script>

<template>
  <component
    :is="Tag"
    :href="linked ? '#inicio' : undefined"
    class="brand-logo"
    :class="[`brand-logo--${size}`, { 'brand-logo--named': showName }]"
  >
    <span class="brand-logo__mark-wrap">
      <img :src="logoSrc" :alt="`${BRAND.shortName} logo`" class="brand-logo__mark" />
    </span>
    <span v-if="showName" class="brand-logo__text">
      <strong class="brand-logo__name">{{ BRAND.name }}</strong>
    </span>
  </component>
</template>

<style scoped>
.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  color: inherit;
}

.brand-logo__mark-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
}

.brand-logo__mark {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.brand-logo--sm .brand-logo__mark-wrap {
  width: 44px;
  height: 44px;
}

.brand-logo--md .brand-logo__mark-wrap {
  width: 56px;
  height: 56px;
}

.brand-logo--lg .brand-logo__mark-wrap {
  width: 72px;
  height: 72px;
}

.brand-logo--xl .brand-logo__mark-wrap {
  width: 110px;
  height: 110px;
}

.brand-logo__name {
  font-family: var(--font-display);
  font-size: 1.35rem;
  letter-spacing: 0.12em;
  color: var(--white);
  font-weight: 700;
}

.brand-logo--lg .brand-logo__name {
  font-size: 1.5rem;
}

.brand-logo--xl .brand-logo__name {
  font-size: 1.75rem;
}
</style>
