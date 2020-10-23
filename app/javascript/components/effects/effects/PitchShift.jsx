import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class PitchShift extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, pitch, windowSize, feedback } = effect

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

        <h2>Pitch</h2>
        <Slider
          parentId={parentId}
          property="pitch"
          step="0.1"
          min="-24"
          max="24"
          value={pitch}
          handleValueChange={changeEffectValue}
        />

        <h2>Window Size</h2>
        <Slider
          parentId={parentId}
          property="windowSize"
          step="0.001"
          min="0"
          max="0.2"
          value={windowSize}
          handleValueChange={changeEffectValue}
        />

        <h2>Feedback</h2>
        <Slider
          parentId={parentId}
          property="feedback.value"
          step="1"
          min="0"
          max="100"
          value={feedback.value}
          handleValueChange={changeEffectValue}
        />
      </div>
    )
  }
}
