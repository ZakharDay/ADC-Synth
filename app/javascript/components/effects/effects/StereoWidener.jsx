import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class StereoWidener extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { stereoWidener: prop }
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
        <ToggleButton
          text="Stereo Widener"
          on={on}
          handleClick={toggleEffect}
        />

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

            <h2>Width</h2>
            <Slider
              name={name}
              property="width.value"
              min="0"
              max="1"
              value={effect.width.value}
              handleValueChange={changeEffectValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
