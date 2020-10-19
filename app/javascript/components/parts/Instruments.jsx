import React from 'react'

import Synth from '../instruments/Synth'
import Sound from './Sound'
import Sequencer from './Sequencer'
import Sampler from '../instruments/Sampler'
import Audio from '../instruments/Audio'
import SimpleButton from '../controls/SimpleButton'
import ButtonSet from '../controls/ButtonSet'

export default class Instruments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      instruments
      // currentBarTab,
      // handleBarTabChange
    } = this.props

    let instrumentElements = []
    let instrumentSetting

    instruments.forEach((instrument, i) => {
      if (instrument.kind === 'synth') {
        instrumentElements.push(<Synth instrument={instrument} key={i} />)
      } else if (instrument.kind === 'sampler') {
        instrumentElements.push(<div key={i}>Sampler</div>)
      }
    })

    let set = {
      Synth: this.props.handleSynthCreate,
      Sampler: this.props.handleSamplerCreate,
      Audio: this.props.handleAudioCreate
    }

    return (
      <div className="Instruments">
        {instrumentElements}
        {instrumentSetting}

        <ButtonSet text="+ Add Instrument" set={set} />
      </div>
    )
  }
}
