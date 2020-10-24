import React, { PureComponent } from 'react'

export default class Knob extends PureComponent {
  constructor(props) {
    super(props)

    const { min, max } = props
    const range = max - min
    const coef = 280 / range
    const stepCoef = Math.floor(range / 6)

    this.state = {
      mouseDown: false,
      deg: 0,
      cursorY: 0,
      range,
      coef,
      stepCoef,
      billets: []
    }
  }

  componentDidMount() {
    window.addEventListener('mouseup', this.handleMouseUp)
    window.addEventListener('mousemove', this.handleMouseMove)

    const { value } = this.props
    const { range } = this.state

    this.setState({
      deg: this.calcDeg(value)
    })

    this.renderBilletValues()
  }

  calcDeg = (value) => {
    const { min } = this.props
    const { coef } = this.state

    if (min < 0) {
      return value * coef
    } else {
      return value * coef - 140
    }
  }

  calcRotation = (range) => {
    const { coef, deg } = this.state
    return range * coef + deg
  }

  calcValue = (deg) => {
    const { min } = this.props
    const { range } = this.state

    if (min < 0) {
      return Math.floor((range / 280) * deg)
    } else {
      console.log(deg, Math.floor((range / 280) * (deg + 140)))
      return Math.floor((range / 280) * (deg + 140))
    }
  }

  renderBilletValues = () => {
    let { min, max } = this.props
    const { billets, range, stepCoef } = this.state
    let localBillets = []

    if (Math.sign(min) == 1) {
      for (var i = 0; i < 5; i++) {
        localBillets.push(Math.floor(stepCoef * (i + 1)))
      }
    } else if (Math.sign(min) == -1) {
      if (Math.sign(max) == -1) {
        for (var i = 0; i < 5; i++) {
          localBillets.push(Math.floor(-stepCoef * (i + 1)))
        }
        localBillets.reverse()
      } else {
        localBillets.push(Math.floor(-stepCoef * 2))
        localBillets.push(Math.floor(-stepCoef * 1))
        localBillets.push(Math.floor(stepCoef * 0))
        localBillets.push(Math.floor(stepCoef * 1))
        localBillets.push(Math.floor(stepCoef * 2))
      }
    } else if (Math.sign(min) == 0) {
      for (var i = 0; i < 5; i++) {
        localBillets.push(Math.floor(stepCoef * (i + 1)))
      }
    }

    this.setState({
      billets: localBillets
    })
  }

  handleMouseDown = (e) => {
    e.preventDefault()

    this.setState({
      mouseDown: true,
      cursorY: e.screenY
    })
  }

  handleMouseMove = (e) => {
    const { min, max } = this.props
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

        this.setState({
          cursorY: e.screenY,
          deg: nextDeg
        })
      }
    }
  }

  handleMouseUp = (e) => {
    e.preventDefault()

    const { deg, mouseDown } = this.state

    if (mouseDown) {
      const { parentId, property, handleChange } = this.props
      handleChange(parentId, property, this.calcValue(deg))

      this.setState({
        mouseDown: false,
        cursorY: 0
      })
    }
  }

  render() {
    const { min, max, value, name } = this.props
    const { billets, deg } = this.state

    const styles = {
      transform: `rotate(${deg}deg)`
    }

    return (
      <div className="Knob" onMouseDown={this.handleMouseDown}>
        <div className="KnobName">{name}</div>
        <div className="KnobBody">
          <div className="body" style={styles}></div>
        </div>
        <div id="BilletGroup1">
          <div className="Billet"></div>
          <div className="Billet"></div>
        </div>
        <div id="BilletGroup2">
          <div className="Billet"></div>
          <div className="Billet"></div>
        </div>
        <div id="BilletGroup3">
          <div className="Billet"></div>
          <div className="Billet"></div>
        </div>

        <div className="LastBillet"> </div>

        <div className="BilletValue" id="Value7">
          {min}
        </div>

        <div className="BilletValue" id="Value9">
          {`${billets[0]}`}
        </div>

        <div className="BilletValue" id="Value11">
          {`${billets[1]}`}
        </div>

        <div className="BilletValue" id="Value12">
          {`${billets[2]}`}
        </div>

        <div className="BilletValue" id="Value2">
          {`${billets[3]}`}
        </div>

        <div className="BilletValue" id="Value3">
          {`${billets[4]}`}
        </div>

        <div className="BilletValue" id="Value5">
          {max}
        </div>
      </div>
    )
  }
}
