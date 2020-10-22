import React from 'react'

import Synth from '../instruments/Synth'
import Sound from './Sound'
import Sequencer from './Sequencer'
import Sampler from '../instruments/Sampler'
import Audio from '../instruments/Audio'
import SimpleButton from '../controls/SimpleButton'
import Select from '../controls/Select'

export default class Instruments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      instruments,
      handleSynthValueChange,
      handleEffectCreate,
      handleEffectValueChange
    } = this.props

    let instrumentElements = []

    instruments.forEach((instrument, i) => {
      if (instrument.kind === 'synth') {
        instrumentElements.push(
          <Synth
            instrument={instrument}
            handleSynthValueChange={handleSynthValueChange}
            handleEffectCreate={handleEffectCreate}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (instrument.kind === 'sampler') {
        instrumentElements.push(<div key={i}>Sampler</div>)
      }
    })

    return <div className="Instruments">{instrumentElements}</div>
  }
}
