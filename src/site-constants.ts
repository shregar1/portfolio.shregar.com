import type { HeroSceneCopy } from './hero-scenes.ts'

export interface SkillGroup {
  label: string
  items: string[]
}

export const email = 'sengarsinghshreyansh@gmail.com'

/**
 * EmailJS configuration
 * Get your credentials from https://dashboard.emailjs.com/
 * - SERVICE_ID: Your EmailJS service ID
 * - TEMPLATE_ID: Your EmailJS template ID
 * - PUBLIC_KEY: Your EmailJS public key
 */
export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY',
} as const
export const phone = '+919264917787'
export const github = 'https://github.com/shregar1'

/** Instagram — @shregarcast */
export const instagram = 'https://www.instagram.com/shregarcast/'
/** WhatsApp chat link (derived from `phone`) */
export const whatsapp = `https://wa.me/${phone.replace(/\D/g, '')}`

/**
 * Tapback Memoji — https://tapback.co/memoji — same seed ⇒ same avatar (no gender API).
 * This seed is chosen for a male-presenting Memoji-style result; change the string if you want a different look.
 */
export const tapbackMemojiSeed = 'male-indian'
export const tapbackMemojiUrl = `https://tapback.co/api/avatar/${encodeURIComponent(tapbackMemojiSeed)}.webp`

export const organizations = [
  'Hyyre',
  'Thomson Reuters',
  'Decentro',
  'IQVIA',
  'Turing',
  'Mercor',
  'micro1',
  'xAI',
  'Meta',
  'Google',
  'NVIDIA',
]

/** Core competencies from resume (Technical Skills + AI-Assisted Tools) */
export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages & frameworks',
    items: ['Rust', 'Python', 'JavaScript', 'Ruby'],
  },
  {
    label: 'Backend frameworks',
    items: ['FastAPI', 'Flask', 'Litestar', 'Axum'],
  },
  {
    label: 'Databases',
    items: [
      'PostgreSQL',
      'MongoDB',
      'ScyllaDB',
      'Elasticsearch',
      'Redis',
      'Pinecone',
      'Faiss',
    ],
  },
  {
    label: 'AI & ML',
    items: [
      'PyTorch',
      'TensorFlow',
      'OpenCV',
      'LangChain',
      'LangGraph',
      'RAG',
      'Generative AI',
    ],
  },
  {
    label: 'Cloud & DevOps',
    items: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'Boto3',
      'CI/CD',
      'AWS CDK',
      'Terraform',
    ],
  },
  {
    label: 'Security & auth',
    items: ['JWT', 'OAuth', 'SAML'],
  },
  {
    label: 'AI-assisted tools',
    items: ['GitHub Copilot', 'Augment Code', 'CursorAI'],
  },
]

export type ProjectCategory = 'domain' | 'frontend' | 'backend' | 'mobile' | 'aiml'

export const PROJECT_CATEGORY_ORDER: ProjectCategory[] = [
  'domain',
  'frontend',
  'backend',
  'mobile',
  'aiml',
]

export const PROJECT_CATEGORY_LABEL: Record<ProjectCategory, string> = {
  domain: 'Domain & live sites',
  frontend: 'Frontend',
  backend: 'Backend',
  mobile: 'Mobile',
  aiml: 'AI & ML',
}

