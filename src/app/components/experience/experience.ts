import { Component, input } from '@angular/core';
import { ExperienceItem } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  template: `
    <section id="experience" class="section" aria-labelledby="experience-title">
      <div class="container">
        <div class="section-head" appReveal>
          <h2 id="experience-title" class="section-title">{{ heading() }}</h2>
        </div>
        <ol class="timeline">
          @for (job of items(); track job.company + job.role) {
            <li class="entry" appReveal>
              <span class="node" [class.current]="job.period.includes('Present')" aria-hidden="true"></span>
              <article class="card">
                <header class="top">
                  <div>
                    <h3>{{ job.role }}</h3>
                    <p class="company">
                      {{ job.company }}
                      @if (job.location) {
                        <span class="muted"> · {{ job.location }}</span>
                      }
                    </p>
                  </div>
                  <span class="badge" [class.badge--success]="job.period.includes('Present')">
                    {{ job.period }}
                  </span>
                </header>
                @if (job.highlights.length) {
                  <ul class="bullets">
                    @for (h of job.highlights; track $index) {
                      <li>{{ h }}</li>
                    }
                  </ul>
                }
                @if (job.tech.length) {
                  <ul class="chips" aria-label="Technologies">
                    @for (t of job.tech; track t) {
                      <li>{{ t }}</li>
                    }
                  </ul>
                }
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: `
    .timeline {
      list-style: none;
      position: relative;
      display: grid;
      gap: 20px;
      @media (min-width: 640px) {
        padding-left: 36px;
        &::before {
          content: '';
          position: absolute;
          left: 9px;
          top: 12px;
          bottom: 12px;
          width: 2px;
          background: var(--line);
        }
      }
    }
    .entry {
      position: relative;
    }
    .node {
      display: none;
      @media (min-width: 640px) {
        display: block;
        position: absolute;
        left: -36px;
        top: 30px;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: var(--bg);
        border: 4px solid var(--line-strong);
        &.current {
          border-color: var(--accent);
          box-shadow: 0 0 0 4px var(--accent-soft);
        }
      }
    }
    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      gap: 10px 20px;
    }
    h3 {
      font-size: 1.2rem;
    }
    .company {
      margin-top: 2px;
      font-weight: 600;
      color: var(--accent);
    }
    .bullets {
      margin-top: 18px;
    }
    .chips {
      margin-top: 18px;
    }
  `,
})
export class Experience {
  readonly heading = input.required<string>();
  readonly items = input.required<ExperienceItem[]>();
}
