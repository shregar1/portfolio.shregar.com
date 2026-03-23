const THEME_STORAGE_KEY = 'portfolio-theme'

function syncThemeToggleLabel(root: HTMLElement): void {
  const btn = root.querySelector<HTMLButtonElement>('[data-theme-toggle]')
  if (!btn) return
  const t = document.documentElement.getAttribute('data-theme')
  btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode')
}

export function initTheme(root: HTMLElement): void {
  const btn = root.querySelector<HTMLButtonElement>('[data-theme-toggle]')
  syncThemeToggleLabel(root)
  btn?.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
    syncThemeToggleLabel(root)
  })
}
