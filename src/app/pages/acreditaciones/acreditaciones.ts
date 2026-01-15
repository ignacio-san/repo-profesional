// acreditaciones.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acreditaciones',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './acreditaciones.html',
  styleUrls: ['./acreditaciones.css'], // puedes copiar aquí el CSS de plateas
})
export class Acreditaciones {
  galleryImages = [
    {
      src: 'assets/acreditaciones/login.png',
      alt: 'Pantalla de inicio de sesión del sistema de acreditaciones',
    },
    {
      src: 'assets/acreditaciones/partido.png',
      alt: 'Panel de administrador con jornadas y accesos rápidos',
    },
    {
      src: 'assets/acreditaciones/acreditacion4.png',
      alt: 'Perfil del acreditado con partido disponible',
    },
    {
      src: 'assets/acreditaciones/postulados.png',
      alt: 'Vista de estado aceptado / en revisión para un partido',
    },
    {
      src: 'assets/acreditaciones/correo.png',
      alt: 'Tabla de postulados por partido con acciones de aprobar o rechazar',
    },
  ];

  activeIndex = 0;

  get activeImage() {
    return this.galleryImages[this.activeIndex];
  }

  setActive(index: number) {
    this.activeIndex = index;
  }
}
