import React, { PureComponent } from 'react'

import SimpleButton from '../controls/SimpleButton'

export default class SynthTest extends PureComponent {
  constructor(props) {
    super(props)
  }

  thiggerAttackRelease = () => {
    const { instrument, currentQuarter } = this.props
    const { sequence } = instrument.parts[0]

    sequence.forEach((step, i) => {
      if (step.step == currentQuarter) {
        instrument.webaudio.triggerAttackRelease(step.note + step.octave, '4n')
      }
    })
  }

  render() {
    const { instrument, handleClick } = this.props
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
        <SimpleButton text="Play Note" handleClick={handleClick} />
      </div>
    )
  }
}
