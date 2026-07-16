export const SLOGAN = 'Gestión Integral en Saneamiento ambiental';

export const BRAND = {
  name: 'SANEATEC',
  shortName: 'Saneatec',
  logoDark: '/images/logonegro.jpeg',
  logoLight: '/images/logoblanco.jpeg',
};

export const navLinks = [
  { id: 'inicio', label: 'Inicio', href: '#inicio' },
  { id: 'servicios', label: 'Servicios', href: '#servicios' },
  { id: 'clientes', label: 'Clientes', href: '#clientes' },
  { id: 'trabajos', label: 'Trabajos', href: '#trabajos' },
  { id: 'proceso', label: 'Proceso', href: '#proceso' },
  { id: 'beneficios', label: 'Beneficios', href: '#beneficios' },
  { id: 'faq', label: 'FAQ', href: '#faq' },
  { id: 'contacto', label: 'Contacto', href: '#contacto' },
];

export const heroFeatures = [
  'Productos certificados y seguros',
  'Personal técnico capacitado',
  'Atención personalizada 24/7',
  'Garantía en todos los servicios',
];

export const statsData = [
  { label: 'Años de trayectoria', value: 2, suffix: '' },
  { label: 'Clientes satisfechos', value: 200, suffix: '+' },
  { label: 'Servicios realizados', value: 480, suffix: '+' },
];

export const clients = [
  { name: 'Frucoldex', logo: '/images/clientes/frucoldex.jfif' },
  { name: 'De La Hacienda', logo: '/images/clientes/delahacienda.jfif' },
  { name: 'Fundacol', logo: '/images/clientes/fundacol.jpeg' },
  { name: 'Hot Brothers', logo: '/images/clientes/hotbrohers.jfif' },
  { name: 'Incotep', logo: '/images/clientes/incotep.jfif' },
  { name: 'Malu', logo: '/images/clientes/malu.jfif' },
  { name: 'Maxipastel', logo: '/images/clientes/maxipastel.jfif' },
  { name: 'Mr Tamal', logo: '/images/clientes/mrtamal.jfif' },
  { name: 'Pinkes', logo: '/images/clientes/pinkes.jfif' },
  { name: 'Produpan', logo: '/images/clientes/produpan.jpeg' },
];

export const workGallery = [
  {
    id: 'trabajo1',
    title: 'Fumigación en tanques de alta capacidad',
    description: 'Aplicación en tanques Rotoplas de 10.000 L con equipo de protección personal y acceso seguro en altura.',
    category: 'campo',
    image: '/images/trabajos/trabajo1.jpeg',
  },
  {
    id: 'trabajo2',
    title: 'Control de plagas en establecimientos',
    description: 'Intervención técnica en instalaciones comerciales con protocolos certificados de saneamiento.',
    category: 'campo',
    image: '/images/trabajos/trabajo2.jpeg',
  },
  {
    id: 'trabajo3',
    title: 'Tratamiento especializado en campo',
    description: 'Equipo profesional aplicando soluciones de fumigación con precisión y cumplimiento normativo.',
    category: 'campo',
    image: '/images/trabajos/trabajo3.jpeg',
  },
  {
    id: 'trabajo4',
    title: 'Servicio técnico de desinfección',
    description: 'Personal capacitado ejecutando procedimientos de sanitización en entornos exigentes.',
    category: 'campo',
    image: '/images/trabajos/trabajo4.jpeg',
  },
  {
    id: 'capacitacion',
    title: 'Capacitación continua del equipo',
    description: 'Formación interna en buenas prácticas, seguridad y manejo de equipos para garantizar excelencia en cada servicio.',
    category: 'equipo',
    image: '/images/trabajos/capacitacion.jpeg',
  },
];

export const workCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'campo', label: 'En campo' },
  { id: 'equipo', label: 'Nuestro equipo' },
];

export const serviceTabs = [
  {
    id: 'all',
    label: 'Todos',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  },
  {
    id: 'residential',
    label: 'Hogares',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  },
  {
    id: 'commercial',
    label: 'Comercios',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/></svg>',
  },
];

export const services = [
  {
    category: 'residential',
    title: 'Fumigación residencial',
    description: 'Protección integral para su hogar contra insectos, roedores y plagas.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>',
    items: ['Control de cucarachas y hormigas', 'Eliminación de roedores', 'Tratamiento preventivo'],
  },
  {
    category: 'residential',
    title: 'Desinfección de espacios',
    description: 'Sanitización profunda de áreas habitables con productos de grado hospitalario.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    items: ['Desinfección de superficies', 'Tratamiento anti-hongos', 'Control de ácaros'],
  },
  {
    category: 'commercial',
    title: 'Fumigación comercial',
    description: 'Soluciones para restaurantes, hoteles, oficinas y centros comerciales.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18"/><path d="M5 21V7l8-4v18"/></svg>',
    items: ['Cumplimiento normativo', 'Programas de mantenimiento', 'Certificados de servicio'],
  },
  {
    category: 'commercial',
    title: 'Control de plagas industrial',
    description: 'Manejo especializado para bodegas, fábricas y centros de distribución.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>',
    items: ['Monitoreo con trampas', 'Análisis de puntos críticos', 'Reportes detallados'],
  },
  {
    category: 'all',
    title: 'Control de termitas',
    description: 'Detección y eliminación de colonias con tratamiento de larga duración.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    items: ['Inspección con termodetector', 'Barreras químicas', 'Garantía extendida'],
  },
  {
    category: 'all',
    title: 'Manejo integrado de plagas',
    description: 'Enfoque ecológico que combina prevención, monitoreo y control selectivo.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
    items: ['Evaluación ambiental', 'Reducción de químicos', 'Educación al cliente'],
  },
];

