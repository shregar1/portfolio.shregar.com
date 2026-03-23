import {
  PROJECT_CATEGORY_LABEL,
  PROJECT_CATEGORY_ORDER,
  PROJECTS_SECTION_INTRO,
  portfolioProjects,
} from '../site-constants.ts'
import type { PortfolioProject } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import {
  SECTION,
  sectionBlock,
  sectionHeading,
  sectionIntro,
} from '../ui/primitives.ts'

function projectCardHTML(p: PortfolioProject, revealDelayMs: number): string {
  return `
        <button
          type="button"
          class="project-card surface surface-interactive reveal w-full p-5 text-left md:p-6"
          style="--reveal-delay:${revealDelayMs}ms"
          data-proj-open="${escapeHtml(p.id)}"
        >
          <h3 class="font-display text-lg font-semibold text-slate-900 dark:text-white">${escapeHtml(p.title)}</h3>
          <p class="mt-2 text-sm leading-snug text-slate-600 dark:text-slate-400">${escapeHtml(p.tagline)}</p>
          <p class="mt-3 font-mono text-[11px] text-slate-500 dark:text-slate-600">${escapeHtml(p.meta)}</p>
          <p class="mt-4 text-xs font-medium text-cyan-500/90">View details</p>
        </button>`
}

export function renderProjectsSection(): string {
  let delay = 80
  const blocks = PROJECT_CATEGORY_ORDER.map((cat) => {
    const items = portfolioProjects.filter((p) => p.category === cat)
    if (items.length === 0) return ''
    const label = PROJECT_CATEGORY_LABEL[cat]
    const headingDelay = delay
    delay += 50
    const cards = items
      .map((p) => {
        const d = delay
        delay += 55
        return projectCardHTML(p, d)
      })
      .join('')
    return `
        <div class="project-category scroll-mt-24">
          ${sectionHeading({ title: label, level: 3, revealDelayMs: headingDelay })}
          <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">${cards}</div>
        </div>`
  }).join('')

  return sectionBlock({
    id: 'projects',
    className: SECTION,
    children: `
      ${sectionHeading({ title: 'Projects undertaken' })}
      ${sectionIntro({ text: PROJECTS_SECTION_INTRO, maxWidthClass: 'max-w-2xl' })}
      <div class="mt-10 space-y-12">${blocks}</div>
    `,
  })
}
