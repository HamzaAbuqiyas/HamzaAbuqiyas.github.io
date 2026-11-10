import { Component, DestroyRef, afterNextRender, computed, inject, input, signal } from '@angular/core';
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

  /** "Hamza Abuqiyas" → "HA" for the small logo. */
  protected readonly initials = computed(() =>
    this.name()
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase(),
  );

  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  /** Id of the section currently in the middle of the screen. */
  protected readonly activeId = signal<string | null>(null);

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Highlight the menu link of the section being read.
    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') return;
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) this.activeId.set(entry.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const link of this.links()) {
        const section = document.getElementById(link.target);
        if (section) observer.observe(section);
      }
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
    if (window.scrollY < 200) this.activeId.set(null);
  }
}
