import React from 'react'

import SimpleButton from '../controls/SimpleButton'

export default class Menubar extends React.Component {
  constructor(props) {
    super(props)
  }

  renderMixerMenu = () => {
    const { room, transportIsOn, handleTogglePlay } = this.props

    let playButtonText = 'Play'

    if (transportIsOn) {
      playButtonText = 'Stop'
    }

    return (
      <div>
        <SimpleButton text={playButtonText} handleClick={handleTogglePlay} />
        {room.tempo} BPM
      </div>
    )
  }

  renderMusicianMenu = () => {
    const { handleInstrumentCreate, handlePartCreate } = this.props

    return (
      <div>
        <SimpleButton
          text="New Synth"
          handleClick={() => handleInstrumentCreate('synth')}
        />

        <SimpleButton
          text="New Sampler"
          handleClick={() => handleInstrumentCreate('sampler')}
        />
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
