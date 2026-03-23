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
          class="exp-card surface p-6 pl-7 reveal"
          style="--reveal-delay:${i * 70}ms"
          data-exp-open="${exp.id}"
          data-exp-index="${i}"
        >
          <span class="exp-card__accent exp-card__accent--${exp.accent}" aria-hidden="true"></span>
          <div class="relative z-[1]">
            <h3 class="font-display text-lg font-semibold text-slate-900 dark:text-white">${escapeHtml(exp.company)}</h3>
            <p class="mt-2 text-sm leading-snug text-slate-600 dark:text-slate-400">${escapeHtml(exp.designation)}</p>
            <p class="mt-1.5 text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-500">${escapeHtml(exp.employmentType)}</p>
            <p class="mt-3 text-sm tabular-nums text-cyan-700 dark:text-cyan-400/90">${escapeHtml(exp.period)}</p>
            <p class="mt-3 text-xs text-slate-500">Click for details</p>
          </div>
        </button>
      `,
    )
    .join('')

  return sectionBlock({
    id: 'experience',
    className: SECTION,
    children: `
      ${sectionHeading({ title: 'Work experience' })}
      ${sectionIntro({ text: EXPERIENCE_SECTION_INTRO })}
      <div class="exp-carousel relative mt-8 reveal" ${revealDelayStyle(80)}>
        <div
          class="exp-track exp-track--tri exp-track--center flex gap-4 overflow-x-auto scroll-smooth py-10"
          data-exp-track
          data-exp-carousel
          tabindex="0"
          role="region"
          aria-label="Work experience carousel"
        >
          ${cards}
        </div>
      </div>
    `,
  })
}
