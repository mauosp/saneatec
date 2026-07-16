<script setup>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import BackToTop from '@/components/ui/BackToTop.vue';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import ServicesSection from '@/components/sections/ServicesSection.vue';
import ClientsSection from '@/components/sections/ClientsSection.vue';
import WorkSection from '@/components/sections/WorkSection.vue';
import ProcessSection from '@/components/sections/ProcessSection.vue';
import BenefitsSection from '@/components/sections/BenefitsSection.vue';
import FaqSection from '@/components/sections/FaqSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import { useScrollSpy } from '@/composables/useScrollSpy';

const { isScrolled, activeSection, showBackToTop, scrollToTop } = useScrollSpy();
</script>

<template>
  <AppHeader :is-scrolled="isScrolled" :active-section="activeSection" />

  <main>
    <HeroSection />
    <ServicesSection />
    <ClientsSection />
    <WorkSection />
    <ProcessSection />
    <BenefitsSection />
    <FaqSection />
    <ContactSection />
  </main>

  <AppFooter />
  <WhatsAppFloat />
  <BackToTop :visible="showBackToTop" @click="scrollToTop" />
</template>
