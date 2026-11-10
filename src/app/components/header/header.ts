import { Component, input, signal } from '@angular/core';
import { NavLink } from '../../models/portfolio.models';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'closeMenu()',
    '[class.scrolled]': 'scrolled()',
  },
})
export class Header {
  readonly name = input.required<string>();
  readonly links = input.required<NavLink[]>();

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
  }
}
