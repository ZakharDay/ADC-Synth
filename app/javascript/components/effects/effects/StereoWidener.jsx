import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class StereoWidener extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const {
      wet,
      frequency,
      effect,
      depth,
      baseFrequency,
      octaves,
      type,
      filter
    } = effect
    return (
      <div className="Effect">
        <h2>Wet</h2>
        <Slider
          parentId={parentId}
          property="wet"
          step="0.01"
          min="0"
          max="1"
          value={wet}
          handleChange={handleEffectValueChange}
        />

        <h2>Width</h2>
        <Slider
          parentId={parentId}
          property="width.value"
          step="0.01"
          min="0"
          max="1"
          value={width.value}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
