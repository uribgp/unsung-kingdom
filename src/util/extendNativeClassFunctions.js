import { pixelToTile, tileToPixel, positionByRight, positionByBottom, half } from './numberFunctions'
export default () => {
  Object.defineProperty(Number.prototype, 'toTile', {
    get () { return pixelToTile(this) }
  })
  Object.defineProperty(Number.prototype, 'toPixel', {
    get () { return tileToPixel(this, 0) }
  })
  Object.defineProperty(Number.prototype, 'toPixelCenter', {
    get () { return tileToPixel(this) }
  })
  Object.defineProperty(Number.prototype, 'toArray', {
    get () { return [...Array(this).keys()] }
  })
  Object.defineProperty(Number.prototype, 'byRight', {
    get () { return positionByRight(this) }
  })
  Object.defineProperty(Number.prototype, 'byBottom', {
    get () { return positionByBottom(this) }
  })
  Object.defineProperty(Number.prototype, 'half', {
    get () { return half(this) }
  })
  Math.randomInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min
  Math.chance = (percent) => (percent / 100) > Math.random()
}
