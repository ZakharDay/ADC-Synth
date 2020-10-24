import * as Tone from 'tone'
import React, { PureComponent } from 'react'

import EffectTest from '../effects/EffectTest'
import ChannelTest from '../parts/ChannelTest'

let webaudioPart = ''

export default class SynthTest extends PureComponent {
  constructor(props) {
    super(props)
  }

  // componentDidMount() {
  //   let synth = this.props.instrument.webaudio
  //   const v = 1
  //
  //   const part = new Tone.Part(
  //     function (time, note) {
  //       synth.triggerAttackRelease(
  //         note.noteName,
  //         note.duration,
  //         time,
  //         note.velocity
  //       )
  //     },
  //     [
  //       {
  //         time: '0:1:0',
  //         noteName: 'F4',
  //         duration: '1n',
  //         velocity: v
  //       }
  //     ]
  //   )
  //
  //   part.loop = true
  //   part.loopEnd = '4m'
  //   part.mute = false
  //   part.start()
  // }

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
    if (webaudioPart === '') {
      console.log('yoyo')
      if (this.props.instrument.webaudio) {
        const part = new Tone.Part((time, note) => {
          this.props.instrument.webaudio.triggerAttackRelease(
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
    } else {
      console.log(webaudioPart)
      webaudioPart.clear()

      const part = new Tone.Part((time, note) => {
        this.props.instrument.webaudio.triggerAttackRelease(
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
  }

  // thiggerAttackRelease = () => {
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
  //
  //   // part = () => {
  //   console.log('yo', Date.now())
  //   let synth = this.props.instrument.webaudio
  //   const v = 1
  //
  //   const part = new Tone.Part(
  //     function (time, note) {
  //       synth.triggerAttackRelease(
  //         note.noteName,
  //         note.duration,
  //         time,
  //         note.velocity
  //       )
  //     },
  //     [
  //       {
  //         time: '0:0:0',
  //         noteName: 'F4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:0:1',
  //         noteName: 'A4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:0:3',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:1:0',
  //         noteName: 'B4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '0:1:0.5',
  //         noteName: 'C5',
  //         // noteName: 'C#5',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '0:1:1',
  //         noteName: 'E4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:1:2',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:1:3',
  //         noteName: 'A4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:2:0',
  //         noteName: 'F4',
  //         // noteName: 'F#4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '0:2:0.5',
  //         noteName: 'E4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '0:2:1',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:2:3',
  //         noteName: 'D4',
  //         // noteName: 'D#4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '0:3:1',
  //         noteName: 'A4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '0:3:1.5',
  //         noteName: 'B4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '0:3:2',
  //         noteName: 'A4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '0:3:2.5',
  //         noteName: 'B4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '1:0:0',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:0:1',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:0:2',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:0:3',
  //         noteName: 'A4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:1:0',
  //         noteName: 'B4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:1:1',
  //         noteName: 'B4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:1:2',
  //         noteName: 'B4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:1:3',
  //         noteName: 'A4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:2:0',
  //         noteName: 'G4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '1:2:0.5',
  //         noteName: 'A4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '1:2:1',
  //         noteName: 'G4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '1:2:1.5',
  //         noteName: 'A4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '1:3:1',
  //         noteName: 'F4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '1:3:2',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '2:0:0',
  //         noteName: 'A4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '2:0:0.5',
  //         noteName: 'G4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '2:0:1',
  //         noteName: 'A4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '2:0:1.5',
  //         noteName: 'G4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '2:0:2',
  //         noteName: 'B4',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '2:0:3',
  //         noteName: 'C5',
  //         duration: '1n',
  //         // 0.5
  //         velocity: v
  //       },
  //       {
  //         time: '2:1:0',
  //         noteName: 'C5',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '2:1:1',
  //         noteName: 'C5',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '2:1:2',
  //         noteName: 'C5',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '2:2:1',
  //         noteName: 'A4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '2:2:3',
  //         noteName: 'G4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '2:3:1',
  //         noteName: 'E4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '2:3:3',
  //         noteName: 'D4',
  //         duration: '1n',
  //         velocity: v
  //       },
  //       {
  //         time: '3:0:1',
  //         noteName: 'C4',
  //         duration: '1n',
  //         velocity: v
  //       }
  //     ]
  //   )
  //
  //   part.loop = true
  //   part.loopEnd = '4m'
  //   part.mute = false
  //   part.start()
  //
  //   // return part
  //   // }
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
    const { instrument } = this.props
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

      // this.thiggerAttackRelease()
      this.updatePart()
    }

    return (
      <div className="SynthTest">
        {this.renderEffects()}
        {instrument.channel ? this.renderChannel() : ''}
      </div>
    )
  }
}
