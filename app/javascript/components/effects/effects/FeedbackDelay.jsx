import React, { PureComponent } from 'react'

import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class FeedbackDelay extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, delayTime, maxDelay } = effect

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

        <h2>Delay Time</h2>
        <Slider
          parentId={parentId}
          property="delayTime.value"
          step="1"
          min="0"
          max="100"
          value={delayTime.value}
          handleChange={handleEffectValueChange}
        />

        <h2>Max Delay</h2>
        <Slider
          parentId={parentId}
          property="maxDelay"
          step="1"
          min="0"
          max="100"
          value={maxDelay}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
