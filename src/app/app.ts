import { Component, HostListener, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';

const WORK_ROUTES = new Set([
  '/proyectos',
  '/plateas',
  '/memobit',
  '/app-club-leon',
  '/proveedores',
  '/acreditaciones',
  '/castores',
  '/nfc',
  '/tienda-front-cl',
]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly router = inject(Router);

  currentYear = new Date().getFullYear();
  isMenuOpen = false;
  scrollProgress = 0;
  isWorkActive = false;

  constructor() {
    this.syncWorkActive(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.syncWorkActive(event.urlAfterRedirects));
  }

  private syncWorkActive(url: string) {
    const path = url.split('?')[0].split('#')[0];
    this.isWorkActive = WORK_ROUTES.has(path);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.syncBodyScroll();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.syncBodyScroll();
  }

  private syncBodyScroll() {
    document.body.classList.toggle('menu-locked', this.isMenuOpen);
  }

  onStageScroll(event: Event) {
    const el = event.target as HTMLElement;
    const max = el.scrollHeight - el.clientHeight;
    this.scrollProgress = max > 0 ? (el.scrollTop / max) * 100 : 0;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.matchMedia('(max-width: 980px)').matches) {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      this.scrollProgress = max > 0 ? (window.scrollY / max) * 100 : 0;
    }
  }

  @HostListener('window:keydown.escape')
  onEscape() {
    this.closeMenu();
  }
}
