import { Component, input } from '@angular/core';
import { ExperienceItem } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    <section id="experience" class="section" aria-labelledby="experience-title">
      <div class="container section-grid">
        <h2 id="experience-title" class="section-label">{{ heading() }}</h2>
        <ol class="jobs">
          @for (job of items(); track job.company + job.role) {
            <li class="job" appReveal>
              <p class="period">{{ job.period }}</p>
              <div>
                <h3>
                  {{ job.role }} <span class="company">· {{ job.company }}</span>
                </h3>
                @if (job.highlights.length) {
                  <ul class="points">
                    @for (h of job.highlights; track $index) {
                      <li>{{ h }}</li>
                    }
                  </ul>
                }
                @if (job.tech.length) {
                  <ul class="tech" aria-label="Technologies">
                    @for (t of job.tech; track t) {
                      <li>{{ t }}</li>
                    }
                  </ul>
                }
              </div>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .jobs {
      list-style: none;
    }
    .job {
      display: grid;
      gap: 8px;
      padding-bottom: 36px;
      @media (min-width: 640px) {
        grid-template-columns: 170px 1fr;
        gap: 24px;
      }
      & + & {
        padding-top: 36px;
        border-top: 1px solid var(--line);
      }
    }
    .period {
      font-family: var(--mono);
      font-size: 0.8rem;
      color: var(--muted);
      padding-top: 4px;
    }
    h3 {
      font-size: 1.15rem;
      font-weight: 600;
    }
    .company {
      font-weight: 400;
      color: var(--muted);
    }
    .points {
      margin-top: 14px;
    }
    .tech {
      margin-top: 16px;
    }
  `,
})
export class Experience {
  readonly heading = input.required<string>();
  readonly items = input.required<ExperienceItem[]>();
}
