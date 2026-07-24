import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';

@Component({
  selector: 'app-tienda-front-cl',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectGallery],
  templateUrl: './tienda-front-cl.html',
  styleUrls: ['./tienda-front-cl.css'],
})
export class TiendaFrontCL {
  galleryImages = [
    { 
      src: 'assets/tienda-front-cl/tienda1.png', 
      alt: 'Listado de productos con filtros y paginación en vista móvil' 
    },
    { 
      src: 'assets/tienda-front-cl/tienda2.png', 
      alt: 'Detalle de producto con variantes e inventario en tiempo real' 
    },
    { 
      src: 'assets/tienda-front-cl/tienda3.png', 
      alt: 'Carrito persistente con sesión anónima y control de ítems' 
    },
    { 
      src: 'assets/tienda-front-cl/tienda4.png', 
      alt: 'Flujo de checkout seguro e integración de pasarela de pagos' 
    },
    { 
      src: 'assets/tienda-front-cl/tienda5.png', 
      alt: 'Panel administrativo para gestión de catálogo y auditoría de órdenes' 
    },
  ];
}