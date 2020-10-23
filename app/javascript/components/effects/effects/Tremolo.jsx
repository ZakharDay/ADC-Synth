import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class Tremolo extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, frequency, type, depth, spread } = effect
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

        <h2>Type</h2>
        <ButtonSet
          parentId={parentId}
          property="filter.type"
          set={set}
          value={type}
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
          handleValueChange={handleEffectValueChange}
        />

        <h2>Spread</h2>
        <Slider
          parentId={parentId}
          property="spread"
          step="1"
          min="0"
          max="180"
          value={spread}
          handleValueChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
