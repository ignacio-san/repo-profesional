import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';

@Component({
  selector: 'app-castores',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectGallery],
  templateUrl: './castores.html',
  styleUrls: ['./castores.css'],
})
export class Castores {
  galleryImages = [
    {
      src: 'assets/castores/castores1.png',
      alt: 'Landing de Grupo Castores con mensaje de transporte y logística',
    },
    {
      src: 'assets/castores/castores2.png',
      alt: 'Buscador para rastreo de guías en el sitio de Castores',
    },
    {
      src: 'assets/castores/castores3.png',
      alt: 'Mapa interno con geocercas configuradas y unidades en ruta',
    },
    {
      src: 'assets/castores/castores4.png',
      alt: 'Panel de eventos de geocerca y alertas de desvío de ruta',
    },
    {
      src: 'assets/castores/castores5.png',
      alt: 'Reporte de desempeño por ruta y región',
    },
  ];
}
