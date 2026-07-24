import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

type Filter = 'all' | 'operacion' | 'mobile' | 'logistica' | 'producto';

interface Project {
  index: string;
  title: string;
  client: string;
  filter: Exclude<Filter, 'all'>;
  badge: string;
  summary: string;
  problem: string;
  result: string;
  stack: string[];
  route: string;
}

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './proyectos.html',
  styleUrls: ['./proyectos.css'],
})
export class Proyectos {
  activeFilter: Filter = 'all';
  hoveredId: string | null = null;

  readonly filters: { id: Filter; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'operacion', label: 'Operación' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'logistica', label: 'Logística' },
    { id: 'producto', label: 'Producto' },
  ];

  readonly projects: Project[] = [
    {
      index: '01',
      title: 'App Oficial Club León',
      client: 'Club León',
      filter: 'mobile',
      badge: 'Mobile',
      summary:
        'App oficial para aficionados: noticias, reels, beneficios y notificaciones push.',
      problem: 'Canal móvil bajo presión en eventos de alta concurrencia.',
      result: 'Cliente Flutter orientado a rendimiento y experiencia de socio.',
      stack: ['Flutter', 'Provider', 'Dio', 'Firebase'],
      route: '/app-club-leon',
    },
    {
      index: '02',
      title: 'Tienda Oficial Club León',
      client: 'Club León',
      filter: 'operacion',
      badge: 'E-commerce',
      summary:
        'Frontend mobile-first con catálogo, carrito persistente, checkout Stripe y admin por roles.',
      problem: 'Experiencia de compra fragmentada en móvil.',
      result: 'Tienda coherente conectada al backend real.',
      stack: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
      route: '/tienda-front-cl',
    },
    {
      index: '03',
      title: 'Renovación de palcos y plateas',
      client: 'Club León',
      filter: 'operacion',
      badge: 'Accesos NFC',
      summary:
        'Plataforma interna para renovaciones, tarjetas NFC, citas y movimientos de venta en un solo flujo.',
      problem: 'Procesos dispersos en hojas de cálculo y controles manuales.',
      result: 'Operación centralizada con estatus y movimientos en tiempo real.',
      stack: ['Angular', 'Firebase RTDB', 'Node.js', 'NFC'],
      route: '/plateas',
    },
    {
      index: '04',
      title: 'Acreditaciones de medios',
      client: 'Club León',
      filter: 'operacion',
      badge: 'Web interna',
      summary:
        'Gestión de postulaciones de prensa y staff en días de partido, con constancias PDF por correo.',
      problem: 'Validaciones por jornada lentas y poco trazables.',
      result: 'Registro, validación y emisión de constancias en un solo sistema.',
      stack: ['Angular', 'Firebase', 'jsPDF', 'Bootstrap'],
      route: '/acreditaciones',
    },
    {
      index: '05',
      title: 'Portal de Proveedores y Facturas',
      client: 'Club León',
      filter: 'operacion',
      badge: 'Fiscal',
      summary:
        'Portal para carga de PDF/XML, validación CFDI y panel administrativo de estatus.',
      problem: 'Recepción documental inconsistente y validaciones manuales.',
      result: 'Flujo fiscal con validaciones automáticas y seguimiento claro.',
      stack: ['Angular', 'Firebase', 'CFDI XML', 'PDF'],
      route: '/proveedores',
    },
    {
      index: '06',
      title: 'Gestor de geocercas',
      client: 'Grupo Castores',
      filter: 'logistica',
      badge: 'Logística',
      summary:
        'Módulo para configurar geocercas, monitorear unidades y alertar desvíos o detenciones.',
      problem: 'Baja visibilidad operativa en ruta.',
      result: 'Alertas y monitoreo continuo para toma de decisiones.',
      stack: ['Java', 'PHP', 'TypeScript', 'WebSockets'],
      route: '/castores',
    },
    {
      index: '07',
      title: 'Escáner NFC de accesos',
      client: 'Club León',
      filter: 'operacion',
      badge: 'Tiempo real',
      summary:
        'Lectura NFC para validar credenciales, consultar titulares y registrar entradas/salidas.',
      problem: 'Validación de accesos sin trazabilidad inmediata.',
      result: 'Bitácora auditable con respuesta en tiempo real.',
      stack: ['Node.js', 'nfc-pcsc', 'WebSocket', 'Angular'],
      route: '/nfc',
    },
    {
      index: '08',
      title: 'MEMOBIT',
      client: 'Proyecto personal',
      filter: 'producto',
      badge: 'Indie',
      summary:
        'Juego de memoria con categorías, niveles, retos cronometrados y monetización.',
      problem: 'Producto propio de punta a punta para validar UX y publicación.',
      result: 'App iOS/Android con analytics, ads e IAP.',
      stack: ['Flutter', 'Dart', 'Firebase', 'AdMob'],
      route: '/memobit',
    },
  ];

  get filtered(): Project[] {
    if (this.activeFilter === 'all') return this.projects;
    return this.projects.filter((p) => p.filter === this.activeFilter);
  }

  setFilter(filter: Filter) {
    this.activeFilter = filter;
  }

  setHover(id: string | null) {
    this.hoveredId = id;
  }
}
