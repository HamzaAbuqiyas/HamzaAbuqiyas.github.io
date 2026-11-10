import { Component, input } from '@angular/core';
import { Contact as ContactData } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  template: `
    <section id="contact" class="section" aria-labelledby="contact-title">
      <div class="container section-grid">
        <h2 id="contact-title" class="section-label">{{ heading() }}</h2>
        <div appReveal>
          <p class="headline">{{ contact().heading }}</p>
          <p class="message">{{ contact().message }}</p>
          <p class="where">{{ location() }} — {{ availability() }}</p>
          @if (contact().links.length) {
            <ul class="links">
              @for (link of contact().links; track link.url) {
                <li>
                  <span class="label">{{ link.label }}</span>
                  <a [href]="link.url" target="_blank" rel="noopener">{{ link.value }}</a>
                </li>
              }
            </ul>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .headline {
      font-family: var(--serif);
      font-size: clamp(2.2rem, 6vw, 3.6rem);
      letter-spacing: -0.02em;
      line-height: 1.1;
    }
    .message {
      margin-top: 18px;
      max-width: 54ch;
      color: var(--muted);
    }
    .where {
      margin-top: 10px;
      font-family: var(--mono);
      font-size: 0.8rem;
      color: var(--muted);
    }
    .links {
      margin-top: 36px;
      list-style: none;
      border-top: 1px solid var(--line);
    }
    .links li {
      display: grid;
      grid-template-columns: 110px 1fr;
      gap: 16px;
      padding: 14px 0;
      border-bottom: 1px solid var(--line);
    }
    .label {
      font-family: var(--mono);
      font-size: 0.78rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--muted);
      padding-top: 3px;
    }
    a {
      overflow-wrap: anywhere;
    }
  `,
})
export class Contact {
  readonly heading = input.required<string>();
  readonly contact = input.required<ContactData>();
  readonly location = input.required<string>();
  readonly availability = input.required<string>();
}
