import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SkillTab = 'frontend' | 'backend' | 'mobile' | 'db' | 'methods';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.html',
  styleUrls: ['./sobre-mi.css'],
})
export class SobreMi {
  // Tabs de habilidades
  activeSkillTab: SkillTab = 'frontend';

  setSkillTab(tab: SkillTab) {
    this.activeSkillTab = tab;
  }

  // Acordeón de experiencias
  private openIndex: number | null = 2; // por default abre Club León (puedes cambiarlo)

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number) {
    return this.openIndex === index;
  }
}
