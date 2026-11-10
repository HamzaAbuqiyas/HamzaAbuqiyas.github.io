import { Component, input } from '@angular/core';
import { Project } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [RevealDirective],
  template: `
    <section id="projects" class="section" aria-labelledby="projects-title">
      <div class="container section-grid">
        <h2 id="projects-title" class="section-label">{{ heading() }}</h2>
        <div class="list">
          @for (project of projects(); track project.name) {
            <article class="project" appReveal>
              <header class="head">
                <h3>{{ project.name }}</h3>
                @if (project.status === 'in-progress') {
                  <span class="status status--progress">In progress</span>
                } @else {
                  <span class="status">Completed</span>
                }
              </header>
              <p class="subtitle">{{ project.subtitle }}</p>
              <p class="desc">{{ project.description }}</p>
              <ul class="points">
                @for (h of project.highlights; track $index) {
                  <li>{{ h }}</li>
                }
              </ul>
              <ul class="tech" aria-label="Technologies">
                @for (t of project.tech; track t) {
                  <li>{{ t }}</li>
                }
              </ul>
              @if (project.repoUrl || project.liveUrl) {
                <p class="links">
                  @if (project.repoUrl) {
                    <a class="arrow-link" [href]="project.repoUrl" target="_blank" rel="noopener">
                      Source code <span aria-hidden="true">↗</span>
                    </a>
                  }
                  @if (project.liveUrl) {
                    <a class="arrow-link" [href]="project.liveUrl" target="_blank" rel="noopener">
                      Live demo <span aria-hidden="true">↗</span>
                    </a>
                  }
                </p>
              }
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .project {
      padding-bottom: 44px;
      & + & {
        padding-top: 44px;
        border-top: 1px solid var(--line);
      }
    }
    .head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
    }
    h3 {
      font-family: var(--serif);
      font-size: clamp(1.6rem, 3vw, 2rem);
      letter-spacing: -0.01em;
    }
    .subtitle {
      margin-top: 6px;
      color: var(--text);
    }
    .desc {
      margin-top: 14px;
      max-width: 62ch;
      color: var(--muted);
    }
    .points {
      margin-top: 18px;
    }
    .tech {
      margin-top: 20px;
    }
    .links {
      margin-top: 20px;
      display: flex;
      gap: 24px;
    }
  `,
})
export class Projects {
  readonly heading = input.required<string>();
  readonly projects = input.required<Project[]>();
}
