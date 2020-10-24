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
        <div className="smallBar">
          <div>
            <span>Ping-Pong Delay</span>
            <p></p>
          </div>
        </div>

        <div className="narrowEffectControls">
          <h2 className="effectHeading">Wet</h2>
          <Slider
            parentId={parentId}
            property="wet"
            step="0.01"
            min="0"
            max="1"
            value={wet}
            handleChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Delay Time</h2>
          <Slider
            parentId={parentId}
            property="delayTime"
            step="0.01"
            min="0"
            max="1"
            value={delayTime}
            handleChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Max Delay Time</h2>
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
      </div>
    )
  }
}
