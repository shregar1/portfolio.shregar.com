import { ICON_CHEVRON_UP } from '../icons.ts'

export function renderScrollTopButton(): string {
  return `
    <button
      type="button"
      class="scroll-top-btn"
      data-scroll-top
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      ${ICON_CHEVRON_UP}
    </button>`
}
