import React from 'react'
import * as Tone from 'tone'

import Button from '../components/controls/Button'

import Voice from '../components/instruments/Voice'

const synth = new Tone.Synth().toDestination()

export default class ADCSynth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transport: {
        bpm: 120,
        isOn: false
      },
      voices: [
        {
          sequencer: {
            steps: 4,
            currentPattern: 0,
            isPlaying: true,
            patterns: [
              [
                {
                  step: 0,
                  note: 'C',
                  octave: 1
                },
                {
                  step: 1,
                  note: 'E',
                  octave: 2
                },
                {
                  step: 2,
                  note: 'G',
                  octave: 1
                },
                {
                  step: 3,
                  note: 'E',
                  octave: 3
                }
              ]
            ]
          },
          synth: {
            webaudio: synth
          },
          effects: [
            {
              webaudio: ''
            }
          ]
        }
      ]
    }
  }

  changeEnvelopeValue = (property, value) => {
    // console.log('test', synthName, effectName, value)

    const { transport, voices } = this.state
    const synth = voices[0].synth.webaudio

    synth.envelope[property] = value

    voices[0].synth.webaudio = synth

    this.setState({
      transport,
      voices
    })
  }

  changeTypeOscillator = (property, value) => {
    const { transport, voices } = this.state
    const synth = voices[0].synth.webaudio

    // synth[property] = value
    // console.log(synth)

    console.log(voices[0].synth.webaudio.oscillator.type)

    voices[0].synth.webaudio.oscillator.type = value
    console.log(voices[0].synth.webaudio.oscillator.type)

    this.setState({
      transport,
      voices
    })
  }

  nextQuarter = () => {
    const { synth } = this.state.voices[0]
    const { patterns } = this.state.voices[0].sequencer

    const regexBefore = /([\w]+)/gm
    const quarter = Tone.Transport.position.match(regexBefore)[1]

    console.log('nextQuarter', quarter)

    patterns[0].forEach((patternStep, i) => {
      if (patternStep.step == quarter) {
        synth.webaudio.triggerAttackRelease(
          patternStep.note + patternStep.octave,
          '4n'
        )
      }
    })
  }

  handleTogglePlay = () => {
    let { bpm, isOn, scheduleId } = this.state.transport

    if (isOn) {
      Tone.Transport.pause()
      Tone.Transport.clear(scheduleId)
      isOn = false
    } else {
      Tone.Transport.bpm.value = bpm
      Tone.Transport.start()
      scheduleId = Tone.Transport.scheduleRepeat(this.nextQuarter, '4n')
      isOn = true
    }

    this.setState({
      transport: {
        bpm,
        isOn,
        scheduleId
      }
    })
  }

  render() {
    const { isOn } = this.state.transport

    return (
      <div className="ADCSynth">
        <Button
          name="button"
          property="no"
          option={true}
          text={isOn ? 'Stop' : 'Play'}
          current={isOn}
          handleClick={this.handleTogglePlay}
        />
        <Voice
          {...this.state.voices[0]}
          changeEnvelopeValue={this.changeEnvelopeValue}
          changeTypeOscillator={this.changeTypeOscillator}
        />
      </div>
    )
  }
}
