# Hamza's Portfolio: rules for Claude Code

## About me
- Junior .NET developer (C#, ASP.NET Core / MVC, SQL Server) with basic Angular experience.
- I want to LEARN while we build. I don't want to blindly paste generated code.

## How to work with me
- Before writing code, explain the plan in plain words and wait for my OK.
- Work in small steps: one component or feature per step.
- After each step, explain what each new or changed file does, and any Angular concept it uses
  (standalone components, signals, inputs, `@for`, `@defer`, lifecycle hooks).
- Keep explanations simple and friendly. Big picture first, then details.
- Don't add any library that isn't in the "Tech" list below without asking me first.
- Suggest a short git commit message after each step. I make the commit myself.
- Never put secrets, API keys or passwords in the code.
- Never include code, data or internal details from my employer (Diyar United Company).

## Tech
- Angular (latest), standalone components, signals, SCSS. No SSR: the site is static, for GitHub Pages.
- 3D: three.js inside ONE `HeroScene` component.
  - Lazy-load it with `@defer` so the page opens fast.
  - Clean up the renderer, geometries and listeners in `ngOnDestroy`.
  - Pause the animation when the tab is hidden or the hero is off-screen.
  - If `prefers-reduced-motion` is set, render one still frame and don't animate.
- Scroll animations: GSAP + ScrollTrigger. Content must be visible even if the animation never runs.
- Content lives in `src/app/data/portfolio.data.ts`, with typed interfaces in `src/app/models/`.
  Components only display data; they don't hard-code text.

## Design
- One-page site, dark theme, mobile-first, fast (aim for Lighthouse Performance 90+).
- Hero: a 3D network of glowing nodes connected by lines, like AI agents talking to each other.
  It reacts gently to the mouse. My name and title sit in front of it.
- Sections: Header, Hero, About, Skills, Experience, Projects, "How I build with AI", Contact, Footer.
- Keep the 3D in the hero only. Everything else stays clean and readable.

## Content (source of truth: my CV)
- Name: Hamza Abuqiyas. Title: .NET Developer | C# | ASP.NET Core | SQL Server | Angular
- Location: Amman, Jordan. Open to relocation (GCC).
- Experience:
  - Junior Software Developer, Diyar United Company (Aug 2026 – Present): enterprise fuel station
    management system (Head Office / Back Office); C#, .NET, SQL Server, stored procedures,
    RDLC reports; debugging across code, database and reports; Git / Azure Repos.
  - Web Development Intern, Bayanat (Jul 2025 – Sep 2025).
- Projects:
  - Hasad: AI-powered crop yield prediction platform (graduation project, team leader of 4).
    ASP.NET Core Web API, Angular, EF Core, SQL Server, JWT + role-based auth, ML model integration.
  - HR / Employee Management System: microservices learning project, IN PROGRESS.
    .NET, Clean Architecture; learning RabbitMQ and Docker. Label it clearly as "In progress".
- Education: B.Sc. Software Engineering, Applied Science Private University (2022 – 2026).
- Do NOT invent skills, numbers, clients or experience. Don't include internal figures about my
  employer's systems.

## Deploy
- GitHub Pages. Help me set it up at the end, once everything works locally.
