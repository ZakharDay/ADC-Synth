import React, { PureComponent } from 'react'

import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Chorus extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, frequency, delayTime, depth, type, spread } = effect
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

        <h2>Frequency</h2>
        <Slider
          parentId={parentId}
          property="frequency.value"
          step="1"
          min="0"
          max="100"
          value={frequency.value}
          handleChange={handleEffectValueChange}
        />

        <h2>Delay Time</h2>
        <Slider
          parentId={parentId}
          property="delayTime"
          step="0.1"
          min="0"
          max="10"
          value={delayTime}
          handleChange={handleEffectValueChange}
        />

        <h2>Depth</h2>
        <Slider
          parentId={parentId}
          property="depth"
          step="0.01"
          min="0"
          max="1"
          value={depth}
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

        <h2>Spread</h2>
        <Slider
          parentId={parentId}
          property="spread"
          step="1"
          min="0"
          max="360"
          value={spread}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
