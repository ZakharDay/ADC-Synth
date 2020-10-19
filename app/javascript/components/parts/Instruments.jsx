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
      instruments
      // currentBarTab,
      // handleBarTabChange
    } = this.props
    let instrumentElements = []

    instruments.forEach((instrument, i) => {
      if (instrument.kind === 'synth') {
        instrumentElements.push(<Synth instrument={instrument} key={i} />)
      } else if (instrument.kind === 'sampler') {
        instrumentElements.push(
          <div key={i}>Sampler</div>

          // <Sampler
          //   {...instrument}
          //   currentInstrument={currentInstrument}
          //   currentBarTab={currentBarTab}
          //   handleBarTabChange={handleBarTabChange}
          //   key={i}
          // />
        )
      }
    })

    return <div className="Instruments">{instrumentElements}</div>
  }
}
