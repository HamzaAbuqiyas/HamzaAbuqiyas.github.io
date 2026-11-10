import { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO: PortfolioData = {
  nav: [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'AI', target: 'ai' },
    { label: 'Contact', target: 'contact' },
  ],

  headings: {
    about: 'About',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    ai: 'How I build with AI',
    contact: 'Contact',
  },

  profile: {
    name: 'Hamza Abuqiyas',
    title: '.NET Developer | C# | ASP.NET Core | SQL Server | Angular',
    tagline: 'I build reliable back-end systems and the web apps on top of them.',
    location: 'Amman, Jordan',
    availability: 'Open to relocation (GCC)',
  },

  about: {
    paragraphs: [
      'I am a junior .NET developer working on an enterprise fuel station management system, ' +
        'across Head Office and Back Office applications.',
      'My day-to-day is C#, .NET and SQL Server: writing stored procedures, building RDLC reports, ' +
        'and debugging issues end to end across code, database and reports.',
      'I also build with ASP.NET Core Web API and Angular, and I am currently learning ' +
        'microservices with Clean Architecture, RabbitMQ and Docker.',
    ],
    education: {
      degree: 'B.Sc. Software Engineering',
      school: 'Applied Science Private University',
      period: '2022 – 2026',
    },
  },

  skillGroups: [
    {
      name: 'Back end',
      skills: [
        { name: 'C#' },
        { name: '.NET' },
        { name: 'ASP.NET Core' },
        { name: 'ASP.NET MVC' },
        { name: 'Web API' },
        { name: 'Entity Framework Core' },
        { name: 'JWT & role-based auth' },
      ],
    },
    {
      name: 'Database & reporting',
      skills: [{ name: 'SQL Server' }, { name: 'Stored procedures' }, { name: 'RDLC reports' }],
    },
    {
      name: 'Front end',
      skills: [{ name: 'Angular' }],
    },
    {
      name: 'Architecture & tools',
      skills: [
        { name: 'Git' },
        { name: 'Azure Repos' },
        { name: 'Clean Architecture', learning: true },
        { name: 'Microservices', learning: true },
        { name: 'RabbitMQ', learning: true },
        { name: 'Docker', learning: true },
      ],
    },
  ],

  experience: [
    {
      role: 'Junior Software Developer',
      company: 'Diyar United Company',
      period: 'Aug 2026 – Present',
      highlights: [
        'Work on an enterprise fuel station management system (Head Office / Back Office).',
        'Write and maintain SQL Server stored procedures and RDLC reports.',
        'Debug issues across application code, database and reports.',
        'Collaborate through Git and Azure Repos.',
      ],
      tech: ['C#', '.NET', 'SQL Server', 'RDLC', 'Azure Repos'],
    },
    {
      role: 'Web Development Intern',
      company: 'Bayanat',
      period: 'Jul 2025 – Sep 2025',
      // TODO(Hamza): add 1–3 short highlights from your CV about this internship.
      highlights: [],
      tech: [],
    },
  ],

  projects: [
    {
      name: 'Hasad',
      subtitle: 'AI-powered crop yield prediction platform',
      description:
        'My graduation project. I led a team of 4 to build a platform that predicts crop yield ' +
        'using a machine learning model.',
      highlights: [
        'Team leader of 4 developers.',
        'ASP.NET Core Web API back end with EF Core and SQL Server.',
        'JWT authentication with role-based authorization.',
        'Angular front end and ML model integration.',
      ],
      tech: ['ASP.NET Core', 'Angular', 'EF Core', 'SQL Server', 'JWT'],
      status: 'completed',
      // TODO(Hamza): add repoUrl / liveUrl if they are public.
    },
    {
      name: 'HR / Employee Management System',
      subtitle: 'Microservices learning project',
      description:
        'A learning project where I am splitting an HR system into microservices, ' +
        'following Clean Architecture.',
      highlights: [
        '.NET services structured with Clean Architecture.',
        'Learning service-to-service messaging with RabbitMQ.',
        'Learning to containerize services with Docker.',
      ],
      tech: ['.NET', 'Clean Architecture', 'RabbitMQ', 'Docker'],
      status: 'in-progress',
    },
  ],

  ai: {
    intro:
      'I can work with agentic AI tools while writing code, debugging and reviewing, ' +
      'to ship better software and keep growing as a software engineer.',
    practices: [
      {
        title: 'Writing code',
        description:
          'I can use AI agents to plan features and build them in small, reviewable steps, ' +
          'and I understand every line before it ships.',
      },
      {
        title: 'Debugging',
        description:
          'I can use agents to trace issues across code, database and logs faster, ' +
          'then confirm the root cause myself.',
      },
      {
        title: 'Reviewing',
        description:
          'I can use AI to review changes for bugs, edge cases and cleaner solutions ' +
          'before they reach the team.',
      },
      {
        title: 'Growing as an engineer',
        description: 'I ask why, not just what, so every task teaches me something new.',
      },
    ],
  },

  contact: {
    heading: 'Let’s talk',
    message:
      'I’m open to .NET developer roles in Amman and across the GCC. ' +
      'The best way to reach me is below.',
    // TODO(Hamza): add your real links, for example:
    // { label: 'Email', value: 'you@example.com', url: 'mailto:you@example.com' },
    // { label: 'LinkedIn', value: 'linkedin.com/in/your-handle', url: 'https://linkedin.com/in/your-handle' },
    // { label: 'GitHub', value: 'github.com/your-handle', url: 'https://github.com/your-handle' },
    links: [],
  },
};
