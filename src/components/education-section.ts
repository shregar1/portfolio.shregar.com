import { EDUCATION_LINE } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import { SECTION, sectionBlock, surfaceInteractive } from '../ui/primitives.ts'

export function renderEducationSection(): string {
  return sectionBlock({
    className: SECTION,
    children: surfaceInteractive({
      className: 'relative overflow-hidden',
      children: `
          <!-- Decorative gradient accent -->
          <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500"></div>
          
          <div class="relative p-6 md:p-8">
            <div class="flex items-center gap-3 mb-4">
              <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
                <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
              </span>
              <h2 class="section-label">Education</h2>
            </div>
            <p class="text-body text-[var(--text-secondary)] leading-relaxed">
              ${escapeHtml(EDUCATION_LINE)}
            </p>
          </div>`,
    }),
  })
}
