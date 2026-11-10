import { DestroyRef, Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { loadGsap, prefersReducedMotion } from './gsap';

/**
 * Gently fades an element up when it scrolls into view.
 * The element is fully visible in the HTML; the animation is only an enhancement,
 * so if GSAP never loads (or motion is reduced) the content still shows.
 */
@Directive({ selector: '[appReveal]' })
export class RevealDirective {
  /** Delay in seconds, handy for staggering items in a list. */
  readonly revealDelay = input(0);

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    let destroyed = false;
    let cleanup: (() => void) | undefined;

    this.destroyRef.onDestroy(() => {
      destroyed = true;
      cleanup?.();
    });

    afterNextRender(() => {
      if (prefersReducedMotion()) return;

      loadGsap()
        .then((gsap) => {
          if (destroyed) return;
          const tween = gsap.from(this.el.nativeElement, {
            autoAlpha: 0,
            y: 18,
            duration: 0.8,
            ease: 'power3.out',
            delay: this.revealDelay(),
            // Remove GSAP's inline styles afterwards, so CSS hover effects work normally.
            clearProps: 'all',
            scrollTrigger: { trigger: this.el.nativeElement, start: 'top 90%', once: true },
          });
          cleanup = () => {
            tween.scrollTrigger?.kill();
            tween.kill();
          };
        })
        .catch(() => {
          // Animation is optional: if GSAP fails to load the content is already visible.
        });
    });
  }
}
