import * as Tone from 'tone'
import React from 'react'

import Menubar from '../components/parts/Menubar'
import Parts from '../components/instruments/Parts'
import Instruments from '../components/parts/Instruments'
import Mixer from '../components/instruments/Mixer'

import * as synthInitials from '../utilities/synths'
import * as voiceState from '../utilities/voices'
import * as channelInitials from '../utilities/channel'
import * as effectInitials from '../utilities/effects'

export default class ADCSynth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPartName: '',
      currentInstrument: '',
      currentBarTab: '',
      transport: {
        bpm: 120,
        isOn: false
      }
    }
  }

  nextQuarter = () => {
    console.log(Tone.Transport.position)
    const regexBefore = /([\w]+)/gm
    const quarter = Tone.Transport.position.match(regexBefore)[2]

    this.setState({
      currentQuarter: quarter
    })
  }

  handleTogglePlay = () => {
    let { bpm, isOn, scheduleId } = this.state.transport
    console.log(bpm, isOn, scheduleId)

    if (isOn) {
      Tone.Transport.pause()
      Tone.Transport.clear(scheduleId)
      isOn = false
    } else {
      Tone.Transport.bpm.value = bpm
      Tone.Transport.start()
      scheduleId = Tone.Transport.scheduleRepeat(this.nextQuarter, '16n')
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

  handleBpmChange = () => {}

  handleSynthCreate = () => {
    let instruments = []

    if (this.state.instruments) {
      instruments = [...this.state.instruments]
    }

    const synth = synthInitials.synthState()
    const synthWebaudio = synthInitials.createToneSynth()
    const channelWebaudio = channelInitials.createChannel()

    synth.synth.webaudio = synthWebaudio
    synth.channel.webaudio = channelWebaudio
    instruments.push(synth)

    synthWebaudio.chain(channelWebaudio)

    const regexBefore = /([\w]+)/gm
    const quarter = Tone.Transport.position.match(regexBefore)[1]

    if (this.state.parts == undefined) {
      this.setState({
        currentQuarter: quarter,
        currentPartName: 'Part 1',
        currentInstrument: 'Synth',
        currentBarTab: 'Sound',
        instruments,
        parts: ['Part 1'],
        patterns: voiceState.voiceState.sequencer.patterns
      })
    } else {
      this.setState({
        instruments
      })
    }
  }

  handleSamplerCreate = () => {}

  handleAudioCreate = () => {}

  handlePartCreate = () => {
    let { parts } = this.state
    console.log(parts)

    parts.push('Part 2')

    this.setState({
      parts
    })
  }

  handlePartChange = () => {}

  handleBarTabChange = () => {
    // Перенести параметр внутрь инструмента
    // и менять внутри инструмента
    let { currentBarTab } = this.state

    if (currentBarTab === 'Sound') {
      currentBarTab = 'Sequence'
    } else if (currentBarTab === 'Sequence') {
      currentBarTab = 'Sound'
    }

    this.setState({
      currentBarTab
    })
  }

  // handleVoiceChange = (id, object) => {
  //   // Get voices from State
  //   // Change voice from State by id
  //   // Set State
  // }

  // changeEnvelopeValue = (property, value) => {
  //   // console.log('test', synthName, effectName, value)
  //
  //   const { transport, voices } = this.state
  //   const synth = voices[0].synth.webaudio
  //
  //   synth.envelope[property] = value
  //
  //   voices[0].synth.webaudio = synth
  //
  //   this.setState({
  //     transport,
  //     voices
  //   })
  // }

  // changeTypeOscillator = (property, value) => {
  //   const { transport, voices } = this.state
  //   const synth = voices[0].synth.webaudio
  //
  //   // synth[property] = value
  //   // console.log(synth)
  //
  //   console.log(voices[0].synth.webaudio.oscillator.type)
  //
  //   voices[0].synth.webaudio.oscillator.type = value
  //   console.log(voices[0].synth.webaudio.oscillator.type)
  //
  //   this.setState({
  //     transport,
  //     voices
  //   })
  // }

  // renderParts = () => {
  //   const { currentPartName, parts } = this.state
  //
  //   return (
  //     <Parts
  //       currentPartName={currentPartName}
  //       parts={parts}
  //       handlePartChange={this.handlePartChange}
  //     />
  //   )
  // }

  render() {
    const {
      transport,
      parts,
      instruments,
      currentInstrument,
      currentBarTab,
      currentPartName,
      patterns,
      currentQuarter
    } = this.state

    return (
      <div className="ADCSynth">
        <Menubar
          bpm={transport.bpm}
          isOn={transport.isOn}
          handleTogglePlay={this.handleTogglePlay}
          handleBpmChange={this.handleBpmChange}
        />
        <Parts
          currentPartName={currentPartName}
          parts={parts}
          handlePartCreate={this.handlePartCreate}
        />
        <Instruments
          instruments={instruments}
          patterns={patterns}
          currentQuarter={currentQuarter}
          currentInstrument={currentInstrument}
          currentBarTab={currentBarTab}
          handleBarTabChange={this.handleBarTabChange}
          handleSynthCreate={this.handleSynthCreate}
          handleSamplerCreate={this.handleSamplerCreate}
          handleAudioCreate={this.handleAudioCreate}
        />
        <Mixer instruments={instruments} />
      </div>
    )
  }
}
