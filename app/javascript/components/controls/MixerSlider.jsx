import React, { PureComponent } from 'react'

export default class MixerSlider extends PureComponent {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }

  componentDidMount() {
    const { value } = this.props
    this.input.current.value = value
  }

  render() {
    const {
      parentId,
      property,
      name,
      step,
      min,
      max,
      handleChange
    } = this.props

    return (
      <div className="MixerSlider">
        <h3>{name}</h3>
        <input
          className="slider"
          ref={this.input}
          type="range"
          step={step}
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
