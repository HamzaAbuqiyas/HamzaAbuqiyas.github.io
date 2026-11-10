import { Component, input } from '@angular/core';
import { Cv } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

/** A card where recruiters can download or open the CV. */
@Component({
  selector: 'app-cv-download',
  imports: [RevealDirective],
  template: `
    <section id="cv" class="section section--soft" aria-labelledby="cv-title">
      <div class="container">
        <div class="section-head" appReveal>
          <h2 id="cv-title" class="section-title">{{ heading() }}</h2>
        </div>

        <div class="card doc" appReveal>
          <!-- A small drawing of a document with a "PDF" label. -->
          <div class="file" aria-hidden="true">
            <span class="fold"></span>
            <span class="lines"></span>
            <span class="tag">PDF</span>
          </div>

          <div class="info">
            <h3>{{ cv().title }}</h3>
            <p class="meta">{{ cv().meta }}</p>
            <p class="desc">{{ cv().description }}</p>
          </div>

          <div class="actions">
            <a class="btn" [href]="cv().url" [attr.download]="cv().fileName">
              <span class="icon" aria-hidden="true">↓</span>
              {{ cv().downloadLabel }}
            </a>
            <a class="btn btn--secondary" [href]="cv().url" target="_blank" rel="noopener">
              {{ cv().viewLabel }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .doc {
      display: grid;
      gap: 24px;
      align-items: center;
      @media (min-width: 760px) {
        grid-template-columns: auto 1fr auto;
        gap: 32px;
        padding: 32px 36px;
      }
    }
    .file {
      position: relative;
      width: 72px;
      height: 92px;
      border-radius: 8px 22px 8px 8px;
      background: var(--bg-soft);
      border: 1px solid var(--line-strong);
    }
    .fold {
      position: absolute;
      top: -1px;
      right: -1px;
      width: 22px;
      height: 22px;
      border-radius: 0 8px 0 8px;
      background: var(--line-strong);
    }
    .lines {
      position: absolute;
      left: 14px;
      right: 14px;
      top: 30px;
      height: 26px;
      background: repeating-linear-gradient(
        to bottom,
        var(--line-strong) 0 3px,
        transparent 3px 9px
      );
    }
    .tag {
      position: absolute;
      left: 10px;
      bottom: 10px;
      padding: 2px 7px;
      border-radius: 4px;
      background: var(--btn);
      color: var(--btn-text);
      font-size: 0.68rem;
      font-weight: 800;
      letter-spacing: 0.06em;
    }
    h3 {
      font-size: 1.2rem;
    }
    .meta {
      margin-top: 4px;
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--accent);
    }
    .desc {
      margin-top: 8px;
      max-width: 56ch;
      color: var(--text-2);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .icon {
      font-weight: 800;
    }
  `,
})
export class CvDownload {
  readonly heading = input.required<string>();
  readonly cv = input.required<Cv>();
}
