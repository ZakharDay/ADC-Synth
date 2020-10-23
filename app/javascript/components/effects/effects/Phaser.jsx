import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Phaser extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, frequency, octaves, filter, baseFrequency } = effect

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

        <h2>Stages</h2>
        <Slider
          parentId={parentId}
          property="stages"
          step="0.1"
          min="0"
          max="10"
          value={stages}
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

        <h2>Base Frequency</h2>
        <Slider
          parentId={parentId}
          property="baseFrequency.value"
          step="10"
          min="0"
          max="1000"
          value={baseFrequency.value}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
