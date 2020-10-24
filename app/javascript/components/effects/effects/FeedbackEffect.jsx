import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'
import KnobNew from '../../controls/KnobNew'

export default class FeedbackEffect extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, feedback } = effect

    return (
      <div className="Effect">
        <div className="smallBar">
          <div>
            <span>Feedback Effect</span>
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

          <h2 className="effectHeading">Feedback</h2>
          <Slider
            parentId={parentId}
            property="feedback"
            step="0.01"
            min="0"
            max="1"
            value={feedback}
            handleChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
