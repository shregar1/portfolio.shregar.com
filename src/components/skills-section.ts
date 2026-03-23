import { skillGroups } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import {
  SECTION,
  sectionBlock,
  sectionHeading,
  surfaceInteractive,
  pills,
} from '../ui/primitives.ts'

function skillBlocks(): string {
  return skillGroups
    .map(
      (g) => `
        <div class="skill-group reveal">
          <div class="flex items-center gap-2 mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
            <h3 class="skill-group__label">${escapeHtml(g.label)}</h3>
          </div>
          <div class="flex flex-wrap gap-2">${pills(g.items, 'pill')}</div>
        </div>
      `,
    )
    .join('')
}

export function renderSkillsSection(): string {
  return sectionBlock({
    id: 'skills',
    className: SECTION,
    children: `
      <div class="flex items-center gap-3 mb-2">
        <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        </span>
        ${sectionHeading({ title: 'Core competencies' })}
      </div>
      <p class="text-body text-[var(--text-secondary)] mt-2 mb-8 max-w-2xl reveal">
        Deep expertise across the modern AI and backend engineering stack. From building LLM-powered agents to high-throughput Rust microservices.
      </p>
      ${surfaceInteractive({
        className: 'grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 lg:p-8',
        revealDelayMs: 60,
        children: skillBlocks(),
      })}
    `,
  })
}
