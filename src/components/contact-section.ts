import {
  CONTACT_EMAIL_PROMPT,
  GET_IN_TOUCH_INTRO,
  email,
  github,
  instagram,
  phone,
  whatsapp,
} from '../site-constants.ts'
import {
  ICON_EMAIL,
  ICON_GITHUB_MARK,
  ICON_INSTAGRAM,
  ICON_PHONE,
  ICON_WHATSAPP,
} from '../icons.ts'
import {
  SECTION,
  sectionBlock,
  sectionHeading,
  sectionIntro,
  surfaceInteractive,
} from '../ui/primitives.ts'
import { escapeHtml } from '../utils/html.ts'
import { telHref } from '../utils/phone.ts'

export function renderContactSection(): string {
  const tel = telHref(phone)
  return sectionBlock({
    id: 'contact',
    className: SECTION,
    children: `
      <div class="flex items-center gap-3 mb-2">
        <span class="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 flex items-center justify-center">
          <svg class="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </span>
        ${sectionHeading({ title: 'Get in touch' })}
      </div>
      ${sectionIntro({ text: GET_IN_TOUCH_INTRO, maxWidthClass: 'max-w-xl' })}
      ${surfaceInteractive({
        className: 'mt-8 overflow-hidden md:grid md:grid-cols-2 md:gap-0',
        revealDelayMs: 60,
        children: `
          <div class="contact-panel border-b border-[var(--border-subtle)] p-6 md:border-b-0 md:border-r md:p-8">
            <p class="text-body text-[var(--text-secondary)] leading-relaxed mb-6">
              ${escapeHtml(CONTACT_EMAIL_PROMPT)}
            </p>
            <form id="contact-form" class="space-y-4">
              <div>
                <label for="from_name" class="block text-sm font-medium text-[var(--text-secondary)] mb-1">Name</label>
                <input 
                  type="text" 
                  id="from_name" 
                  name="from_name" 
                  required 
                  class="w-full px-4 py-2 rounded-lg bg-[var(--surface-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label for="from_email" class="block text-sm font-medium text-[var(--text-secondary)] mb-1">Email</label>
                <input 
                  type="email" 
                  id="from_email" 
                  name="from_email" 
                  required 
                  class="w-full px-4 py-2 rounded-lg bg-[var(--surface-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-[var(--text-secondary)] mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  class="w-full px-4 py-2 rounded-lg bg-[var(--surface-primary)] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors resize-none"
                  placeholder="Tell me about your project, role, or just say hello..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                id="contact-form-submit"
                class="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                ${ICON_EMAIL}
                Send message
              </button>
              <div id="contact-form-status" role="status" aria-live="polite"></div>
            </form>
            <div class="mt-6 pt-6 border-t border-[var(--border-subtle)]">
              <p class="text-mono-label text-[var(--text-tertiary)] mb-4">Response time</p>
              <div class="flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span class="text-sm text-[var(--text-secondary)]">Usually within 24 hours</span>
              </div>
            </div>
          </div>
          <div class="contact-panel flex flex-col justify-center gap-2 p-6 md:p-8">
            <p class="text-mono-label text-[var(--text-tertiary)]">Other channels</p>
            <a
              href="mailto:${email}"
              class="contact-tile group mt-2"
            >
              <span class="contact-tile__icon" aria-hidden="true">
                ${ICON_EMAIL}
              </span>
              <span class="min-w-0">
                <span class="block text-xs text-[var(--text-tertiary)]">Email</span>
                <span class="font-mono text-sm text-[var(--text-primary)] truncate">${escapeHtml(email)}</span>
              </span>
            </a>
            <a
              href="${tel}"
              class="contact-tile group"
            >
              <span class="contact-tile__icon" aria-hidden="true">
                ${ICON_PHONE}
              </span>
              <span class="min-w-0">
                <span class="block text-xs text-[var(--text-tertiary)]">Phone</span>
                <span class="font-mono text-sm text-[var(--text-primary)]">${escapeHtml(phone)}</span>
              </span>
            </a>
            <a
              href="${whatsapp}"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-tile group"
            >
              <span class="contact-tile__icon" aria-hidden="true">
                ${ICON_WHATSAPP}
              </span>
              <span class="min-w-0">
                <span class="block text-xs text-[var(--text-tertiary)]">WhatsApp</span>
                <span class="text-sm text-[var(--text-primary)]">Quick message</span>
              </span>
            </a>
            <a
              href="${instagram}"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-tile group"
            >
              <span class="contact-tile__icon" aria-hidden="true">
                ${ICON_INSTAGRAM}
              </span>
              <span class="min-w-0">
                <span class="block text-xs text-[var(--text-tertiary)]">Instagram</span>
                <span class="text-sm text-[var(--text-primary)]">@shregarcast</span>
              </span>
            </a>
            <a
              href="${github}"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-tile group"
            >
              <span class="contact-tile__icon" aria-hidden="true">
                ${ICON_GITHUB_MARK}
              </span>
              <span class="min-w-0">
                <span class="block text-xs text-[var(--text-tertiary)]">GitHub</span>
                <span class="text-sm text-[var(--text-primary)]">Profile & repositories</span>
              </span>
            </a>
          </div>`,
      })}
    `,
  })
}
