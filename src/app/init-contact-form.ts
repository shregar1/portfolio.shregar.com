import emailjs from '@emailjs/browser'
import { emailjsConfig } from '../site-constants.ts'

export function initContactForm(root: HTMLElement): void {
  const form = root.querySelector<HTMLFormElement>('#contact-form')
  const submitBtn = root.querySelector<HTMLButtonElement>('#contact-form-submit')
  const statusEl = root.querySelector<HTMLElement>('#contact-form-status')

  if (!form || !submitBtn || !statusEl) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const originalBtnText = submitBtn.textContent || 'Send message'
    
    // Disable button and show loading state
    submitBtn.disabled = true
    submitBtn.textContent = 'Sending...'
    statusEl.textContent = ''
    statusEl.className = ''

    try {
      await emailjs.sendForm(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        form,
        emailjsConfig.publicKey
      )

      // Success state
      statusEl.textContent = 'Message sent successfully! I\'ll get back to you soon.'
      statusEl.className = 'text-sm text-green-600 dark:text-green-400 mt-3'
      form.reset()
    } catch (error) {
      // Error state
      statusEl.textContent = 'Failed to send message. Please try again or email me directly.'
      statusEl.className = 'text-sm text-red-600 dark:text-red-400 mt-3'
      console.error('EmailJS error:', error)
    } finally {
      // Reset button
      submitBtn.disabled = false
      submitBtn.textContent = originalBtnText
    }
  })
}
