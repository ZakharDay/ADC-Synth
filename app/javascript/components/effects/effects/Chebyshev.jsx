import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Chebyshev extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { chebyshev: prop }
  }

  render() {
    const set = ['none', '2x', '4x']

    const {
      settings,
      instrumentId,
      chanheEffectSetValue,
      existenceСheck
    } = this.props

    return (
      <div className="Effect">
        <ToggleButton text="Chebyshev" on={on} handleClick={toggleEffect} />

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

            <h2>Order</h2>
            <Slider
              name={name}
              property="order"
              min="1"
              max="100"
              on={on}
              value={effect.order}
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
