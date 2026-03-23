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
        `<span class="org-badge reveal" ${revealDelayStyle(i * 40)}>${escapeHtml(o)}</span>`,
    )
    .join('')

  return sectionBlock({
    className: SECTION_ORG,
    children: `
      ${sectionHeading({ title: 'Organizations' })}
      <div class="mt-6 flex flex-wrap gap-2">${badges}</div>
    `,
  })
}