export const processSteps = [
  { title: 'Inspección', description: 'Evaluamos su espacio para identificar plagas, puntos de entrada y condiciones favorables.' },
  { title: 'Diagnóstico', description: 'Elaboramos un plan personalizado con las técnicas y productos más adecuados.' },
  { title: 'Tratamiento', description: 'Aplicamos el servicio con equipos profesionales y productos certificados.' },
  { title: 'Seguimiento', description: 'Monitoreamos resultados y ofrecemos mantenimiento preventivo continuo.' },
];

export const benefits = [
  {
    title: 'Certificación profesional',
    description: 'Técnicos certificados con formación continua en saneamiento ambiental.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 15l-2 5-2-5-5-1 4-3-1-5 5 3 5-3 1 5-4-3z"/></svg>',
  },
  {
    title: 'Productos seguros',
    description: 'Utilizamos insumos aprobados por entidades de salud y ambiente.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  },
  {
    title: 'Respuesta rápida',
    description: 'Atención de emergencias y agendamiento flexible según su disponibilidad.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  },
  {
    title: 'Compromiso ambiental',
    description: 'Prácticas responsables que minimizan el impacto ecológico.',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c-4-4-8-7-8-11a8 8 0 0116 0c0 4-4 7-8 11z"/><circle cx="12" cy="11" r="3"/></svg>',
  },
];

export const faqItems = [
  {
    question: '¿Con qué frecuencia debo fumigar mi hogar?',
    answer: 'Recomendamos fumigación preventiva cada 3 a 6 meses. En zonas con alta incidencia de plagas o durante épocas de lluvia, puede ser necesario un intervalo menor.',
  },
  {
    question: '¿Los productos utilizados son seguros para niños y mascotas?',
    answer: 'Sí. Utilizamos productos de baja toxicidad aprobados por entidades de salud. Tras la aplicación, recomendamos ventilar el espacio y respetar el tiempo de reingreso indicado por nuestro técnico.',
  },
  {
    question: '¿Ofrecen servicios para restaurantes y hoteles?',
    answer: 'Absolutamente. Contamos con protocolos específicos para el sector gastronómico y hotelero, cumpliendo con las normativas de sanidad exigidas por las autoridades.',
  },
  {
    question: '¿Cuánto dura un servicio de fumigación?',
    answer: 'Depende del tamaño del inmueble y el tipo de plaga. En promedio, un apartamento toma 1-2 horas, mientras que un local comercial puede requerir medio día.',
  },
  {
    question: '¿Brindan garantía en sus servicios?',
    answer: 'Sí, todos nuestros servicios incluyen garantía. Si la plaga persiste dentro del periodo de garantía, realizamos una revisión sin costo adicional.',
  },
];

const whatsappIcon = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';

export const contactDetails = [
  {
    label: 'Teléfono fijo',
    value: '(604) 484 7622',
    href: 'tel:+576044847622',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>',
  },
  {
    label: 'WhatsApp 1',
    value: '324 341 1959',
    href: 'https://wa.me/573243411959',
    external: true,
    icon: whatsappIcon,
  },
  {
    label: 'WhatsApp 2',
    value: '301 879 7576',
    href: 'https://wa.me/573018797576',
    external: true,
    icon: whatsappIcon,
  },
  {
    label: 'Correo electrónico',
    value: 'Comercialimpsaneatec@gmail.com',
    href: 'mailto:Comercialimpsaneatec@gmail.com',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  },
  {
    label: 'Oficina',
    value: 'Calle 57 # 31-102, Sucre Boston — Medellín',
    href: 'https://maps.google.com/?q=Calle+57+%2331-102+Sucre+Boston+Medellín',
    external: true,
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
];

export const whatsappContacts = [
  { label: 'Línea 1', number: '324 341 1959', href: 'https://wa.me/573243411959' },
  { label: 'Línea 2', number: '301 879 7576', href: 'https://wa.me/573018797576' },
];

export const WHATSAPP_QUOTE_URL = 'https://wa.me/573243411959';

export const serviceOptions = [
  'Fumigación residencial',
  'Fumigación comercial',
  'Control de roedores',
  'Control de termitas',
  'Desinfección de espacios',
  'Manejo integrado de plagas',
];
