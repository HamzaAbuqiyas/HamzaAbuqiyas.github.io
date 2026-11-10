import { Component, input } from '@angular/core';
import { About as AboutData } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  imports: [RevealDirective],
  template: `
    <section id="about" class="section" aria-labelledby="about-title">
      <div class="container layout">
        <div appReveal>
          <h2 id="about-title" class="section-title">{{ heading() }}</h2>
          <div class="text">
            @for (paragraph of about().paragraphs; track $index; let first = $first) {
              <p [class.first]="first">{{ paragraph }}</p>
            }
          </div>
        </div>

        <aside class="card" appReveal [revealDelay]="0.1">
          <h3>{{ languagesTitle() }}</h3>
          <ul class="langs">
            @for (lang of about().languages; track lang.name) {
              <li>
                <span class="lang">{{ lang.name }}</span>
                <span class="muted">{{ lang.detail }}</span>
              </li>
            }
          </ul>
        </aside>
      </div>
    </section>
  `,
  styles: `
    .layout {
      display: grid;
      gap: 32px;
      align-items: start;
      @media (min-width: 900px) {
        grid-template-columns: 1fr 320px;
        gap: 64px;
      }
    }
    .text {
      margin-top: 20px;
      max-width: 68ch;
      color: var(--text-2);
      font-size: 1.05rem;
      p + p {
        margin-top: 14px;
      }
      .first {
        font-size: 1.2rem;
        color: var(--text);
        font-weight: 500;
      }
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 14px;
    }
    .langs {
      list-style: none;
      li {
        display: flex;
        justify-content: space-between;
        gap: 12px;
        padding: 10px 0;
        border-top: 1px solid var(--line);
        &:first-child {
          border-top: 0;
          padding-top: 0;
        }
      }
    }
    .lang {
      font-weight: 600;
    }
    .muted {
      text-align: right;
      font-size: 0.92rem;
    }
  `,
})
export class About {
  readonly heading = input.required<string>();
  readonly about = input.required<AboutData>();
  readonly languagesTitle = input('Languages');
}
