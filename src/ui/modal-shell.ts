import { escapeHtml } from '../utils/html.ts'

type ModalShellOpts = {
  id: string
  labelledBy: string
  /** e.g. `data-exp-modal-close` — attribute presence only */
  closeDataAttr: string
  extraRootClass?: string
  panelClass: string
  body: string
}

/**
 * Shared dialog chrome: backdrop, panel, close control.
 * Close handlers bind via `[closeDataAttr]` in document (see init code).
 */
export function renderModalShell(o: ModalShellOpts): string {
  const close = o.closeDataAttr
  const rootCls = ['exp-modal', o.extraRootClass].filter(Boolean).join(' ')
  return `
    <div id="${escapeHtml(o.id)}" class="${rootCls}" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="${escapeHtml(o.labelledBy)}">
      <div class="exp-modal__backdrop" ${close} tabindex="-1"></div>
      <div class="exp-modal__panel surface ${o.panelClass}" role="document">
        <button type="button" class="exp-modal__close" ${close} aria-label="Close dialog">×</button>
        ${o.body}
      </div>
    </div>
  `
}
