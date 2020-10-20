import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Distortion extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { distortion: prop }
  }

  render() {
    let {
      settings,
      instrumentId,
      chanheEffectSetValue,
      existenceСheck
      // name,
      // effect,
      // wet,
      // toggleEffect,
      // changeEffectWetValue,
      // changeEffectValue
    } = this.props
    const set = {
      none: () => chanheEffectSetValue(instrumentId, this.createProp(''), ''),
      x2: () => chanheEffectSetValue(instrumentId, this.createProp('2x'), '2x'),
      x4: () => chanheEffectSetValue(instrumentId, this.createProp(), '4x')
    }

    settings.effects.forEach((effect, i) => {
      if (effect.name === 'distortion') {
        settings = effect
      }
    })

    let { wet, distortion, oversample } = settings
    wet = existenceСheck(wet)
    distortion = existenceСheck(distortion)
    oversample = existenceСheck(oversample)

    return (
      <div className="Effect">
        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Wet</h2>
            <Slider
              property={this.createProp('wet')}
              min="0"
              max="1"
              step="0.1"
              current={wet}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />

            <h2>Distortion</h2>
            <Slider
              property={this.createProp('distortion')}
              min="0"
              max="20"
              step="1"
              current={distortion}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />
            <h2>Oversample</h2>
            <ButtonSet set={set} current={oversample} />
          </div>
        </div>
      </div>
    )
  }
}
