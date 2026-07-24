import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

export interface GalleryImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.css',
})
export class ProjectGallery implements OnChanges, OnDestroy {
  @Input({ required: true }) images: GalleryImage[] = [];
  @Input() title = 'Galería';
  @Input() hint = '';
  /** desktop = preview grande + thumbs; phone = marco de celular */
  @Input() mode: 'desktop' | 'phone' = 'desktop';

  activeIndex = 0;
  lightboxOpen = false;
  private touchStartX = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images']) {
      this.activeIndex = 0;
    }
  }

  ngOnDestroy(): void {
    document.body.style.overflow = '';
  }

  get activeImage(): GalleryImage | null {
    return this.images[this.activeIndex] ?? null;
  }

  get counter(): string {
    if (!this.images.length) return '0 / 0';
    return `${this.activeIndex + 1} / ${this.images.length}`;
  }

  setActive(index: number) {
    if (index < 0 || index >= this.images.length) return;
    this.activeIndex = index;
  }

  next(event?: Event) {
    event?.stopPropagation();
    if (!this.images.length) return;
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prev(event?: Event) {
    event?.stopPropagation();
    if (!this.images.length) return;
    this.activeIndex =
      (this.activeIndex - 1 + this.images.length) % this.images.length;
  }

  openLightbox() {
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  onThumbKeydown(event: KeyboardEvent, index: number) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.setActive(index);
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0]?.clientX ?? 0;
  }

  onTouchEnd(event: TouchEvent) {
    const endX = event.changedTouches[0]?.clientX ?? 0;
    const delta = endX - this.touchStartX;
    if (Math.abs(delta) < 48) return;
    if (delta < 0) this.next();
    else this.prev();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.images.length) return;

    if (this.lightboxOpen && event.key === 'Escape') {
      this.closeLightbox();
      return;
    }

    const target = event.target as HTMLElement | null;
    if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
      return;
    }

    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }
}
