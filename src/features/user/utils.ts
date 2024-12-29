/**
 * Gets the initials from a name (first letter of first and last name)
 * @example getInitials("John Doe") // "JD"
 * @example getInitials("John") // "J"
 * @example getInitials("John Middle Doe") // "JD"
 */
export function getInitials(name: string): string {
  if (!name) return ''
  
  const names = name.trim().split(' ')
  if (names.length === 1) return names[0].charAt(0).toUpperCase()
  
  const firstInitial = names[0].charAt(0)
  const lastInitial = names[names.length - 1].charAt(0)
  
  return `${firstInitial}${lastInitial}`.toUpperCase()
}

/**
 * Gets a color from a string (useful for avatar backgrounds)
 * @example getColorFromString("John Doe") // "hsl(123, 45%, 67%)"
 */
export function getColorFromString(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
  }
  
  const h = hash % 360
  return `hsl(${h}, 65%, 45%)`
} 