export interface PortfolioProject {
  id: string
  category: ProjectCategory
  title: string
  tagline: string
  meta: string
  highlights: string[]
  /** Optional live URLs (shown in modal) */
  liveLinks?: { href: string; host: string; note: string }[]
  /** Primary external link for card footer CTA */
  primaryUrl?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'proj-hyyre-domain',
    category: 'domain',
    title: 'Hyyre platform',
    tagline: 'Multi-app hiring stack on custom domains',
    meta: 'Co-founder · Netlify · GitHub CI/CD',
    primaryUrl: 'https://hyyre.tech',
    liveLinks: [
      { host: 'hyyre.dev', href: 'https://hyyre.dev', note: 'Developer platform' },
      { host: 'hyyre.tech', href: 'https://hyyre.tech', note: 'Marketing & product' },
      {
        host: 'recruiter.hyyre.tech',
        href: 'https://recruiter.hyyre.tech',
        note: 'Recruiter workspace',
      },
      {
        host: 'candidate.hyyre.tech',
        href: 'https://candidate.hyyre.tech',
        note: 'Candidate experience',
      },
      {
        host: 'company.hyyre.tech',
        href: 'https://company.hyyre.tech',
        note: 'Employer portal',
      },
      {
        host: 'management.hyyre.tech',
        href: 'https://management.hyyre.tech',
        note: 'Internal management',
      },
      { host: 'study.hyyre.tech', href: 'https://study.hyyre.tech', note: 'Learning & study' },
    ],
    highlights: [
      'Co-founded the Hyyre hiring ecosystem: separate Netlify deployments per surface, all wired to GitHub.',
      'hyyre.dev is the developer entrypoint; hyyre.tech carries the product story and growth narrative.',
      'Role-specific apps (recruiter, candidate, company, management, study) share auth and API contracts across repos.',
      'Release flow: PR → preview → production on Netlify with environment-specific configuration.',
    ],
  },
  {
    id: 'proj-kiv',
    category: 'domain',
    title: 'Kiv',
    tagline: 'Product on vexarr.com',
    meta: 'Live deployment',
    primaryUrl: 'https://kiv.vexarr.com',
    liveLinks: [{ host: 'kiv.vexarr.com', href: 'https://kiv.vexarr.com', note: 'Live app' }],
    highlights: [
      'Public app hosted on a custom subdomain with automated deploys from GitHub to Netlify.',
      'Focused iteration on core flows, performance, and error handling for real users.',
      'Structured logging and health checks so deploys are safe to roll forward.',
    ],
  },
  {
    id: 'proj-portfolio-site',
    category: 'domain',
    title: 'Portfolio',
    tagline: 'This site',
    meta: 'portfolio.shregar.com',
    primaryUrl: 'https://portfolio.shregar.com',
    liveLinks: [
      { host: 'portfolio.shregar.com', href: 'https://portfolio.shregar.com', note: 'This portfolio' },
    ],
    highlights: [
      'Vite + TypeScript + Tailwind: fast builds, typed data for experience and projects, accessible modals.',
      'Hero canvas scenes, 3D experience ring, and motion that respects prefers-reduced-motion.',
      'Deployed on Netlify with the same GitHub workflow as the rest of your shipped sites.',
    ],
  },
  {
    id: 'proj-hyyre-fe',
    category: 'frontend',
    title: 'Hyyre product UIs',
    tagline: 'Dashboards & flows',
    meta: 'TypeScript · component-driven',
    highlights: [
      'Built responsive recruiter, candidate, and company experiences with shared layout and design tokens.',
      'Emphasis on loading states, empty states, and optimistic UI where APIs allow.',
      'Accessibility-minded markup and keyboard paths for dense operational workflows.',
      'Integrated charts, tables, and filters without sacrificing mobile usability.',
    ],
  },
  {
    id: 'proj-portfolio-fe',
    category: 'frontend',
    title: 'Portfolio UI',
    tagline: 'Marketing shell & motion',
    meta: 'Tailwind v4 · CSS layers',
    highlights: [
      'Editorial layout: hero, profile summary, skills grid, and project categories with consistent spacing.',
      'JetBrains Mono + restrained color to keep focus on content.',
      'Reveal-on-scroll and interactive surfaces without heavy animation libraries.',
    ],
  },
  {
    id: 'proj-muse',
    category: 'backend',
    title: 'Muse',
    tagline: 'Dating app — discovery, chat, trust & safety',
    meta: 'muse.app · Rust · PostgreSQL · Redis',
    primaryUrl: 'https://muse.app',
    liveLinks: [{ host: 'muse.app', href: 'https://muse.app', note: 'Product' }],
    highlights: [
      'Backend for swipe and match flows with idempotent writes and clear consistency rules for mutual matches.',
      'Real-time messaging with presence, delivery receipts, and rate limits tuned for abuse prevention.',
      'Privacy-first profile and location APIs; sensitive fields encrypted at rest; audit-friendly access logs.',
      'Read-optimized paths for feed and ranking experiments without blocking the core write path.',
    ],
  },
  {
    id: 'proj-kiv-ai',
    category: 'backend',
    title: 'Kiv AI',
    tagline: 'Interview assistant — sessions, transcripts, rubrics',
    meta: 'kiv.ai · Python · FastAPI · async jobs',
    primaryUrl: 'https://kiv.ai',
    liveLinks: [{ host: 'kiv.ai', href: 'https://kiv.ai', note: 'Interview assistant' }],
    highlights: [
      'Session orchestration: timed prompts, structured metadata, and hooks for calendar and ATS integrations.',
      'Pipeline for transcription, chunking, and embedding-backed search across past interviews (tenant-scoped).',
      'LLM-assisted summaries and rubric scoring with guardrails and human review when confidence is low.',
      'Job queues with retries and dead-letter handling; audit trails so hiring teams can trust access boundaries.',
    ],
  },
  {
    id: 'proj-type-ai',
    category: 'backend',
    title: 'Type AI',
    tagline: 'Keyboard app — predictions, sync, personalization',
    meta: 'type.ai · low-latency APIs · Rust',
    primaryUrl: 'https://type.ai',
    liveLinks: [{ host: 'type.ai', href: 'https://type.ai', note: 'Keyboard product' }],
    highlights: [
      'Sub-100ms prediction paths with batched inference, caching, and per-user personalization where opted in.',
      'Secure sync of dictionaries, shortcuts, and layouts across devices with conflict-free merge semantics.',
      'Privacy-by-design telemetry: aggregates and opt-in only; no raw keystroke storage on the server.',
      'Feature flags and staged rollouts for language packs, models, and layout experiments.',
    ],
  },
  {
    id: 'proj-clip-ai',
    category: 'backend',
    title: 'Clip AI',
    tagline: 'AI-integrated automation — workflows & connectors',
    meta: 'clip.ai · Python · workers · webhooks',
    primaryUrl: 'https://clip.ai',
    liveLinks: [{ host: 'clip.ai', href: 'https://clip.ai', note: 'Automation platform' }],
    highlights: [
      'Workflow engine combining triggers, approvals, and LLM steps in one traceable, replayable graph.',
      'Connectors for common SaaS; webhook ingress with signature verification, replay protection, and idempotency keys.',
      'Queue-backed execution with retries, DLQs, and exactly-once side effects where the downstream allows it.',
      'Per-run observability: structured logs, step timings, and alerts so operators can fix failures fast.',
    ],
  },
  {
    id: 'proj-hyyre-be',
    category: 'backend',
    title: 'Hyyre hiring platform',
    tagline: 'Backend APIs & services for the multi-app stack',
    meta: 'Co-founder · Rust · Python · PostgreSQL',
    primaryUrl: 'https://hyyre.tech',
    liveLinks: [
      { host: 'hyyre.dev', href: 'https://hyyre.dev', note: 'Developer platform' },
      { host: 'hyyre.tech', href: 'https://hyyre.tech', note: 'Product & marketing' },
      {
        host: 'recruiter.hyyre.tech',
        href: 'https://recruiter.hyyre.tech',
        note: 'Recruiter app (API consumer)',
      },
    ],
    highlights: [
      'Unified identity, roles, and permissions across recruiter, candidate, company, and management apps.',
      'Job and application lifecycle APIs with versioning, optimistic concurrency, and audit trails.',
      'Event-driven notifications and search/indexing decoupled from request paths for scale and resilience.',
      'Shared patterns: migrations, health checks, and rollback-friendly deploys aligned with Netlify + GitHub CI.',
    ],
  },
  {
    id: 'proj-cupid',
    category: 'backend',
    title: 'Muse.app',
    tagline: 'Dating app API layer',
    meta: 'Rust · Axum · PostgreSQL',
    highlights: [
      'Service architecture in Rust with Axum, SQLx migrations, and PostgreSQL as the source of truth.',
      'Redis-backed caching with LRU semantics for hot reads; Docker Compose for local parity.',
      'JWT/session patterns and clear boundaries between auth, matching, and messaging domains.',
      'Automated tests around critical paths so refactors stay safe.',
    ],
  },
  {
    id: 'proj-hyyre-mobile',
    category: 'mobile',
    title: 'Hyyre mobile web',
    tagline: 'Responsive & PWA-friendly',
    meta: 'Candidates on the go',
    highlights: [
      'Candidate and study flows optimized for small viewports: touch targets, offline-tolerant forms.',
      'Shared API client with desktop; adaptive navigation patterns instead of separate native apps.',
      'Performance budgets for first paint on 4G; image and route-level lazy loading where applicable.',
      'Installable PWA hooks where product requirements allowed—without sacrificing web shareability.',
    ],
  },
  {
    id: 'proj-reflect',
    category: 'aiml',
    title: 'Reflect',
    tagline: 'RAG chatbot',
    meta: 'LangChain · vector DBs',
    highlights: [
      'Multi-model routing across GPT-4 class, Gemini, and LLaMA 3.1 with a unified tool interface.',
      'Retrieval-augmented responses with embeddings stored in a vector database and evaluated for relevance.',
      'Prompt and memory policies tuned to reduce hallucinations on domain-specific corpora.',
      'Observable pipeline: trace retrieval, model calls, and failures for debugging.',
    ],
  },
  {
    id: 'proj-monocular',
    category: 'aiml',
    title: 'Monocular depth',
    tagline: 'Depth from single RGB',
    meta: 'PyTorch · FCN',
    highlights: [
      'Fully convolutional architecture producing dense depth maps aligned to input resolution.',
      'Trained and validated on standard benchmarks with attention to edge and scale ambiguity.',
      'Experiment tracking and reproducible configs for ablations.',
      'Export path for inference in Python services or batch jobs.',
    ],
  },
  {
    id: 'proj-warp',
    category: 'aiml',
    title: 'Warp Drive',
    tagline: 'Driving scene segmentation',
    meta: 'FCN · visualization',
    highlights: [
      'Semantic segmentation of road scenes from RGB video for visualization and downstream analytics.',
      'High-resolution masks suitable for overlay on original frames.',
      'Data augmentation and class balancing for robustness across lighting conditions.',
      'Modular post-processing for contour smoothing and temporal consistency experiments.',
    ],
  },
]

