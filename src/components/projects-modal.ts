import { CLASS_MODAL_BULLET_LIST_SPACED } from '../ui/primitives.ts'
import { renderModalShell } from '../ui/modal-shell.ts'

export function renderProjectsModal(): string {
  return renderModalShell({
    id: 'proj-modal',
    labelledBy: 'proj-modal-title',
    closeDataAttr: 'data-proj-modal-close',
    extraRootClass: 'proj-modal',
    panelClass: 'proj-modal__panel max-h-[85vh] overflow-y-auto max-w-2xl',
    body: `
        <div class="flex items-center gap-3 mb-2">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
            <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          </span>
          <h3 id="proj-modal-title" class="text-title font-display font-semibold text-[var(--text-primary)]"></h3>
        </div>
        <p id="proj-modal-meta" class="mt-2 text-small text-[var(--text-secondary)]"></p>
        <ul id="proj-modal-list" class="${CLASS_MODAL_BULLET_LIST_SPACED}"></ul>
        <div id="proj-modal-links-wrap" class="mt-8 hidden border-t border-[var(--border-subtle)] pt-6">
          <p class="text-mono-label text-[var(--text-tertiary)]">Live URLs</p>
          <ul id="proj-modal-links" class="mt-4 grid gap-3 sm:grid-cols-2" role="list"></ul>
        </div>
        <p id="proj-modal-cta" class="mt-8 hidden">
          <a id="proj-modal-primary" class="btn-primary inline-flex items-center gap-2" href="#" target="_blank" rel="noopener noreferrer"></a>
        </p>
    `,
  })
}
