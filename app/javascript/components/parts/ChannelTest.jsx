import React from 'react'

export default class ChannelTest extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { channel, settings } = this.props
    const { webaudio } = channel

    if (webaudio) {
      webaudio.pan.value = settings.pan
      webaudio.volume.value = settings.volume
      webaudio.mute = settings.mute
      webaudio.solo = settings.solo
    }

    return <div className="ChannelTest">Channel</div>
  }
}
