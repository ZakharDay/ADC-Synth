import React, { PureComponent } from 'react'

import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

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
            {' '}
            <span>Feedback Delay</span>
            <p></p>
          </div>
        </div>

        <div className="effectControls">
          <h2 class="effectHeading">Wet</h2>
          <Slider
            parentId={parentId}
            property="wet"
            step="0.01"
            min="0"
            max="1"
            value={wet}
            handleChange={handleEffectValueChange}
          />

          <h2 class="effectMiddleHeading">Delay Time</h2>
          <Slider
            parentId={parentId}
            property="delayTime.value"
            step="1"
            min="0"
            max="100"
            value={delayTime.value}
            handleChange={handleEffectValueChange}
          />

          <h2 class="effectHeading">Max Delay</h2>
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
