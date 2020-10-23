import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class PingPongDelay extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, delayTime, maxDelayTime } = effect

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

        <h2>Delay Time</h2>
        <Slider
          parentId={parentId}
          property="delayTime.value"
          step="0.01"
          min="0"
          max="1"
          value={delayTime.value}
          handleChange={handleEffectValueChange}
        />

        <h2>Max Delay Time</h2>
        <Slider
          parentId={parentId}
          property="maxDelayTime"
          step="0.01"
          min="0"
          max="1"
          value={maxDelayTime}
          handleChange={handleEffectValueChange}
        />
      </div>
    )
  }
}
