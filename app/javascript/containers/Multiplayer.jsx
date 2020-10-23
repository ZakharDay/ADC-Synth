import * as Tone from 'tone'
import React from 'react'
// import { ActionCableConsumer } from 'react-actioncable-provider'
import { createConsumer } from '@rails/actioncable'

import Menubar from '../components/views/Menubar'
import Musician from '../components/views/Musician'
import Mixer from '../components/views/Mixer'
import Knob from '../components/controls/KnobNew'
import AddButton from '../components/controls/AddButtonNew'
import ChannelButton from '../components/controls/ChannelButtonNew'
import Select from '../components/controls/SelectNew'
import Slider from '../components/controls/SliderNew'
import ButtonSet from '../components/controls/ButtonSetNew'

import * as utilities from '../utilities/utilities'
import * as effectInitials from '../utilities/effects'

export default class ADCSynth extends React.Component {
  constructor(props) {
    super(props)

    const { view, instruments, room, parts } = props

    let state = {
      room,
      instruments
    }

    if (view === 'mixer') {
      state.transportIsOn = false
    } else if (view === 'musician') {
      state.parts = parts

      parts.forEach((part, i) => {
        if (part.current) {
          state.currentPartId = part.id
        }
      })
    }

    this.state = state
  }

  componentDidMount() {
    const { view } = this.props

    if (view === 'mixer') {
      let consumer = createConsumer()
      const { handleMixerDataReceived } = this

      consumer.subscriptions.create(
        { channel: 'MixerChannel' },
        {
          received(data) {
            handleMixerDataReceived(data)
          }
        }
      )

      const { instruments } = this.state
      let newInstruments = []

      if (instruments) {
        instruments.forEach((instrument, i) => {
          let newInstrument = Object.assign({}, instrument)
          let newChannel = { webaudio: new Tone.Channel().toDestination() }
          newInstrument.channel = newChannel

          if (instrument.effects.length) {
            let newEffects = []

            instrument.effects.forEach((effectName, i) => {
              let newEffect = { name: effectName }

              instrument.parts[0].effects.forEach((effect, i) => {
                // console.log(effect)
                if (
                  effectName === 'feedbackDelay' &&
                  effect.name === 'feedbackDelay'
                ) {
                  newEffect.webaudio = new Tone.FeedbackDelay()
                } else if (
                  effectName === 'chorus' &&
                  effect.name === 'chorus'
                ) {
                  newEffect.webaudio = new Tone.Chorus()
                } else if (
                  effectName === 'distortion' &&
                  effect.name === 'distortion'
                ) {
                  newEffect.webaudio = new Tone.Distortion()
                }
              })

              newEffect.webaudio.wet.value = 1
              newEffects.push(newEffect)
            })

            newInstrument.effects = newEffects
            newInstrument.webaudio = new Tone.Synth()

            let webaudioObjects = []

            newEffects.forEach((effect, i) => {
              webaudioObjects.push(effect.webaudio)
            })

            webaudioObjects.push(newChannel.webaudio)
            newInstrument.webaudio.chain(...webaudioObjects)
            newInstruments.push(newInstrument)
          } else {
            newInstrument.webaudio = new Tone.Synth()
            newInstrument.webaudio.chain(newChannel.webaudio)
            newInstruments.push(newInstrument)
          }
        })

        this.setState({
          instruments: newInstruments
        })
      }
    } else if (view === 'musician') {
    }
  }

  nextQuarter = () => {
    const regexBefore = /([\w]+)/gm
    const quarter = Tone.Transport.position.match(regexBefore)[1]

    this.setState({
      currentQuarter: quarter
    })
  }

