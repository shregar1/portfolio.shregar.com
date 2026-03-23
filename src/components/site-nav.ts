import type { SiteDisplay } from '../site-constants.ts'
import { ICON_THEME_MOON, ICON_THEME_SUN } from '../icons.ts'
import { escapeHtml } from '../utils/html.ts'

export function renderSiteNav(siteDisplay: SiteDisplay): string {
  return `
    <nav data-site-nav class="site-nav w-full">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-8">
        <a href="#about" class="flex items-center gap-3 group">
          <div class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/25 transition-transform duration-200 group-hover:scale-105">
            S
          </div>
          <span class="font-display text-lg font-bold tracking-tight text-[var(--text-primary)]">${escapeHtml(siteDisplay.navBrand)}</span>
        </a>
        
        <div class="order-3 flex w-full flex-wrap gap-x-6 gap-y-2 text-sm sm:order-none sm:w-auto sm:gap-8">
          <a href="#about" class="nav-link">Profile</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#skills" class="nav-link">Skills</a>
          <a href="#projects" class="nav-link">Projects</a>
          <a href="#contact" class="nav-link">Contact</a>
        </div>
        
        <div class="flex items-center gap-3 sm:gap-4">
          <div
            class="site-clock hidden sm:flex"
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
            class="btn-primary text-sm px-4 py-2 hidden sm:inline-flex"
          >
            <svg class="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
            Get in touch
          </a>
        </div>
      </div>
    </nav>`
}
