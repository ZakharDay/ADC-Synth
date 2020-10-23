import React, { PureComponent } from 'react'

import ToggleButton from '../controls/ToggleButton'
import Slider from '../controls/Slider'
import KnobNew from '../controls/KnobNew'
import ButtonSet from '../controls/ButtonSetNew'

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
      <div className="controlsContainer">
        <div className="smallBar">
          <div>
            <span>Tone Synth</span>
            <p></p>
          </div>
        </div>
        <div className="controlsRow">
          <div className="commonCettings">
            <h2>Common Cettings</h2>

            <KnobNew
              parentId={id}
              property="portamento"
              min={-1000}
              max={1000}
              value={0}
              name="Portamento"
              handleChange={handleSynthValueChange}
            />
            <KnobNew
              parentId={id}
              property="detune"
              min={-1000}
              max={1000}
              value={0}
              name="Detune"
              handleChange={handleSynthValueChange}
            />
            <ButtonSet text="Source Type" set={sourceTypeSet} current="fm" />

            <ButtonSet
              text="Modulation Type"
              set={modulationTypeSet}
              current="sine"
            />
            <ButtonSet text="Type" set={typeSet} current="sine" />

            <Slider
              parentId={id}
              property="phase"
              step="1"
              min="0"
              max="360"
              value={phase}
              name="Phase"
              handleChange={handleSynthValueChange}
            />
          </div>
          <div className="envelope">
            <h2>Envelope</h2>
            <Slider
              parentId={id}
              property="envelope.attack"
              step="0.01"
              min="0"
              max="1"
              value={attack}
              name="Attack"
              handleChange={handleSynthValueChange}
            />
            <Slider
              parentId={id}
              property="envelope.decay"
              step="0.01"
              min="0"
              max="1"
              value={decay}
              name="Decay"
              handleChange={handleSynthValueChange}
            />
            <Slider
              parentId={id}
              property="envelope.sustain"
              step="0.01"
              min="0"
              max="1"
              value={sustain}
              name="Sustain"
              handleChange={handleSynthValueChange}
            />
            <Slider
              parentId={id}
              property="envelope.release"
              step="0.01"
              min="0"
              max="1"
              value={release}
              name="Release"
              handleChange={handleSynthValueChange}
            />
          </div>
        </div>
      </div>
    )
  }
}
