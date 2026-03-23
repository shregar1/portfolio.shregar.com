import { experiences, type Experience } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import { bulletListItems } from '../ui/primitives.ts'

function experienceModalDetailsHtml(exp: Experience): string {
  const rows: [string, string][] = [
    ['Position', exp.designation],
    ['Employment', exp.employmentType],
    ['Location', exp.location],
    ['Tenure', exp.period],
  ]
  const inner = rows
    .map(
      ([dt, dd]) => `
        <div class="exp-modal__detail">
          <dt class="exp-modal__dt">${escapeHtml(dt)}</dt>
          <dd class="exp-modal__dd">${escapeHtml(dd)}</dd>
        </div>`,
    )
    .join('')
  return `<dl class="exp-modal__dl">${inner}</dl>`
}

export function initExperienceUI(root: HTMLElement): void {
  const modal = root.querySelector<HTMLElement>('#exp-modal')
  const modalTitle = root.querySelector<HTMLElement>('#exp-modal-title')
  const modalDetails = root.querySelector<HTMLElement>('#exp-modal-details')
  const modalList = root.querySelector<HTMLElement>('#exp-modal-list')
  const track = root.querySelector<HTMLElement>('[data-exp-carousel]')
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const byId = Object.fromEntries(experiences.map((e) => [e.id, e])) as Record<string, Experience>

  const cards = Array.from(
    root.querySelectorAll<HTMLElement>('[data-exp-open][data-exp-index]'),
  ).sort(
    (a, b) =>
      Number(a.getAttribute('data-exp-index') ?? 0) - Number(b.getAttribute('data-exp-index') ?? 0),
  )

  let scrollRaf = 0

  const closeModal = (): void => {
    if (!modal) return
    modal.classList.remove('is-open')
    modal.setAttribute('aria-hidden', 'true')
    document.body.style.overflow = ''
  }

  const openModal = (id: string): void => {
    const exp = byId[id]
    if (!exp || !modal || !modalTitle || !modalDetails || !modalList) return
    modalTitle.textContent = exp.company
    modalDetails.innerHTML = experienceModalDetailsHtml(exp)
    modalList.innerHTML = bulletListItems(exp.highlights)
    modal.classList.add('is-open')
    modal.setAttribute('aria-hidden', 'false')
    document.body.style.overflow = 'hidden'
    modal.querySelector<HTMLButtonElement>('.exp-modal__close')?.focus()
  }

  root.querySelectorAll<HTMLButtonElement>('[data-exp-open]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-exp-open')
      const idx = Number(btn.getAttribute('data-exp-index') ?? 0)
      centerCardAt(idx)
      if (id) openModal(id)
    })
  })

  root.querySelectorAll<HTMLElement>('[data-exp-modal-close]').forEach((el) => {
    el.addEventListener('click', () => closeModal())
  })

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape' && modal?.classList.contains('is-open')) {
      e.preventDefault()
      closeModal()
    }
  })

  function centerCardAt(index: number): void {
    if (!cards.length) return
    const i = ((index % cards.length) + cards.length) % cards.length
    const el = cards[i]
    if (el) {
      el.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: reducedMotion ? 'auto' : 'smooth',
      })
    }
    cards.forEach((c, j) => {
      c.classList.toggle('exp-card--center', j === i)
    })
  }

  function updateCenterFocus(): void {
    if (!track || cards.length === 0) return
    const tr = track.getBoundingClientRect()
    const mid = tr.left + tr.width / 2
    let best = 0
    let bestD = Infinity
    cards.forEach((c, i) => {
      const r = c.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const d = Math.abs(cx - mid)
      if (d < bestD) {
        bestD = d
        best = i
      }
    })
    cards.forEach((c, i) => {
      c.classList.toggle('exp-card--center', i === best)
    })
  }

  function scheduleFocus(): void {
    if (scrollRaf) cancelAnimationFrame(scrollRaf)
    scrollRaf = requestAnimationFrame(() => {
      scrollRaf = 0
      updateCenterFocus()
    })
  }

  if (track) {
    track.addEventListener('scroll', scheduleFocus, { passive: true })
  }

  window.addEventListener(
    'resize',
    () => {
      scheduleFocus()
    },
    { passive: true },
  )

  requestAnimationFrame(() => {
    if (cards[0]) {
      cards[0].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' })
    }
    updateCenterFocus()
  })
}
