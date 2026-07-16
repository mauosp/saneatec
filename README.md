# Saneatec — Sitio Web Corporativo

Landing page profesional para **Saneatec**, empresa dedicada a la fumigación de hogares y establecimientos comerciales en Medellín.

**Eslogan:** Gestión Integral en Saneamiento ambiental

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| [Vite 6](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [Vue 3](https://vuejs.org/) | Framework reactivo (Composition API) |
| CSS3 | Diseño responsivo y animaciones |

## Estructura del proyecto

```
saneatec/
├── public/
│   └── images/
│       └── logo.jfif
├── src/
│   ├── assets/styles/main.css
│   ├── components/
│   │   ├── layout/          # Header y Footer
│   │   ├── sections/        # Secciones de la página
│   │   └── ui/              # Componentes reutilizables
│   ├── composables/         # Lógica reactiva reutilizable
│   ├── data/siteData.js     # Contenido estático
│   ├── App.vue
│   └── main.js
├── index.html
├── netlify.toml          # Configuración de despliegue Netlify
├── vite.config.js
└── package.json
```

## Requisitos

- Node.js 18 o superior
- npm

## Instalación y ejecución

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build de producción
npm run build

# Vista previa del build
npm run preview
```

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo con HMR |
| `npm run build` | Genera la carpeta `dist/` optimizada para producción |
| `npm run preview` | Previsualiza el build de producción |

## Secciones

1. **Inicio** — Hero con logo, eslogan y estadísticas animadas
2. **Servicios** — Fumigación residencial, comercial, desinfección y más
3. **Proceso** — Metodología de trabajo en 4 pasos
4. **Beneficios** — Ventajas competitivas
5. **FAQ** — Preguntas frecuentes con búsqueda reactiva
6. **Contacto** — Formulario de cotización y datos de la empresa

## Datos de contacto

| Canal | Información |
|---|---|
| Teléfono fijo | (604) 484 7622 |
| WhatsApp 1 | 324 341 1959 |
| WhatsApp 2 | 301 879 7576 |
| Correo | Comercialimpsaneatec@gmail.com |
| Oficina | Calle 57 # 31-102, Sucre Boston — Medellín |

## Personalización

- **Contenido:** edita `src/data/siteData.js`
- **Estilos:** modifica las variables CSS en `src/assets/styles/main.css`
- **Componentes:** cada sección está en `src/components/sections/`
- **Logo:** `public/images/logonegro.jpeg` (fondos oscuros) y `public/images/logoblanco.jpeg` (fondos claros)

## Despliegue en Netlify

El proyecto incluye `netlify.toml` con la configuración lista. Netlify detectará automáticamente:

| Configuración | Valor |
|---|---|
| Comando de build | `npm run build` |
| Carpeta de publicación | `dist` |
| Node.js | 20 |

### Opción 1 — Desde Git (recomendado)

1. Sube el repositorio a GitHub, GitLab o Bitbucket
2. Entra en [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Conecta tu repositorio
4. Netlify leerá `netlify.toml` automáticamente — no necesitas cambiar nada
5. Haz clic en **Deploy site**

Cada push a la rama principal generará un despliegue automático.

### Opción 2 — Arrastrar y soltar (manual)

```bash
npm run build
```

Luego arrastra la carpeta `dist/` a [app.netlify.com/drop](https://app.netlify.com/drop).

### Formulario de contacto (Netlify Forms)

El formulario de contacto está integrado con **Netlify Forms**. Tras el despliegue:

1. Ve a tu sitio en Netlify → **Forms**
2. Verás el formulario **contacto** con los mensajes recibidos
3. Puedes configurar notificaciones por correo en **Site settings → Forms → Form notifications**

> En desarrollo local (`npm run dev`) el formulario simula el envío. El envío real funciona solo en Netlify.

### Desarrollo local con Netlify CLI (opcional)

```bash
npm install -g netlify-cli
netlify dev
```

Esto ejecuta Vite y simula el entorno de Netlify en `http://localhost:8888`.

## Otros hostings

Tras `npm run build`, la carpeta `dist/` también puede subirse a Vercel, GitHub Pages o Firebase Hosting.

## Licencia

Proyecto privado — © Saneatec. Todos los derechos reservados.
