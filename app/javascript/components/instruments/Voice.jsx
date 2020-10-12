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
        <Sequencer
          {...sequencer}
          currentQuarter={currentQuarter}
          synth={synth}
        />

        <ToneSynth />

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
