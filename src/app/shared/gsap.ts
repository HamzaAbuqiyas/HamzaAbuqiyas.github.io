export type Gsap = typeof import('gsap').gsap;

let loader: Promise<Gsap> | null = null;

/** Loads GSAP + ScrollTrigger once, the first time anything needs them. */
export function loadGsap(): Promise<Gsap> {
  loader ??= Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
    ([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      return gsap;
    },
  );
  return loader;
}

export function prefersReducedMotion(): boolean {
  return (
    typeof window.matchMedia !== 'function' ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export function hasFinePointer(): boolean {
  return typeof window.matchMedia === 'function' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}
