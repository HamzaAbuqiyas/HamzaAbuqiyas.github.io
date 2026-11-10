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
      padding-block: 28px;
      border-top: 1px solid var(--line);
      font-size: 0.9rem;
      color: var(--muted);
    }
    .inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
    }
  `,
})
export class Footer {
  readonly name = input.required<string>();
  protected readonly year = new Date().getFullYear();
}
