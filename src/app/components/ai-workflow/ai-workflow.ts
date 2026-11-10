import { Component, input } from '@angular/core';
import { AiSection } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-ai-workflow',
  imports: [RevealDirective],
  template: `
    <section id="ai" class="section" aria-labelledby="ai-title">
      <div class="container section-grid">
        <h2 id="ai-title" class="section-label">{{ heading() }}</h2>
        <div>
          <p class="lead" appReveal>{{ ai().intro }}</p>
          <dl class="practices">
            @for (practice of ai().practices; track practice.title; let i = $index) {
              <div class="practice" appReveal [revealDelay]="i * 0.06">
                <dt>{{ practice.title }}</dt>
                <dd>{{ practice.description }}</dd>
              </div>
            }
          </dl>
        </div>
      </div>
    </section>
  `,
  styles: `
    .practices {
      margin: 44px 0 0;
      display: grid;
      gap: 32px 48px;
      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .practice {
      padding-top: 18px;
      border-top: 1px solid var(--line);
    }
    dt {
      font-weight: 600;
    }
    dd {
      margin: 6px 0 0;
      color: var(--muted);
    }
  `,
})
export class AiWorkflow {
  readonly heading = input.required<string>();
  readonly ai = input.required<AiSection>();
}