export type ExpAccent =
  | 'cyan'
  | 'violet'
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'sky'
  | 'fuchsia'
  | 'lime'
  | 'orange'

export interface Experience {
  id: string
  company: string
  designation: string
  /** Full-time permanent vs contract / freelance */
  employmentType: string
  location: string
  period: string
  accent: ExpAccent
  /** Website copy — paraphrased from your background, not a verbatim resume */
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    id: 'tr',
    company: 'Thomson Reuters',
    designation: 'Senior AI Engineer / Senior Software Engineer',
    employmentType: 'Full-time permanent',
    location: 'Bengaluru, India',
    period: 'Mar 2025 — Present',
    accent: 'cyan',
    highlights: [
      'Own features on a Python tax and accounting platform focused on correctness, compliance, and safe financial computation.',
      'Integrated Azure AD with SAML SSO for enterprise customers and smoother onboarding.',
      'Shipped multi-step agentic workflows with LangChain, LangGraph, and modern LLMs.',
      'Ran microservices on AWS with CDK (Python), ECR/ECS, and solid CI/CD practices.',
    ],
  },
  {
    id: 'decentro',
    company: 'Decentro',
    designation: 'Senior Software Engineer',
    employmentType: 'Full-time permanent',
    location: 'Bengaluru, India',
    period: 'Oct 2022 — Feb 2025',
    accent: 'violet',
    highlights: [
      'Built high-throughput banking APIs with FastAPI and JWT-backed security.',
      'Practiced TDD to keep defects down and changes safe to ship.',
      'Delivered CV microservices for OCR, ID checks, and face matching to automate verification.',
      'Automated AWS work with Boto3 (S3, EC2, IAM) and deployed services via CDK, ECR, and ECS.',
    ],
  },
  {
    id: 'iqvia',
    company: 'IQVIA',
    designation: 'AI Engineer',
    employmentType: 'Full-time permanent',
    location: 'Gurugram, India',
    period: 'Jul 2020 — Sep 2022',
    accent: 'emerald',
    highlights: [
      'Productionized ML models with Python and FastAPI for faster, repeatable releases.',
      'Developed XGBoost risk models for clinical use cases with clear evaluation.',
      'Provisioned cloud infrastructure with Terraform for repeatable environments.',
      'Used TDD to keep training and serving code maintainable.',
    ],
  },
  {
    id: 'turing',
    company: 'Turing',
    designation: 'Software Engineer',
    employmentType: 'Freelance / contractor',
    location: 'Remote',
    period: 'Apr 2023 — Jan 2024',
    accent: 'amber',
    highlights: [
      'Built backend services and REST APIs for client products with weekly milestones and CI-backed releases.',
      'Partnered with distributed squads across time zones; async standups, thorough code review, and clear handoffs.',
      'Hardened services with structured logging, retries, and health checks to cut production noise.',
      'Documented runbooks and onboarding notes so new contributors could ship within their first sprint.',
    ],
  },
  {
    id: 'mercor',
    company: 'Mercor',
    designation: 'Engineer',
    employmentType: 'Freelance / contractor',
    location: 'Remote',
    period: 'Feb 2024 — Nov 2024',
    accent: 'rose',
    highlights: [
      'Shipped product features with partner teams—tight scope, fast iteration, and measurable acceptance criteria.',
      'Owned small vertical slices end to end: API changes, data contracts, and lightweight UI when needed.',
      'Balanced speed with maintainability: refactors where they reduced incident risk, not churn for its own sake.',
      'Communicated trade-offs in writing so stakeholders could decide with full context.',
    ],
  },
  {
    id: 'micro1',
    company: 'micro1',
    designation: 'Software Engineer',
    employmentType: 'Freelance / contractor',
    location: 'Remote',
    period: 'Jan 2024 — Mar 2025',
    accent: 'sky',
    highlights: [
      'Part-time / contract delivery alongside other roles—high ownership in short cycles.',
      'Implemented features in Python and TypeScript stacks with tests around critical paths.',
      'Collaborated through written specs and Loom-style updates to keep async teams aligned.',
      'Reduced flaky builds and slow suites so merges stayed predictable under load.',
    ],
  },
  {
    id: 'xai',
    company: 'xAI',
    designation: 'Engineering contributor',
    employmentType: 'Freelance / contractor',
    location: 'Remote',
    period: 'Jun 2025 — Present',
    accent: 'fuchsia',
    highlights: [
      'Contributor on inference- and training-adjacent tooling with strict code quality and performance budgets.',
      'Profiling and micro-benchmarks to catch regressions before they hit shared environments.',
      'Collaborated with researchers and infra on interfaces that stay stable as models evolve.',
      'Documentation-first changes so on-call and new hires can reason about behavior quickly.',
    ],
  },
  {
    id: 'meta',
    company: 'Meta',
    designation: 'Software Engineer',
    employmentType: 'Freelance / contractor',
    location: 'Remote',
    period: 'Jun 2022 — Mar 2023',
    accent: 'lime',
    highlights: [
      'Contract / vendor engineering on internal tooling used by product and infra teams.',
      'Improved reliability of batch jobs and dashboards: alerts tuned to real incidents, not noise.',
      'Worked with PMs and designers in structured sprints; strong emphasis on test coverage for hot paths.',
      'Participated in design reviews with a bias toward simple, operable architectures.',
    ],
  },
  {
    id: 'google',
    company: 'Google',
    designation: 'Software Engineer',
    employmentType: 'Freelance / contractor',
    location: 'Remote',
    period: 'Sep 2024 — Feb 2025',
    accent: 'orange',
    highlights: [
      'Short-term engagement on services where SLOs and error budgets drove prioritization.',
      'Added observability (metrics, traces) to make latency and dependency issues obvious in dashboards.',
      'Refactored hot paths for clarity—fewer branches, clearer failure modes, safer rollouts.',
      'Left behind runbooks and postmortem templates the team could reuse after handoff.',
    ],
  },
  {
    id: 'nvidia',
    company: 'NVIDIA',
    designation: 'Engineering contributor',
    employmentType: 'Freelance / contractor',
    location: 'Remote',
    period: 'Mar 2025 — Present',
    accent: 'emerald',
    highlights: [
      'Contributor on GPU-adjacent workflows: profiling, batch sizing, and memory-aware pipelines.',
      'Worked with specialists to translate model constraints into stable, reproducible jobs.',
      'Focused on numerical stability checks and sanity tests before large training or eval runs.',
      'Shared benchmarks and notes so others could reproduce results across driver and CUDA revisions.',
    ],
  },
]

