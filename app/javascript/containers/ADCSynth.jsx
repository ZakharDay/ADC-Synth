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
      instruments: []
    }
  }

  handleSynthCreate = () => {
    let instruments = []
    console.log(this.state.instruments.length)
    if (this.state.instruments.length > 0) {
      instruments = this.state.instruments
    }
    instruments.push({
      kind: 'synth',
      name: 'name',
      effects: [],
      parts: [
        {
          name: 'part 1',
          current: true,
          settings: [
            {
              synth: { envelope: {}, detune: 30 },
              effects: [{ name: 'effectName' }]
            }
          ]
        }
      ]
    })

    this.setState({
      instruments
    })
    // if (this.state) {
    //   console.log(this.state.instruments)
    //   console.log('none')
    // } else {
    //   this.setState({
    //     instruments: []
    //   })
    // }
    // let instruments = []
    //
    // if (this.state.instruments) {
    //   instruments = [...this.state.instruments]
    // }
    //
    // const synth = synthInitials.synthState()
    // const synthWebaudio = synthInitials.createToneSynth()
    // const channelWebaudio = channelInitials.createChannel()
    //
    // synth.synth.webaudio = synthWebaudio
    // synth.channel.webaudio = channelWebaudio
    // instruments.push(synth)
    //
    // synthWebaudio.chain(channelWebaudio)
    //
    // if (this.state.parts == undefined) {
    //   this.setState({
    //     currentPartName: 'Part 1',
    //     currentInstrument: 'Synth',
    //     currentBarTab: 'Sound',
    //     instruments,
    //     parts: ['Part 1']
    //   })
    // } else {
    //   this.setState({
    //     instruments
    //   })
    // }
  }
  handleSampleCreate = () => {
    let instruments = []
    console.log(this.state.instruments.length)
    if (this.state.instruments.length > 0) {
      instruments = this.state.instruments
    }
    instruments.push({
      kind: 'sampler',
      name: 'name',
      effects: [],
      parts: [
        {
          name: 'part 1',
          current: true,
          settings: [
            {
              synth: { envelope: {}, detune: 30 },
              effects: [{ name: 'effectName' }]
            }
          ]
        }
      ]
    })

    this.setState({
      instruments
    })
    // if (this.state) {
    //   console.log(this.state.instruments)
    //   console.log('none')
    // } else {
    //   this.setState({
    //     instruments: []
    //   })
    // }
    // let instruments = []
    //
    // if (this.state.instruments) {
    //   instruments = [...this.state.instruments]
    // }
    //
    // const synth = synthInitials.synthState()
    // const synthWebaudio = synthInitials.createToneSynth()
    // const channelWebaudio = channelInitials.createChannel()
    //
    // synth.synth.webaudio = synthWebaudio
    // synth.channel.webaudio = channelWebaudio
    // instruments.push(synth)
    //
    // synthWebaudio.chain(channelWebaudio)
    //
    // if (this.state.parts == undefined) {
    //   this.setState({
    //     currentPartName: 'Part 1',
    //     currentInstrument: 'Synth',
    //     currentBarTab: 'Sound',
    //     instruments,
    //     parts: ['Part 1']
    //   })
    // } else {
    //   this.setState({
    //     instruments
    //   })
    // }
  }

  handlePartCreate = () => {
    const { instruments } = this.state
    instruments.forEach((instrument, i) => {
      instrument.parts.forEach((part, i) => {
        part.current = false
      })

      instrument.parts.push({ name: 'new part', current: true, settings: [] })
    })
    this.setState({
      instruments
    })
  }

  handlePartChange = (currentPartId) => {
    const { instruments } = this.state
    instruments.forEach((instrument, i) => {
      instrument.parts.forEach((part, y) => {
        y === currentPartId ? (part.current = true) : (part.current = false)
      })
    })
    this.setState({
      instruments
    })
  }

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

  render() {
    // const { transport, parts, instruments } = this.state

    // {parts ? this.renderParts() : ''}
    // {instruments ? this.renderInstruments() : ''}
    return (
      <div className="ADCSynth">
        <Menubar />

        {this.state.instruments.length > 0 ? (
          <Parts
            parts={this.state.instruments[0].parts}
            handlePartChange={this.handlePartChange}
            handlePartCreate={this.handlePartCreate}
          />
        ) : (
          ''
        )}
        <div onClick={this.handleSynthCreate}>Create Synth</div>
        <div onClick={this.handleSampleCreate}>Create Sampler</div>
        {this.state.instruments.length > 0 ? (
          <Instruments instruments={this.state.instruments} />
        ) : (
          ''
        )}

        <Mixer />
      </div>
    )
  }
}
