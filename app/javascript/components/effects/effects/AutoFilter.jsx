import React, { PureComponent } from 'react'

import Slider from '../../controls/SliderNew'
import ButtonSet from '../../controls/ButtonSetNew'
import Select from '../../controls/SelectNew'
import KnobNew from '../../controls/KnobNew'

export default class AutoFilter extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { parentId, effect, handleEffectValueChange } = this.props

    const {
      wet,
      frequency,
      type,
      depth,
      baseFrequency,
      octaves,
      filter,
      name
    } = effect

    // prettier-ignore
    const typeSet = ["sawtooth","sine","square","triangle","sine1","sine2","sine3","sine4","sine5","sine6","sine7","sine8","sine9","sine10","sine11","sine12","sine13","sine14","sine15","sine16","sine17","sine18","sine19","sine20","sine21","sine22","sine23","sine24","sine25","sine26","sine27","sine28","sine29","sine30","sine31","sine32","square1","square2","square3","square4","square5","square6","square7","square8","square9","square10","square11","square12","square13","square14","square15","square16","square17","square18","square19","square20","square21","square22","square23","square24","square25","square26","square27","square28","square29","square30","square31","square32","triangle1","triangle2","triangle3","triangle4","triangle5","triangle6","triangle7","triangle8","triangle9","triangle10","triangle11","triangle12","triangle13","triangle14","triangle15","triangle16","triangle17","triangle18","triangle19","triangle20","triangle21","triangle22","triangle23","triangle24","triangle25","triangle26","triangle27","triangle28","triangle29","triangle30","triangle31","triangle32","sawtooth1","sawtooth2","sawtooth3","sawtooth4","sawtooth5","sawtooth6","sawtooth7","sawtooth8","sawtooth9","sawtooth10","sawtooth11","sawtooth12","sawtooth13","sawtooth14","sawtooth15","sawtooth16","sawtooth17","sawtooth18","sawtooth19","sawtooth20","sawtooth21","sawtooth22","sawtooth23","sawtooth24","sawtooth25","sawtooth26","sawtooth27","sawtooth28","sawtooth29","sawtooth30","sawtooth31","sawtooth32"]

    const filterTypeSet = ['lowpass', 'highpass']
    const rolloffSet = [-12, -24, -48, -96]

    return (
      <div className="Effect">
        <div className="largeBar">
          <div className="largeContainer">
            <span>Auto Filter</span>
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
        <div className="autoFilterLargeEffectControlsContainer">
          <div className="largeEffectControls">
            <h2 id="firstInAutoFilter" className="effectHeading">
              Frequency
            </h2>
            <KnobNew
              parentId={parentId}
              property="frequency.value"
              min={0}
              max={100}
              value={0}
              name="Frequency"
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Base Frequency</h2>
            <KnobNew
              parentId={parentId}
              property="baseFrequency"
              min={0}
              max={1800}
              value={0}
              name="Base Frequency"
              handleChange={handleEffectValueChange}
            />
            <h2 className="effectHeading">Octaves</h2>
            <Slider
              parentId={parentId}
              property="octaves"
              step="1"
              min="0"
              max="6"
              value={octaves}
              handleChange={handleEffectValueChange}
            />
          </div>
          <div className="largeEffectControls">
            <h2 className="effectHeading">Depth</h2>
            <Slider
              parentId={parentId}
              property="depth.value"
              step="0.01"
              min="0"
              max="1"
              value={depth}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Type</h2>
            <Select
              parentId={parentId}
              property="type"
              set={typeSet}
              value={type}
              current={type}
              options={typeSet}
              handleValueChange={handleEffectValueChange}
            />
            <h3 className="subEffectHeading">Filter</h3>
            <h2 id="secondInAutoFilter" className="effectHeading">
              Type
            </h2>
            <ButtonSet
              parentId={parentId}
              property="filter.type"
              set={filterTypeSet}
              value={filter.type}
              current={filter.type}
              handleChange={handleEffectValueChange}
            />

            <h2 className="effectHeading">Rolloff</h2>
            <ButtonSet
              parentId={parentId}
              property="filter.rolloff"
              set={rolloffSet}
              value={filter.rolloff}
              current={filter.rolloff}
              handleChange={handleEffectValueChange}
            />

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
          </div>
        </div>
      </div>
    )
  }
}
