import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';

@Component({
  selector: 'app-plateas',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectGallery],
  templateUrl: './plateas.html',
  styleUrls: ['./plateas.css'],
})
export class Plateas {
  galleryImages = [
    { src: 'assets/plateas/renovaciones.png', alt: 'Pantalla principal de renovaciones' },
    { src: 'assets/plateas/citas.png', alt: 'Módulo de control de citas' },
    { src: 'assets/plateas/corte-diario.png', alt: 'Reporte de cortes diarios' },
    { src: 'assets/plateas/propietarios.png', alt: 'Propietarios' },
    { src: 'assets/plateas/cortes.png', alt: 'Cortes' },
  ];
}
