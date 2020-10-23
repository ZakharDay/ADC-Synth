import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Freeverb extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, roomSize, dampening } = effect
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

        <h2>Room Size</h2>
        <Slider
          parentId={parentId}
          property="roomSize.value"
          step="0.01"
          min="0"
          max="1"
          value={roomSize.value}
          handleChange={handleEffectValueChange}
        />

        <h2>Dampening</h2>
        <Slider
          parentId={parentId}
          property="dampening.value"
          step="10"
          min="0"
          max="5000"
          on={on}
          value={dampening.value}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
