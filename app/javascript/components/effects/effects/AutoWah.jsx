import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class AutoWah extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, frequency, octaves, sensitivity, q, gain, follower } = effect

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

        <h2>Base Frequency</h2>
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

        <h2>Sensitivity</h2>
        <Slider
          parentId={parentId}
          property="sensitivity"
          step="0.01"
          min="0"
          max="6"
          on={on}
          value={sensitivity}
          handleChange={handleEffectValueChange}
        />

        <h2>Q</h2>
        <Slider
          parentId={parentId}
          property="q"
          step="0.1"
          min="0"
          max="10"
          value={q}
          handleChange={handleEffectValueChange}
        />

        <h2>Gain</h2>
        <Slider
          parentId={parentId}
          property="gain.value"
          step="0.1"
          min="0"
          max="10"
          value={gain.value}
          handleChange={handleEffectValueChange}
        />

        <h2>Follower</h2>
        <h2>Attack</h2>
        <Slider
          parentId={parentId}
          property="follower.attack"
          step="0.01"
          min="0"
          max="1"
          value={follower.attack}
          handleChange={handleEffectValueChange}
        />

        <h2>Release</h2>
        <Slider
          parentId={parentId}
          property="follower.release"
          step="0.01"
          min="0"
          max="1"
          value={follower.release}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
