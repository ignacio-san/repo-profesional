import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';

@Component({
  selector: 'app-nfc',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectGallery],
  templateUrl: './nfc.html',
  styleUrls: ['./nfc.css'],
})
export class Nfc {
  galleryImages = [
    {
      src: 'assets/nfc/nfc2.png',
      alt: 'Pantalla de escaneo NFC y lectura de tarjeta',
    },
    {
      src: 'assets/nfc/nfc5.png',
      alt: 'Validación exitosa de acceso con datos del titular',
    },
    {
      src: 'assets/nfc/nfc3.png',
      alt: 'Validación rechazada por reglas de acceso o vigencia',
    },
    {
      src: 'assets/nfc/nfc4.png',
      alt: 'Configuración o visualización de reglas por zona/rol',
    },
    {
      // 👇 aquí pon tu imagen final (antes era video)
      src: 'assets/nfc/nfc1.png',
      alt: 'Bitácora e historial de accesos con filtros por fecha',
    },
  ];
}
