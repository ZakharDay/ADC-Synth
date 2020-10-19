import React from 'react'

import Button from '../controls/Button'

import Sequencer from './Sequencer'
import ToneSynth from './ToneSynth'
import Effects from '../effects/Effects'

export default class Voice extends React.Component {
  constructor(props) {
    super(props)
  }

  handleCreateEffect = () => {
    console.log('clic')
    let voice = this.props
    let effect = {}

    let feedbackDelay = new Tone.FeedbackDelay('8n', 0.5).toDestination()

    //effect = effectInitials.feedbackDelay()
    voice.effects.push(feedbackDelay)

    voice.synth.webaudio.connect(feedbackDelay)
  }

  render() {
    const { sequencer, synth, currentQuarter, handleCreateEffect } = this.props

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

        <Effects
          effect={this.props.effects}
          handleCreateEffect={this.handleCreateEffect}
        />

        <Sequencer
          {...sequencer}
          currentQuarter={currentQuarter}
          synth={synth}
        />
      </div>
    )
  }
}
