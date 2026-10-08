/**
 * Fuente única del portafolio.
 * Las métricas salen del trabajo real. Si no hay demo o repositorio público, la URL queda vacía.
 */

export type Personal = {
  name: string;
  role: string;
  headline: string;
  subhead: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  githubUrl: string;
  linkedinUrl: string;
  instagramUrl: string;
  websiteUrl: string;
  whatsappUrl: string;
  cvUrl: string;
  availability: string;
};

export type ProjectFeature = {
  id: string;
  label: string;
  detail: string;
  shot: string;
};

export type Hotspot = {
  id: string;
  title: string;
  detail: string;
  top: string;
  left: string;
};

export type Benchmark = {
  label: string;
  caption: string;
  beforeLabel: string;
  afterLabel: string;
  before: number;
  after: number;
  beforeNote: string;
  afterNote: string;
};

export type FeaturedProject = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  problem: string;
  metrics: { value: string; detail: string }[];
  techStack: string[];
  mockupUrl: string;
  shots: string[];
  demoUrl: string;
  demoLabel: string;
  repoUrl: string;
  frame: "phone" | "wide";
  deviceType: "macbook" | "iphone";
  videoUrl?: string;
  features?: ProjectFeature[];
  hotspots?: Hotspot[];
  benchmark?: Benchmark;
};

export type SkillGroup = {
  id: string;
  title: string;
  detail: string;
  items: string[];
  span: 1 | 2;
};

