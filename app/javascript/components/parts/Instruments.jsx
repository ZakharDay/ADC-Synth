import React from 'react'

import Synth from '../instruments/Synth'
import Sampler from '../instruments/Sampler'
import Audio from '../instruments/Audio'

export default class Instruments extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      instruments,
      currentInstrument,
      currentBarTab,
      handleBarTabChange
    } = this.props
    let instrumentElements = []

    instruments.forEach((instrument, i) => {
      if (instrument.type === 'synth') {
        instrumentElements.push(
          <Synth
            {...instrument}
            currentInstrument={currentInstrument}
            currentBarTab={currentBarTab}
            handleBarTabChange={handleBarTabChange}
            key={i}
          />
        )
      } else if (instrument.type === 'sampler') {
        instrumentElements.push(
          <Sampler
            {...instrument}
            currentInstrument={currentInstrument}
            currentBarTab={currentBarTab}
            handleBarTabChange={handleBarTabChange}
            key={i}
          />
        )
      } else if (instrument.type === 'audio') {
        instrumentElements.push(
          <Audio
            {...instrument}
            currentInstrument={currentInstrument}
            currentBarTab={currentBarTab}
            handleBarTabChange={handleBarTabChange}
            key={i}
          />
        )
      }
    })

    return <div className="Instruments">{instrumentElements}</div>
  }
}
