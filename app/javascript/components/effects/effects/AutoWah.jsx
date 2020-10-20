import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class AutoWah extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { autoWah: prop }
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
        <ToggleButton text="Auto Wah" on={on} handleClick={toggleEffect} />

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

            <h2>Base Frequency</h2>
            <Slider
              name={name}
              property="baseFrequency.value"
              min="0"
              max="1000"
              value={effect.baseFrequency.value}
              handleValueChange={changeEffectValue}
            />

            <h2>Octaves</h2>
            <Slider
              name={name}
              property="octaves.value"
              min="0"
              max="6"
              on={on}
              value={effect.octaves.value}
              handleValueChange={changeEffectValue}
            />

            <h2>Sensitivity</h2>
            <Slider
              name={name}
              property="sensitivity"
              min="0"
              max="6"
              on={on}
              value={effect.sensitivity}
              handleValueChange={changeEffectValue}
            />

            <h2>Q</h2>
            <Slider
              name={name}
              property="q"
              min="0"
              max="10"
              on={on}
              value={effect.q}
              handleValueChange={changeEffectValue}
            />

            <h2>Gain</h2>
            <Slider
              name={name}
              property="gain.value"
              min="0"
              max="10"
              on={on}
              value={effect.gain.value}
              handleValueChange={changeEffectValue}
            />

            <h2>Follower</h2>
            <h2>Attack</h2>
            <Slider
              name={name}
              property="follower.attack"
              min="0"
              max="1"
              on={on}
              value={effect.follower.attack}
              handleValueChange={changeEffectValue}
            />

            <h2>Release</h2>
            <Slider
              name={name}
              property="follower.release"
              min="0"
              max="1"
              on={on}
              value={effect.follower.release}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
