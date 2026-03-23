import { EXPERIENCE_SECTION_INTRO, experiences } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import {
  SECTION,
  revealDelayStyle,
  sectionBlock,
  sectionHeading,
  sectionIntro,
} from '../ui/primitives.ts'

export function renderExperienceSection(): string {
  const cards = experiences
    .map(
      (exp, i) => `
        <button
          type="button"
          class="exp-card reveal"
          style="--reveal-delay:${i * 70}ms"
          data-exp-open="${exp.id}"
          data-exp-index="${i}"
        >
          <div class="relative z-[1] flex flex-col h-full">
            <div class="flex items-start justify-between gap-3">
              <h3 class="exp-card__company">${escapeHtml(exp.company)}</h3>
              <span class="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider bg-[var(--bg-tertiary)] text-[var(--text-tertiary)] border border-[var(--border-subtle)]">
                ${escapeHtml(exp.employmentType === 'Full-time permanent' ? 'Full-time' : 'Contract')}
              </span>
            </div>
            <p class="exp-card__role">${escapeHtml(exp.designation)}</p>
            <p class="exp-card__meta">${escapeHtml(exp.location)}</p>
            <div class="mt-auto pt-4 flex items-center justify-between">
              <p class="exp-card__period">${escapeHtml(exp.period)}</p>
              <span class="inline-flex items-center text-xs font-medium text-[var(--accent-primary)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Details
                <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
              </span>
            </div>
          </div>
        </button>
      `,
    )
    .join('')

  return sectionBlock({
    id: 'experience',
    className: SECTION,
    children: `
      <div class="flex items-center gap-3 mb-2">
        <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </span>
        ${sectionHeading({ title: 'Work experience' })}
      </div>
      ${sectionIntro({ text: EXPERIENCE_SECTION_INTRO })}
      <div class="exp-carousel relative mt-8 reveal" ${revealDelayStyle(80)}>
        <div
          class="exp-track exp-track--tri exp-track--center"
          data-exp-track
          data-exp-carousel
          tabindex="0"
          role="region"
          aria-label="Work experience carousel"
        >
          ${cards}
        </div>
        <!-- Scroll hint -->
        <div class="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-1 text-[var(--text-tertiary)] text-xs opacity-60">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path></svg>
          <span class="hidden sm:inline">Scroll to explore</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </div>
      </div>
    `,
  })
}
