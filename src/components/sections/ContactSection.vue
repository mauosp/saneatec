<script setup>
import { contactDetails, serviceOptions } from '@/data/siteData';
import { useContactForm } from '@/composables/useContactForm';

const {
  form,
  formErrors,
  formSubmitting,
  formSuccess,
  formError,
  validateField,
  submitForm,
} = useContactForm();
</script>

<template>
  <section id="contacto" class="section contact">
    <div class="container">
      <div class="contact__layout">
        <div class="contact__info">
          <span class="section__tag section__tag--light">Contacto</span>
          <h2>Solicite su cotización gratuita</h2>
          <p>Complete el formulario y envíe su solicitud directamente por WhatsApp.</p>

          <div class="contact__details">
            <div v-for="detail in contactDetails" :key="detail.label" class="contact__detail">
              <div class="contact__detail-icon" v-html="detail.icon"></div>
              <div>
                <strong>{{ detail.label }}</strong>
                <a
                  v-if="detail.href"
                  :href="detail.href"
                  :target="detail.external ? '_blank' : undefined"
                  :rel="detail.external ? 'noopener noreferrer' : undefined"
                  class="contact__link"
                >
                  {{ detail.value }}
                </a>
                <span v-else>{{ detail.value }}</span>
              </div>
            </div>
          </div>
        </div>

        <form
          class="contact__form"
          @submit.prevent="submitForm"
          novalidate
        >
          <div class="form__group" :class="{ 'form__group--error': formErrors.name }">
            <label for="name">Nombre completo</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Su nombre"
              @blur="validateField('name')"
            />
            <span v-if="formErrors.name" class="form__error">{{ formErrors.name }}</span>
          </div>

          <div class="form__row">
            <div class="form__group" :class="{ 'form__group--error': formErrors.email }">
              <label for="email">Correo electrónico</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                placeholder="Comercialimpsaneatec@gmail.com"
                @blur="validateField('email')"
              />
              <span v-if="formErrors.email" class="form__error">{{ formErrors.email }}</span>
            </div>

            <div class="form__group" :class="{ 'form__group--error': formErrors.phone }">
              <label for="phone">Teléfono</label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                placeholder="324 341 1959"
                @blur="validateField('phone')"
              />
              <span v-if="formErrors.phone" class="form__error">{{ formErrors.phone }}</span>
            </div>
          </div>

          <div class="form__group" :class="{ 'form__group--error': formErrors.serviceType }">
            <label for="serviceType">Tipo de servicio</label>
            <select
              id="serviceType"
              v-model="form.serviceType"
              @change="validateField('serviceType')"
            >
              <option value="">Seleccione un servicio</option>
              <option v-for="opt in serviceOptions" :key="opt" :value="opt">{{ opt }}</option>
            </select>
            <span v-if="formErrors.serviceType" class="form__error">{{ formErrors.serviceType }}</span>
          </div>

          <div class="form__group" :class="{ 'form__group--error': formErrors.message }">
            <label for="message">Mensaje</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="4"
              placeholder="Describa su necesidad..."
              @blur="validateField('message')"
            ></textarea>
            <span v-if="formErrors.message" class="form__error">{{ formErrors.message }}</span>
          </div>

          <button type="submit" class="btn btn--primary btn--lg btn--full btn--whatsapp" :disabled="formSubmitting">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span v-if="!formSubmitting">Enviar cotización por WhatsApp</span>
            <span v-else class="btn__loading">Abriendo WhatsApp...</span>
          </button>

          <Transition name="toast">
            <div v-if="formSuccess" class="form__success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
                ¡Listo! Se abrió WhatsApp con su solicitud. Envíe el mensaje para confirmar.
            </div>
          </Transition>

          <Transition name="toast">
            <div v-if="formError" class="form__error-banner">
              {{ formError }}
            </div>
          </Transition>
        </form>
      </div>
    </div>
  </section>
</template>
