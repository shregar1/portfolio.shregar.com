import { organizations } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import {
  SECTION_ORG,
  revealDelayStyle,
  sectionBlock,
  sectionHeading,
} from '../ui/primitives.ts'

export function renderOrganizationsSection(): string {
  const badges = organizations
    .map(
      (o, i) =>
        `<span class="org-badge reveal cursor-default" ${revealDelayStyle(i * 40)}>${escapeHtml(o)}</span>`,
    )
    .join('')

  return sectionBlock({
    className: SECTION_ORG,
    children: `
      <div class="flex items-center gap-3 mb-2">
        <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        </span>
        ${sectionHeading({ title: 'Organizations' })}
      </div>
      <p class="text-body text-[var(--text-secondary)] mt-2 mb-6 reveal">
        Trusted by industry leaders across fintech, AI, and enterprise technology.
      </p>
      <div class="flex flex-wrap gap-3">${badges}</div>
    `,
  })
}
