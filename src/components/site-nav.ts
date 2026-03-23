import type { SiteDisplay } from '../site-constants.ts'
import { ICON_THEME_MOON, ICON_THEME_SUN } from '../icons.ts'
import { escapeHtml } from '../utils/html.ts'

export function renderSiteNav(siteDisplay: SiteDisplay): string {
  return `
    <nav data-site-nav class="site-nav w-full">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-8">
      <a href="#about" class="font-display text-lg font-bold tracking-tight text-slate-900 dark:text-white">${escapeHtml(siteDisplay.navBrand)}</a>
      <div class="order-3 flex w-full flex-wrap gap-x-5 gap-y-1 text-xs sm:order-none sm:w-auto sm:gap-6 sm:text-sm">
        <a href="#about" class="nav-link">Profile</a>
        <a href="#experience" class="nav-link">Experience</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link">Contact</a>
      </div>
      <div class="flex items-center gap-3 sm:gap-4">
        <div
          class="site-clock"
          data-site-clock
          role="timer"
          aria-label="Local time"
          title="Your local time"
        >
          <time class="site-clock__face" data-site-clock-face datetime="">
            --:--:--
          </time>
          <span class="site-clock__date" data-site-clock-date></span>
        </div>
        <button
          type="button"
          class="theme-toggle"
          data-theme-toggle
          aria-label="Switch color theme"
        >
          ${ICON_THEME_SUN}
          ${ICON_THEME_MOON}
        </button>
        <a
          href="#contact"
          class="btn-ghost rounded-2xl px-4 py-2 text-sm"
        >Get in touch</a>
      </div>
      </div>
    </nav>`
}
