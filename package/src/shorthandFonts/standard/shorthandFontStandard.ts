import { vector } from 'inkbrush'
import { Curve, PrimaryShorthandFont, ShorthandFont } from '../shorthandFonts'
import { KoiPhoneme } from '../../types'
import { radians } from '../../utils/radians'
import { orthoRatio } from '../../utils/orthoRatio'

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

const generatePrimaryK = (): PrimaryShorthandFont => {
  return {
    baseCurves: [{
      curve: [
        { x: 0.0516, y: 0.369 },
        { x: 0.145, y: 0.3591 },
        { x: 0.2135, y: 0.4413 },
        { x: 0.0565, y: 0.6666 }
      ],
      bend: 4.45 / 20 * 2,
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
        { x: 0.0565, y: 0.6666 },
        { x: 0.3655, y: 0.4363 },
        { x: 0.6782, y: 0.3333 },
        { x: 0.88, y: 0.3939 },
        { x: 0.9224, y: 0.5447 },
        { x: 0.8352, y: 0.6666 }
      ],
      bend: 0.9 / 24.95 * 2,
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
      canLastConnect: false,
      leadingVowelPosition: { x: 0.1268, y: 0.3333 / 2 },
      trailingVowelPosition: { x: 0.8338, y: 0.3333 / 2 }
    },
    form: {
      begin: { x: 0.005, y: 0.7266 },
      rotation: radians(140),
      size: 0.1
    }
  }
}

const generatePrimaryPH = (): PrimaryShorthandFont => {
  return {
    baseCurves: [{
      curve: [
        { x: 0, y: 0.6666 },
        { x: 0.4528, y: 0.6554 },
        { x: 0.8161, y: 0.678 },
        { x: 0.9865, y: 0.772 },
        { x: 0.781, y: 0.9048 },
        { x: 0.87, y: 0.9962 }
      ],
      bend: 0,
      strokeWidths: [{
        breakpoint: 0,
        strokeWidth: startingWidth
      }, {
        breakpoint: 0.7,
        strokeWidth: middleWidth
      }, {
        breakpoint: 1,
        strokeWidth: startingWidth
      }]
    }],
    consonant: {
      canFirstConnect: true,
      canLastConnect: false,
      leadingVowelPosition: { x: 0.1268, y: 0.3333 / 2 },
      trailingVowelPosition: { x: 0.8338, y: 0.3333 / 2 }
    },
    form: {
      begin: { x: 0.64, y: 0.98 },
      rotation: radians(150),
      size: 0.1
    }
  }
}

const generatePrimaryS = (): PrimaryShorthandFont => {
  return {
    baseCurves: [{
      curve: [
        { x: 0, y: 0.6666 },
        { x: 0.264, y: 0.6666 },
        { x: 0.4551, y: 0.707 },
        { x: 0.5, y: 0.8166 },
        { x: 0.4011, y: 0.9281 }
      ],
      bend: 0,
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
    }, {
      curve: [
        { x: 0.4509, y: 0.5389 },
        { x: 0.5143, y: 0.5166 },
        { x: 0.5518, y: 0.5694 },
        { x: 0.5, y: 0.6666 }
      ],
      bend: 2 * orthoRatio({ x: 0.4755, y: 0.5095 }, { x: 0.4509, y: 0.5389 }, { x: 0.5143, y: 0.5166 }),
      strokeWidths: [{
        breakpoint: 0,
        strokeWidth: startingWidth
      }, {
        breakpoint: 1,
        strokeWidth: middleWidth
      }]
    }, {
      curve: [
        { x: 0.5, y: 0.6666 },
        { x: 0.75, y: 0.6666 },
        { x: 1, y: 0.6666 }
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
      canFirstConnect: true,
      canLastConnect: true,
      leadingVowelPosition: { x: 0.1268, y: 0.3333 / 2 },
      trailingVowelPosition: { x: 0.8338, y: 0.3333 / 2 }
    },
    form: {
      begin: { x: 0.32, y: 0.98 },
      rotation: radians(150),
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
    [KoiPhoneme.k]: generatePrimaryK(),
    [KoiPhoneme.ɸ]: generatePrimaryPH(),
    [KoiPhoneme.s]: generatePrimaryS()
  },
  formMarks: [
    [] as Curve[],
    generateSecondFormMark(),
    generateThirdFormMark(),
    generateFourthFormMark()
  ]
} as ShorthandFont
