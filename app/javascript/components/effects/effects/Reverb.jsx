import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Reverb extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, decay, preDelay } = effect

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

        <h2>Decay</h2>
        <Slider
          parentId={parentId}
          property="decay"
          step="0.1"
          min="0"
          max="10"
          value={decay}
          handleChange={handleEffectValueChange}
        />

        <h2>Pre Delay</h2>
        <Slider
          parentId={parentId}
          property="preDelay"
          step="0.01"
          min="0"
          max="1"
          value={preDelay}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
