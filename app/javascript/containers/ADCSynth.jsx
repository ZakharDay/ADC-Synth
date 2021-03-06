import React from 'react'

import Menubar from '../components/views/Menubar'
import Parts from '../components/instruments/Parts'
import Instruments from '../components/parts/Instruments'
import Mixer from '../components/instruments/Mixer'
// import Knob from '../components/controls/KnobNew'
// import AddButton from '../components/controls/AddButtonNew'
// import ChannelButton from '../components/controls/ChannelButtonNew'
// import Select from '../components/controls/SelectNew'

import * as synthInitials from '../utilities/synths'
import * as voiceState from '../utilities/voices'
import * as channelInitials from '../utilities/channel'
import * as effectInitials from '../utilities/effects'

export default class ADCSynth extends React.Component {
  constructor(props) {
    super(props)
  }

  handleLog = (a) => {
    console.log(a)
  }

  // componentDidMount() {
  //   const { instruments } = this.props
  //
  //   let stateInstruments = []
  //   let effects = []
  //   let partsToState = []
  //   let partsToInstrument = []
  //
  //   instruments[0].parts.forEach((part, i) => {
  //     // console.log(part)
  //     // partsToState.push({ name: part.partName, current: false })
  //     partsToState.push(part.partName)
  //   })
  //
  //   instruments.forEach((instrument, i) => {
  //     effects = []
  //     instrument.effects.forEach((effect, y) => {
  //       effects.push(effect)
  //     })
  //     partsToInstrument = []
  //     instrument.parts.forEach((part, k) => {
  //       part.current = false
  //       partsToInstrument.push(part)
  //     })
  //
  //     stateInstruments.push({
  //       kind: instrument.kind,
  //       name: instrument.name,
  //       effects: effects,
  //       parts: partsToInstrument
  //     })
  //   })
  //   this.setState({
  //     parts: partsToState,
  //     instruments: stateInstruments
  //   })
  // }

  // handleInstrumentCreate = (kind) => {
  //   let instruments = []
  //   if (this.state.instruments.length > 0) {
  //     instruments = this.state.instruments
  //   }
  //   instruments.push({
  //     kind: kind,
  //     name: 'name',
  //     effects: [],
  //     parts: [
  //       {
  //         name: 'part 1',
  //         current: true,
  //         settings: [
  //           {
  //             synth: { envelope: {}, detune: 30 },
  //             effects: [{ name: 'effectName' }]
  //           }
  //         ]
  //       }
  //     ]
  //   })
  //
  //   this.setState({
  //     instruments
  //   })
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
  // }

  // handlePartCreate = () => {
  //   const { parts, instruments } = this.state
  //   instruments.forEach((instrument, i) => {
  //     instrument.parts.forEach((part, i) => {
  //       part.current = false
  //     })
  //
  //     instrument.parts.push({ name: 'new part', current: true, settings: [] })
  //   })
  //   parts.push('newPart')
  //   this.setState({
  //     parts,
  //     instruments
  //   })
  // }
  //
  // handlePartChange = (currentPartId) => {
  //   const { instruments } = this.state
  //   instruments.forEach((instrument, i) => {
  //     instrument.parts.forEach((part, y) => {
  //       y === currentPartId ? (part.current = true) : (part.current = false)
  //     })
  //   })
  //   this.setState({
  //     instruments
  //   })
  // }

  handleChangeSequence = (instrumentId, step, note, octave) => {
    const { instruments } = this.state
    instruments.forEach((instrument, i) => {
      instrument.parts.forEach((part, y) => {
        if (part.current) {
          part.sequence[step].note = note
          part.sequence[step].octave = octave
        }
      })
    })
    this.setState({
      instruments
    })
  }

  // handleVoiceChange = (id, object) => {
  //   // Get voices from State
  //   // Change voice from State by id
  //   // Set State
  // }

  // changeEnvelopeValue = (instrumentId, property, value) => {
  //   const { instruments } = this.state
  //   const instrument = instruments[instrumentId]
  //
  //   instrument.parts.forEach((part, i) => {
  //     if (part.current) {
  //       part.synth.envelope[property] = value
  //     }
  //   })
  //
  //   this.setState({
  //     instruments
  //   })
  // }
  //
  // handleChangeDetune = (instrumentId, property, value) => {
  //   const { instruments } = this.state
  //   const instrument = instruments[instrumentId]
  //
  //   instrument.parts.forEach((part, i) => {
  //     if (part.current) {
  //       part.synth[property] = value
  //     }
  //   })
  //
  //   this.setState({
  //     instruments
  //   })
  // }

  // handleEffectCreate = (instrumentId, effectName) => {
  //   const { instruments } = this.state
  //   const instrument = instruments[instrumentId]
  //   instrument.effects.push(effectName)
  //   instrument.parts.forEach((part, i) => {
  //     if (part.current) {
  //       part.effects.push({ name: effectName })
  //     }
  //   })
  //
  //   this.setState({
  //     instruments
  //   })
  // }

  changeEffectValue = (instrumentId, effect, value) => {
    const { instruments } = this.state
    const instrument = instruments[instrumentId]
    const effectName = Object.keys(effect)[0]
    const property = effect[effectName]

    instrument.parts.forEach((part, i) => {
      if (part.current) {
        let it

        part.effects.forEach((ef, y) => {
          if (ef.name === effectName) {
            it = y
          }
        })

        if (!part.effects[it]) {
          part.effects[it][property] = 0
        } else {
          part.effects[it][property] = value
        }
      }
    })

    this.setState({
      instruments
    })
  }
  // const { instruments } = this.state
  // const instrument = instruments[instrumentId]
  // const effectName = Object.keys(effect)[0]
  // const effectProp = effect[effectName]

  // instrument.parts.forEach((part, i) => {
  //   if (part.current) {
  //     part.effects.forEach((ef, y) => {
  //       if (ef.name === effectName) {
  //         if (ef[effectProp]) {
  //           ef[effectProp] = value
  //         } else {
  //           ef[effectProp] = 0
  //         }
  //       }
  //     })
  //   }
  // })

  // this.setState({
  //   instruments
  // })

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
    return (
      <div>
        <AddButton text="Add synth" size="Large" handleClick={null} />
        <AddButton text="Add synth" size="Medium" handleClick={null} />
        <ChannelButton text="1" on={false} handleClick={null} />
        <Select current={'Option 1'} />
        <Knob
          name="Name"
          min={-60}
          max={60}
          current={-60}
          handleChange={this.handleLog}
        />
      </div>
    )
  }
}
