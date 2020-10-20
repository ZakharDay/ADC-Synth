import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Reverb extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { reverb: prop }
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
        <ToggleButton text="Reverb" on={on} handleClick={toggleEffect} />

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

            <h2>Decay</h2>
            <Slider
              name={name}
              property="decay"
              min="0"
              max="10"
              value={effect.decay}
              handleValueChange={changeEffectValue}
            />

            <h2>Pre Delay</h2>
            <Slider
              name={name}
              property="preDelay"
              min="0"
              max="1"
              value={effect.preDelay}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
