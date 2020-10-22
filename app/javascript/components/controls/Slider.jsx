import React, { PureComponent } from 'react'

export default class Slider extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  componentDidMount() {
    const { value } = this.props
    this.input.current.value = value
  }

  render() {
    const { min, max, handleChange, step, property, parentId } = this.props

    return (
      <div className="Slider">
        <input
          ref={this.input}
          type="range"
          step={step}
          className="slider"
          min={min}
          max={max}
          onInput={() =>
            handleChange(
              parentId,
              property,
              parseFloat(this.input.current.value)
            )
          }
        />
      </div>
    )
  }
}
