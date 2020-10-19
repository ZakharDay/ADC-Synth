import React, { PureComponent } from 'react'

export default class EffectTest extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { effect, settings } = this.props
    const { webaudio } = effect

    if (webaudio) {
      if (effect.name === 'feedbackDelay') {
        webaudio.delayTime.value = settings.delayTime
        webaudio.maxDelay = settings.maxDelay
      } else if (effect.name === 'chorus') {
        webaudio.frequency.value = settings.frequency
        webaudio.delayTime = settings.delayTime
        webaudio.depth = settings.depth
        webaudio.type = settings.type
        webaudio.spread = settings.spread
      } else if (effect.name === 'distortion') {
        webaudio.distortion = settings.distortion
        webaudio.versample = settings.oversample
      }
    }

    return <div className="EffectTest">Effect</div>
  }
}
