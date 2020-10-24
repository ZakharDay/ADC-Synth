import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/Select'

export default class Phaser extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props
    const { wet, stages, frequency, octaves, filter, baseFrequency } = effect

    return (
      <div className="Effect">
        <div className="mediumBar">
          <div className="mediumBarContainer">
            <span>Phaser</span>
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

        <div className="phaserMiddleEffectControlsContainer">
          <div className="middleEffectControls">
            <h2 className="effectHeading">Frequency</h2>
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

            <h2 className="effectHeading">Stages</h2>
            <Slider
              parentId={parentId}
              property="stages"
              step="0.1"
              min="0"
              max="10"
              value={stages}
              handleChange={handleEffectValueChange}
            />
          </div>
          <div className="middleEffectControls">
            <h2 className="subEffectHeading">Filter</h2>
            <h2 className="effectHeading">Q</h2>
            <Slider
              parentId={parentId}
              property="filter.q"
              step="0.1"
              min="0"
              max="10"
              value={filter.q}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Base Frequency</h2>
            <Slider
              parentId={parentId}
              property="baseFrequency"
              step="10"
              min="0"
              max="1000"
              value={baseFrequency}
              handleChange={handleEffectValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
