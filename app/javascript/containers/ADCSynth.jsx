import * as Tone from 'tone'
import React from 'react'

import Button from '../components/controls/Button'
import Voice from '../components/instruments/Voice'

import * as synthInitials from '../utilities/synths'
import * as voiceInitials from '../utilities/voices'
import * as channelInitials from '../utilities/channel'
import * as effectInitials from '../utilities/effects'

export default class ADCSynth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      transport: {
        bpm: 120,
        isOn: false
      },
      voices: []
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

  // ---------------
  // SEQUENCER
  // ---------------

  nextQuarter = () => {
    const regexBefore = /([\w]+)/gm
    const quarter = Tone.Transport.position.match(regexBefore)[1]

    this.setState({
      currentQuarter: quarter
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

  // ---------------
  // SYNTH
  // ---------------

  handleCreateVoice = () => {
    let voices = [...this.state.voices]

    const voice = voiceInitials.voiceState()
    const synthWebaudio = synthInitials.createToneSynth()
    const channelWebaudio = channelInitials.createChannel()

    voice.synth.webaudio = synthWebaudio
    voice.channel.webaudio = channelWebaudio
    voices.push(voice)

    synthWebaudio.chain(channelWebaudio)

    this.setState({
      voices
    })
  }

  handleCreateEffect = (voiceId) => {
    let voices = [...this.state.voices]
    let effect = {}

    voices.forEach((voice, i) => {
      if (voice.id === voiceId) {
        effect = effectInitials.feedbackDelay()
        voices[i].effects.push(effect)
        voice.synth.webaudio.chain(effect.webaudio, voice.channel.webaudio)
      }
    })
  }

  renderVoices = () => {
    const { voices, currentQuarter } = this.state
    let voiceElements = []

    voices.forEach((voice, i) => {
      voiceElements.push(
        <Voice
          {...voice}
          currentQuarter={currentQuarter}
          handleCreateEffect={this.handleCreateEffect}
          changeEnvelopeValue={this.changeEnvelopeValue}
          changeTypeOscillator={this.changeTypeOscillator}
          key={i}
        />
      )
    })

    return voiceElements
  }

  render() {
    const { isOn } = this.state.transport

    console.log(this.state.voices)

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

        <Button
          name="button"
          property="no"
          option={true}
          text="Create Voice"
          current={isOn}
          handleClick={this.handleCreateVoice}
        />

        {this.renderVoices()}
      </div>
    )
  }
}