export const personal: Personal = {
  name: "Ignacio Sánchez Sánchez",
  role: "Software Engineer / Full Stack & Mobile",
  headline: "Sistemas para el día de partido.",
  subhead:
    "Desarrollo software de alto rendimiento en producción: aplicaciones móviles oficiales, plataformas de comercio electrónico y productos propios diseñados para responder cuando el estadio se llena.",
  bio: "Disponible para desarrollo de aplicaciones móviles, proyectos de software y plataformas web de alto impacto.",
  location: "León, Guanajuato, México",
  email: "is083328@gmail.com",
  phone: "+52 477 573 0149",
  phoneHref: "tel:+524775730149",
  githubUrl: "https://github.com/ignacio-san",
  linkedinUrl: "https://www.linkedin.com/in/ignacio-sanchez-9a088330a",
  instagramUrl: "https://www.instagram.com/igna.0027",
  websiteUrl: "https://orangesoftware.com.mx",
  whatsappUrl: "https://wa.me/524775730149",
  cvUrl: "/cv/Ignacio_Sanchez_CV.pdf",
  availability:
    "Disponible para desarrollo de aplicaciones móviles, proyectos de software y plataformas web de alto impacto.",
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "club-leon",
    name: "App Oficial Club León",
    category: "App móvil en producción",
    tagline: "Noticias, videos exclusivos, beneficios y avisos en vivo para miles de aficionados.",
    description:
      "Desarrollé la app en Flutter con un sistema inteligente de caché local. Si la conexión falla o es inestable dentro del estadio, la app sigue funcionando de inmediato con el contenido guardado previamente.",
    problem:
      "En días de partido, la saturación masiva de red en el estadio dejaba a la afición sin señal y sin acceso a sus boletos, noticias o beneficios del club.",
    metrics: [
      { value: "−40%", detail: "Tiempo de espera al abrir la app (primer render optimizado)." },
      { value: "Play Store", detail: "Publicada y utilizada por la afición activa." },
      { value: "Offline-First", detail: "Contenido accesible aún sin conexión celular." },
    ],
    techStack: ["Flutter", "Dart", "Provider", "Dio", "Firebase"],
    mockupUrl: "/media/club/inicio.jpg",
    shots: [
      "/media/club/splash.jpg",
      "/media/club/bienvenida.jpg",
      "/media/club/privacidad.jpg",
      "/media/club/notificaciones.jpg",
      "/media/club/cuenta.jpg",
      "/media/club/inicio.jpg",
      "/media/club/recorrido.jpg",
      "/media/club/calendario.jpg",
      "/media/club/calendario-femenino.jpg",
      "/media/club/clasificacion.jpg",
      "/media/club/clasificacion-femenino.jpg",
      "/media/club/plantilla.jpg",
      "/media/club/plantilla-femenino.jpg",
      "/media/club/rewards.jpg",
      "/media/club/tienda.jpg",
      "/media/club/carrito.jpg",
      "/media/club/app-store.jpg",
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=mx.clubleon.oficial",
    demoLabel: "Ver en Google Play",
    repoUrl: "",
    frame: "phone",
    deviceType: "iphone",
    features: [
      {
        id: "ux",
        label: "Experiencia Mobile & UX",
        detail: "Interfaz táctil rápida para navegar entre reels, noticias del equipo y credenciales de socio.",
        shot: "/media/club/inicio.jpg",
      },
      {
        id: "cloud",
        label: "Arquitectura Cloud & Backend",
        detail: "Sincronización instantánea de alertas de partido y avisos urgentes mediante notificaciones push.",
        shot: "/media/club/notificaciones.jpg",
      },
      {
        id: "metrics",
        label: "Rendimiento",
        detail: "Reducción drástica del consumo de datos móviles mediante almacenamiento local en memoria.",
        shot: "/media/club/calendario.jpg",
      },
    ],
    hotspots: [
      {
        id: "ui",
        title: "Pantallas",
        detail: "Noticias, reels y la credencial de socio, pensados para usarse con el dedo en el estadio.",
        top: "18%",
        left: "22%",
      },
      {
        id: "dio",
        title: "Avisos en vivo",
        detail: "Alertas de partido y avisos urgentes llegan por notificación, aunque la red del estadio vaya y venga.",
        top: "46%",
        left: "68%",
      },
      {
        id: "cache",
        title: "Caché local",
        detail: "Si se cae la señal, la app abre con lo último que ya guardó en el teléfono.",
        top: "72%",
        left: "30%",
      },
    ],
  },
  {
    id: "tienda",
    name: "Tienda Oficial Club León",
    category: "E-commerce en vivo",
    tagline: "Catálogo en línea, personalización de camisetas y pagos en línea blindados.",
    description:
      "Reconstruí la tienda con Next.js y TypeScript. El sistema unifica automáticamente el carrito aunque el usuario entre como invitado o con cuenta de Google/Apple, y el checkout con Stripe cuenta con llaves de idempotencia que garantizan cobros únicos y seguros.",
    problem:
      "Comprar en línea solía ser frustrante: la sesión se perdía entre páginas, el carrito se desarmaba y las caídas de internet causaban el riesgo de cobrar dos veces la misma compra.",
    metrics: [
      { value: "0 cobros duplicados", detail: "Transacciones seguras con Stripe Idempotency." },
      { value: "En producción", detail: "Tienda oficial en vivo procesando compras reales." },
      { value: "Catálogo instantáneo", detail: "Búsqueda y personalización en tiempo real." },
    ],
    techStack: ["Next.js", "TypeScript", "Stripe", "Firebase", "Tailwind CSS"],
    mockupUrl: "/media/tienda/hero.jpg",
    shots: [
      "/media/tienda/hero.jpg",
      "/media/tienda/lineas.jpg",
      "/media/tienda/categorias.jpg",
      "/media/tienda/vitrina.jpg",
      "/media/tienda/catalogo.jpg",
      "/media/tienda/busqueda.jpg",
      "/media/tienda/producto.jpg",
      "/media/tienda/personalizacion.jpg",
      "/media/tienda/carrito.jpg",
      "/media/tienda/checkout.jpg",
      "/media/tienda/acceso.jpg",
      "/media/tienda/perfil.jpg",
      "/media/tienda/recomendaciones.jpg",
      "/media/tienda/pedidos.jpg",
      "/media/tienda/probador.jpg",
      "/media/tienda/probador-resultado.jpg",
      "/media/tienda/terminos.jpg",
    ],
    demoUrl: "https://tiendalaguarida.com/",
    demoLabel: "Visitar Tienda en Vivo",
    repoUrl: "",
    frame: "wide",
    deviceType: "macbook",
    features: [
      {
        id: "ux",
        label: "Experiencia Mobile & UX",
        detail: "Personalizador de camisetas en pantalla y probador visual interactivo de prendas.",
        shot: "/media/tienda/personalizacion.jpg",
      },
      {
        id: "cloud",
        label: "Arquitectura Cloud & Backend",
        detail: "Conexión segura con pasarelas de pago y sincronización de stock de productos.",
        shot: "/media/tienda/checkout.jpg",
      },
      {
        id: "metrics",
        label: "Rendimiento",
        detail: "Carga instantánea de páginas para que la tienda soporte picos de tráfico en lanzamientos de camisetas.",
        shot: "/media/tienda/catalogo.jpg",
      },
    ],
  },
  {
    id: "memobit",
    name: "MEMOBIT",
    category: "Producto propio · Juego móvil",
    tagline: "Un videojuego móvil completado y publicado de punta a punta: del diseño a las tiendas.",
    description:
      "Juego de agilidad mental desarrollado en Flutter. El motor del juego corre de forma independiente a la publicidad y compras para garantizar que las partidas nunca tengan pausas ni retrasos.",
    problem:
      "El objetivo fue crear un producto de software propio sin intermediarios: no solo escribir el código, sino resolver la publicación en tiendas, telemetría de jugadores y compras integradas.",
    metrics: [
      { value: "5.0 ★", detail: "Calificación en App Store." },
      { value: "iOS y Android", detail: "Disponible en ambas tiendas oficiales." },
      { value: "Ciclo completo", detail: "Diseño, desarrollo, publicación y analítica en vivo." },
    ],
    techStack: ["Flutter", "Dart", "Firebase Analytics", "AdMob"],
    mockupUrl: "/media/memobit/inicio.jpg",
    shots: [
      "/media/memobit/inicio.jpg",
      "/media/memobit/acerca.jpg",
      "/media/memobit/opciones.jpg",
      "/media/memobit/categorias-emojis.png",
      "/media/memobit/categorias-animales.png",
      "/media/memobit/categorias-niveles.png",
      "/media/memobit/fantasias-nivel.jpg",
      "/media/memobit/emojis-tiempo.png",
      "/media/memobit/emojis-revelado.jpg",
      "/media/memobit/emojis-pareja.jpg",
      "/media/memobit/emojis-pausa.png",
      "/media/memobit/emojis-estrellas.png",
      "/media/memobit/animales-partida.jpg",
      "/media/memobit/animales-pareja.jpg",
      "/media/memobit/animales-revelado.jpg",
      "/media/memobit/animales-estrellas.png",
      "/media/memobit/app-store.jpg",
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.memobit.super_memorama&hl=es_MX",
    demoLabel: "Ver en Google Play",
    repoUrl: "",
    frame: "phone",
    deviceType: "iphone",
    features: [
      {
        id: "ux",
        label: "Experiencia Mobile & UX",
        detail: "Niveles con dificultad progresiva, mecánicas táctiles fluidas a 60 FPS y control de tiempo por estrellas.",
        shot: "/media/memobit/emojis-estrellas.png",
      },
      {
        id: "cloud",
        label: "Arquitectura Cloud & Backend",
        detail: "Firebase Analytics para medir qué niveles son los más jugados y dónde abandonan los usuarios.",
        shot: "/media/memobit/categorias-emojis.png",
      },
      {
        id: "metrics",
        label: "Rendimiento",
        detail: "Carga en segundo plano de compras y anuncios para no interrumpir el flujo del juego.",
        shot: "/media/memobit/inicio.jpg",
      },
    ],
  },
  {
    id: "concesiones",
    name: "Sistema de Concesiones & POS Estadio",
    category: "Sistema de operación · En vivo",
    tagline: "Puntos de venta rápidos, sincronización en tiempo real y cobros sin interrupciones en días de partido.",
    description:
      "Plataforma de punto de venta y panel operativo para el estadio. La caja, el inventario y los cortes corren en Next.js. Los pedidos de palco se cobran con Stripe. Las jornadas activas viven en Realtime Database y el historial en Firestore. Una PDA Android lee códigos QR en el mostrador. Si la red se corta a mitad del pedido, el carrito del invitado queda guardado en el dispositivo.",
    problem:
      "En eventos masivos con picos de venta simultáneos y caídas repentinas de red, los puntos de venta tradicionales se congelaban, generando filas lentas y pérdidas de inventario o descuadres de caja.",
    metrics: [
      { value: "Puntos de venta", detail: "Operando en vivo durante eventos y partidos." },
      { value: "Tiempo real", detail: "Inventario y pedidos de palco en el mismo panel." },
      { value: "Resiliente", detail: "El carrito del invitado se conserva en el dispositivo si se corta la red." },
    ],
    techStack: ["Next.js", "TypeScript", "Firestore", "Stripe", "Kotlin"],
    mockupUrl: "/media/concesiones/inicio.jpg",
    shots: [
      "/media/concesiones/inicio.jpg",
      "/media/concesiones/restaurantes.jpg",
      "/media/concesiones/concesiones.jpg",
      "/media/concesiones/cinepolis.jpg",
      "/media/concesiones/agregado.jpg",
      "/media/concesiones/contacto.png",
      "/media/concesiones/horario.png",
      "/media/concesiones/orden.png",
      "/media/concesiones/comentario.png",
      "/media/concesiones/stripe.png",
      "/media/concesiones/validando.png",
      "/media/concesiones/confirmado.jpg",
      "/media/concesiones/guia.png",
      "/media/concesiones/estatus.jpg",
      "/media/concesiones/resumen.png",
      "/media/concesiones/correo.png",
      "/media/concesiones/correo-guia.png",
    ],
    demoUrl: "https://foodmarket.clubleon.mx/servicio-palcos",
    demoLabel: "Ver servicio en vivo",
    repoUrl: "",
    frame: "wide",
    deviceType: "macbook",
    features: [
      {
        id: "ux",
        label: "Experiencia & Operación",
        detail:
          "Carta de las concesiones del estadio y preventa al palco, pensada para pedir y cobrar sin formar fila en el mostrador.",
        shot: "/media/concesiones/cinepolis.jpg",
      },
      {
        id: "cloud",
        label: "Arquitectura & Sincronización",
        detail:
          "Checkout con Stripe, guía de pedido y central para el personal. Las jornadas activas se leen de Realtime Database y el historial queda en Firestore.",
        shot: "/media/concesiones/estatus.jpg",
      },
      {
        id: "metrics",
        label: "Rendimiento",
        detail:
          "La preventa se arma antes del partido para despachar varios establecimientos en la misma ventana, sin esperar al pico del medio tiempo.",
        shot: "/media/concesiones/horario.png",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend y web",
    detail: "Next.js y React en la tienda oficial y el punto de venta. Angular en los portales internos del club.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Angular"],
    span: 2,
  },
  {
    id: "mobile",
    title: "Ingeniería mobile",
    detail: "Flutter en la app oficial y en MEMOBIT. Kotlin en la PDA que lee códigos QR del servicio a palcos.",
    items: ["Flutter", "Dart", "Firebase", "Provider", "Kotlin"],
    span: 1,
  },
  {
    id: "backend",
    title: "Backend y APIs",
    detail: "Node.js con Express sobre Cloud Functions. Contratos con Zod, datos en Firestore y Realtime Database.",
    items: ["Node.js", "Express", "TypeScript", "Firestore", "Zod"],
    span: 1,
  },
  {
    id: "operacion",
    title: "Operación en producción",
    detail: "Cobros con Stripe y Aplazo, cortes de caja en PDF, accesos NFC por WebSocket y validación de facturas CFDI.",
    items: ["Stripe", "Aplazo", "WebSockets", "NFC", "CFDI"],
    span: 2,
  },
  {
    id: "formacion",
    title: "Certificaciones y formación",
    detail:
      "Licenciatura en Desarrollo de Software en la Universidad Virtual del Estado de Guanajuato. TSU en la Universidad Tecnológica de León.",
    items: [
      "Licenciatura · UVEG",
      "TSU · UTL",
      "COBOL / Java · NTT DATA",
      "CCNA · Cisco",
      "Scrum Developer",
      "Odoo",
    ],
    span: 2,
  },
];
