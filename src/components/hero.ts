import {
  email,
  github,
  heroSceneCopy,
  phone,
  siteDisplay,
  tapbackMemojiUrl,
} from '../site-constants.ts'
import { escapeHtml } from '../utils/html.ts'
import { pills, textLink } from '../ui/primitives.ts'
import { telHref } from '../utils/phone.ts'

function heroSceneTabs(): string {
  return [0, 1, 2]
    .map(
      (i) =>
        `<button type="button" role="tab" class="hero-scene-tab ${i === 0 ? 'hero-scene-tab--active' : ''}" data-hero-scene-dot="${i}" aria-label="${escapeHtml(heroSceneCopy[i].label)}" aria-selected="${i === 0 ? 'true' : 'false'}"><span class="hero-scene-tab__idx">${String(i + 1).padStart(2, '0')}</span><span class="font-medium text-sm ${i === 0 ? 'text-gradient' : ''}">${escapeHtml(heroSceneCopy[i].label)}</span></button>`,
    )
    .join('')
}

export function renderHero(): string {
  const tel = telHref(phone)
  return `
      <header id="about" class="scroll-mt-28">
        <div class="hero-shell">
          <!-- Visual header with gradient -->
          <div class="hero-visual relative overflow-hidden" data-hero-visual>
            <canvas class="absolute inset-0 block h-full w-full" data-hero-canvas aria-hidden="true"></canvas>
            <div
              class="pointer-events-none absolute inset-0"
              style="background: linear-gradient(180deg, transparent 0%, var(--bg-secondary, #fafafa) 100%);"
              aria-hidden="true"
            ></div>
            <!-- Decorative elements -->
            <div class="absolute top-4 right-4 hero-in hero-in-1">
              <span class="hero-status">Available for opportunities</span>
            </div>
          </div>

          <div class="hero-content relative z-10 grid gap-10 px-6 py-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,320px)] md:gap-12 md:px-10 md:py-12 lg:px-14">
            <div class="hero-content__main">
              <p class="section-label hero-in hero-in-1 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></span>
                Profile
              </p>
              <div class="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div class="hero-memoji hero-in hero-in-2 shrink-0">
                  <img
                    src="${tapbackMemojiUrl}"
                    width="128"
                    height="128"
                    alt="${escapeHtml(siteDisplay.memojiAlt)}"
                    class="hero-memoji__img"
                    decoding="async"
                    fetchpriority="high"
                    referrerpolicy="no-referrer"
                    onerror="this.onerror=null;this.src='/memoji-dev.svg'"
                  />
                </div>
                <div class="min-w-0 flex-1">
                  <h1 class="text-display hero-in hero-in-2 text-gradient-animated">
                    ${escapeHtml(siteDisplay.name)}
                  </h1>
                  <p class="hero-in hero-in-3 mt-4 max-w-xl text-body text-[var(--text-secondary)]">
                    <span class="font-medium text-[var(--text-primary)]">${escapeHtml(siteDisplay.heroRoleLine)}</span>
                    <span class="mx-2 text-[var(--text-tertiary)]">·</span>
                    <span>${escapeHtml(siteDisplay.heroCoFounder)}</span>
                    <span class="mx-2 text-[var(--text-tertiary)]">·</span>
                    <span>${escapeHtml(siteDisplay.heroStackLine)}</span>
                  </p>
                  <p class="hero-in hero-in-3b mt-3 max-w-xl text-small text-[var(--text-tertiary)]">
                    ${textLink(siteDisplay.hyyreDevHref, siteDisplay.hyyreDevLabel, { external: true })}
                    <span class="mx-2">—</span>
                    ${escapeHtml(siteDisplay.hyyreDevCaption)}
                  </p>

                  <div class="hero-in hero-in-4 mt-6 flex flex-wrap gap-2">
                    ${pills([...siteDisplay.roleChips], 'role-chip')}
                  </div>

                  <p class="hero-in hero-in-5 mt-6 text-small text-[var(--text-secondary)] font-mono">
                    ${escapeHtml(siteDisplay.phoneDisplay)} · ${textLink(`mailto:${email}`, email)}
                    <span class="mx-2 text-[var(--text-tertiary)]">·</span>
                    ${textLink(github, 'GitHub', { external: true })}
                  </p>
                  <div class="hero-in hero-in-6 mt-6 flex flex-wrap gap-3">
                    <a href="mailto:${email}" class="btn-primary">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                      Email
                    </a>
                    <a href="${tel}" class="btn-ghost">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      Phone
                    </a>
                    <a href="${github}" target="_blank" rel="noopener noreferrer" class="btn-ghost">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <aside class="hero-content__aside">
              <p class="text-mono-label text-[var(--text-tertiary)]">Focus Areas</p>
              <div class="hero-scene-tabs mt-4" role="tablist" aria-label="Hero focus">
                ${heroSceneTabs()}
              </div>
              <div class="hero-quote mt-5">
                <p class="text-mono-label text-[var(--accent-primary)]" data-hero-scene-label>
                  ${escapeHtml(heroSceneCopy[0].label)}
                </p>
                <p class="mt-3 text-body text-[var(--text-secondary)] leading-relaxed" data-hero-scene-caption>
                  ${escapeHtml(heroSceneCopy[0].excerpt)}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>`
}
