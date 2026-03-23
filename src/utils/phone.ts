/** `tel:` href with spaces stripped from display numbers */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`
}
