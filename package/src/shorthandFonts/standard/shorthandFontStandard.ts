import { vector } from 'inkbrush'
import { Curve, PrimaryShorthandFont, ShorthandFont } from '../shorthandFonts'
import { KoiPhoneme } from '../../types'
import { radians } from '../../utils/radians'

const startingWidth = vector.distance({ x: 0.0116, y: 0.3679 }, { x: 0.0138, y: 0.3718 })
const middleWidth = vector.distance({ x: 0.2702, y: 0.4415 }, { x: 0.2614, y: 0.4461 }) * 2

const generatePrimaryM = (): PrimaryShorthandFont => {
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
      begin: { x: 0.0203, y: 0.7266 },
      rotation: radians(150),
      size: 0.1
    }
  }
}

const generatePrimaryT = (): PrimaryShorthandFont => {
  return {
    baseCurves: [{
      curve: [
        { x: 0.2316, y: 0.34 },
        { x: 0.0455, y: 0.5 },
        { x: 0.1863, y: 0.6559 },
        { x: 0.5, y: 0.6666 },
        { x: 0.8158, y: 0.6581 },
        { x: 0.9623, y: 0.5 },
        { x: 0.7785, y: 0.34 }
      ],
      bend: -7.4 / 19.8 * 2,
      strokeWidths: [{
        breakpoint: 0,
        strokeWidth: startingWidth
      }, {
        breakpoint: 0.5,
        strokeWidth: middleWidth
      }, {
        breakpoint: 1,
        strokeWidth: startingWidth
      }]
    }],
    consonant: {
      canFirstConnect: false,
      canLastConnect: false,
      leadingVowelPosition: { x: 0.1268, y: 0.3333 / 2 },
      trailingVowelPosition: { x: 0.8338, y: 0.3333 / 2 }
    },
    form: {
      begin: { x: 0.0203, y: 0.7266 },
      rotation: radians(130),
      size: 0.1
    }
  }
}

const generateSecondFormMark = (): Curve[] => {
  return [{
    curve: [
      { x: 0, y: 0 },
      { x: 1, y: 0 }
    ],
    bend: -0.2,
    strokeWidths: [{
      breakpoint: 0,
      strokeWidth: 0.01
    }, {
      breakpoint: 1,
      strokeWidth: 0.008
    }]
  }]
}

const generateThirdFormMark = (): Curve[] => {
  return [{
    curve: [
      { x: 0, y: 1 / 8 },
      { x: 0, y: -1 / 8 }
    ],
    bend: 0,
    strokeWidths: [{
      breakpoint: 0,
      strokeWidth: 0.01
    }, {
      breakpoint: 1,
      strokeWidth: 0.01
    }]
  }]
}

const generateFourthFormMark = (): Curve[] => {
  return [{
    curve: [
      { x: 0, y: 1 / 3 },
      { x: 1, y: 1 / 3 }
    ],
    bend: -0.2,
    strokeWidths: [{
      breakpoint: 0,
      strokeWidth: 0.01
    }, {
      breakpoint: 1,
      strokeWidth: 0.008
    }]
  }, {
    curve: [
      { x: 0, y: -1 / 3 },
      { x: 1, y: -1 / 3 }
    ],
    bend: -0.2,
    strokeWidths: [{
      breakpoint: 0,
      strokeWidth: 0.01
    }, {
      breakpoint: 1,
      strokeWidth: 0.008
    }]
  }]
}

/**
 * Calculates the middle line for the inkbrush to follow.
 * Each curve should be normalized to the same height of 1.
 */
export const shorthandStandard = {
  primaries: {
    [KoiPhoneme.m]: generatePrimaryM(),
    [KoiPhoneme.t]: generatePrimaryT(),
  },
  formMarks: [
    [] as Curve[],
    generateSecondFormMark(),
    generateThirdFormMark(),
    generateFourthFormMark()
  ]
} as ShorthandFont
