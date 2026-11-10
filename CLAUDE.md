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
- No 3D for now (tried a full 3D world; it felt too busy). `three` is still installed but unused.
- Scroll animations: GSAP + ScrollTrigger, subtle fade-up only. Content must be visible even if
  the animation never runs.
- Content lives in `src/app/data/portfolio.data.ts`, with typed interfaces in `src/app/models/`.
  Components only display data; they don't hard-code text.

## Design
- One-page site, mobile-first, fast (aim for Lighthouse Performance 90+).
- Recruiter-first, dimmed slate theme (like GitHub "dark dimmed"): soft grey-blue background,
  slightly lighter sections and cards, light text, one sky-blue accent, green for "current",
  amber only for "in progress". No black + gold/orange (looked like a restaurant). Easy to scan in seconds: name, role, current job, keyword chips, timeline, contact.
- Avoid: neon glows, blurred colour blobs, gradient text, glassmorphism, marquees, emoji,
  heavy motion. Motion stays subtle (short fade-ins, small hover lifts).
- Sections: Header, Hero (with "at a glance" facts), About, Skills, Experience, Projects,
  Education & certifications, "How I build with AI", Contact, Footer.

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
