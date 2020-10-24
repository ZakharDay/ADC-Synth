import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
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
        <div className="smallBar">
          <div>
            <span>Reverb</span>
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

          <h2 className="effectHeading">Decay</h2>
          <Slider
            parentId={parentId}
            property="decay"
            step="0.1"
            min="0"
            max="10"
            value={decay}
            handleChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Pre Delay</h2>
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
      </div>
    )
  }
}
