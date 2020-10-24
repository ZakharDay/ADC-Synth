import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'
import KnobNew from '../../controls/KnobNew'

export default class FeedbackDelay extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, delayTime, maxDelay } = effect

    return (
      <div className="Effect">
        <div className="smallBar">
          <div>
            <span>Feedback Delay</span>
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

          <h2 className="effectHeading">Max Delay</h2>
          <Slider
            parentId={parentId}
            property="maxDelay"
            step="1"
            min="0"
            max="100"
            value={maxDelay}
            handleChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
