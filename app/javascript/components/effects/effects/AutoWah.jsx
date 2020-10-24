import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class AutoWah extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const {
      wet,
      on,
      frequency,
      octaves,
      sensitivity,
      q,
      gain,
      follower
    } = effect

    return (
      <div className="Effect">
        <div className="mediumBar">
          <div className="mediumBarContainer">
            <span>Auto Wah</span>
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

        <div className="autoWahMiddleEffectControlsContainer">
          <div className="middleEffectControls">
            <h2 className="effectHeading">Base Frequency</h2>
            <Slider
              parentId={parentId}
              property="frequency"
              step="1"
              min="0"
              max="100"
              value={frequency}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Octaves</h2>
            <Slider
              parentId={parentId}
              property="octaves"
              step="0.01"
              min="0"
              max="6"
              value={octaves}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Sensitivity</h2>
            <Slider
              parentId={parentId}
              property="sensitivity"
              step="0.01"
              min="0"
              max="6"
              on={on}
              value={sensitivity}
              handleChange={handleEffectValueChange}
            />
            <h2 className="effectHeading">Q</h2>
            <Slider
              parentId={parentId}
              property="q"
              step="0.1"
              min="0"
              max="10"
              value={q}
              handleChange={handleEffectValueChange}
            />
          </div>

          <div className="middleEffectControls">
            <h2 className="effectHeading">Gain</h2>
            <Slider
              parentId={parentId}
              property="gain"
              step="0.1"
              min="0"
              max="10"
              value={gain}
              handleChange={handleEffectValueChange}
            />

            <h3>Follower</h3>
            <h2 className="effectHeading">Attack</h2>
            <Slider
              parentId={parentId}
              property="follower.attack"
              step="0.01"
              min="0"
              max="1"
              value={follower.attack}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Release</h2>
            <Slider
              parentId={parentId}
              property="follower.release"
              step="0.01"
              min="0"
              max="1"
              value={follower.release}
              handleChange={handleEffectValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
