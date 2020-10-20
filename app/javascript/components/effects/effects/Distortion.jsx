import React from 'react'

import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import ButtonSet from '../../controls/ButtonSet'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const set = ['none', '2x', '4x']

    const {
      name,
      effect,
      wet,
      on,
      toggleEffect,
      changeEffectWetValue,
      changeEffectValue
    } = this.props

    return (
      <div className="Effect">
        <ToggleButton text="Distortion" on={on} handleClick={toggleEffect} />

        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Wet</h2>
            <Slider
              name={name}
              property="wet"
              min="0"
              max="1"
              value={wet}
              handleValueChange={changeEffectWetValue}
            />

            <h2>Distortion</h2>
            <Slider
              name={name}
              property="distortion"
              min="0"
              max="20"
              on={on}
              value={effect.distortion}
              handleValueChange={changeEffectValue}
            />

            <h2>Oversample</h2>
            <ButtonSet
              name={name}
              property="oversample"
              set={set}
              value={effect.oversample}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
