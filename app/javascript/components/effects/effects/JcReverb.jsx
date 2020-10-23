import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class JcReverb extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, roomSize } = effect

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
      </div>
    )
  }
}
