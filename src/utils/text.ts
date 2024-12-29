/**
 * Strips HTML tags from a string and returns plain text
 */
export function stripHtml(html: string): string {
  const tmp = document.createElement('div')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
} 