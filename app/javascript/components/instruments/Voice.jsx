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
        <Sequencer {...this.props.sequencer} />
        <ToneSynth />
      </div>
    )
  }
}
