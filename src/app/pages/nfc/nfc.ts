import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nfc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nfc.html',
  styleUrls: ['./nfc.css'], // si usas scss, pon .scss
})
export class Nfc {
  galleryImages = [
    {
      src: 'assets/nfc/nfc2.png',
      alt: 'Pantalla de escaneo NFC y lectura de tarjeta',
    },
    {
      src: 'assets/nfc/nfc3.png',
      alt: 'Validación exitosa de acceso con datos del titular',
    },
    {
      src: 'assets/nfc/nfc4.png',
      alt: 'Validación rechazada por reglas de acceso o vigencia',
    },
    {
      src: 'assets/nfc/nfc2.png',
      alt: 'Configuración o visualización de reglas por zona/rol',
    },
    {
      src: 'assets/nfc/nfc.mp4',
      alt: 'Bitácora e historial de accesos con filtros por fecha',
    },
  ];

  activeIndex = 0;

  get activeImage() {
    return this.galleryImages[this.activeIndex];
  }

  setActive(index: number) {
    this.activeIndex = index;
  }

  isVideo(src: string) {
    return !!src?.toLowerCase().endsWith('.mp4');
  }
}
