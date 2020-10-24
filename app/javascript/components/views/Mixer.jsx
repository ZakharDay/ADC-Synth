import React, { PureComponent } from 'react'

import SynthTest from '../instruments/SynthTest'

export default class Mixer extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderSynths = () => {
    const { instruments, measure, updatePart } = this.props
    let instrumentElements = []

    instruments.forEach((instrument, i) => {
      instrumentElements.push(
        <SynthTest
          instrument={instrument}
          measure={measure}
          updatePart={updatePart}
          key={i}
        />
      )
    })

    return instrumentElements
  }

  renderInstrumentNames = () => {
    const { instruments, currentQuarter } = this.props
    let instrumentNames = []

    instruments.forEach((instrument, i) => {
      instrumentNames.push(
        <div key={i} className="parts">
          Channel
        </div>
      )

      if (instrument.effects.length > 0) {
        instrument.effects.forEach((effect, i) => {
          instrumentNames.push(
            <div key={1 + Math.random(Math.floor() * 100)} className="parts">
              Effec
            </div>
          )
        })
      }

      // instrumentNames.push(
      //   <SynthTest
      //     instrument={instrument}
      //     currentQuarter={currentQuarter}
      //     key={i}
      //   />
      // )
    })

    return instrumentNames
  }

  render() {
    return (
      <div className="Mixer">
        <div className="MixerBar">
          <div className="mixerBarHeading">MIIXER</div>
        </div>
        <div className="mixerBody">
          <div className="instrumentNames">{this.renderInstrumentNames()}</div>
          <div className="content">{this.renderSynths()}</div>
        </div>
      </div>
    )
  }
}
