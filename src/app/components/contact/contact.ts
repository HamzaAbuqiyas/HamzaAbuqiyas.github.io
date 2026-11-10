import { Component, computed, input, signal } from '@angular/core';
import { Contact as ContactData, Cv } from '../../models/portfolio.models';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [RevealDirective],
  template: `
    <section id="contact" class="section" aria-labelledby="contact-title">
      <div class="container">
        <div class="panel" appReveal>
          <div>
            <h2 id="contact-title" class="headline">{{ contact().heading }}</h2>
            <p class="message">{{ contact().message }}</p>
            <p class="where">{{ location() }} · {{ availability() }}</p>
          </div>

          <div class="actions">
            @if (email(); as link) {
              <a class="btn btn--light" [href]="link.url">{{ link.value }}</a>
              <button type="button" class="btn btn--outline" (click)="copy(link.value)">
                <span aria-live="polite">{{ copied() ? contact().copiedLabel : contact().copyLabel }}</span>
              </button>
            }
            @if (cv(); as file) {
              <a class="btn btn--outline" [href]="file.url" [attr.download]="file.fileName">{{ file.downloadLabel }}</a>
            }
            @for (link of others(); track link.url) {
              <a class="btn btn--outline" [href]="link.url" target="_blank" rel="noopener">{{ link.label }}</a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .panel {
      display: grid;
      gap: 28px;
      padding: 36px 24px;
      border-radius: 20px;
      color: var(--text);
      border: 1px solid rgb(var(--accent-rgb) / 0.25);
      background:
        radial-gradient(36rem 20rem at 100% 0%, rgb(var(--accent-rgb) / 0.16), transparent 65%),
        linear-gradient(160deg, #2d333b, #262c33);
      box-shadow: var(--shadow-lg);
      @media (min-width: 900px) {
        grid-template-columns: 1.2fr 1fr;
        align-items: center;
        padding: 56px;
      }
    }
    .headline {
      font-size: clamp(1.9rem, 4vw, 2.6rem);
      color: var(--text);
    }
    .message {
      margin-top: 12px;
      max-width: 50ch;
      color: var(--text-2);
      font-size: 1.05rem;
    }
    .where {
      margin-top: 10px;
      font-size: 0.92rem;
      color: var(--muted);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      @media (min-width: 900px) {
        justify-content: flex-end;
      }
    }
    .btn--light {
      overflow-wrap: anywhere;
    }
    .btn--outline {
      background: transparent;
      color: var(--text);
      border-color: var(--line-strong);
      box-shadow: none;
      &:hover {
        background: var(--surface);
        box-shadow: none;
      }
    }
  `,
})
export class Contact {
  readonly heading = input.required<string>();
  readonly contact = input.required<ContactData>();
  readonly location = input.required<string>();
  readonly availability = input.required<string>();
  readonly cv = input<Cv>();

  protected readonly copied = signal(false);
  /** Email gets its own buttons; other links (LinkedIn, GitHub…) follow. */
  protected readonly email = computed(() => this.contact().links.find((l) => l.url.startsWith('mailto:')));
  protected readonly others = computed(() => this.contact().links.filter((l) => !l.url.startsWith('mailto:')));

  protected async copy(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      // Clipboard not available (old browser or blocked); the email link still works.
    }
  }
}
