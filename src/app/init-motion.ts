export function initMotion(root: HTMLElement): void {
  const nav = root.querySelector<HTMLElement>('[data-site-nav]')
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (nav) {
    const onScroll = (): void => {
      nav.classList.toggle('is-scrolled', window.scrollY > 16)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
  }

  const reveals = root.querySelectorAll<HTMLElement>('.reveal')
  if (reduced) {
    reveals.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const target = entry.target as HTMLElement
        target.classList.add('is-visible')
        io.unobserve(target)
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )

  reveals.forEach((el) => io.observe(el))
}
