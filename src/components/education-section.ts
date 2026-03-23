import { EDUCATION_LINE } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import { SECTION, sectionBlock, surfaceInteractive } from '../ui/primitives.ts'

export function renderEducationSection(): string {
  return sectionBlock({
    className: SECTION,
    children: surfaceInteractive({
      className: 'p-6 md:p-8',
      children: `
          <h2 class="section-label">Education</h2>
          <p class="mt-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
            ${escapeHtml(EDUCATION_LINE)}
          </p>`,
    }),
  })
}
