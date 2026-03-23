import { siteDisplay } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'

export function renderSiteFooter(): string {
  return `
      <footer class="site-footer reveal">
        <div class="flex flex-col items-center gap-4">
          <!-- Logo -->
          <div class="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/20">
            S
          </div>
          
          <!-- Name -->
          <p class="font-display text-lg font-semibold text-[var(--text-primary)]">
            ${escapeHtml(siteDisplay.name)}
          </p>
          
          <!-- Tagline -->
          <p class="text-small text-[var(--text-tertiary)] max-w-md">
            Senior AI Engineer · Building production-grade LLMs and scalable backend systems
          </p>
          
          <!-- Divider -->
          <div class="w-16 h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent my-4"></div>
          
          <!-- Copyright -->
          <p class="text-xs text-[var(--text-tertiary)]">
            © ${new Date().getFullYear()} ${escapeHtml(siteDisplay.name)}. Crafted with precision.
          </p>
        </div>
      </footer>`
}
