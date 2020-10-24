import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class PitchShift extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, pitch, windowSize, feedback } = effect

    return (
      <div className="Effect">
        <div className="smallBar">
          <div>
            <span>Pitch Shift</span>
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

          <h2 className="effectHeading">Pitch</h2>
          <Slider
            parentId={parentId}
            property="pitch"
            step="0.1"
            min="-24"
            max="24"
            value={pitch}
            handleValueChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Window Size</h2>
          <Slider
            parentId={parentId}
            property="windowSize"
            step="0.001"
            min="0"
            max="0.2"
            value={windowSize}
            handleValueChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Feedback</h2>
          <Slider
            parentId={parentId}
            property="feedback"
            step="1"
            min="0"
            max="100"
            value={feedback}
            handleValueChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
