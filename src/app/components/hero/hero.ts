import { NgOptimizedImage } from '@angular/common';
import { Component, computed, input } from '@angular/core';
import { Cv, Profile } from '../../models/portfolio.models';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  template: `
    <section id="top" class="hero" aria-labelledby="hero-name">
      <div class="container">
        <div class="layout">
          <div class="text">
            <span class="badge badge--success badge--dot">{{ profile().availability }}</span>
            <h1 id="hero-name" class="name">{{ profile().name }}</h1>
            <p class="role">{{ role() }}</p>
            @if (stack().length) {
              <ul class="stack" aria-label="Main technologies">
                @for (item of stack(); track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            }
            <p class="tagline">{{ profile().tagline }}</p>
            <div class="actions">
              <a class="btn" href="#contact">Contact me</a>
              @if (cv(); as file) {
                <a class="btn btn--secondary" [href]="file.url" [attr.download]="file.fileName">
                  <span aria-hidden="true">↓</span> {{ file.downloadLabel }}
                </a>
              } @else {
                <a class="btn btn--secondary" href="#projects">View projects</a>
              }
            </div>
          </div>

          @if (profile().photo; as photo) {
            <figure class="photo">
              <img [ngSrc]="photo.src" [alt]="photo.alt" fill priority sizes="(min-width: 900px) 33vw, 70vw" />
            </figure>
          }
        </div>

        <dl class="glance">
          @for (fact of profile().facts; track fact.name) {
            <div class="fact">
              <dt>{{ fact.name }}</dt>
              <dd>{{ fact.detail }}</dd>
            </div>
          }
        </dl>
      </div>
    </section>
  `,
  styleUrl: './hero.scss',
})
export class Hero {
  readonly profile = input.required<Profile>();
  readonly cv = input<Cv>();

  /** ".NET Developer | C# | ASP.NET Core" → role ".NET Developer" + stack ["C#", "ASP.NET Core"]. */
  private readonly titleParts = computed(() =>
    this.profile()
      .title.split('|')
      .map((part) => part.trim())
      .filter(Boolean),
  );
  protected readonly role = computed(() => this.titleParts()[0] ?? '');
  protected readonly stack = computed(() => this.titleParts().slice(1));}
