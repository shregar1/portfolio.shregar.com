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
        `<button type="button" role="tab" class="hero-scene-tab ${i === 0 ? 'hero-scene-tab--active' : ''}" data-hero-scene-dot="${i}" aria-label="${escapeHtml(heroSceneCopy[i].label)}" aria-selected="${i === 0 ? 'true' : 'false'}" aria-current="${i === 0 ? 'true' : 'false'}"><span class="hero-scene-tab__idx">${String(i + 1).padStart(2, '0')}</span><span class="hero-scene-tab__label">${escapeHtml(heroSceneCopy[i].label)}</span></button>`,
    )
    .join('')
}

export function renderHero(): string {
  const tel = telHref(phone)
  return `
      <header id="about" class="scroll-mt-28">
        <div class="hero-shell">
          <div class="hero-visual relative overflow-hidden rounded-3xl md:rounded-[2rem]" data-hero-visual>
            <canvas class="absolute inset-0 block h-full w-full" data-hero-canvas aria-hidden="true"></canvas>
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/70 to-slate-50 dark:via-[#050508]/50 dark:to-[#050508]"
              aria-hidden="true"
            ></div>
          </div>

          <div class="hero-content">
            <div class="hero-content__main">
              <p class="section-label hero-in hero-in-1">Profile</p>
              <div class="mt-5 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
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
              <h1 class="font-display hero-in hero-in-2 mt-0 text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 dark:text-white md:text-[3.25rem] md:leading-[1.08]">
                ${escapeHtml(siteDisplay.name)}
              </h1>
              <p class="hero-in hero-in-3 mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 dark:text-slate-400 md:text-base">
                ${escapeHtml(siteDisplay.heroRoleLine)}
                <span class="text-slate-400 dark:text-slate-600"> · </span>
                <span class="text-slate-600 dark:text-slate-500">${escapeHtml(siteDisplay.heroCoFounder)}</span>
                <span class="text-slate-400 dark:text-slate-600"> · </span>
                <span class="text-slate-600 dark:text-slate-500">${escapeHtml(siteDisplay.heroStackLine)}</span>
              </p>
              <p class="hero-in hero-in-3b mt-2 max-w-xl text-sm text-slate-600 dark:text-slate-500">
                ${textLink(siteDisplay.hyyreDevHref, siteDisplay.hyyreDevLabel, { external: true })}
                <span class="text-slate-400 dark:text-slate-600"> — </span>
                ${escapeHtml(siteDisplay.hyyreDevCaption)}
              </p>

              <div class="hero-in hero-in-4 mt-8 flex flex-wrap gap-2">
                ${pills([...siteDisplay.roleChips], 'role-chip')}
              </div>

              <p class="hero-in hero-in-5 mt-6 text-sm text-slate-600 dark:text-slate-500">
                ${escapeHtml(siteDisplay.phoneDisplay)} · ${textLink(`mailto:${email}`, email)}
                · ${textLink(github, 'GitHub', { external: true })}
              </p>
              <div class="hero-in hero-in-6 mt-6 flex flex-wrap gap-3">
                <a href="mailto:${email}" class="btn-primary">Email</a>
                <a href="${tel}" class="btn-ghost rounded-2xl">Phone</a>
                <a href="${github}" target="_blank" rel="noopener noreferrer" class="btn-ghost rounded-2xl">GitHub</a>
              </div>
                </div>
              </div>
            </div>

            <aside class="hero-content__aside">
              <p class="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-600">Focus</p>
              <div class="hero-scene-tabs" role="tablist" aria-label="Hero focus">
                ${heroSceneTabs()}
              </div>
              <div class="hero-quote mt-5">
                <p class="text-[11px] font-medium uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-500/80" data-hero-scene-label>
                  ${escapeHtml(heroSceneCopy[0].label)}
                </p>
                <p class="hero-quote__text mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-[15px]" data-hero-scene-caption>
                  ${escapeHtml(heroSceneCopy[0].excerpt)}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </header>`
}
