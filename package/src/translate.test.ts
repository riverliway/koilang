import { phoneticToRoman, romanToPhonetic, romanToPhoneticSeparated, phoneticToRomanSeparated } from './translate'
import { KoiPhoneme } from './types'

describe('romanToPhonetic', () => {
  test('translates a string of romanized Tsevhu into the phonetic alphabet', () => {
    const text = "Nsitusera hmo, wbev obe ha kiseana khemb'en shoku kes'en aev moni"
    const expected = 'nsitusɛɾɑ hmo, ʍbɛv obɛ hɑ kisɛɑnɑ kʰɛmbʔɛn ʃoku kɛsʔɛn ev moni'
    expect(romanToPhonetic(text)).toBe(expected)
  })

  test('preserves punctuation', () => {
    const text = "Nsitusera hmo, wbev obe. ha & kiseana? khemb'en (shoku) kes'en aev moni!"
    const phonetic = romanToPhonetic(text).split('')
    expect(phonetic.filter(c => c === ',').length).toBe(1)
    expect(phonetic.filter(c => c === '.').length).toBe(1)
    expect(phonetic.filter(c => c === '&').length).toBe(1)
    expect(phonetic.filter(c => c === '?').length).toBe(1)
    expect(phonetic.filter(c => c === '(').length).toBe(1)
    expect(phonetic.filter(c => c === ')').length).toBe(1)
    expect(phonetic.filter(c => c === '!').length).toBe(1)
  })
})

describe('romanToPhoneticSeparated', () => {
  test('translates a string of romanized Tsevhu into the phonetic alphabet', () => {
    const text = "Nsitusera hmo, wbev obe ha kiseana khemb'en shoku kes'en aev moni"
    const expected = [
      ['n', 's', 'i', 't', 'u', 's', 'ɛ', 'ɾ', 'ɑ'],
      ['h', 'm', 'o', ','],
      ['ʍ', 'b', 'ɛ', 'v'],
      ['o', 'b', 'ɛ'],
      ['h', 'ɑ'],
      ['k', 'i', 's', 'ɛ', 'ɑ', 'n', 'ɑ'],
      ['kʰ', 'ɛ', 'm', 'b', 'ʔ', 'ɛ', 'n'],
      ['ʃ', 'o', 'k', 'u'],
      ['k', 'ɛ', 's', 'ʔ', 'ɛ', 'n'],
      ['e', 'v'],
      ['m', 'o', 'n', 'i']
    ]
    expect(romanToPhoneticSeparated(text)).toStrictEqual(expected)
  })
})

describe('phoneticToRoman', () => {
  test('translates a string of phonetic Tsevhu into the romanized alphabet', () => {
    const text = 'nsitusɛɾɑ hmo ʍbɛv obɛ hɑ kisɛɑnɑ kʰɛmbʔɛn ʃoku kɛsʔɛn ev moni'
    const expected = "nsitusera hmo wbev obe ha kiseana khemb'en shoku kes'en aev moni"
    expect(phoneticToRoman(text)).toBe(expected)
  })

  test('preserves punctuation', () => {
    const text = 'nsitusɛɾɑ hmo, ʍbɛv obɛ. hɑ & kisɛɑnɑ? kʰɛmbʔɛn (ʃoku) kɛsʔɛn ev moni!'
    const phonetic = romanToPhonetic(text).split('')
    expect(phonetic.filter(c => c === ',').length).toBe(1)
    expect(phonetic.filter(c => c === '.').length).toBe(1)
    expect(phonetic.filter(c => c === '&').length).toBe(1)
    expect(phonetic.filter(c => c === '?').length).toBe(1)
    expect(phonetic.filter(c => c === '(').length).toBe(1)
    expect(phonetic.filter(c => c === ')').length).toBe(1)
    expect(phonetic.filter(c => c === '!').length).toBe(1)
  })
})

describe('phoneticToRomanSeparated', () => {
  test('translates a string of phonetic Tsevhu into the romanized alphabet', () => {
    const text = 'nsitusɛɾɑ hmo ʍbɛv obɛ hɑ kisɛɑnɑ kʰɛmbʔɛn ʃoku kɛsʔɛn ev moni'
    const expected = [
      ['n', 's', 'i', 't', 'u', 's', 'e', 'r', 'a'],
      ['h', 'm', 'o'],
      ['w', 'b', 'e', 'v'],
      ['o', 'b', 'e'],
      ['h', 'a'],
      ['k', 'i', 's', 'e', 'a', 'n', 'a'],
      ['kh', 'e', 'm', 'b', "'", 'e', 'n'],
      ['sh', 'o', 'k', 'u'],
      ['k', 'e', 's', "'", 'e', 'n'],
      ['ae', 'v'],
      ['m', 'o', 'n', 'i']
    ]
    expect(phoneticToRomanSeparated(text)).toStrictEqual(expected)
  })
})

test('invertability', () => {
  const phonemes = Object.values(KoiPhoneme).join('')
  expect(romanToPhonetic(phoneticToRoman(phonemes))).toBe(phonemes)
})
