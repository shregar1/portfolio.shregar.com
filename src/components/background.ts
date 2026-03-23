/** Fixed 3D-style background layers behind page content */
export function renderBackground(): string {
  return `
  <div class="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
    <div class="bg-3d">
      <div class="bg-3d__plane bg-3d__plane--deep"></div>
      <div class="bg-3d__plane bg-3d__plane--grid grid-bg grid-animated opacity-[0.14] dark:opacity-[0.28]"></div>
      <div class="bg-3d__plane bg-3d__plane--mesh"></div>
      <div class="bg-3d__plane bg-3d__plane--orbs">
        <div
          class="orb pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[120px] dark:bg-cyan-500/15"
        ></div>
        <div
          class="orb-delayed pointer-events-none absolute -right-20 top-40 h-[420px] w-[420px] rounded-full bg-violet-600/6 blur-[100px] dark:bg-violet-600/10"
        ></div>
        <div
          class="orb-slow pointer-events-none absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-emerald-500/[0.04] blur-[90px] dark:bg-emerald-500/5"
        ></div>
      </div>
      <div class="bg-3d__plane bg-3d__plane--vignette"></div>
    </div>
  </div>`
}
