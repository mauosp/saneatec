import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';

export function useHeroEffects(onReady) {
  const step = ref(0);
  const mouse = reactive({ x: 0, y: 0 });
  const sectionRef = ref(null);

  const startReveal = () => {
    const delays = [0, 120, 280, 450, 620, 800];
    delays.forEach((delay, index) => {
      setTimeout(() => {
        step.value = index + 1;
      }, delay);
    });
  };

  const onMouseMove = (event) => {
    if (!sectionRef.value) return;
    const rect = sectionRef.value.getBoundingClientRect();
    mouse.x = (event.clientX - rect.left) / rect.width - 0.5;
    mouse.y = (event.clientY - rect.top) / rect.height - 0.5;
  };

  const onMouseLeave = () => {
    mouse.x = 0;
    mouse.y = 0;
  };

  const showcaseStyle = computed(() => ({
    transform: `translate3d(${mouse.x * 18}px, ${mouse.y * 18}px, 0)`,
  }));

  const orbStyle = computed(() => ({
    transform: `translate3d(${mouse.x * -30}px, ${mouse.y * -30}px, 0)`,
  }));

  onMounted(() => {
    startReveal();
    setTimeout(() => onReady?.(), 650);
  });

  onUnmounted(() => {
    step.value = 0;
  });

  return {
    step,
    sectionRef,
    showcaseStyle,
    orbStyle,
    onMouseMove,
    onMouseLeave,
  };
}
