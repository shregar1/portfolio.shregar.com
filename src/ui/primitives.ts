import { escapeHtml } from '../utils/html.ts'

/** Main content sections: vertical rhythm + anchor scroll offset */
export const SECTION = 'mt-20 scroll-mt-28'

/** Tighter spacing before org strip */
export const SECTION_ORG = 'mt-12 scroll-mt-28'

export function revealDelayStyle(ms: number): string {
  return `style="--reveal-delay:${ms}ms"`
}

export function sectionBlock(opts: {
  id?: string
  className?: string
  children: string
}): string {
  const idAttr = opts.id ? ` id="${escapeHtml(opts.id)}"` : ''
  const cls = opts.className ?? SECTION
  return `<section${idAttr} class="${cls}">${opts.children}</section>`
}

export function sectionHeading(opts: {
  title: string
  level?: 2 | 3
  revealDelayMs?: number
}): string {
  const level = opts.level ?? 2
  const delay = opts.revealDelayMs ?? 0
  const Tag = level === 3 ? 'h3' : 'h2'
  return `<${Tag} class="section-label reveal" ${revealDelayStyle(delay)}>${escapeHtml(opts.title)}</${Tag}>`
}

/** Intro blurb under a section heading (escaped plain text). */
export function sectionIntro(opts: {
  text: string
  revealDelayMs?: number
  maxWidthClass?: 'max-w-2xl' | 'max-w-xl' | ''
}): string {
  const delay = opts.revealDelayMs ?? 40
  const mw = opts.maxWidthClass ?? ''
  const mwPart = mw ? `${mw} ` : ''
  return `<p class="reveal mt-2 ${mwPart}text-sm text-slate-600 dark:text-slate-500" ${revealDelayStyle(delay)}>${escapeHtml(opts.text)}</p>`
}

export function surfaceInteractive(opts: {
  className: string
  revealDelayMs?: number
  children: string
}): string {
  const delay =
    opts.revealDelayMs !== undefined ? ` ${revealDelayStyle(opts.revealDelayMs)}` : ''
  return `<div class="surface surface-interactive reveal ${opts.className}"${delay}>${opts.children}</div>`
}

/** Inline body link (hero + contact-adjacent copy) */
export const CLASS_TEXT_LINK =
  'text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-cyan-700 dark:text-slate-400 dark:decoration-white/10 dark:hover:text-cyan-300/90'

export function textLink(
  href: string,
  label: string,
  opts?: { external?: boolean },
): string {
  const rel =
    opts?.external === true ? ' target="_blank" rel="noopener noreferrer"' : ''
  return `<a href="${href}" class="${CLASS_TEXT_LINK}"${rel}>${escapeHtml(label)}</a>`
}

export function bulletListItems(items: string[]): string {
  return items.map((h) => `<li>${escapeHtml(h)}</li>`).join('')
}

export const CLASS_MODAL_BULLET_LIST =
  'mt-3 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 marker:text-cyan-600/70 dark:marker:text-cyan-500/60'

export const CLASS_MODAL_BULLET_LIST_SPACED =
  'mt-6 list-disc space-y-3 pl-5 text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 marker:text-cyan-600/70 dark:marker:text-cyan-500/60'

/** Project modal “live URL” row (href/host/note escaped). */
export const CLASS_PROJ_MODAL_LINK =
  'proj-modal-link group block rounded-2xl border border-white/38 bg-white/32 px-3 py-2.5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/6'

export function projectModalLiveLinkRow(opts: { href: string; host: string; note: string }): string {
  return `
        <li>
          <a href="${escapeHtml(opts.href)}" target="_blank" rel="noopener noreferrer" class="${CLASS_PROJ_MODAL_LINK}">
            <span class="font-mono text-[12px] text-cyan-700 dark:text-cyan-300/90">${escapeHtml(opts.host)}</span>
            <span class="mt-1 block text-xs text-slate-600 dark:text-slate-500">${escapeHtml(opts.note)}</span>
          </a>
        </li>`
}

export function pills(items: string[], pillClass: 'pill' | 'role-chip'): string {
  return items.map((i) => `<span class="${pillClass}">${escapeHtml(i)}</span>`).join('')
}
