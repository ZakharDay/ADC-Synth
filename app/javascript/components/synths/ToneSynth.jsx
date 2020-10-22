import React, { PureComponent } from 'react'

import ToggleButton from '../controls/ToggleButton'
import Slider from '../controls/Slider'
import KnobNew from '../controls/KnobNew'
import ButtonSet from '../controls/ButtonSet'

export default class ToneSynth extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { instrument, settings, handleSynthValueChange } = this.props
    const { id } = instrument

    let { detune, portamento } = settings.synth
    let { type, sourceType, modulationType, phase } = settings.synth.oscillator
    let { attack, decay, sustain, release } = settings.synth.envelope

    const typeSet = ['sine', 'square', 'triangle', 'sawtooth']
    const sourceTypeSet = ['fm', 'am', 'fat', 'pwm', 'pulse']
    const modulationTypeSet = ['sine', 'square', 'triangle', 'sawtooth']

    return (
      <div className="Synth">
        <div className="controlsContainer">
          <div className="controlsRow">
            // Detune, Portamento // Oscillator
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
