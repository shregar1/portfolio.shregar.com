import { siteDisplay } from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'

export function renderSiteFooter(): string {
  return `
      <footer class="reveal mt-16 border-t border-slate-200 pt-10 text-center text-sm text-slate-500 dark:border-white/[0.06] dark:text-slate-600">
        <p>© ${new Date().getFullYear()} ${escapeHtml(siteDisplay.name)}</p>
      </footer>`
}
