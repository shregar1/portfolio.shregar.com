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
        <div class="skill-group space-y-4">
          <h3 class="text-sm font-medium text-slate-600 dark:text-slate-500">${escapeHtml(g.label)}</h3>
          <div class="flex flex-wrap gap-2.5">${pills(g.items, 'pill')}</div>
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
      ${sectionHeading({ title: 'Core competencies' })}
      ${surfaceInteractive({
        className: 'mt-8 grid gap-8 p-6 md:grid-cols-2 md:p-8',
        revealDelayMs: 60,
        children: skillBlocks(),
      })}
    `,
  })
}
