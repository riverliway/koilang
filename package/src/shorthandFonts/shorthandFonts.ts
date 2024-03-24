import { InkbrushParams, generateInkbrush, vector } from 'inkbrush'
import { KoiPhoneme, PrimaryWrittenGroup } from '../types'
import { Coord } from 'inkbrush/lib/vector'
import { shorthandStandard } from './standard/shorthandFontStandard'

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
     * A normal vector indicating the orientation of the form marks (relative to begin)
     */
    orientation: Coord
  }
}

export interface ShorthandFont {
  /**
   * All of the information for the primary written groups
   */
  primaries: Record<PrimaryWrittenGroup, PrimaryShorthandFont>
  /**
   * The curves for each form mark to be placed primary written group.
   * These curves should be centered at (0, 0) with the bounding box of the curves being 1x1.
   * The orientation should be in the positive X direction and will get rotated later.
   */
  formMarks: [Curve[], Curve[], Curve[], Curve[]]
}

export const generateCurves = (phonemes: KoiPhoneme[][], fontType?: ShorthandFontType): Curve[] => {
  const font = getFont(fontType)
  return font.primaries.m.baseCurves
}

const getFont = (fontType?: ShorthandFontType): ShorthandFont => {
  switch (fontType) {
    default: return shorthandStandard
  }
}
