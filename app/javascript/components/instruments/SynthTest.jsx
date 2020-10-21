import React, { PureComponent } from 'react'

import EffectTest from '../effects/EffectTest'
import ChannelTest from '../parts/ChannelTest'

export default class SynthTest extends PureComponent {
  constructor(props) {
    super(props)
  }

  thiggerAttackRelease = () => {
    // console.log(this.props)
    const { instrument, currentQuarter } = this.props
    let sequence = []

    instrument.parts.forEach((part, i) => {
      if (part.current) {
        sequence = part.sequence
      }
    })

    sequence.forEach((step, i) => {
      if (step.step == currentQuarter) {
        instrument.webaudio.triggerAttackRelease(step.note + step.octave, '4n')
      }
    })
  }

  renderEffects = () => {
    const { instrument } = this.props
    let effectElements = []

    instrument.effects.forEach((effect, i) => {
      instrument.parts[0].effects.forEach((e, i) => {
        if (e.name === effect.name) {
          effectElements.push(
            <EffectTest effect={effect} settings={e} key={i} />
          )
        }
      })
    })

    return effectElements
  }

  renderChannel = () => {
    const { instrument } = this.props

    return (
      <ChannelTest
        channel={instrument.channel}
        settings={instrument.parts[0].channel}
      />
    )
  }

  render() {
    const { instrument } = this.props
    const { parts, webaudio } = instrument

    // console.log(instrument.webaudio)

    if (webaudio) {
      webaudio.envelope.attack = parts[0].synth.envelope.attack
      webaudio.envelope.decay = parts[0].synth.envelope.decay
      webaudio.envelope.sustain = parts[0].synth.envelope.sustain
      webaudio.envelope.release = parts[0].synth.envelope.release
    }

    this.thiggerAttackRelease()

    return (
      <div className="SynthTest">
        {this.renderEffects()}
        {instrument.channel ? this.renderChannel() : ''}
      </div>
    )
  }
}
