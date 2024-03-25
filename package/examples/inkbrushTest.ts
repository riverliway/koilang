import { shorthand, translate } from '../src/index'
import { writeSvg } from './writeSvg'

const test = (): void => {
  const viewbox = {
    x: 0,
    y: 0,
    width: 1000,
    height: 500
  }

  const paths = shorthand.draw({
    phonemes: translate.romanToPhoneticSeparated('sshchz'),
    fontHeight: 100,
    offset: { x: 100, y: 100 }
  })

  writeSvg('test.svg', paths, viewbox)
}

test()
