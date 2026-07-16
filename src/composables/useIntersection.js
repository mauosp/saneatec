import { ref, onMounted, onUnmounted } from 'vue';

export function useIntersection(callback, options = { threshold: 0.2 }) {
  const targetRef = ref(null);
  let observer = null;

  onMounted(() => {
    if (!targetRef.value) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          observer?.disconnect();
        }
      });
    }, options);

    observer.observe(targetRef.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { targetRef };
}

export function useCounterAnimation(statsData) {
  const stats = ref(
    statsData.map((stat) => ({ ...stat, display: 0 }))
  );

  const animate = () => {
    stats.value.forEach((stat) => {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          stat.display = stat.value;
          clearInterval(timer);
        } else {
          stat.display = Math.floor(current);
        }
      }, duration / steps);
    });
  };

  return { stats, animate };
}
