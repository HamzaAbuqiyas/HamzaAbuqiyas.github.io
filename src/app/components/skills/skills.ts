import { Component, input } from '@angular/core';
import { SkillGroup } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  template: `
    <section id="skills" class="section" aria-labelledby="skills-title">
      <div class="container section-grid">
        <h2 id="skills-title" class="section-label">{{ heading() }}</h2>
        <div class="groups">
          @for (group of groups(); track group.name; let i = $index) {
            <div class="group" appReveal [revealDelay]="i * 0.06">
              <h3>{{ group.name }}</h3>
              <ul>
                @for (skill of group.skills; track skill.name) {
                  <li>
                    {{ skill.name }}
                    @if (skill.learning) {
                      <span class="learning">learning</span>
                    }
                  </li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .groups {
      display: grid;
      gap: 40px 48px;
      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    h3 {
      font-size: 1rem;
      font-weight: 600;
      padding-bottom: 12px;
      margin-bottom: 14px;
      border-bottom: 1px solid var(--line);
    }
    ul {
      list-style: none;
      color: var(--muted);
    }
    li + li {
      margin-top: 6px;
    }
    .learning {
      margin-left: 8px;
      font-family: var(--mono);
      font-size: 0.72rem;
      color: var(--accent);
    }
  `,
})
export class Skills {
  readonly heading = input.required<string>();
  readonly groups = input.required<SkillGroup[]>();
}