/** Single profile paragraph for the summary section */
export const profileSummaryParagraph =
  'I am a senior AI engineer and co-founder of Hyyre. My work spans the whole hiring stack—product, hyyre.dev, and shipping from GitHub to Netlify on a cadence I run myself. Over five years I have built with Rust and Python in demanding settings: Thomson Reuters for large, compliance-heavy software, Decentro for banking APIs under load, and today’s stack of LangChain, LangGraph, and agents where we care about outcomes, not slide decks. I take machine learning from experiments through FastAPI and production, lean on modern AI coding tools for speed, and still treat tests, review, and judgment as non-negotiable.'

/** Hero scene tabs — excerpts shown in hero; captions unused by UI (kept for typing) */
export const heroSceneCopy: HeroSceneCopy[] = [
  {
    label: 'Systems & scale',
    caption: 'Hyyre, Rust, Python, production systems.',
    excerpt:
      'Rust, Python, ML—systems built to stay correct when traffic and auditors show up.',
  },
  {
    label: 'Platforms & reliability',
    caption: 'Regulated platforms and banking-scale APIs.',
    excerpt:
      'Regulated stacks to bare-metal throughput—trust, latency, and architecture that hold.',
  },
  {
    label: 'AI & intelligence',
    caption: 'LLM and ML in production.',
    excerpt:
      'Agents, RAG, frontier models—shipped, measured, improved. No toy demos.',
  },
]

