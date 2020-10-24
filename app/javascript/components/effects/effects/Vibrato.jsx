import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'

export default class Vibrato extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, maxDelay, frequency, depth, type } = effect
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div className="Effect">
        <div className="smallBar">
          <div>
            <span>Vibrato</span>
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

          <h2 className="effectHeading">Max Delay</h2>
          <Slider
            parentId={parentId}
            property="maxDelay"
            step="0.01"
            min="0"
            max="1"
            value={maxDelay}
            handleChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Frequency</h2>
          <Slider
            parentId={parentId}
            property="frequency"
            step="1"
            min="0"
            max="1000"
            value={frequency}
            handleChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Depth</h2>
          <Slider
            parentId={parentId}
            property="depth"
            step="0.01"
            min="0"
            max="1"
            value={depth}
            handleChange={handleEffectValueChange}
          />

          <h2 className="effectHeading">Type</h2>
          <ButtonSet
            parentId={parentId}
            property="type"
            set={set}
            value={type}
            current={type}
            handleChange={handleEffectValueChange}
          />
        </div>
      </div>
    )
  }
}
