import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type SkillTab = 'frontend' | 'backend' | 'mobile' | 'db' | 'methods';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre-mi.html',
  styleUrls: ['./sobre-mi.css'],
})
export class SobreMi {
  activeSkillTab: SkillTab = 'frontend';
  openIndex: number | null = 0;

  readonly skillTabs: { id: SkillTab; label: string }[] = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'db', label: 'Datos' },
    { id: 'methods', label: 'Método' },
  ];

  setSkillTab(tab: SkillTab) {
    this.activeSkillTab = tab;
  }

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  isOpen(index: number) {
    return this.openIndex === index;
  }
}
