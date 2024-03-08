import { KoiPhoneme } from './types'
import { applyRuleset, invertRuleset } from './utils/ruleset'

const romanToPhoneticRuleset = {
  ae: KoiPhoneme.e,
  ai: KoiPhoneme.aɪ,
  au: KoiPhoneme.aʊ,
  a: KoiPhoneme.ɑ,
  b: KoiPhoneme.b,
  ch: KoiPhoneme.tʃ,
  c: KoiPhoneme.ç,
  d: KoiPhoneme.d,
  eu: KoiPhoneme.œ,
  e: KoiPhoneme.ɛ,
  f: KoiPhoneme.f,
  g: KoiPhoneme.g,
  h: KoiPhoneme.h,
  ii: KoiPhoneme.ɪ,
  i: KoiPhoneme.i,
  j: KoiPhoneme.ʒ,
  kh: KoiPhoneme.kh,
  k: KoiPhoneme.k,
  l: KoiPhoneme.l,
  m: KoiPhoneme.m,
  n: KoiPhoneme.n,
  oi: KoiPhoneme.ɔi,
  o: KoiPhoneme.o,
  ph: KoiPhoneme.ɸ,
  p: KoiPhoneme.p,
  q: KoiPhoneme.q,
  r: KoiPhoneme.ɾ,
  sh: KoiPhoneme.ʃ,
  s: KoiPhoneme.s,
  th: KoiPhoneme.θ,
  ts: KoiPhoneme.ts,
  t: KoiPhoneme.t,
  u: KoiPhoneme.u,
  vh: KoiPhoneme.β,
  v: KoiPhoneme.v,
  w: KoiPhoneme.ʍ,
  x: KoiPhoneme.x,
  y: KoiPhoneme.ə,
  zh: KoiPhoneme.ʒ,
  z: KoiPhoneme.z,
  "'": KoiPhoneme.ʔ
}

const phoneticToRomanRuleset = invertRuleset(romanToPhoneticRuleset)

/**
 * Translates a string of romanized Tsevhu into the phonetic alphabet.
 * Ignores any non-romanized characters or punctuation.
 * @param text - the romanized Tsevhu text
 * @returns the phonetic alphabet translation
 */
export const romanToPhonetic = (text: string): string => {
  return romanToPhoneticSeparated(text).map(w => w.join('')).join(' ')
}

/**
 * Translates a string of romanized Tsevhu into the phonetic alphabet.
 * Ignores any non-romanized characters or punctuation.
 * Produces a 2D array of phonemes separated by word.
 * @param text - the romanized Tsevhu text
 * @returns the phonetic alphabet translation separated by word
 */
export const romanToPhoneticSeparated = (text: string): KoiPhoneme[][] => {
  const remaining = text.toLowerCase().split(' ')
  const phonetic: KoiPhoneme[][] = remaining.map(word => {
    return applyRuleset(romanToPhoneticRuleset, word) as KoiPhoneme[]
  })

  return phonetic
}

/**
 * Translates a string of phonetic Tsevhu into the romanized alphabet.
 * @param phonetic - the phonetic Tsevhu text
 * @returns the romanized translation
 */
export const phoneticToRoman = (phonetic: string): string => {
  return phoneticToRomanSeparated(phonetic).map(w => w.join('')).join(' ')
}

/**
 * Translates a string of phonetic Tsevhu into the romanized alphabet.
 * Produces a 2D array of text separated by word.
 * @param phonetic - the phonetic Tsevhu text
 * @throws if a phoneme is not found in the Tsevhu language
 * @returns the romanized translation
 */
export const phoneticToRomanSeparated = (phonetic: string): string[][] => {
  const words = phonetic.split(' ')
  const content: string[][] = words.map(word => {
    return applyRuleset(phoneticToRomanRuleset, word)
  })

  return content
}
