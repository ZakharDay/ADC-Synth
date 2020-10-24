import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class Distortion extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, distortion, oversample } = effect
    const set = ['none', '2x', '4x']

    return (
      <div className="Effect" id="distortion">
        <div className="smallBar">
          <div>
            <span>Distortion</span>
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

          <h2 className="effectMiddleHeading">Distortion</h2>
          <Slider
            parentId={parentId}
            property="distortion"
            step="0.01"
            min="0"
            max="1"
            value={distortion}
            handleChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Oversample</h2>
          <ButtonSet
            parentId={parentId}
            property="oversample"
            set={set}
            value={'none'}
            handleChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
