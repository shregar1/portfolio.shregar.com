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

const categoryIcons: Record<string, string> = {
  domain: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>',
  frontend: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',
  backend: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path></svg>',
  mobile: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
  aiml: '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>',
}

function projectCardHTML(p: PortfolioProject, revealDelayMs: number): string {
  return `
        <button
          type="button"
          class="project-card surface surface-interactive reveal w-full p-6 text-left"
          style="--reveal-delay:${revealDelayMs}ms"
          data-proj-open="${escapeHtml(p.id)}"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 class="project-card__title">${escapeHtml(p.title)}</h3>
            ${p.primaryUrl ? `
            <a href="${p.primaryUrl}" target="_blank" rel="noopener noreferrer" class="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-glow)] transition-all" onclick="event.stopPropagation();">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
            ` : ''}
          </div>
          <p class="project-card__tagline">${escapeHtml(p.tagline)}</p>
          <p class="project-card__meta">${escapeHtml(p.meta)}</p>
          <div class="mt-4 flex items-center text-xs font-medium text-[var(--accent-primary)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            View details
            <svg class="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
          </div>
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
          <div class="flex items-center gap-2 mb-4">
            <span class="w-6 h-6 rounded-lg bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--accent-primary)]">
              ${categoryIcons[cat]}
            </span>
            ${sectionHeading({ title: label, level: 3, revealDelayMs: headingDelay })}
          </div>
          <div class="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">${cards}</div>
        </div>`
  }).join('')

  return sectionBlock({
    id: 'projects',
    className: SECTION,
    children: `
      <div class="flex items-center gap-3 mb-2">
        <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
        </span>
        ${sectionHeading({ title: 'Projects undertaken' })}
      </div>
      ${sectionIntro({ text: PROJECTS_SECTION_INTRO, maxWidthClass: 'max-w-2xl' })}
      <div class="mt-10 space-y-14">${blocks}</div>
    `,
  })
}
