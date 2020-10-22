import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'

export default class Vibrato extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, maxDelay, frequency, depth, type } = effect
    const set = ['sine', 'square', 'triangle', 'sawtooth']

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

        <h2>Max Delay</h2>
        <Slider
          parentId={parentId}
          property="maxDelay"
          step="0.01"
          min="0"
          max="1"
          value={maxDelay}
          handleChange={handleEffectValueChange}
        />

        <h2>Frequency</h2>
        <Slider
          parentId={parentId}
          property="frequency.value"
          step="1"
          min="0"
          max="1000"
          value={frequency.value}
          handleChange={handleEffectValueChange}
        />

        <h2>Depth</h2>
        <Slider
          parentId={parentId}
          property="depth.value"
          step="0.01"
          min="0"
          max="1"
          value={depth.value}
          handleChange={handleEffectValueChange}
        />

        <h2>Type</h2>
        <ButtonSet
          parentId={parentId}
          property="type"
          set={set}
          value={type}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
