import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class BitCrusher extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { bitCrusher: prop }
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
        <ToggleButton text="Bit Crusher" on={on} handleClick={toggleEffect} />

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

            <h2>Bits</h2>
            <Slider
              name={name}
              property="bits"
              min="1"
              max="8"
              on={on}
              value={effect.bits}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
