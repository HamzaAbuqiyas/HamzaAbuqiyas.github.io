import { Component } from '@angular/core';
import { PORTFOLIO } from './data/portfolio.data';
import { About } from './components/about/about';
import { AiWorkflow } from './components/ai-workflow/ai-workflow';
import { Contact } from './components/contact/contact';
import { Experience } from './components/experience/experience';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Skills, Experience, Projects, AiWorkflow, Contact, Footer],
  templateUrl: './app.html',
})
export class App {
  protected readonly data = PORTFOLIO;
}
