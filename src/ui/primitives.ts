import { escapeHtml } from '../utils/html.ts'

/** Main content sections: vertical rhythm + anchor scroll offset */
export const SECTION = 'mt-24 scroll-mt-28'

/** Tighter spacing before org strip */
export const SECTION_ORG = 'mt-16 scroll-mt-28'

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
  const sizeClass = level === 3 ? 'text-lg' : 'text-headline'
  return `<${Tag} class="${sizeClass} font-display font-semibold tracking-tight text-[var(--text-primary)] reveal" ${revealDelayStyle(delay)}>${escapeHtml(opts.title)}</${Tag}>`
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
  return `<p class="reveal mt-3 ${mwPart}text-body text-[var(--text-secondary)]" ${revealDelayStyle(delay)}>${escapeHtml(opts.text)}</p>`
}

export function surfaceInteractive(opts: {
  className: string
  revealDelayMs?: number
  children: string
}): string {
  const delay =
    opts.revealDelayMs !== undefined ? ` ${revealDelayStyle(opts.revealDelayMs)}` : ''
  return `<div class="surface surface-interactive ${opts.className}"${delay}>${opts.children}</div>`
}

/** Inline body link (hero + contact-adjacent copy) */
export const CLASS_TEXT_LINK =
  'text-[var(--accent-primary)] underline decoration-[var(--accent-glow)] underline-offset-4 transition-all duration-200 hover:text-[var(--accent-secondary)] hover:decoration-[var(--accent-primary)]'

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
  'mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--text-secondary)] marker:text-[var(--accent-primary)]'

export const CLASS_MODAL_BULLET_LIST_SPACED =
  'mt-6 list-disc space-y-3 pl-5 text-sm text-[var(--text-secondary)] marker:text-[var(--accent-primary)]'

/** Project modal "live URL" row (href/host/note escaped). */
export const CLASS_PROJ_MODAL_LINK =
  'block rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-tertiary)] px-4 py-3 transition-all duration-200 hover:border-[var(--accent-primary)] hover:bg-[var(--accent-glow)]'

export function projectModalLiveLinkRow(opts: { href: string; host: string; note: string }): string {
  return `
        <li>
          <a href="${escapeHtml(opts.href)}" target="_blank" rel="noopener noreferrer" class="${CLASS_PROJ_MODAL_LINK}">
            <span class="font-mono text-xs text-[var(--accent-primary)]">${escapeHtml(opts.host)}</span>
            <span class="mt-1 block text-xs text-[var(--text-tertiary)]">${escapeHtml(opts.note)}</span>
          </a>
        </li>`
}

export function pills(items: string[], pillClass: 'pill' | 'role-chip'): string {
  return items.map((i) => `<span class="${pillClass}">${escapeHtml(i)}</span>`).join('')
}
