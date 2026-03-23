import { CLASS_MODAL_BULLET_LIST_SPACED } from '../ui/primitives.ts'
import { renderModalShell } from '../ui/modal-shell.ts'

export function renderProjectsModal(): string {
  return renderModalShell({
    id: 'proj-modal',
    labelledBy: 'proj-modal-title',
    closeDataAttr: 'data-proj-modal-close',
    extraRootClass: 'proj-modal',
    panelClass: 'proj-modal__panel max-h-[85vh] overflow-y-auto',
    body: `
        <h3 id="proj-modal-title" class="font-display pr-10 text-xl font-semibold text-slate-900 dark:text-white"></h3>
        <p id="proj-modal-meta" class="mt-2 text-sm text-slate-600 dark:text-slate-500"></p>
        <ul id="proj-modal-list" class="${CLASS_MODAL_BULLET_LIST_SPACED}"></ul>
        <div id="proj-modal-links-wrap" class="mt-8 hidden border-t border-slate-200 pt-6 dark:border-white/[0.06]">
          <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-600">Live URLs</p>
          <ul id="proj-modal-links" class="mt-4 grid gap-2 sm:grid-cols-2" role="list"></ul>
        </div>
        <p id="proj-modal-cta" class="mt-8 hidden">
          <a id="proj-modal-primary" class="btn-primary inline-flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer"></a>
        </p>
    `,
  })
}
