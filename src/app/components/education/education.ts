import { Component, input } from '@angular/core';
import { Education as EducationData, LabeledItem } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [RevealDirective],
  template: `
    <section id="education" class="section" aria-labelledby="education-title">
      <div class="container">
        <div class="section-head" appReveal>
          <h2 id="education-title" class="section-title">{{ heading() }}</h2>
        </div>
        <div class="grid">
          <article class="card" appReveal>
            <span class="badge">{{ education().period }}</span>
            <h3>{{ education().degree }}</h3>
            <p class="school">{{ education().school }}</p>
            @if (education().coursework?.length) {
              <ul class="chips" aria-label="Relevant coursework">
                @for (course of education().coursework; track course) {
                  <li>{{ course }}</li>
                }
              </ul>
            }
          </article>

          <article class="card" appReveal [revealDelay]="0.08">
            <ul class="certs">
              @for (cert of certifications(); track cert.name) {
                <li>
                  <span class="check" aria-hidden="true"></span>
                  <div>
                    <p class="cert">{{ cert.name }}</p>
                    <p class="muted">{{ cert.detail }}</p>
                  </div>
                </li>
              }
            </ul>
          </article>
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 20px;
      @media (min-width: 900px) {
        grid-template-columns: 1.1fr 1fr;
      }
    }
    h3 {
      margin-top: 14px;
      font-size: 1.25rem;
    }
    .school {
      margin-top: 2px;
      font-weight: 600;
      color: var(--accent);
    }
    .chips {
      margin-top: 18px;
    }
    .certs {
      list-style: none;
      li {
        display: flex;
        gap: 14px;
        padding: 14px 0;
        border-top: 1px solid var(--line);
        &:first-child {
          border-top: 0;
          padding-top: 0;
        }
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
    .check {
      flex: none;
      position: relative;
      width: 24px;
      height: 24px;
      margin-top: 2px;
      border-radius: 50%;
      background: var(--success-soft);
      &::after {
        content: '';
        position: absolute;
        left: 8px;
        top: 5px;
        width: 6px;
        height: 11px;
        border: solid var(--success);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }
    }
    .cert {
      font-weight: 600;
    }
    .muted {
      font-size: 0.92rem;
    }
  `,
})
export class Education {
  readonly heading = input.required<string>();
  readonly education = input.required<EducationData>();
  readonly certifications = input.required<LabeledItem[]>();
}
