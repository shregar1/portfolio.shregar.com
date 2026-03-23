/** Live digital clock in the site nav (local timezone). */
export function initClock(root: HTMLElement): void {
  const wrap = root.querySelector<HTMLElement>('[data-site-clock]')
  const face = root.querySelector<HTMLElement>('[data-site-clock-face]')
  const dateEl = root.querySelector<HTMLElement>('[data-site-clock-date]')
  if (!wrap || !face) return

  const tick = (): void => {
    const now = new Date()
    const h = String(now.getHours()).padStart(2, '0')
    const m = String(now.getMinutes()).padStart(2, '0')
    const s = String(now.getSeconds()).padStart(2, '0')
    face.textContent = `${h}:${m}:${s}`
    face.setAttribute('datetime', now.toISOString())
    if (dateEl) {
      dateEl.textContent = new Intl.DateTimeFormat(undefined, {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }).format(now)
    }
  }

  tick()
  window.setInterval(tick, 1000)
}
