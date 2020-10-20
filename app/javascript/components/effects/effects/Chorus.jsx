import React from 'react'

// import PlaySwitch from '../controls/PlaySwitch'
import ToggleButton from '../../controls/ToggleButton'
import Slider from '../../controls/Slider'
import Knob from '../../controls/Knob'
import ButtonSet from '../../controls/ButtonSet'
import Select from '../../controls/Select'

export default class Chorus extends React.Component {
  constructor(props) {
    super(props)
  }

  createProp = (prop) => {
    return { chorus: prop }
  }

  render() {
    const set = {
      sine: () =>
        chanheEffectSetValue(instrumentId, this.createProp('sine'), 'sine'),
      square: () =>
        chanheEffectSetValue(instrumentId, this.createProp('square'), 'square'),
      triangle: () =>
        chanheEffectSetValue(
          instrumentId,
          this.createProp('triangle'),
          'triangle'
        ),
      sawtooth: () =>
        chanheEffectSetValue(
          instrumentId,
          this.createProp('sawtooth'),
          'sawtooth'
        )
    }

    const {
      settings,
      instrumentId,
      chanheEffectSetValue,
      existenceСheck
    } = this.props

    let { wet, frequency, delayTime, depth, spread, type } = settings
    wet = existenceСheck(wet)
    frequency = existenceСheck(frequency)
    delayTime = existenceСheck(delayTime)
    depth = existenceСheck(depth)
    spread = existenceСheck(spread)
    type = existenceСheck(type)

    // <ToggleButton text="Chorus" on={on} handleClick={toggleEffect} />
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

            <h2>Frequency</h2>
            <Slider
              property={this.createProp('frequency')}
              min="0"
              max="100"
              step="10"
              current={frequency}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />

            <h2>Delay Time</h2>
            <Slider
              property={this.createProp('delayTime')}
              min="0"
              max="10"
              step="1"
              current={delayTime}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />

            <h2>Depth</h2>
            <Slider
              property={this.createProp('depth')}
              min="0"
              max="1"
              step="0.1"
              current={depth}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />

            <h2>Type</h2>
            <ButtonSet set={set} current={type} />

            <h2>Spread</h2>
            <Slider
              property={this.createProp('spread')}
              min="0"
              max="360"
              step="10"
              current={spread}
              handleChange={chanheEffectSetValue}
              instrumentId={instrumentId}
            />
          </div>
        </div>
      </div>
    )
  }
}