  handleTogglePlay = () => {
    let { room, transportIsOn, transportScheduleId } = this.state

    if (transportIsOn) {
      Tone.Transport.pause()
      Tone.Transport.clear(transportScheduleId)
      transportIsOn = false
    } else {
      Tone.Transport.bpm.value = room.tempo
      Tone.Transport.start()

      transportScheduleId = Tone.Transport.scheduleRepeat(
        this.nextQuarter,
        '4n'
      )

      transportIsOn = true
    }

    this.setState({
      transportIsOn,
      transportScheduleId
    })
  }

  handlePartCreate = () => {
    console.log('Server call, render response')

    const { room } = this.state
    const url = `/rooms/${room.id}/create_part`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState(data)
      })
  }

  handlePartChange = (id) => {
    console.log('Server call')

    const { room } = this.state

    const data = {
      authenticity_token: utilities.getMeta('csrf-token'),
      part_id: id
    }

    fetch(`/rooms/${room.id}/change_part`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    this.setState({
      currentPartId: id
    })
  }

  handleInstrumentCreate = (type) => {
    const { room } = this.state
    const url = `/rooms/${room.id}/create_instrument?type=${type}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState(data)
      })
  }

  handleSynthValueChange = (id, property, value) => {
    const { room, instruments, currentPartId } = this.state
    let newInstruments = [...instruments]
    let newInstrumentData = []

    let instrument = instruments.filter((instrument) => {
      if (instrument.id === id) {
        return instrument
      }
    })[0]

    // const getSynthById = (id) => parts.find(part => partId === id)?.synth ?? 'default value'; если уникальный, то можно вот так

    let instrumentPart = instrument.parts.filter((part) => {
      if (part.partId === currentPartId) {
        return part
      }
    })[0]

    let regexBefore = /(.*)\./
    let regexAfter = /\.(.*)/
    let settingNameNamespace = property.match(regexBefore)
    let settingNameInNamespace

    if (settingNameNamespace) {
      settingNameNamespace = settingNameNamespace[1]
      settingNameInNamespace = property.match(regexAfter)[1]
    }

    if (settingNameNamespace == 'oscillator') {
      instrumentPart.synth.oscillator[settingNameInNamespace] = value
    } else if (settingNameNamespace == 'envelope') {
      instrumentPart.synth.envelope[settingNameInNamespace] = value
    } else {
      instrumentPart.synth[property] = value
    }

    newInstruments.map((newInstrument) => {
      if (newInstrument.id === id) {
        newInstrument.parts = [...newInstrument.parts]

        newInstrument.parts.map((part) => {
          if (instrumentPart.id === part.id) {
            part = instrumentPart
            return part
          } else {
            return part
          }
        })

        newInstrumentData = newInstrument
        return newInstrument
      } else {
        return newInstrument
      }
    })

    const data = {
      authenticity_token: utilities.getMeta('csrf-token'),
      part_id: currentPartId,
      instrument_id: newInstrumentData.id,
      part_settings: newInstrumentData.parts.filter((part) => {
        if (part.partId === currentPartId) {
          return part
        }
      })[0]
    }

    fetch(`/rooms/${room.id}/change_instrument`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    this.setState({
      instruments: newInstruments
    })
  }

  handleEffectCreate = (instrumentId, effectName) => {
    const { room } = this.state
    const url = `/rooms/${room.id}/create_effect?instrument_id=${instrumentId}&effect_name=${effectName}`

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState(data)
      })
  }

  handleEffectValueChange = (id, effectName, property, value) => {
    // console.log(id, effectName, property, value)
    const { room, instruments, currentPartId } = this.state
    let newInstruments = [...instruments]
    let newInstrumentData = []

    let instrument = instruments.filter((instrument) => {
      if (instrument.id === id) {
        return instrument
      }
    })[0]

    let instrumentPart = instrument.parts.filter((part) => {
      if (part.partId === currentPartId) {
        return part
      }
    })[0]

    let partEffect = instrumentPart.effects.filter((effect) => {
      if (effect.name === effectName) {
        return effect
      }
    })[0]

    let regexBefore = /(.*)\./
    let regexAfter = /\.(.*)/
    let settingNameNamespace = property.match(regexBefore)
    let settingNameInNamespace

    if (settingNameNamespace) {
      settingNameNamespace = settingNameNamespace[1]
      settingNameInNamespace = property.match(regexAfter)[1]
    }

    if (settingNameNamespace == 'oscillator') {
      // instrumentPart.synth.oscillator[settingNameInNamespace] = value
    } else if (settingNameNamespace == 'envelope') {
      // instrumentPart.synth.envelope[settingNameInNamespace] = value
    } else {
      partEffect[property] = value
    }

    newInstruments.map((newInstrument) => {
      if (newInstrument.id === id) {
        newInstrument.parts = [...newInstrument.parts]

        newInstrument.parts.map((part) => {
          if (instrumentPart.id === part.id) {
            part.effects.map((effect) => {
              if (effect.name === partEffect.name) {
                return partEffect
              } else {
                return effect
              }
            })

            return part
          } else {
            return part
          }
        })

        newInstrumentData = newInstrument
        return newInstrument
      } else {
        return newInstrument
      }
    })

    const data = {
      authenticity_token: utilities.getMeta('csrf-token'),
      part_id: currentPartId,
      instrument_id: newInstrumentData.id,
      part_settings: newInstrumentData.parts.filter((part) => {
        if (part.partId === currentPartId) {
          return part
        }
      })[0]
    }

    fetch(`/rooms/${room.id}/change_effects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    this.setState({
      instruments: newInstruments
    })
  }

  handleMixerDataReceived = (data) => {
    const { view } = this.props

    if (view === 'musician') {
      console.log('Data received but not used')
    } else if (view === 'mixer' && data != '{}') {
      console.log('Data received')

      const { room, instruments } = JSON.parse(data)
      const { transportIsOn } = this.state
      const oldInstruments = this.state.instruments

      let newInstruments = []

      instruments.forEach((instrument, i) => {
        let newInstrument = {
          // effects: [...instrument.effects], // Mutable, need to be updated for parameter change
          id: instrument.id,
          kind: instrument.kind,
          name: instrument.name,
          parts: [...instrument.parts] // Mutable, need to be updated for parameter change
        }

        oldInstruments.forEach((oldInstrument, i) => {
          if (instrument.id === oldInstrument.id) {
            newInstrument.webaudio = oldInstrument.webaudio
            newInstrument.effects = oldInstrument.effects
          }
        })

        newInstruments.push(newInstrument)
      })

      this.setState({
        room,
        instruments: newInstruments,
        transportIsOn
      })
    }
  }

  renderMusicianView = () => {
    const { parts, currentPartId, instruments } = this.state

    return (
      <Musician
        currentPartId={currentPartId}
        parts={parts}
        instruments={instruments}
        handlePartCreate={this.handlePartCreate}
        handlePartChange={this.handlePartChange}
        handleSynthValueChange={this.handleSynthValueChange}
        handleEffectCreate={this.handleEffectCreate}
        handleEffectValueChange={this.handleEffectValueChange}
      />
    )
  }

  renderMixerView = () => {
    const { instruments, currentQuarter } = this.state
    return <Mixer instruments={instruments} currentQuarter={currentQuarter} />
  }

  render() {
    const { view, room } = this.props
    const { transportIsOn } = this.state

    return (
      <div className="ADCSynth">
        {
          // <ActionCableConsumer
          //   channel="MixerChannel"
          //   onReceived={this.handleMixerDataReceived}
          // />
        }

        <Menubar
          view={view}
          room={room}
          transportIsOn={transportIsOn}
          handleTogglePlay={this.handleTogglePlay}
          handleBpmChange={this.handleBpmChange}
          handleInstrumentCreate={this.handleInstrumentCreate}
        />

        {
          // prettier-ignore
          view === 'musician' ? this.renderMusicianView() : this.renderMixerView()
        }
      </div>
    )
  }
}
