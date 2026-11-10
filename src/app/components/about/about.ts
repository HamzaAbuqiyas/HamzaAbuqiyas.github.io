import { Component, input } from '@angular/core';
import { About as AboutData } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section id="about" class="section" aria-labelledby="about-title">
      <div class="container section-grid">
        <h2 id="about-title" class="section-label">{{ heading() }}</h2>
        <div appReveal>
          @for (paragraph of about().paragraphs; track $index; let first = $first) {
            <p [class.lead]="first" [class.muted]="!first">{{ paragraph }}</p>
          }
          <dl class="edu">
            <dt>Education</dt>
            <dd>
              <span class="degree">{{ about().education.degree }}</span>
              <span class="muted">{{ about().education.school }}, {{ about().education.period }}</span>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  `,
  styles: `
    p + p {
      margin-top: 18px;
    }
    .lead {
      margin-bottom: 26px;
    }
    .edu {
      margin: 40px 0 0;
      padding-top: 24px;
      border-top: 1px solid var(--line);
      display: grid;
      gap: 6px;
      @media (min-width: 600px) {
        grid-template-columns: 140px 1fr;
      }
    }
    dt {
      font-family: var(--mono);
      font-size: 0.78rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--muted);
      padding-top: 4px;
    }
    dd {
      margin: 0;
      display: flex;
      flex-direction: column;
    }
    .degree {
      font-weight: 500;
    }
  `,
})
export class About {
  readonly heading = input.required<string>();
  readonly about = input.required<AboutData>();
}
