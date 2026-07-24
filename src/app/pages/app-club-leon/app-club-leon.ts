import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectGallery } from '../../components/project-gallery/project-gallery';

@Component({
  selector: 'app-app-club-leon',
  standalone: true,
  imports: [CommonModule, RouterModule, ProjectGallery],
  templateUrl: './app-club-leon.html',
  styleUrls: ['./app-club-leon.css'],
})
export class AppClubLeon {
  galleryImages = [
    { src: encodeURI('assets/app-club-leon/APP 1.jpg'), alt: 'Pantalla de inicio de App Club León' },
    { src: encodeURI('assets/app-club-leon/APP 2.jpg'), alt: 'Feed de noticias en App Club León' },
    { src: encodeURI('assets/app-club-leon/APP 3.jpg'), alt: 'Reels y reproducción de video' },
    { src: encodeURI('assets/app-club-leon/APP 4.jpg'), alt: 'Galería y visor de imágenes' },
    { src: encodeURI('assets/app-club-leon/APP 5.jpg'), alt: 'Sección de beneficios para socios' },
  ];
}
