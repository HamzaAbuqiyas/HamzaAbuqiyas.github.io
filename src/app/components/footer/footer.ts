import { Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <div class="container inner">
      <p>© {{ year }} {{ name() }}</p>
      <a href="#top">Back to top ↑</a>
    </div>
  `,
  styles: `
    :host {
      display: block;
      border-top: 1px solid var(--line);
      padding-block: 28px;
      font-size: 0.875rem;
      color: var(--muted);
    }
    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
    }
    a {
      color: var(--muted);
      text-decoration: none;
    }
  `,
})
export class Footer {
  readonly name = input.required<string>();
  protected readonly year = new Date().getFullYear();
}
