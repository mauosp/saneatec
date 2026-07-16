<script setup>
import { benefits } from '@/data/siteData';
</script>

<template>
  <section id="beneficios" class="section benefits">
    <div class="container">
      <div class="benefits__layout">
        <div class="benefits__info">
          <span class="section__tag">¿Por qué elegirnos?</span>
          <h2>Compromiso con la excelencia</h2>
          <p>
            En Saneatec combinamos experiencia técnica, productos certificados
            y un enfoque responsable con el medio ambiente para proteger lo que más importa.
          </p>
          <a href="#contacto" class="btn btn--primary">Conocer más</a>
        </div>

        <div class="benefits__grid">
          <div v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
            <div class="benefit-card__icon" v-html="benefit.icon"></div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
