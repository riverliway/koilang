import { InkbrushParams, generateInkbrush, vector } from 'inkbrush'
import { KoiPhoneme, PrimaryWrittenGroup, writtenGrouping } from '../types'
import { Coord } from 'inkbrush/lib/vector'
import { shorthandStandard } from './standard/shorthandFontStandard'
import { find2D } from '../utils/find2D'
import { rotate } from '../utils/radians'
import { cummap } from '../utils/cummap'

export enum ShorthandFontType {
  Standard = 'standard'
}

export interface Curve {
  curve: InkbrushParams['points']
  strokeWidths: InkbrushParams['strokeWidths']
  bend: InkbrushParams['bend']
}

export interface PrimaryShorthandFont {
  /**
   * The curves making up the base form of the phoneme
   */
  baseCurves: Curve[]
  /**
   * Information exclusive to consonants
   */
  consonant?: {
    /**
     * If the first curve is able to be connected to a previous consonant.
     * Vowels cannot connect to the previous consonant.
     */
    canFirstConnect: boolean
    /**
     * If the last curve is able to be connected to a next consonant.
     * Vowels cannot connect to the next consonant.
     */
    canLastConnect: boolean
    /**
     * The position of the leading vowel on this phoneme
     */
    leadingVowelPosition: Coord
    /**
     * The position of the trailing vowel on this phoneme
     */
    trailingVowelPosition: Coord
  }
  /**
   * Information about form marks placement for this phoneme
   */
  form: {
    /**
     * The beginning of where the form marks should be placed
     */
    begin: Coord
    /**
     * The rotation measured in radians of the form marks
     */
    rotation: number
    /**
     * The size of the form marks.
     * This is a multiplier of the base size of the phoneme.
     * This number should likely be around 0.1 since a value of 1 would make it as large as the phoneme itself.
     */
    size: number
  }
}

export interface ShorthandFont {
  /**
   * All of the information for the primary written groups.
   * Ensure the order is the same as the writtenGrouping 2D array.
   */
  primaries: Record<PrimaryWrittenGroup, PrimaryShorthandFont>
  /**
   * The curves for each form mark to be placed primary written group.
   * These curves should start at (0, 0) with the bounding box of the curves being 1x1.
   * The orientation should be in the positive X direction and will get rotated later.
   */
  formMarks: [Curve[], Curve[], Curve[], Curve[]]
}

/**
 * @param phonemes - The phonemes to generate curves for
 * @param fontType - The font type to use to generate the curves
 * @returns The curves for the phonemes
 */
export const generateCurves = (phonemes: KoiPhoneme[][], fontType?: ShorthandFontType): Curve[] => {
  const font = getFont(fontType)
  const phonemeInformation = phonemes.map(word => word.map(getPhonemeInformation))

  const lengths = cummap(phonemeInformation.map(w => w.length), (val, prevVal: number | undefined) => (prevVal ?? 0) + val)
  const offsets = [0, ...lengths.slice(0, -1)]

  return phonemeInformation.map((word, i) => generateWordCurves(word, font, offsets[i])).flat()
}

/**
 * @param wordInformation - The word information to generate curves for
 * @param font - The font to use to generate the curves
 * @param wordOffset - The offset to place the word at
 * @returns The curves for the word
 */
const generateWordCurves = (wordInformation: PhonemeInformation[], font: ShorthandFont, wordOffset: number): Curve[] => {
  const primaries = Object.values(font.primaries)
  return wordInformation.map((character, index) => {
    const primary = primaries[character.primaryGroup]
    const formMarks = font.formMarks[character.form]

    // Rotate, scale, and translate the form marks to fit the phoneme
    const rotatedFormMarks = formMarks.map(c => ({
      ...c,
      curve: c.curve.map(p => vector.add(rotate(vector.scale(p, primary.form.size), primary.form.rotation), primary.form.begin))
    }))

    return [...primary.baseCurves, ...rotatedFormMarks].map(c => ({
      ...c,
      curve: c.curve.map(p => vector.add(p, { x: index + wordOffset, y: 0 }))
    }))
  }).flat()
}

interface PhonemeInformation { 
  primaryGroup: number
  form: number
  isVowel: boolean
}

/**
 * @param phoneme - The phoneme to get information for
 * @returns The primary group, form, and if the phoneme is a vowel
 */
const getPhonemeInformation = (phoneme: KoiPhoneme): PhonemeInformation => {
  const indexes = find2D(writtenGrouping, phoneme)
  if (!indexes) throw new Error(`Phoneme ${phoneme} not found in writtenGrouping`)

  return {
    primaryGroup: indexes[0],
    form: indexes[1],
    isVowel: indexes[0] >= writtenGrouping.length - 3
  }
}

const getFont = (fontType?: ShorthandFontType): ShorthandFont => {
  switch (fontType) {
    default: return shorthandStandard
  }
}
