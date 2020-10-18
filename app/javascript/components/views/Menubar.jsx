import React from 'react'

import SimpleButton from '../controls/SimpleButton'

export default class Menubar extends React.Component {
  constructor(props) {
    super(props)
  }

  renderMixerMenu = () => {
    const { tempo, transportIsOn, handleTogglePlay } = this.props

    let playButtonText = 'Play'

    if (transportIsOn) {
      playButtonText = 'Stop'
    }

    return (
      <div>
        <SimpleButton text={playButtonText} handleClick={handleTogglePlay} />
        {tempo} BPM
      </div>
    )
  }

  renderMusicianMenu = () => {
    const {
      handleSynthCreate,
      handleSamplerCreate,
      handleAudioCreate,
      handlePartCreate
    } = this.props

    return (
      <div>
        <SimpleButton text="New Synth" handleClick={handleSynthCreate} />
        <SimpleButton text="New Sampler" handleClick={handleSamplerCreate} />
        <SimpleButton text="New Audio" handleClick={handleAudioCreate} />
        <SimpleButton text="New Part" handleClick={handlePartCreate} />
      </div>
    )
  }

  render() {
    const { view } = this.props

    return (
      <div className="Menubar">
        <div>ADC Synth</div>

        {
          // prettier-ignore
          view === 'musician' ? this.renderMusicianMenu() : this.renderMixerMenu()
        }
      </div>
    )
  }
}
