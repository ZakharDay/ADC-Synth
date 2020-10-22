import React, { PureComponent } from 'react'

export default class Knob extends PureComponent {
  constructor(props) {
    super(props)

    const { min, max } = props
    const range = max - min
    const coef = (280 / range) * 10

    this.state = {
      mouseDown: false,
      deg: 0,
      cursorY: 0,
      range,
      coef
    }
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)

    const { current } = this.props
    const { range } = this.state

    this.setState({
      deg: this.calcDeg(current)
    })
  }

  calcDeg = (value) => {
    const { coef } = this.state
    return (value * coef) / 10
  }

  calcRotation = (range) => {
    const { coef, deg } = this.state
    return range * coef + deg
  }

  calcValue = (deg) => {
    const { range } = this.state
    return Math.floor((range / 280) * deg)
  }

  handleMouseDown = (e) => {
    e.preventDefault()

    this.setState({
      mouseDown: true,
      cursorY: e.screenY
    })
  }

  handleMouseMove = (e) => {
    const { min, max, handleChange, instrumentId, property } = this.props
    const { cursorY } = this.state

    if (this.state.mouseDown) {
      const cursorRange = cursorY - e.screenY

      if (cursorRange != 0) {
        let nextDeg = this.calcRotation(cursorRange)
        let nextValue = this.calcValue(nextDeg)

        if (nextValue <= min) {
          nextDeg = -140
          nextValue = min
        } else if (nextValue >= max) {
          nextDeg = 140
          nextValue = max
        }

        handleChange(instrumentId, property, nextValue)

        this.setState({
          cursorY: e.screenY,
          deg: nextDeg
        })
      }
    }
  }

  handleMouseUp = (e) => {
    e.preventDefault()

    this.setState({
      mouseDown: false,
      cursorY: 0
    })
  }

  render() {
    const { current } = this.props
    const { deg } = this.state

    const styles = {
      transform: `rotate(${deg}deg)`
    }

    return (
      <div className="Knob" onMouseDown={this.handleMouseDown}>
        <div className="body" style={styles}></div>
        <div className="value">{current}</div>
      </div>
    )
  }
}
