import { reactive, ref } from 'vue';
import { WHATSAPP_QUOTE_URL } from '@/data/siteData';

export function useContactForm() {
  const form = reactive({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const formErrors = reactive({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const formSubmitting = ref(false);
  const formSuccess = ref(false);
  const formError = ref('');

  const validators = {
    name: () => {
      if (!form.name.trim()) return 'El nombre es requerido';
      if (form.name.trim().length < 2) return 'Mínimo 2 caracteres';
      return '';
    },
    email: () => {
      if (!form.email.trim()) return 'El correo es requerido';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Correo inválido';
      return '';
    },
    phone: () => {
      if (!form.phone.trim()) return 'El teléfono es requerido';
      if (form.phone.trim().length < 7) return 'Teléfono inválido';
      return '';
    },
    serviceType: () => {
      if (!form.serviceType) return 'Seleccione un servicio';
      return '';
    },
    message: () => {
      if (!form.message.trim()) return 'El mensaje es requerido';
      if (form.message.trim().length < 10) return 'Mínimo 10 caracteres';
      return '';
    },
  };

  const validateField = (field) => {
    formErrors[field] = validators[field]();
  };

  const validateForm = () => {
    Object.keys(formErrors).forEach(validateField);
    return Object.values(formErrors).every((error) => error === '');
  };

  const resetForm = () => {
    form.name = '';
    form.email = '';
    form.phone = '';
    form.serviceType = '';
    form.message = '';
    Object.keys(formErrors).forEach((key) => {
      formErrors[key] = '';
    });
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      'Hola, solicito una cotización con Saneatec.',
      '',
      `*Nombre:* ${form.name.trim()}`,
      `*Correo:* ${form.email.trim()}`,
      `*Teléfono:* ${form.phone.trim()}`,
      `*Servicio:* ${form.serviceType}`,
      '',
      `*Mensaje:*`,
      form.message.trim(),
    ];
    return lines.join('\n');
  };

  const submitForm = async () => {
    if (!validateForm()) return;

    formSubmitting.value = true;
    formSuccess.value = false;
    formError.value = '';

    try {
      const text = encodeURIComponent(buildWhatsAppMessage());
      const url = `${WHATSAPP_QUOTE_URL}?text=${text}`;

      await new Promise((resolve) => setTimeout(resolve, 400));

      window.open(url, '_blank', 'noopener,noreferrer');

      formSuccess.value = true;
      resetForm();

      setTimeout(() => {
        formSuccess.value = false;
      }, 6000);
    } catch {
      formError.value = 'No se pudo abrir WhatsApp. Escríbanos al 324 341 1959.';
    } finally {
      formSubmitting.value = false;
    }
  };

  return {
    form,
    formErrors,
    formSubmitting,
    formSuccess,
    formError,
    validateField,
    submitForm,
  };
};
