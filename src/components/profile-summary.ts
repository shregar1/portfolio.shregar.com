import { profileSummaryParagraph } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import { SECTION, sectionBlock, surfaceInteractive } from '../ui/primitives.ts'

export function renderProfileSummary(): string {
  return sectionBlock({
    className: SECTION,
    children: surfaceInteractive({
      className: 'w-full p-6 text-center md:p-10',
      children: `
          <h2 class="section-label">Profile summary</h2>
          <p class="reveal mt-8 w-full text-pretty text-balance text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg md:leading-relaxed">
            ${escapeHtml(profileSummaryParagraph)}
          </p>`,
    }),
  })
}
