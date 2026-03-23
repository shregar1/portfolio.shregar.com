import {
  CONTACT_EMAIL_PROMPT,
  GET_IN_TOUCH_INTRO,
  email,
  github,
  phone,
} from '../site-constants.ts'
import { ICON_EMAIL, ICON_GITHUB_MARK, ICON_PHONE } from '../icons.ts'
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
      ${sectionHeading({ title: 'Get in touch' })}
      ${sectionIntro({ text: GET_IN_TOUCH_INTRO, maxWidthClass: 'max-w-xl' })}
      ${surfaceInteractive({
        className: 'mt-8 overflow-hidden md:grid md:grid-cols-2 md:gap-0',
        revealDelayMs: 60,
        children: `
          <div class="contact-panel border-b border-slate-200 p-6 md:border-b-0 md:border-r md:p-8 dark:border-white/[0.06]">
            <p class="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              ${escapeHtml(CONTACT_EMAIL_PROMPT)}
            </p>
            <a
              href="mailto:${email}"
              class="btn-primary mt-6 inline-flex w-full items-center justify-center gap-2 sm:w-auto"
            >
              ${ICON_EMAIL}
              ${escapeHtml(email)}
            </a>
          </div>
          <div class="contact-panel flex flex-col justify-center gap-1 p-6 md:p-8">
            <p class="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-600">Other ways</p>
            <a
              href="${tel}"
              class="contact-tile group mt-4"
            >
              <span class="contact-tile__icon" aria-hidden="true">
                ${ICON_PHONE}
              </span>
              <span>
                <span class="block text-xs text-slate-500">Phone</span>
                <span class="font-mono text-sm text-slate-800 transition group-hover:text-cyan-700 dark:text-slate-300 dark:group-hover:text-cyan-300/90">${escapeHtml(phone)}</span>
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
              <span>
                <span class="block text-xs text-slate-500">GitHub</span>
                <span class="text-sm text-slate-800 transition group-hover:text-cyan-700 dark:text-slate-300 dark:group-hover:text-cyan-300/90">Profile &amp; repos</span>
              </span>
            </a>
          </div>`,
      })}
    `,
  })
}
