import React from 'react'
import * as Tone from 'tone'

import ToggleButton from '../controls/ToggleButton'
import Slider from '../controls/Slider'
import Knob from '../controls/Knob'
import ButtonSet from '../controls/ButtonSet'

export default class ToneSynth extends React.Component {
  constructor(props) {
    super(props)
  }

  handleEnvelopeChange = (property, value) => {
    const { changeEnvelopeValue } = this.props
    changeEnvelopeValue(property, value)
    // console.log(property, value)
  }
  handleChangeTypeOscillator = (property, value) => {
    const { changeTypeOscillator } = this.props
    changeTypeOscillator(property, value)
    // console.log(property, value)
  }

  render() {
    const { instrument } = this.props
    // const { harmonicity, modulationIndex, resonance, octaves } = instrument
    const { type, sourceType, modulationType, phase } = instrument.oscillator
    const { attack, decay, sustain, release } = this.props.instrument.envelope
    //
    const typeSet = ['sine', 'square', 'triangle', 'sawtooth']
    // const sourceTypeSet = ['fm', 'am', 'fat', 'pwm', 'pulse']
    // const modulationTypeSet = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div className="Synth">
        <ToggleButton
        // text={text} on={on} handleClick={togglePlay}
        />
        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Type</h2>
            <ButtonSet
              property="oscillator.type"
              set={typeSet}
              value={type}
              handleChange={this.handleChangeTypeOscillator}
            />

            <h2>Envelope</h2>

            <h2>Attack</h2>
            <Slider
              property="attack"
              step="0.01"
              min="0"
              max="1"
              current={attack}
              handleChange={this.handleEnvelopeChange}
            />

            <h2>Decay</h2>
            <Slider
              property="decay"
              step="0.01"
              min="0"
              max="1"
              current={decay}
              handleChange={this.handleEnvelopeChange}
            />

            <h2>Sustain</h2>
            <Slider
              property="sustain"
              step="0.01"
              min="0"
              max="1"
              current={sustain}
              handleChange={this.handleEnvelopeChange}
            />

            <h2>Release</h2>
            <Slider
              property="release"
              step="0.01"
              min="0"
              max="1"
              current={release}
              handleChange={this.handleEnvelopeChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
