<script setup>
defineProps({
  visible: { type: Boolean, default: false },
});

const emit = defineEmits(['click']);
</script>

<template>
  <Transition name="fade">
    <button
      v-if="visible"
      class="back-to-top"
      @click="emit('click')"
      aria-label="Volver arriba"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>
