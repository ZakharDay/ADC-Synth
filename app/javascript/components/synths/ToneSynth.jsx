import React from 'react'

import ToggleButton from '../controls/ToggleButton'
import Slider from '../controls/Slider'
import KnobNew from '../controls/KnobNew'
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
      instrument,
      settings,
      handleSynthValueChange,
      changeEnvelopeValue,
      handleChangeDetune
    } = this.props

    const { id } = instrument

    // const { harmonicity, modulationIndex, resonance, octaves } = instrument
    let { attack, decay, sustain, release } = settings.synth.envelope
    let { detune, portamento } = settings.synth
    // detune = this.existenceСheck(detune)
    // attack = this.existenceСheck(attack)
    // decay = this.existenceСheck(decay)
    // sustain = this.existenceСheck(sustain)
    // release = this.existenceСheck(release)
    //
    const typeSet = ['sine', 'square', 'triangle', 'sawtooth']
    // const sourceTypeSet = ['fm', 'am', 'fat', 'pwm', 'pulse']
    // const modulationTypeSet = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div className="Synth">
        <div className="controlsContainer">
          <div className="controlsRow">
            <h2>Type</h2>

            <h2>Source Type</h2>

            <h2>Modulation Type</h2>

            <h2>Phase</h2>

            <h2>Detune</h2>
            <KnobNew
              parentId={id}
              property="detune"
              min={-1000}
              max={1000}
              value={0}
              handleChange={handleSynthValueChange}
            />
            <h2>Envelope</h2>
            <h2>Attack</h2>
            <Slider
              parentId={id}
              property="envelope.attack"
              step="0.01"
              min="0"
              max="1"
              value={attack}
              handleChange={handleSynthValueChange}
            />

            <h2>Decay</h2>
            <Slider
              parentId={id}
              property="envelope.decay"
              step="0.01"
              min="0"
              max="1"
              value={decay}
              handleChange={handleSynthValueChange}
            />

            <h2>Sustain</h2>
            <Slider
              parentId={id}
              property="envelope.sustain"
              step="0.01"
              min="0"
              max="1"
              value={sustain}
              handleChange={handleSynthValueChange}
            />

            <h2>Release</h2>
            <Slider
              parentId={id}
              property="envelope.release"
              step="0.01"
              min="0"
              max="1"
              value={release}
              handleChange={handleSynthValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
