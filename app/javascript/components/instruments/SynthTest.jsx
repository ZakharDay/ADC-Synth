import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import EffectTest from '../effects/EffectTest'
import ChannelTest from '../parts/ChannelTest'

export default class SynthTest extends PureComponent {
  constructor(props) {
    super(props)
  }

  updatePart = () => {
    const { instrument, measure } = this.props
    let sequence = []
    let webaudioSequence = []

    instrument.parts.forEach((part, i) => {
      if (part.current) {
        sequence = part.sequence
      }
    })

    sequence.forEach((step, i) => {
      // const currentTick = [measure.quarter, measure.sixteenth].join(':')
      const stepQuarter = step.step <= 4 ? 0 : Math.floor(step.step / 4) - 1

      const stepSixteenth =
        step.step <= 4 ? step.step - 1 : step.step - stepQuarter * 4 - 1

      const stepTick = [stepQuarter, stepSixteenth].join(':')

      // console.log(step, currentTick, stepQuarter, stepSixteenth)

      // if (currentTick === stepTick) {
      //   instrument.webaudio.triggerAttackRelease(step.note + step.octave, '1n')
      // }

      // for (var i = 0; i < 16; i++) {
      //   let synth = this.props.instrument.webaudio
      const v = 1

      webaudioSequence.push({
        time: ['0', stepTick].join(':'),
        noteName: [step.note, step.octave].join(''),
        duration: '1n',
        velocity: v
      })
      // }
    })

    console.log('yo', webaudioPart === '')

    let { webaudioPart } = instrument

    console.log(webaudioPart)

    webaudioPart.clear()

    const part = new Tone.Part((time, note) => {
      webaudioPart.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, webaudioSequence)

    part.loop = true
    part.loopEnd = '1m'
    part.mute = false
    part.start()

    webaudioPart = part
  }

  // triggerAttackRelease = () => {
  //   // console.log(this.props)
  //   const { instrument, measure } = this.props
  //   let sequence = []
  //
  //   instrument.parts.forEach((part, i) => {
  //     if (part.current) {
  //       sequence = part.sequence
  //     }
  //   })
  //
  //   sequence.forEach((step, i) => {
  //     const currentTick = [measure.quarter, measure.sixteenth].join(':')
  //     const stepQuarter = step.step <= 4 ? 0 : Math.floor(step.step / 4) - 1
  //     const stepSixteenth =
  //       step.step <= 4 ? step.step - 1 : step.step - measure.quarter * 4 - 1
  //     const stepTick = [stepQuarter, stepSixteenth].join(':')
  //
  //     // console.log(step, currentTick, stepQuarter, stepSixteenth)
  //
  //     // if (currentTick === stepTick) {
  //     //   instrument.webaudio.triggerAttackRelease(step.note + step.octave, '1n')
  //     // }
  //   })
  // }

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
    const { instrument, updatePart } = this.props
    const { parts, webaudio } = instrument

    if (webaudio) {
      webaudio.detune.value = parts[0].synth.detune
      webaudio.portamento = parts[0].synth.portamento

      webaudio.oscillator.type = parts[0].synth.oscillator.type
      webaudio.oscillator.sourceType = parts[0].synth.oscillator.sourceType
      // prettier-ignore
      webaudio.oscillator.modulationType = parts[0].synth.oscillator.modulationType
      webaudio.oscillator.phase = parts[0].synth.oscillator.phase

      webaudio.envelope.attack = parts[0].synth.envelope.attack
      webaudio.envelope.decay = parts[0].synth.envelope.decay
      webaudio.envelope.sustain = parts[0].synth.envelope.sustain
      webaudio.envelope.release = parts[0].synth.envelope.release

      // this.triggerAttackRelease()
      // this.updatePart()
      // console.log('inst', instrument)
      // updatePart(instrument)
    }

    return (
      <div className="SynthTest">
        {this.renderEffects()}
        {instrument.channel ? this.renderChannel() : ''}
      </div>
    )
  }
}
