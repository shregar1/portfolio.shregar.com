export function initScrollTop(root: HTMLElement): void {
  const btn = root.querySelector<HTMLButtonElement>('[data-scroll-top]')
  if (!btn) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const threshold = 280

  const sync = (): void => {
    btn.classList.toggle('scroll-top-btn--visible', window.scrollY > threshold)
  }

  sync()
  window.addEventListener('scroll', sync, { passive: true })

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
    btn.blur()
  })
}
