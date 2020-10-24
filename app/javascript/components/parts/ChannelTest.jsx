import React, { PureComponent } from 'react'
import MixerSlider from '../controls/MixerSlider'
import ChannelButton from '../controls/ChannelButtonNew'

export default class ChannelTest extends PureComponent {
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

    return (
      <div>
        <div className="ChannelTest">
          <div>12%</div>
          <MixerSlider
            parentId={null}
            property="volume"
            step="0.1"
            min="0"
            max="100"
          />
          <ChannelButton text="1" />
        </div>
      </div>
    )
  }
}
