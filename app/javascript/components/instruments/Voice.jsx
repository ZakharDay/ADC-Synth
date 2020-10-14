import React from 'react'
import * as Tone from 'tone'

import Sequencer from './Sequencer'
import ToneSynth from './ToneSynth'

export default class Voice extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Voice">
        <ToneSynth
          // text="Bass Synth"
          instrument={this.props.synth.webaudio}
          // on=""
          changeTypeOscillator={this.props.changeTypeOscillator}
          // togglePlay=""
          changeEnvelopeValue={this.props.changeEnvelopeValue}
        />
        <Sequencer {...this.props.sequencer} />
      </div>
    )
  }
}
