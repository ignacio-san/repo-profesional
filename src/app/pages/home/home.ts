import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

type Domain = 'all' | 'operacion' | 'mobile' | 'logistica';

interface FeaturedProject {
  id: string;
  index: string;
  title: string;
  client: string;
  domain: Exclude<Domain, 'all'>;
  problem: string;
  result: string;
  stack: string[];
  route: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  pointerX = 50;
  pointerY = 30;
  activeDomain: Domain = 'all';
  activeProjectId = 'frontclub';

  readonly domains: { id: Domain; label: string }[] = [
    { id: 'all', label: 'Todos' },
    { id: 'operacion', label: 'Operación' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'logistica', label: 'Logística' },
  ];

  readonly projects: FeaturedProject[] = [
    {
      id: 'frontclub',
      index: '01',
      title: 'App Oficial Club León',
      client: 'Club León',
      domain: 'mobile',
      problem: 'Canal móvil inestable en jornadas de alta concurrencia.',
      result: 'App Flutter en producción: noticias, beneficios y push.',
      stack: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      route: '/app-club-leon',
    },
    {
      id: 'tienda',
      index: '02',
      title: 'Tienda Oficial Club León',
      client: 'Club León',
      domain: 'operacion',
      problem: 'Checkout y catálogo sin experiencia mobile-first coherente.',
      result: 'Tienda Next.js con carrito persistente y pagos Stripe.',
      stack: ['Next.js', 'TypeScript', 'Stripe', 'Firebase'],
      route: '/tienda-front-cl',
    },
    {
      id: 'plateas',
      index: '03',
      title: 'Renovación de palcos y plateas',
      client: 'Club León',
      domain: 'operacion',
      problem: 'Renovaciones y accesos NFC gestionados en hojas de cálculo dispersas.',
      result: 'Operación unificada con trazabilidad en tiempo real.',
      stack: ['Angular', 'Firebase', 'NFC', 'Node.js'],
      route: '/plateas',
    },
    {
      id: 'castores',
      index: '04',
      title: 'Gestor de geocercas',
      client: 'Grupo Castores',
      domain: 'logistica',
      problem: 'Poca visibilidad de desvíos y detenciones en ruta.',
      result: 'Alertas operativas y monitoreo continuo de unidades.',
      stack: ['Java', 'WebSockets', 'TypeScript', 'REST'],
      route: '/castores',
    },
  ];

  readonly stackGroups = [
    {
      title: 'Frontend',
      items: ['Angular', 'React', 'Next.js', 'TypeScript'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Java', '.NET', 'Python', 'REST'],
    },
    {
      title: 'Mobile',
      items: ['Flutter', 'Dart', 'Firebase', 'Push'],
    },
    {
      title: 'Operación',
      items: ['NFC', 'WebSockets', 'IoT', 'MySQL'],
    },
  ];

  get filteredProjects(): FeaturedProject[] {
    if (this.activeDomain === 'all') return this.projects;
    return this.projects.filter((p) => p.domain === this.activeDomain);
  }

  get activeProject(): FeaturedProject {
    return (
      this.filteredProjects.find((p) => p.id === this.activeProjectId) ??
      this.filteredProjects[0] ??
      this.projects[0]
    );
  }

  setDomain(domain: Domain) {
    this.activeDomain = domain;
    const list = this.filteredProjects;
    if (!list.some((p) => p.id === this.activeProjectId)) {
      this.activeProjectId = list[0]?.id ?? this.projects[0].id;
    }
  }

  selectProject(id: string) {
    this.activeProjectId = id;
  }

  domainLabel(domain: Exclude<Domain, 'all'>): string {
    return this.domains.find((d) => d.id === domain)?.label ?? domain;
  }

  @HostListener('document:pointermove', ['$event'])
  onPointerMove(event: PointerEvent) {
    const w = window.innerWidth || 1;
    const h = window.innerHeight || 1;
    this.pointerX = (event.clientX / w) * 100;
    this.pointerY = (event.clientY / h) * 100;
  }
}
