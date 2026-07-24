import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectGallery],
  templateUrl: './proveedores.html',
  styleUrls: ['./proveedores.css'],
})
export class Proveedores {
  galleryImages = [
    {
      src: 'assets/proveedores/factlogin.png',
      alt: 'Dashboard de facturas con tarjetas de resumen',
    },
    {
      src: 'assets/proveedores/facturas.png',
      alt: 'Listado de facturas de proveedores con acciones',
    },
    {
      src: 'assets/proveedores/facturas2.png',
      alt: 'Módulo de documentos de proveedores',
    },
    {
      src: 'assets/proveedores/facturas3.png',
      alt: 'Pantalla para subir factura PDF y XML',
    },
    {
      src: 'assets/proveedores/facturas4.png',
      alt: 'Vista de carga de opinión de cumplimiento y constancia fiscal',
    },
  ];
}