/** Work experience section intro (under the heading). */
export const EXPERIENCE_SECTION_INTRO =
  'Swipe or scroll — about three roles on screen; the center card is in focus. Click for details.'

/** Projects section intro paragraph. */
export const PROJECTS_SECTION_INTRO =
  'Grouped by domain & stack — domain & live sites first, then frontend, backend, mobile, and AI/ML. Click a card for the full write-up and links.'

/** Contact section intro. */
export const GET_IN_TOUCH_INTRO =
  'For roles, collaborations, or a quick hello — email is best; I usually reply within a couple of days.'

/** Left column body in the contact card. */
export const CONTACT_EMAIL_PROMPT =
  'Send a note with your context and what you’re looking for — I’ll get back to you.'

/** Education line (profile card). */
export const EDUCATION_LINE =
  'B.Tech. in Computer Science Engineering, JSS Academy of Technical Education, Noida · Jul 2021'

/** Visible hero / nav copy (single source for template). */
export const siteDisplay = {
  name: 'Shreyansh',
  navBrand: 'Shreyansh',
  memojiAlt: 'Shreyansh — male Memoji-style portrait',
  heroRoleLine: 'Senior AI Engineer · Bengaluru',
  heroCoFounder: 'Co-founder, Hyyre',
  heroStackLine: 'Rust, Python, ML, production systems',
  hyyreDevHref: 'https://hyyre.dev',
  hyyreDevLabel: 'hyyre.dev',
  hyyreDevCaption: 'developer platform for the Hyyre stack',
  /** Formatted for hero line (tel links use `phone` without spaces). */
  phoneDisplay: '+91 9264917787',
  roleChips: ['Co-founder', 'AI & ML', 'Backend', 'Frontend'],
} as const

export type SiteDisplay = typeof siteDisplay
