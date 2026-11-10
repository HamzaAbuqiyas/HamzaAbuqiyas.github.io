import { Component, input } from '@angular/core';
import { Project } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  template: `
    <section id="projects" class="section section--soft" aria-labelledby="projects-title">
      <div class="container">
        <div class="section-head" appReveal>
          <h2 id="projects-title" class="section-title">{{ heading() }}</h2>
        </div>
        <div class="grid">
          @for (project of projects(); track project.name; let i = $index) {
            <article class="card project" appReveal [revealDelay]="i * 0.08">
              <header class="top">
                <h3>{{ project.name }}</h3>
                @if (project.status === 'in-progress') {
                  <span class="badge badge--info badge--dot">In progress</span>
                } @else {
                  <span class="badge badge--success badge--dot">Completed</span>
                }
              </header>
              <p class="subtitle">{{ project.subtitle }}</p>
              <p class="desc">{{ project.description }}</p>
              <ul class="bullets">
                @for (h of project.highlights; track $index) {
                  <li>{{ h }}</li>
                }
              </ul>
              <ul class="chips" aria-label="Technologies">
                @for (t of project.tech; track t) {
                  <li>{{ t }}</li>
                }
              </ul>
              @if (project.repoUrl || project.liveUrl) {
                <div class="links">
                  @if (project.repoUrl) {
                    <a class="btn btn--secondary btn--sm" [href]="project.repoUrl" target="_blank" rel="noopener">Source code</a>
                  }
                  @if (project.liveUrl) {
                    <a class="btn btn--sm" [href]="project.liveUrl" target="_blank" rel="noopener">Live demo</a>
                  }
                </div>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .grid {
      display: grid;
      gap: 20px;
      @media (min-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .project {
      display: flex;
      flex-direction: column;
      &:hover {
        transform: translateY(-2px);
      }
      @media (prefers-reduced-motion: reduce) {
        &:hover {
          transform: none;
        }
      }
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 12px;
    }
    h3 {
      font-size: 1.35rem;
    }
    .subtitle {
      margin-top: 4px;
      font-weight: 600;
      color: var(--accent);
    }
    .desc {
      margin-top: 12px;
      color: var(--text-2);
    }
    .bullets {
      margin-top: 16px;
      flex: 1;
    }
    .chips {
      margin-top: 20px;
    }
    .links {
      margin-top: 20px;
      display: flex;
      gap: 10px;
    }
  `,
})
export class Projects {
  readonly heading = input.required<string>();
  readonly projects = input.required<Project[]>();
}
