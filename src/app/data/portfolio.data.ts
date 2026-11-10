import { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO: PortfolioData = {
  nav: [
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'CV', target: 'cv' },
    { label: 'AI', target: 'ai' },
    { label: 'Contact', target: 'contact' },
  ],

  headings: {
    about: 'About me',
    skills: 'Skills',
    experience: 'Experience',
    projects: 'Projects',
    education: 'Education & certifications',
    cv: 'Résumé',
    ai: 'How I build with AI',
    contact: 'Contact',
  },

  profile: {
    name: 'Hamza Abuqiyas',
    title: '.NET Developer | C# | ASP.NET Core | SQL Server | Angular',
    tagline:
      'Software Engineering graduate building .NET applications, SQL Server databases and reports, ' +
      'and Angular front ends.',
    location: 'Amman, Jordan',
    availability: 'Open to relocation (GCC)',
    photo: {
      src: 'images/hamza-abuqiyas.jpg',
      alt: 'Portrait of Hamza Abuqiyas',
      width: 600,
      height: 724,
    },
    facts: [
      { name: 'Current role', detail: 'Junior Software Developer, Diyar United Company' },
      { name: 'Location', detail: 'Amman, Jordan' },
      { name: 'Education', detail: 'B.Sc. Software Engineering (2026)' },
      { name: 'Open to', detail: 'Relocation across the GCC' },
    ],
  },

  about: {
    paragraphs: [
      'Software Engineering graduate and Junior Software Developer with hands-on experience in .NET ' +
        'application development, SQL Server, reporting and full-stack web development.',
      'I work with C#, ASP.NET Core, Angular, Entity Framework Core and REST APIs, and I enjoy ' +
        'database development and tracking down application issues end to end.',
      'I am familiar with Agile development, Git and code reviews, and with working inside existing ' +
        'enterprise codebases.',
    ],
    education: {
      degree: 'B.Sc. Software Engineering',
      school: 'Applied Science Private University',
      period: '2022 – 2026',
      coursework: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Systems',
        'Software Engineering Principles',
      ],
    },
    languages: [
      { name: 'Arabic', detail: 'Native' },
      { name: 'English', detail: 'Professional working proficiency' },
    ],
    certifications: [
      { name: 'Full-Stack Coding Foundations', detail: 'Microsoft / Coursera' },
      { name: 'Angular 17 Overview & Basics', detail: 'LearnQuest / Coursera' },
      { name: 'Introduction to HTML, CSS & JavaScript', detail: 'IBM / Coursera' },
    ],
  },

  skillGroups: [
    {
      name: 'Back end',
      skills: [
        { name: 'C#' },
        { name: '.NET' },
        { name: 'ASP.NET Core' },
        { name: 'ASP.NET MVC' },
        { name: 'Entity Framework Core' },
        { name: 'LINQ' },
        { name: 'REST APIs' },
        { name: 'JWT authentication' },
      ],
    },
    {
      name: 'Front end',
      skills: [{ name: 'Angular' }, { name: 'TypeScript' }, { name: 'HTML5' }, { name: 'CSS3' }],
    },
    {
      name: 'Database & reporting',
      skills: [
        { name: 'SQL Server' },
        { name: 'T-SQL' },
        { name: 'Stored procedures' },
        { name: 'Relational database design' },
        { name: 'RDLC / SSRS' },
      ],
    },
    {
      name: 'Tools & practices',
      skills: [
        { name: 'Git' },
        { name: 'Azure Repos' },
        { name: 'Swagger' },
        { name: 'Postman' },
        { name: 'Agile' },
        { name: 'Code review' },
        { name: 'Clean Architecture' },
      ],
    },
    {
      name: 'Programming languages',
      skills: [{ name: 'C#' }, { name: 'Java' }, { name: 'C++' }, { name: 'TypeScript' }],
    },
    {
      name: 'Currently learning',
      skills: [
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
      location: 'Amman, Jordan',
      period: 'Aug 2026 – Present',
      highlights: [
        'Develop and maintain application features using C#, .NET, SQL Server and stored procedures.',
        'Work on enterprise reporting with RDLC reports: parameters, filtering, grouping and ' +
          'database-driven report data.',
        'Investigate and resolve application and reporting issues by tracing data flow between ' +
          'application code, database procedures and report definitions.',
        'Modify and test SQL queries and stored procedures to support business requirements.',
        'Use Git and Azure Repos for source control, branching, commits and code delivery.',
        'Collaborate with the team to understand requirements, troubleshoot issues and implement changes.',
      ],
      tech: ['C#', '.NET', 'SQL Server', 'Stored procedures', 'RDLC', 'Azure Repos'],
    },
    {
      role: 'Web Development Intern',
      company: 'Bayanat',
      location: 'Amman, Jordan',
      period: 'Jul 2025 – Sep 2025',
      highlights: [
        'Supported front-end and back-end development tasks for real-world web application requirements.',
        'Took part in Agile development, code reviews and collaborative implementation of changes.',
      ],
      tech: [],
    },
  ],

  projects: [
    {
      name: 'Hasad',
      subtitle: 'AI-powered crop yield prediction system',
      description:
        'My graduation project. I was team leader of a four-member team building a full-stack ' +
        'platform that predicts crop yield with a machine learning model.',
      highlights: [
        'Developed the web layer with ASP.NET Core, Angular, EF Core and SQL Server.',
        'Built REST APIs for authentication, predictions, user management, administration, ' +
          'reports and data management.',
        'Implemented JWT authentication and role-based authorization.',
        'Integrated the machine learning prediction component with the application and database.',
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
    heading: 'Let’s work together',
    message:
      'I’m open to .NET developer roles in Amman and across the GCC. ' +
      'Email is the best way to reach me.',
    links: [
      { label: 'Email', value: 'hselawe111@gmail.com', url: 'mailto:hselawe111@gmail.com' },
      // TODO(Hamza): add LinkedIn and GitHub, for example:
      // { label: 'LinkedIn', value: 'linkedin.com/in/your-handle', url: 'https://linkedin.com/in/your-handle' },
      // { label: 'GitHub', value: 'github.com/your-handle', url: 'https://github.com/your-handle' },
    ],
    copyLabel: 'Copy email',
    copiedLabel: 'Copied!',
  },

  // To update the CV, replace public/files/Hamza_Abuqiyas_CV.pdf with the new file (same name).
  cv: {
    url: 'files/Hamza_Abuqiyas_CV.pdf',
    fileName: 'Hamza_Abuqiyas_CV.pdf',
    title: 'Hamza Abuqiyas — CV',
    description:
      'A one-page summary of my experience, technical skills, projects, education and certifications.',
    meta: 'PDF · 1 page · 46 KB',
    downloadLabel: 'Download CV',
    viewLabel: 'View in browser',
  },
};
