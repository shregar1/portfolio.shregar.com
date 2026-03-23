/** Fixed premium background layers with mesh gradients and ambient effects */
export function renderBackground(): string {
  return `
  <div class="bg-mesh" aria-hidden="true">
    <!-- Animated mesh gradients -->
    <div class="bg-mesh__gradient"></div>
    
    <!-- Floating orbs -->
    <div class="bg-orb bg-orb--primary"></div>
    <div class="bg-orb bg-orb--secondary"></div>
    <div class="bg-orb bg-orb--tertiary"></div>
    
    <!-- Subtle grid -->
    <div class="bg-grid"></div>
    
    <!-- Vignette overlay -->
    <div class="bg-vignette"></div>
    
    <!-- Noise texture for depth -->
    <div class="bg-noise"></div>
  </div>`
}
