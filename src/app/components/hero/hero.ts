import { Component, input } from '@angular/core';
import { Profile } from '../../models/portfolio.models';

@Component({
  selector: 'app-hero',
  template: `
    <section id="top" class="hero" aria-labelledby="hero-name">
      <div class="container">
        <p class="meta">{{ profile().location }} — {{ profile().availability }}</p>
        <h1 id="hero-name" class="name">{{ profile().name }}</h1>
        <p class="title">{{ profile().title }}</p>
        <p class="tagline">{{ profile().tagline }}</p>
        <div class="actions">
          <a class="btn" href="#projects">View projects</a>
          <a class="arrow-link" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .hero {
      padding-top: calc(var(--header-h) + 96px);
      padding-bottom: 96px;
      @media (min-width: 900px) {
        padding-top: calc(var(--header-h) + 150px);
        padding-bottom: 130px;
      }
    }
    .meta {
      font-family: var(--mono);
      font-size: 0.8rem;
      letter-spacing: 0.04em;
      color: var(--muted);
    }
    .name {
      margin-top: 20px;
      font-family: var(--serif);
      font-size: clamp(3rem, 9vw, 6.25rem);
      font-weight: 500;
      letter-spacing: -0.025em;
      line-height: 1.02;
    }
    .title {
      margin-top: 22px;
      font-size: clamp(1rem, 2vw, 1.15rem);
      color: var(--text);
    }
    .tagline {
      margin-top: 10px;
      max-width: 52ch;
      color: var(--muted);
    }
    .actions {
      margin-top: 40px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 28px;
    }
  `,
})
export class Hero {
  readonly profile = input.required<Profile>();
}
