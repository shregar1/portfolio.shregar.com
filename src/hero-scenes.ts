/**
 * Three canvas scenes: network graph, flowing grid, particle field.
 * Respects prefers-reduced-motion.
 */

export interface HeroSceneCopy {
  label: string
  /** Full text (e.g. profile bullet) */
  caption: string
  /** Short line for the hero — avoids a wall of text */
  excerpt: string
}

interface Node2 {
  x: number
  y: number
  vx: number
  vy: number
}

function clamp(n: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, n))
}

export function initHeroScenes(root: HTMLElement, copy: HeroSceneCopy[]): void {
  const wrap = root.querySelector<HTMLElement>('[data-hero-visual]')
  const canvas = root.querySelector<HTMLCanvasElement>('[data-hero-canvas]')
  const dots = root.querySelectorAll<HTMLButtonElement>('[data-hero-scene-dot]')
  const labelEl = root.querySelector<HTMLElement>('[data-hero-scene-label]')
  const captionEl = root.querySelector<HTMLElement>('[data-hero-scene-caption]')

  if (!wrap || !canvas || copy.length < 3) return

  const canvasEl = canvas
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduced) {
    wrap.classList.add('hero-visual--static')
    return
  }

  const ctxMaybe = canvasEl.getContext('2d')
  if (!ctxMaybe) return
  const canvasCtx = ctxMaybe

  let scene = 0
  let t = 0
  let rafId = 0

  const w = () => canvasEl.clientWidth
  const h = () => canvasEl.clientHeight

  let nodes: Node2[] = []
  let particles: { x: number; y: number; vx: number; vy: number; r: number }[] = []

  function initNodes(): void {
    nodes = []
    const cw = w()
    const ch = h()
    const n = clamp(Math.floor((cw * ch) / 18000), 28, 56)
    for (let i = 0; i < n; i++) {
      nodes.push({
        x: Math.random() * cw,
        y: Math.random() * ch,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      })
    }
  }

  function initParticles(): void {
    particles = []
    const cw = w()
    const ch = h()
    const n = clamp(Math.floor((cw * ch) / 12000), 40, 90)
    for (let i = 0; i < n; i++) {
      particles.push({
        x: Math.random() * cw,
        y: Math.random() * ch,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        r: Math.random() * 1.8 + 0.4,
      })
    }
  }

  function resize(): void {
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const cw = w()
    const ch = h()
    if (cw < 2 || ch < 2) return
    canvasEl.width = Math.floor(cw * dpr)
    canvasEl.height = Math.floor(ch * dpr)
    canvasEl.style.width = `${cw}px`
    canvasEl.style.height = `${ch}px`
    canvasCtx.setTransform(dpr, 0, 0, dpr, 0, 0)
    initNodes()
    initParticles()
  }

  function drawBackdrop(cw: number, ch: number): void {
    const g = canvasCtx.createLinearGradient(0, 0, cw, ch)
    g.addColorStop(0, 'rgba(6, 182, 212, 0.08)')
    g.addColorStop(0.45, 'rgba(88, 28, 135, 0.06)')
    g.addColorStop(1, 'rgba(5, 5, 8, 0.95)')
    canvasCtx.fillStyle = g
    canvasCtx.fillRect(0, 0, cw, ch)
  }

  function scene0(cw: number, ch: number): void {
    drawBackdrop(cw, ch)
    const linkDist = Math.min(cw, ch) * 0.12
    for (const n of nodes) {
      n.x += n.vx
      n.y += n.vy
      if (n.x < 0 || n.x > cw) n.vx *= -1
      if (n.y < 0 || n.y > ch) n.vy *= -1
      n.x = clamp(n.x, 0, cw)
      n.y = clamp(n.y, 0, ch)
    }
    canvasCtx.strokeStyle = 'rgba(34, 211, 238, 0.12)'
    canvasCtx.lineWidth = 1
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x
        const dy = nodes[i].y - nodes[j].y
        const d = Math.hypot(dx, dy)
        if (d < linkDist) {
          const a = 1 - d / linkDist
          canvasCtx.globalAlpha = a * 0.45
          canvasCtx.beginPath()
          canvasCtx.moveTo(nodes[i].x, nodes[i].y)
          canvasCtx.lineTo(nodes[j].x, nodes[j].y)
          canvasCtx.stroke()
        }
      }
    }
    canvasCtx.globalAlpha = 1
    for (const n of nodes) {
      canvasCtx.beginPath()
      canvasCtx.arc(n.x, n.y, 2.2, 0, Math.PI * 2)
      canvasCtx.fillStyle = 'rgba(165, 243, 252, 0.55)'
      canvasCtx.fill()
    }
  }

  function scene1(cw: number, ch: number): void {
    drawBackdrop(cw, ch)
    const step = 48
    const phase = t * 0.0009
    canvasCtx.strokeStyle = 'rgba(139, 92, 246, 0.15)'
    canvasCtx.lineWidth = 1
    for (let y = -step; y < ch + step; y += step) {
      canvasCtx.beginPath()
      for (let x = 0; x <= cw; x += 4) {
        const wave = Math.sin(x * 0.015 + phase) * 14 + Math.sin(y * 0.008 + phase * 0.7) * 6
        const yy = y + wave
        if (x === 0) canvasCtx.moveTo(x, yy)
        else canvasCtx.lineTo(x, yy)
      }
      canvasCtx.stroke()
    }
    canvasCtx.strokeStyle = 'rgba(34, 211, 238, 0.1)'
    for (let x = -step; x < cw + step; x += step) {
      canvasCtx.beginPath()
      for (let y = 0; y <= ch; y += 5) {
        const wave = Math.cos(y * 0.012 + phase) * 10
        const xx = x + wave
        if (y === 0) canvasCtx.moveTo(xx, y)
        else canvasCtx.lineTo(xx, y)
      }
      canvasCtx.stroke()
    }
  }

  function scene2(cw: number, ch: number): void {
    drawBackdrop(cw, ch)
    for (const p of particles) {
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > cw) p.vx *= -1
      if (p.y < 0 || p.y > ch) p.vy *= -1
      p.x = clamp(p.x, 0, cw)
      p.y = clamp(p.y, 0, ch)
    }
    canvasCtx.fillStyle = 'rgba(52, 211, 153, 0.04)'
    for (const p of particles) {
      canvasCtx.beginPath()
      canvasCtx.arc(p.x, p.y, p.r * 2.5, 0, Math.PI * 2)
      canvasCtx.fill()
    }
    for (const p of particles) {
      canvasCtx.beginPath()
      canvasCtx.arc(p.x, p.y, p.r * 0.85, 0, Math.PI * 2)
      canvasCtx.fillStyle = 'rgba(167, 243, 208, 0.4)'
      canvasCtx.fill()
    }
  }

  function syncCopy(): void {
    const c = copy[scene]
    if (labelEl) labelEl.textContent = c.label
    if (captionEl) captionEl.textContent = c.excerpt
  }

  function syncDots(): void {
    dots.forEach((dot, i) => {
      const on = i === scene
      dot.classList.toggle('hero-scene-tab--active', on)
      dot.setAttribute('aria-current', on ? 'true' : 'false')
      dot.setAttribute('aria-selected', on ? 'true' : 'false')
    })
  }

  function tick(): void {
    t++
    const cw = w()
    const ch = h()
    canvasCtx.clearRect(0, 0, cw, ch)
    if (scene === 0) scene0(cw, ch)
    else if (scene === 1) scene1(cw, ch)
    else scene2(cw, ch)
    rafId = requestAnimationFrame(tick)
  }

  function goTo(next: number): void {
    scene = ((next % 3) + 3) % 3
    syncDots()
    syncCopy()
  }

  resize()
  syncDots()
  syncCopy()
  tick()

  window.addEventListener('resize', resize, { passive: true })

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const i = Number(dot.getAttribute('data-hero-scene-dot'))
      if (Number.isFinite(i)) {
        goTo(i)
      }
    })
  })

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(rafId)
    } else {
      resize()
      rafId = requestAnimationFrame(tick)
    }
  })
}
