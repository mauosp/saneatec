import { ref, onMounted, onUnmounted } from 'vue';
import { navLinks } from '@/data/siteData';

export function useScrollSpy() {
  const isScrolled = ref(false);
  const activeSection = ref('inicio');
  const showBackToTop = ref(false);

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
    showBackToTop.value = window.scrollY > 600;

    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);
    const scrollPos = window.scrollY + 120;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (sections[i].offsetTop <= scrollPos) {
        activeSection.value = sections[i].id;
        break;
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return { isScrolled, activeSection, showBackToTop, scrollToTop };
}
