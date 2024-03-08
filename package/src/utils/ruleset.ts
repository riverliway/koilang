
interface Ruleset {
  [key: string]: string
}

/**
 * Applies a ruleset mapping to a string of text.
 * The ruleset should be an object where the keys are the strings to replace and the values are the replacements.
 * The ruleset is applied in order, so if a key is a prefix of another key, it should come after the longer key.
 * @param ruleset - the ruleset to apply
 * @param text - the text to apply the ruleset to
 * @returns the text with the ruleset applied
 */
export const applyRuleset = (ruleset: Ruleset, text: string): string[] => {
  let remaining = text
  const processed = []
  while (remaining.length > 0) {
    let found = false
    for (const rule in ruleset) {
      if (remaining.startsWith(rule)) {
        processed.push(ruleset[rule])
        remaining = remaining.slice(rule.length)
        found = true
        break
      }
    }
    if (!found) {
      processed.push(remaining[0])
      remaining = remaining.slice(1)
    }
  }

  return processed
}

/**
 * Inverts a ruleset mapping.
 * @param ruleset - the ruleset to invert
 * @returns the inverted ruleset
 */
export const invertRuleset = (ruleset: Ruleset): Ruleset => {
  const keys = Object.keys(ruleset)
  return Object.values(ruleset)
    .sort((a, b) => b.length - a.length)
    .reduce((acc: Ruleset, value) => {
      acc[value] = keys.find(key => ruleset[key] === value) as string
      return acc
    }, {})  
}
