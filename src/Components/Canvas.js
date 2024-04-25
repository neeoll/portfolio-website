import React, { useState, useEffect } from 'react'
import _ from 'lodash'

// Dot component
const Dot = ({ radius, x, y, hue }) => {
    return (
        <circle
            cx={x}
            cy={y}
            r={radius}
            fill={`hsla(${hue}, 100%, 40%, 1)`}
        />
    )
}

// Canvas component
const Canvas = () => {
    const [dots, setDots] = useState([])
    const [lastX, setLastX] = useState(null)
    const [lastY, setLastY] = useState(null)
    const [cw, setCw] = useState(window.innerWidth)
    const [ch, setCh] = useState(window.innerHeight)
    const DOT_SMALL = 2.5
    const DOT_LARGE = 30
    const HOVER_RADIUS = 100
    const DECAY_INTERVAL = 100 // Decay interval in milliseconds
    const DECAY_RATE = 0.01
    let decayTimer

    useEffect(() => {
        const handleMouseMove = _.throttle((e) => {
            setLastX(e.clientX)
            setLastY(e.clientY)
        }, 9) // Throttle the mousemove event to limit the frequency of updates

        const handleMouseOut = () => {
            setLastX(null)
            setLastY(null)
            startDecay()
        }

        const handleResize = () => {
            setCw(window.innerWidth)
            setCh(window.innerHeight)
        }

        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseout', handleMouseOut)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseout', handleMouseOut)
            window.removeEventListener('resize', handleResize)
            clearInterval(decayTimer)
        }
    }, [])

    useEffect(() => {
        const dotsArr = []

        for (let row = DOT_LARGE; row <= ch; row += DOT_LARGE * 1.25) {
            for (let col = DOT_LARGE; col <= cw; col += DOT_LARGE * 1.25) {
                dotsArr.push({
                    radius: DOT_SMALL,
                    originalRadius: DOT_SMALL,
                    x: col,
                    y: row,
                    hue: Math.floor(Math.random() * (360 - 1 + 1)) + 1,
                    inHoverRadius: false,
                })
            }
        }

        setDots(dotsArr)
    }, [cw, ch])

    const startDecay = () => {
      const dotsOutsideRadius = dots.filter(dot => !dot.inHoverRadius)
      if (dotsOutsideRadius.length > 0) {
          decayTimer = setInterval(() => {
              setDots((prevDots) => {
                  return prevDots.map((dot) => {
                      if (!dot.inHoverRadius) {
                          const newRadius = Math.max(DOT_SMALL, dot.radius - DECAY_RATE * dot.originalRadius) // Decay the radius gradually
                          return { ...dot, radius: newRadius }
                      } else {
                          return dot
                      }
                  })
              })
          }, DECAY_INTERVAL)
      }
  }

    useEffect(() => {
        if (lastX !== null && lastY !== null) {
            setDots((prevDots) => {
                return prevDots.map((dot) => {
                    const dX = dot.x - lastX
                    const dY = dot.y - lastY
                    const dist = Math.sqrt(Math.pow(dX, 2) + Math.pow(dY, 2))
                    const inHoverRadius = dist < HOVER_RADIUS
                    const newRadius = inHoverRadius ? DOT_LARGE - (DOT_LARGE - DOT_SMALL) * (dist / HOVER_RADIUS) : DOT_SMALL
                    return { ...dot, radius: newRadius, inHoverRadius }
                })
            })
        } else {
            setDots((prevDots) => {
                return prevDots.map((dot) => ({ ...dot, inHoverRadius: false }))
            })
            clearInterval(decayTimer)
        }
    }, [lastX, lastY])

    return (
        <svg width={cw} height={ch} className='canvas'>
            {dots.map((dot, index) => (
                <Dot key={index} {...dot} />
            ))}
        </svg>
    )
}

export default Canvas
