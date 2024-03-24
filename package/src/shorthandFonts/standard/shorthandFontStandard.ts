import { vector } from 'inkbrush'
import { PrimaryShorthandFont, ShorthandFont } from '../shorthandFonts'
import { KoiPhoneme } from '../../types'

const generatePrimaryM = (): PrimaryShorthandFont => {
  const startingWidth = vector.distance({ x: 0.0116, y: 0.3679 }, { x: 0.0138, y: 0.3718 })
  const middleWidth = vector.distance({ x: 0.2702, y: 0.4415 }, { x: 0.2614, y: 0.4461 }) * 2

  return {
    baseCurves: [{
      curve: [
        { x: 0.0116, y: 0.3679 },
        { x: 0.1962, y: 0.3528 },
        { x: 0.2802, y: 0.5198 },
        { x: 0.103, y: 0.6666 }
      ],
      bend: 3.75 / 12.75 * 2,
      strokeWidths: [{
        breakpoint: 0,
        strokeWidth: startingWidth
      }, {
        breakpoint: 0.5,
        strokeWidth: middleWidth * 0.9
      }, {
        breakpoint: 1,
        strokeWidth: middleWidth
      }]
    }, {
      curve: [
        { x: 0.5014, y: 0.4954 },
        { x: 0.8428, y: 0.4954 }
      ],
      bend: 0,
      strokeWidths: [{
        breakpoint: 0,
        strokeWidth: middleWidth
      }, {
        breakpoint: 1,
        strokeWidth: startingWidth
      }]
    }, {
      curve: [
        { x: 0.103, y: 0.6666 },
        { x: 0.3358, y: 0.6666 },
        { x: 0.5835, y: 0.6666 },
        { x: 0.801, y: 0.6666 },
        { x: 0.9792, y: 0.6666 }
      ],
      bend: 0,
      strokeWidths: [{
        breakpoint: 0,
        strokeWidth: middleWidth
      }, {
        breakpoint: 0.5,
        strokeWidth: middleWidth * 0.9
      }, {
        breakpoint: 1,
        strokeWidth: startingWidth
      }]
    }],
    consonant: {
      canFirstConnect: false,
      canLastConnect: true,
      leadingVowelPosition: { x: 0.1268, y: 0.3333 / 2 },
      trailingVowelPosition: { x: 0.8338, y: 0.3333 / 2 }
    },
    form: {
      begin: { x: 0.0773, y: 0.7248 },
      orientation: vector.normalize(vector.subtract({ x: 0.06, y: 0.7486 }, { x: 0.0773, y: 0.7248 }))
    }
  }
}

/**
 * Calculates the middle line for the inkbrush to follow.
 * Each curve should be normalized to the same height of 1.
 */
export const shorthandStandard = {
  primaries: {
    [KoiPhoneme.m]: generatePrimaryM()
  }
} as ShorthandFont
