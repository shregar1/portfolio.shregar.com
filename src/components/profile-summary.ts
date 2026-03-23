import { profileSummaryParagraph } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import { SECTION, sectionBlock, surfaceInteractive } from '../ui/primitives.ts'

export function renderProfileSummary(): string {
  return sectionBlock({
    className: SECTION,
    children: surfaceInteractive({
      className: 'relative overflow-hidden',
      children: `
        <!-- Decorative gradient accent -->
        <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500"></div>
        
        <div class="relative p-6 md:p-10">
          <div class="flex items-center gap-3 mb-6">
            <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
              <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </span>
            <h2 class="section-label">Profile summary</h2>
          </div>
          
          <p class="reveal text-body text-[var(--text-secondary)] leading-relaxed text-pretty max-w-4xl">
            ${escapeHtml(profileSummaryParagraph)}
          </p>
          
          <!-- Key highlights -->
          <div class="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 reveal">
            <div class="text-center p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
              <p class="text-2xl font-bold text-gradient">5+</p>
              <p class="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mt-1">Years</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
              <p class="text-2xl font-bold text-gradient">10+</p>
              <p class="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mt-1">Companies</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
              <p class="text-2xl font-bold text-gradient">15+</p>
              <p class="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mt-1">Projects</p>
            </div>
            <div class="text-center p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]">
              <p class="text-2xl font-bold text-gradient">∞</p>
              <p class="text-xs text-[var(--text-tertiary)] uppercase tracking-wider mt-1">Impact</p>
            </div>
          </div>
        </div>`,
    }),
  })
}
