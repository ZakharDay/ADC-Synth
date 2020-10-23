import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class AutoFilter extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const {
      wet,
      frequency,
      depth,
      baseFrequency,
      octaves,
      type,
      filter
    } = effect
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
        <Select
          parentId={parentId}
          property="type"
          value={type}
          handleValueChange={changeEffectValue}
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

        <h2>Base Frequency</h2>
        <Slider
          parentId={parentId}
          property="baseFrequency"
          step="10"
          min="0"
          max="1800"
          value={baseFrequency}
          handleChange={handleEffectValueChange}
        />

        <h2>Octaves</h2>
        <Slider
          parentId={parentId}
          property="octaves"
          step="0.01"
          min="0"
          max="6"
          value={octaves}
          handleChange={handleEffectValueChange}
        />

        <h2>Filter</h2>
        <h2>Type</h2>
        <ButtonSet
          parentId={parentId}
          property="filter.type"
          set={set}
          value={type}
          handleChange={handleEffectValueChange}
        />

        <h2>Rolloff</h2>
        <ButtonSet
          parentId={parentId}
          property="filter.rolloff"
          set={set}
          value={filter.rolloff}
          handleChange={handleEffectValueChange}
        />

        <h2>Q</h2>
        <Slider
          parentId={parentId}
          property="filter.q"
          step="0.1"
          min="0"
          max="10"
          value={filter.q}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
