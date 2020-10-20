import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class PitchShift extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { pitchShift: prop }
  }

  render() {
    const {
      settings,
      instrumentId,
      chanheEffectSetValue,
      existenceСheck
    } = this.props

    return (
      <div className="Effect">
        <ToggleButton text="Pitch Shift" on={on} handleClick={toggleEffect} />

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

            <h2>Pitch</h2>
            <Slider
              name={name}
              property="pitch"
              min="-24"
              max="24"
              value={effect.pitch}
              handleValueChange={changeEffectValue}
            />

            <h2>Window Size</h2>
            <Slider
              name={name}
              property="windowSize"
              min="0"
              max="0.2"
              value={effect.windowSize}
              handleValueChange={changeEffectValue}
            />

            <h2>Feedback</h2>
            <Slider
              name={name}
              property="feedback.value"
              min="0"
              max="100"
              on={on}
              value={effect.feedback.value}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
