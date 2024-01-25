import React from "react"
import { Dot } from "./Dot"

export class DotGrid extends React.Component {
  constructor(props) {
    super(props)

    this.init = this.init.bind(this)
    
    this.dots = []

    this.hoverRadius = 50
    this.spacing = 10
  }

  componentDidMount() {
    const canvas = document.getElementById("dotted-grid")
    const rect = document.getElementById("container").getBoundingClientRect()

    canvas.width = rect.width
    canvas.height = rect.height

    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`

    this.init(rect.width, rect.height)

    let duration = 0
    document.addEventListener("mousemove", (e) => {
      if (e.buttons === 1) {
        duration += 0.5
        let tempdotsAgain = this.dots.filter((dot) => 
          Math.sqrt(((dot.x - e.clientX) ** 2) + ((dot.y - e.clientY) ** 2)) <= this.hoverRadius
        )

        tempdotsAgain.forEach((dot) => {
          dot.color = `hsla(${duration % 360}, 100%, 50%, 0.75)`
          dot.draw()
        })
      } else {
        duration = 0
      }
    }, false)

    document.addEventListener("dblclick", (e) => {
      let context = canvas.getContext("2d")
      context.clearRect(0, 0, canvas.width, canvas.height)
    }, false)
  }

  init(width, height) {
    this.dots = []

    for (let x = 0; x <= width; x += this.spacing * 2) {
      for (let y = 0; y <= height; y += this.spacing * 2) {
        let dot = new Dot(x + this.spacing / 2, y + this.spacing / 2, "rgba(100, 100, 100, 0.4)")
        this.dots.push(dot)
      }
    }
  }

  render() {
    return(
      <canvas id="dotted-grid"></canvas>
    )
  }
}