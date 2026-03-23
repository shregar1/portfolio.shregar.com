import './style.css'
import { bootstrapPortfolio } from './app/bootstrap.ts'
import { renderBackground } from './components/background.ts'
import { renderContactSection } from './components/contact-section.ts'
import { renderEducationSection } from './components/education-section.ts'
import { renderExperienceModal } from './components/experience-modal.ts'
import { renderExperienceSection } from './components/experience-section.ts'
import { renderHero } from './components/hero.ts'
import { renderOrganizationsSection } from './components/organizations.ts'
import { renderProfileSummary } from './components/profile-summary.ts'
import { renderProjectsModal } from './components/projects-modal.ts'
import { renderProjectsSection } from './components/projects-section.ts'
import { renderScrollTopButton } from './components/scroll-top-button.ts'
import { renderSiteFooter } from './components/site-footer.ts'
import { renderSiteNav } from './components/site-nav.ts'
import { renderSkillsSection } from './components/skills-section.ts'
import { siteDisplay } from './site-constants.ts'

const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
<div class="relative min-h-svh overflow-hidden">
  ${renderBackground()}
  <div class="relative z-10">
    ${renderSiteNav(siteDisplay)}
    <main class="mx-auto max-w-6xl px-6 pb-24 pt-2 md:px-8 md:pb-32 md:pt-6">
      ${renderHero()}
      ${renderProfileSummary()}
      ${renderOrganizationsSection()}
      ${renderExperienceSection()}
      ${renderSkillsSection()}
      ${renderProjectsSection()}
      ${renderEducationSection()}
      ${renderContactSection()}
      ${renderSiteFooter()}
    </main>
    ${renderExperienceModal()}
    ${renderProjectsModal()}
    ${renderScrollTopButton()}
  </div>
</div>
`

bootstrapPortfolio(app)
