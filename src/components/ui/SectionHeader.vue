<script setup>
defineProps({
  tag: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  light: { type: Boolean, default: false },
  centered: { type: Boolean, default: true },
});
</script>

<template>
  <div
    class="section__header"
    :class="{
      'section__header--light': light,
      'section__header--left': !centered,
    }"
  >
    <span class="section__tag" :class="{ 'section__tag--light': light }">{{ tag }}</span>
    <h2>{{ title }}</h2>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.section__header--left {
  text-align: left;
  margin-inline: 0;
}
</style>
