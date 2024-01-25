export class Dot {
  constructor(x, y, color) {
    this.radius = 10
    this.x = x
    this.y = y
    this.color = color
    this.alpha = 0.4

    this.hoverRadius = 75
    this.inHoverRadius = false
  }
  
  draw() {
    const canvas = document.getElementById("dotted-grid")
    const context = canvas.getContext("2d")


    context.beginPath()
    context.arc(
      this.x,
      this.y,
      this.radius,
      0,
      Math.PI * 2,
      false
    )
    context.closePath()

    context.fillStyle = this.color
    context.fill()
  }
}