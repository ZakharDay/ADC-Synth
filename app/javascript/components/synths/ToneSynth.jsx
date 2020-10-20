import React from 'react'

import ToggleButton from '../controls/ToggleButton'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class ToneSynth extends React.Component {
  constructor(props) {
    super(props)
  }

  // handleEnvelopeChange = (property, value) => {
  //   const { changeEnvelopeValue } = this.props
  //   changeEnvelopeValue(property, value)
  //   // console.log(property, value)
  // }
  // handleChangeTypeOscillator = (property, value) => {
  //   const { changeTypeOscillator } = this.props
  //   changeTypeOscillator(property, value)
  //   // console.log(property, value)
  // }
  existenceСheck = (prop) => {
    if (!prop) {
      prop = 0
    }
    return prop
  }

  render() {
    const {
      instrumentId,
      settings,
      changeEnvelopeValue,
      handleChangeDetune
    } = this.props

    // const { harmonicity, modulationIndex, resonance, octaves } = instrument
    const { attack, decay, sustain, release } = settings.synth.envelope
    let { detune } = settings.synth
    detune = this.existenceСheck(detune)
    //
    const typeSet = ['sine', 'square', 'triangle', 'sawtooth']
    // const sourceTypeSet = ['fm', 'am', 'fat', 'pwm', 'pulse']
    // const modulationTypeSet = ['sine', 'square', 'triangle', 'sawtooth']

    // <h2>Type</h2>
    // <ButtonSet
    //   property="oscillator.type"
    //   set={typeSet}
    //   value="none"
    //   handleChange={this.handleChangeTypeOscillator}
    // />
    //
    return (
      <div className="Synth">
        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Detune</h2>
            <Knob
              current={detune}
              min={-1000}
              max={1000}
              instrumentId={instrumentId}
              property="detune"
              handleChange={handleChangeDetune}
            />
            <h2>Envelope</h2>
            <h2>Attack</h2>
            <Slider
              property="attack"
              step="0.01"
              min="0"
              max="1"
              current={attack}
              instrumentId={instrumentId}
              handleChange={changeEnvelopeValue}
            />

            <h2>Decay</h2>
            <Slider
              property="decay"
              step="0.01"
              min="0"
              max="1"
              current={decay}
              instrumentId={instrumentId}
              handleChange={changeEnvelopeValue}
            />

            <h2>Sustain</h2>
            <Slider
              property="sustain"
              step="0.01"
              min="0"
              max="1"
              current={sustain}
              instrumentId={instrumentId}
              handleChange={changeEnvelopeValue}
            />

            <h2>Release</h2>
            <Slider
              property="release"
              step="0.01"
              min="0"
              max="1"
              current={release}
              instrumentId={instrumentId}
              handleChange={changeEnvelopeValue}
            />
          </div>
        </div>
      </div>
    )
  }
}
