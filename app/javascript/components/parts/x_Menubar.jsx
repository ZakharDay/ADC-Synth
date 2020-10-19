import React from 'react'

import SimpleButton from '../controls/SimpleButton'

export default class Menubar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {
      bpm,
      isOn,
      handleSynthCreate,
      handleSamplerCreate,
      handleAudioCreate,
      handlePartCreate
    } = this.props

    let playButtonText = 'Play'

    if (isOn) {
      playButtonText = 'Stop'
    }

    return (
      <div className="Menubar">
        <div className="logo">ADC Synth</div>
        <div>SignIN</div>
      </div>
    )
  }
}
