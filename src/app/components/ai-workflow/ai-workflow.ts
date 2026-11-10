import { Component, input } from '@angular/core';
import { AiSection } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-ai-workflow',
  imports: [RevealDirective],
  template: `
    <section id="ai" class="section" aria-labelledby="ai-title">
      <div class="container">
        <div class="section-head" appReveal>
          <h2 id="ai-title" class="section-title">{{ heading() }}</h2>
          <p class="intro">{{ ai().intro }}</p>
        </div>
        <ol class="grid">
          @for (practice of ai().practices; track practice.title; let i = $index) {
            <li class="card" appReveal [revealDelay]="i * 0.06">
              <span class="step" aria-hidden="true">{{ i + 1 }}</span>
              <h3>{{ practice.title }}</h3>
              <p>{{ practice.description }}</p>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .intro {
      margin-top: 12px;
      max-width: 64ch;
      font-size: 1.05rem;
      color: var(--text-2);
    }
    .grid {
      list-style: none;
      display: grid;
      gap: 16px;
      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1000px) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .step {
      display: grid;
      place-items: center;
      width: 32px;
      height: 32px;
      margin-bottom: 16px;
      border-radius: 9px;
      background: var(--accent-soft);
      color: var(--accent);
      font-weight: 700;
      font-size: 0.9rem;
    }
    h3 {
      font-size: 1.02rem;
    }
    p {
      margin-top: 6px;
      color: var(--muted);
      font-size: 0.95rem;
    }
  `,
})
export class AiWorkflow {
  readonly heading = input.required<string>();
  readonly ai = input.required<AiSection>();
}
