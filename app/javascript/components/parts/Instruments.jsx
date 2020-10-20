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
      handleInstrumentCreate,
      changeEnvelopeValue,
      handleChangeDetune,
      handleChangeSequence,
      addEffects,
      chanheEffectSetValue
    } = this.props

    let instrumentElements = []

    instruments.forEach((instrument, i) => {
      if (instrument.kind === 'synth') {
        instrumentElements.push(
          <Synth
            instrumentId={i}
            instrument={instrument}
            changeEnvelopeValue={changeEnvelopeValue}
            handleChangeDetune={handleChangeDetune}
            handleChangeSequence={handleChangeSequence}
            addEffects={addEffects}
            key={i}
            chanheEffectSetValue={chanheEffectSetValue}
          />
        )
      } else if (instrument.kind === 'sampler') {
        instrumentElements.push(<div key={i}>Sampler</div>)
      }
    })

    let set = {
      Synth: () => handleInstrumentCreate('synth'),
      Sampler: () => handleInstrumentCreate('sampler')
    }

    return (
      <div className="Instruments">
        {instrumentElements}

        <Select text="+ Add Instrument" set={set} />
      </div>
    )
  }
}
