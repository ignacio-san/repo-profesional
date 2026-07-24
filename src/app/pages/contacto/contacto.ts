import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  copied = false;

  async copyEmail() {
    try {
      await navigator.clipboard.writeText('is083328@gmail.com');
      this.copied = true;
      setTimeout(() => (this.copied = false), 1800);
    } catch {
      this.copied = false;
    }
  }
}
