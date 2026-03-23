import { CLASS_MODAL_BULLET_LIST } from '../ui/primitives.ts'
import { renderModalShell } from '../ui/modal-shell.ts'

export function renderExperienceModal(): string {
  return renderModalShell({
    id: 'exp-modal',
    labelledBy: 'exp-modal-title',
    closeDataAttr: 'data-exp-modal-close',
    panelClass: 'max-w-2xl',
    body: `
        <div class="flex items-center gap-3 mb-2">
          <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
            <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          </span>
          <h3 id="exp-modal-title" class="text-title font-display font-semibold text-[var(--text-primary)]"></h3>
        </div>
        <div id="exp-modal-details" class="mt-4 p-4 rounded-xl bg-[var(--bg-tertiary)] border border-[var(--border-subtle)]" aria-label="Role details"></div>
        <p class="text-mono-label text-[var(--text-tertiary)] mt-8 mb-4">Highlights</p>
        <ul id="exp-modal-list" class="${CLASS_MODAL_BULLET_LIST}"></ul>
    `,
  })
}
