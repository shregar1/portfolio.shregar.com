import { initHeroScenes } from '../hero-scenes.ts'
import { heroSceneCopy } from '../site-constants.ts'
import { initClock } from './init-clock.ts'
import { initExperienceUI } from './init-experience-ui.ts'
import { initMotion } from './init-motion.ts'
import { initProjectsUI } from './init-projects-ui.ts'
import { initScrollTop } from './init-scroll-top.ts'
import { initTheme } from './init-theme.ts'

export function bootstrapPortfolio(root: HTMLElement): void {
  initTheme(root)
  initClock(root)
  initMotion(root)
  initScrollTop(root)
  initExperienceUI(root)
  initProjectsUI(root)
  initHeroScenes(root, heroSceneCopy)
}
