import React, { PureComponent } from 'react'

import SynthTest from '../instruments/SynthTest'

export default class Mixer extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderSynths = () => {
    const { instruments, currentQuarter } = this.props
    let instrumentElements = []

    instruments.forEach((instrument, i) => {
      instrumentElements.push(
        <SynthTest
          instrument={instrument}
          currentQuarter={currentQuarter}
          key={i}
        />
      )
    })

    return instrumentElements
  }

  render() {
    return <div className="Mixer">{this.renderSynths()}</div>
  }
}
