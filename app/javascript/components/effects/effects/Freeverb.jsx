import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'
import KnobNew from '../../controls/KnobNew'

export default class Freeverb extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { on, wet, roomSize, dampening } = effect
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div id="freeverb" className="Effect">
        <div className="smallBar">
          <div>
            <span>Freeverb</span>
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

          <h2 className="effectHeading">Room Size</h2>
          <Slider
            parentId={parentId}
            property="roomSize"
            step="0.01"
            min="0"
            max="1"
            value={roomSize}
            handleChange={handleEffectValueChange}
          />

          <KnobNew
            parentId={parentId}
            property="dampening"
            min={0}
            max={5000}
            value={0}
            name="Dampening"
            handleChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
