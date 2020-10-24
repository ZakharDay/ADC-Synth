import React, { PureComponent } from 'react'

import MixerSlider from '../controls/MixerSlider'
import ChannelButton from '../controls/ChannelButtonNew'

export default class EffectTest extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { effect, settings } = this.props
    const { webaudio } = effect

    if (webaudio) {
      webaudio.wet.value = settings.wet

      switch (effect.name) {
        case 'autoFilter':
          webaudio.frequency.value = settings.frequency
          webaudio.baseFrequency = settings.baseFrequency
          webaudio.octaves = settings.octaves
          webaudio.depth.value = settings.depth
          webaudio.type = settings.type
          webaudio.filter.type = settings.filter.type
          webaudio.filter.rolloff = settings.filter.rolloff
          webaudio.filter.q = settings.filter.q
          break
        case 'autoPanner':
          webaudio.frequency.value = settings.frequency
          webaudio.type = settings.type
          webaudio.depth.value = settings.depth
          break
        case 'autoWah':
          webaudio.frequency.value = settings.frequency
          webaudio.octaves = settings.octaves
          webaudio.sensitivity = settings.sensitivity
          webaudio.q = settings.q
          webaudio.gain.value = settings.gain
          webaudio.follower.attack = settings.follower.attack
          webaudio.follower.release = settings.follower.release
          break
        case 'bitCrusher':
          webaudio.bits = settings.bits
          break
        case 'chebyshev':
          webaudio.order = settings.order
          webaudio.oversample = settings.oversample
          break
        case 'chorus':
          webaudio.frequency.value = settings.frequency
          webaudio.delayTime = settings.delayTime
          webaudio.depth = settings.depth
          webaudio.type = settings.type
          webaudio.spread = settings.spread
          break
        case 'distortion':
          webaudio.distortion = settings.distortion
          webaudio.versample = settings.oversample
          break
        case 'feedbackDelay':
          webaudio.delayTime.value = settings.delayTime
          webaudio.maxDelay = settings.maxDelay
          break
        case 'feedbackEffect':
          webaudio.feedback.value = settings.feedback
          break
        case 'freeverb':
          webaudio.roomSize.value = settings.roomSize
          webaudio.dampening.value = settings.dampening
          break
        case 'jcReverb':
          webaudio.roomSize.value = settings.roomSize
          break
        case 'phaser':
          webaudio.frequency.value = settings.frequency
          webaudio.octaves = settings.octaves
          webaudio.stages = settings.stages
          webaudio.filter.q = settings.filter.q
          webaudio.baseFrequency.value = settings.baseFrequency
          break
        case 'pingPongDelay':
          webaudio.delayTime.value = settings.delayTime
          webaudio.maxDelayTime = settings.maxDelayTime
          break
        case 'pitchShift':
          webaudio.pitch = settings.pitch
          webaudio.windowSize = settings.windowSize
          webaudio.feedback.value = settings.feedback
          break
        case 'reverb':
          webaudio.decay = settings.decay
          webaudio.preDelay = settings.preDelay
          break
        case 'stereoWidener':
          webaudio.width.value = settings.width
          break
        case 'tremolo':
          webaudio.frequency.value = settings.frequency
          webaudio.type = settings.type
          webaudio.depth.value = settings.depth
          webaudio.spread = settings.spread
          break
        case 'vibrato':
          webaudio.maxDelay = settings.maxDelay
          webaudio.frequency.value = settings.frequency
          webaudio.depth.value = settings.depth
          webaudio.type = settings.type
          break
      }
    }

    return (
      <div>
        <div className="channelBar">Effect </div>
        <div className="ChannelTest">
          <div>12%</div>
          <MixerSlider
            parentId={null}
            property="volume.value"
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
