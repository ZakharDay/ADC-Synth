import React from 'react'

import SimpleButton from '../controls/SimpleButton'

export default class Menubar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { bpm, isOn, handleTogglePlay } = this.props

    let playButtonText = 'Play'

    if (isOn) {
      playButtonText = 'Stop'
    }

    return (
      <div className="Menubar">
        <div className="logo">ADC Synth</div>
        <div className="control">
          {bpm} BPM
          <SimpleButton text={playButtonText} handleClick={handleTogglePlay} />
        </div>
        <div className="login">log in</div>
      </div>
    )
  }
}
