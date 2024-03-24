import { vector, generateInkbrush } from 'inkbrush'
import { KoiPhoneme } from './types'
import { Curve, generateCurves, ShorthandFontType } from './shorthandFonts/shorthandFonts'

interface ShorthandParams {
  font?: ShorthandFontType
  fontHeight: number
  offset: vector.Coord
  phonemes: KoiPhoneme[][]
}

/**
 * Given a set of phonemes, returns an array of SVG paths
 * @param params - the parameters for the shorthand
 * @returns an array of SVG paths
 */
export const draw = (params: ShorthandParams): string[] => {
  const curves = scaleFont(generateCurves(params.phonemes, params.font), params.fontHeight, params.offset)

  return curves.map(curve => {
    return generateInkbrush({
      points: curve.curve,
      strokeWidths: curve.strokeWidths,
      bend: curve.bend,
      end: {
        numSpikes: 0,
        minSpikeSize: 0,
        maxSpikeSize: 0
      }
    })
  }).flat()
}

/**
 * Scales a font to a given height
 * @param curves - the curves to scale
 * @param fontHeight - the height to scale the font to
 * @param offset - the offset to apply to the font
 * @returns the scaled font
 */
const scaleFont = (curves: Curve[], fontHeight: number, offset: vector.Coord): Curve[] => {
  return curves.map(curve => {
    return {
      curve: curve.curve.map(point => vector.add(vector.scale(point, fontHeight), offset)),
      strokeWidths: curve.strokeWidths?.map(stroke => ({
        breakpoint: stroke.breakpoint,
        strokeWidth: stroke.strokeWidth * fontHeight
      })),
      bend: curve.bend
    }
  })
}
