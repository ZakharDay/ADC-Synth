import React from 'react'

export default class Knob extends React.Component {
  constructor(props) {
    super(props)

    const { min, max } = props
    const range = max - min
    const coef = 280 / range

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

  calcBilletValue = () => {
    let { min, max } = this.props
    const { range } = this.state
    let billets = []

    let coef = Math.floor(range / 5)

    while (min < max) {
      min += coef
      billets.push(min)
      console.log(billets)
    }
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

        // Метод который вызывает изменения по вращанию кноба в родительском компоненте

        // handleChange(instrumentId, property, nextValue)

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
    const { current, name } = this.props
    const { deg } = this.state
    // this.calcBilletValue()
    const styles = {
      transform: `rotate(${deg}deg)`
    }

    return (
      <div className="Knob">
        <div className="KnobName">name</div>
        <div className="KnobBody" onMouseDown={this.handleMouseDown}>
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
          -60
        </div>

        <div className="BilletValue" id="Value9">
          -40
        </div>

        <div className="BilletValue" id="Value11">
          -20
        </div>

        <div className="BilletValue" id="Value12">
          0
        </div>

        <div className="BilletValue" id="Value2">
          20
        </div>

        <div className="BilletValue" id="Value3">
          40
        </div>

        <div className="BilletValue" id="Value5">
          60
        </div>
      </div>
    )
  }
}
