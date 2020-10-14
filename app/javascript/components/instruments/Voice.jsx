import React from 'react'
import * as Tone from 'tone'

import Button from '../controls/Button'

import Sequencer from './Sequencer'
import ToneSynth from './ToneSynth'

export default class Voice extends React.Component {
  constructor(props) {
    super(props)
  }

  handleCreateEffect = () => {
    const { id, handleCreateEffect } = this.props
    handleCreateEffect(id)
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

        <Sequencer
          {...sequencer}
          currentQuarter={currentQuarter}
          synth={synth}
        />

        <Button
          name="button"
          property="no"
          option={true}
          text="Add Effect"
          current={true}
          handleClick={this.handleCreateEffect}
        />
      </div>
    )
  }
}
