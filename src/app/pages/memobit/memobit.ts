import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-memobit',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './memobit.html',
  styleUrls: ['./memobit.css'],
})
export class Memobit {
  galleryImages = [
    {
      src: 'assets/memobit/memobit1.png',
      alt: 'MEMOBIT en App Store con calificación de 5 estrellas',
    },
    {
      src: 'assets/memobit/memobit2.png',
      alt: 'Pantalla de inicio de MEMOBIT con botón Presiona Inicio',
    },
    {
      src: 'assets/memobit/memobit3.png',
      alt: 'Selección de categoría y grid de niveles con estrellas',
    },
    {
      src: 'assets/memobit/memobit4.png',
      alt: 'Tablero de juego con cartas volteadas en categoría Emojis',
    },
    {
      src: 'assets/memobit/memobit5.png',
      alt: 'Pantalla de resultados con estrellas y estadísticas de tiempo e intentos',
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
