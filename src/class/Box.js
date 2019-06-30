export default class Box extends Phaser.GameObjects.Polygon {
  constructor (scene, x, y, width, height, option = {}) {
    const {
      color = 0x000000,
      lineColor,
      alpha = 0.6
    } = option
    // Parallelogram
    const diff = height / 5
    const leftTop = [diff, 0]
    const leftBottom = [0, height]
    const rightTop = [width, 0]
    const rightBottom = [width - diff, height]
    super(scene, x, y, [leftTop, rightTop, rightBottom, leftBottom], color)
    this.setAlpha(alpha)
    if (lineColor) {
      this.isStroked = true
      this.lineWidth = 1
      this.strokeColor = lineColor
    }
  }
}