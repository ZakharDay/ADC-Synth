import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class Chorus extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, frequency, delayTime, depth, type, spread } = effect
    const set = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div className="Effect">
        <div className="mediumBar">
          <div className="mediumBarContainer">
            <span>Chorus</span>
            <Slider
              parentId={parentId}
              property="wet"
              step="0.01"
              min="0"
              max="1"
              value={wet}
              handleChange={handleEffectValueChange}
            />
            <p></p>
          </div>
        </div>

        <div className="middleEffectControlsContainer">
          <div className="middleEffectControls">
            <h2 className="effectHeading">Frequency</h2>
            <Slider
              parentId={parentId}
              property="frequency.value"
              step="1"
              min="0"
              max="100"
              value={frequency.value}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectMiddleHeading">Delay Time</h2>
            <Slider
              parentId={parentId}
              property="delayTime"
              step="0.1"
              min="0"
              max="10"
              value={delayTime}
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
          </div>
          <div className="middleEffectControls">
            <h2 className="effectHeading">Type</h2>
            <ButtonSet
              parentId={parentId}
              property="type"
              set={set}
              value={type}
              current={type}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Spread</h2>
            <Slider
              parentId={parentId}
              property="spread"
              step="1"
              min="0"
              max="360"
              value={spread}
              handleChange={handleEffectValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
