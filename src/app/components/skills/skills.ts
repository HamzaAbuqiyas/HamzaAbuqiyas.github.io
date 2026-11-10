import { Component, input } from '@angular/core';
import { SkillGroup } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section section--soft" aria-labelledby="skills-title">
      <div class="container">
        <div class="section-head" appReveal>
          <h2 id="skills-title" class="section-title">{{ heading() }}</h2>
        </div>
        <div class="grid">
          @for (group of groups(); track group.name; let i = $index) {
            <div class="card" appReveal [revealDelay]="(i % 3) * 0.06">
              <h3>{{ group.name }}</h3>
              <ul class="chips">
                @for (skill of group.skills; track skill.name) {
                  <li [class.learning]="skill.learning">{{ skill.name }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 16px;
      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }
      @media (min-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    h3 {
      font-size: 1rem;
      margin-bottom: 16px;
    }
    .chips .learning {
      background: var(--info-soft);
      border-color: rgb(210 153 34 / 0.4);
      color: var(--info);
    }
  `,
})
export class Skills {
  readonly heading = input.required<string>();
  readonly groups = input.required<SkillGroup[]>();
}
