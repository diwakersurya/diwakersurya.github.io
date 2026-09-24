import github from './github.json';

export const profile = {
  name: 'Diwaker Singh',
  role: 'Staff-2 UI Architect',
  location: 'Bangalore, India',
  email: 'diwaker.surya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dwkr/',
  github: `https://github.com/${github.profile.login}`,
  summary:
    'I design the frontend architecture that product teams build on: design systems, backend-for-frontend layers, build tooling and the drag-and-drop editors people use every day. 13+ years across recruitment automation, AdTech, gaming, IT services and manufacturing.',
};

export type Job = {
  company: string;
  title: string;
  start: string;
  end: string;
  place: string;
  highlights: string[];
  projects: string[];
};

export const work: Job[] = [
  {
    company: 'SenseHQ',
    title: 'Staff-2, UI Architect',
    start: '2021',
    end: 'Now',
    place: 'Bangalore',
    highlights: [
      'Led frontend for Sense IQ, the orchestration UI for AI recruitment agents.',
      'Architected the rebuilt core automation app on React and TypeScript.',
      'Designed Orbit, a Node.js backend-for-frontend that gives the UI one clean contract with many services.',
      'Built J2 Workflow Builder, the drag-and-drop automation engine used across the product.',
      'Moved the codebase from JavaScript to TypeScript and from Webpack to Rspack, cutting build times sharply.',
      'Named Star Engineer of the Year 2024.',
    ],
    projects: ['Sense IQ', 'J2 Workflow Builder', 'Orbit BFF', 'Audience List 2.0'],
  },
  {
    company: 'InMobi',
    title: 'SDE-3',
    start: '2017',
    end: '2021',
    place: 'Bangalore',
    highlights: [
      'Built ireact-components, a design system adopted by several internal product teams.',
      'Shipped React apps over REST and Thrift services unified behind GraphQL.',
      'Delivered RSO Infinity and iDSP, AdTech platforms for campaign analytics and customer data.',
    ],
    projects: ['iReact Design System', 'iDSP', 'RSO Infinity'],
  },
  {
    company: 'Playgames24x7',
    title: 'SDE-2',
    start: '2015',
    end: '2017',
    place: 'Bangalore',
    highlights: [
      'Split the AddCash payments flow into a standalone React app and turned legacy widgets into modular plugins.',
      'Delivered Angular and React admin dashboards, including config management.',
    ],
    projects: ['AddCash', 'Config Dashboard'],
  },
  {
    company: 'BETSOL',
    title: 'Software Engineer',
    start: '2015',
    end: '2015',
    place: 'Bangalore',
    highlights: ['Built an Express.js analytics and reporting portal on top of enterprise backends.'],
    projects: ['Scheduled Reporting'],
  },
  {
    company: 'MothersonSumi Infotech',
    title: 'Software Engineer',
    start: '2012',
    end: '2015',
    place: 'Noida',
    highlights: ['Built .NET production-line tracking apps, with WinForms and Crystal Reports UIs, including JCB Pick2Light.'],
    projects: ['Pick2Light'],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: 'Languages and frameworks', items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Node.js', 'Express'] },
  { group: 'Architecture', items: ['Design systems', 'Backend for frontend', 'GraphQL', 'REST'] },
  { group: 'Build tooling', items: ['Rspack', 'Webpack'] },
  { group: 'Earlier', items: ['.NET', 'WinForms', 'Angular'] },
];

export const recognition = [
  { what: 'Star Engineer of the Year', where: 'SenseHQ', when: '2024' },
  { what: 'University honours and academic scholarships', where: 'Lovely Professional University', when: '2009 to 2011' },
];

export const education = { degree: 'B.Tech, Computer Science', school: 'Lovely Professional University, Punjab', when: '2008 to 2012' };

// Weekend/hobby projects from public GitHub, kept deliberately low-key; professional work is closed-source.
// Copy is hand-written; language and links come from GitHub at build time.
const projectCopy: Record<string, { title: string; blurb: string; detail: string; tags: string[] }> = {
  'magic-move-code': {
    title: 'Magic Move Code',
    blurb: 'A React component that animates one code snippet into another, Keynote style.',
    detail:
      'A weekend experiment. Lines are paired with inline markers and the code re-flows from the old snippet to the new one. Includes a small playground.',
    tags: ['React', 'TypeScript', 'Animation'],
  },
  'agent-taste': {
    title: 'taste-profile',
    blurb: 'A small CLI that keeps one preferences file for my AI coding agents.',
    detail:
      'A personal tool, published on npm. It keeps a markdown file of coding preferences and past decisions that Claude Code, Gemini CLI and Codex can read.',
    tags: ['Node.js', 'CLI', 'AI agents'],
  },
  'mac-dnd-categoriser': {
    title: 'DnD Categoriser',
    blurb: 'A macOS menubar app I made to sort dragged files into folders.',
    detail:
      'Built to try out Swift and on-device Apple Foundation Models. Folders are described in words and files are matched to them while dragging.',
    tags: ['Swift', 'macOS', 'On-device AI'],
  },
  'svelte-accordion': {
    title: 'Svelte Accordion',
    blurb: 'An accordion component, written while learning Svelte.',
    detail: 'A small learning project that a few other Svelte developers picked up and forked.',
    tags: ['Svelte', 'Components'],
  },
  'image-server-canvas': {
    title: 'Greeting Image Server',
    blurb: 'Greeting-card images generated with Canvas on Cloudflare Workers.',
    detail: 'An experiment with Cloudflare Workers: pass a GitHub username and get back a greeting image with the avatar.',
    tags: ['Cloudflare Workers', 'Canvas', 'TypeScript'],
  },
  'auto-login-extension': {
    title: 'Auto Login',
    blurb: 'A Chrome extension that fills logins on my dev and staging sites.',
    detail: 'A small Manifest V3 extension built for my own day-to-day testing.',
    tags: ['Chrome extension', 'MV3'],
  },
  sandbox: {
    title: 'React Sandbox',
    blurb: 'An in-browser playground for trying React ideas.',
    detail: 'An older experiment for editing and previewing React components in the browser.',
    tags: ['React', 'Tooling'],
  },
  'click-to-copy': {
    title: 'click-to-copy',
    blurb: 'A tiny React wrapper that copies a label’s text on click.',
    detail: 'One of my first npm packages.',
    tags: ['React', 'npm'],
  },
  'chrome-gist-extension': {
    title: 'Gist Clipper',
    blurb: 'An early Chrome extension that saves selected text as a GitHub Gist.',
    detail: 'An early side project with a small Express backend.',
    tags: ['Chrome extension', 'Express'],
  },
};

export type Project = (typeof github.repos)[number] & (typeof projectCopy)[string];

export const projects: Project[] = github.repos.map((r) => ({ ...r, ...projectCopy[r.name] }));
