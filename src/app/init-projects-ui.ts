import { portfolioProjects, type PortfolioProject } from '../site-constants.ts'
import { bulletListItems, projectModalLiveLinkRow } from '../ui/primitives.ts'

export function initProjectsUI(root: HTMLElement): void {
  const modal = root.querySelector<HTMLElement>('#proj-modal')
  const titleEl = root.querySelector<HTMLElement>('#proj-modal-title')
  const metaEl = root.querySelector<HTMLElement>('#proj-modal-meta')
  const listEl = root.querySelector<HTMLElement>('#proj-modal-list')
  const linksWrap = root.querySelector<HTMLElement>('#proj-modal-links-wrap')
  const linksUl = root.querySelector<HTMLElement>('#proj-modal-links')
  const ctaP = root.querySelector<HTMLElement>('#proj-modal-cta')
  const primaryA = root.querySelector<HTMLAnchorElement>('#proj-modal-primary')
  const expModal = root.querySelector<HTMLElement>('#exp-modal')

  const byId = Object.fromEntries(portfolioProjects.map((p) => [p.id, p])) as Record<string, PortfolioProject>

  const closeProjModal = (): void => {
    if (!modal) return
    modal.classList.remove('is-open')
    modal.setAttribute('aria-hidden', 'true')
    if (!expModal?.classList.contains('is-open')) {
      document.body.style.overflow = ''
    }
  }

  const openProjModal = (id: string): void => {
    const p = byId[id]
    if (!p || !modal || !titleEl || !metaEl || !listEl) return
    titleEl.textContent = p.title
    metaEl.textContent = `${p.tagline} · ${p.meta}`
    listEl.innerHTML = bulletListItems(p.highlights)

    if (p.liveLinks?.length && linksWrap && linksUl) {
      linksWrap.classList.remove('hidden')
      linksUl.innerHTML = p.liveLinks.map((l) => projectModalLiveLinkRow(l)).join('')
    } else if (linksWrap) {
      linksWrap.classList.add('hidden')
      if (linksUl) linksUl.innerHTML = ''
    }

    if (p.primaryUrl && ctaP && primaryA) {
      primaryA.href = p.primaryUrl
      primaryA.textContent = 'Open live site'
      ctaP.classList.remove('hidden')
    } else if (ctaP) {
      ctaP.classList.add('hidden')
    }

    modal.classList.add('is-open')
    modal.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
    modal.querySelector<HTMLButtonElement>('.exp-modal__close')?.focus()
  }

  root.querySelectorAll<HTMLButtonElement>('[data-proj-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-proj-open')
      if (id) openProjModal(id)
    })
  })

  root.querySelectorAll<HTMLElement>('[data-proj-modal-close]').forEach((el) => {
    el.addEventListener('click', () => closeProjModal())
  })

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-open')) {
      e.preventDefault()
      closeProjModal()
    }
  })
}
