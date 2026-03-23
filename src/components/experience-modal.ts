import { CLASS_MODAL_BULLET_LIST } from '../ui/primitives.ts'
import { renderModalShell } from '../ui/modal-shell.ts'

export function renderExperienceModal(): string {
  return renderModalShell({
    id: 'exp-modal',
    labelledBy: 'exp-modal-title',
    closeDataAttr: 'data-exp-modal-close',
    panelClass: '',
    body: `
        <h3 id="exp-modal-title" class="font-display pr-10 text-xl font-semibold text-slate-900 dark:text-white"></h3>
        <div id="exp-modal-details" class="exp-modal__details" aria-label="Role details"></div>
        <p class="exp-modal__section-label mt-8">Highlights</p>
        <ul id="exp-modal-list" class="${CLASS_MODAL_BULLET_LIST}"></ul>
    `,
  })
}
