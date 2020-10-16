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
        <div>
          ADC Synth
          <SimpleButton text={playButtonText} handleClick={handleSynthCreate} />
          {bpm} BPM
        </div>

        <div>
          <SimpleButton text="New Synth" handleClick={handleSynthCreate} />
          <SimpleButton text="New Sampler" handleClick={handleSamplerCreate} />
          <SimpleButton text="New Audio" handleClick={handleAudioCreate} />
          <SimpleButton text="New Part" handleClick={handlePartCreate} />
        </div>
      </div>
    )
  }
}
