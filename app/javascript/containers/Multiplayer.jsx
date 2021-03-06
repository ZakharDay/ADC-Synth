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
      state.measure = {
        bar: 0,
        quarter: 0,
        sixteenth: 0
      }
      state.nextParts = []
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

            newInstrument.webaudioPart = new Tone.Part((time, note) => {
              newInstrument.webaudio.triggerAttackRelease(
                note.noteName,
                note.duration,
                time,
                note.velocity
              )
            }, [])

            newInstruments.push(newInstrument)
          } else {
            newInstrument.webaudio = new Tone.Synth()
            newInstrument.webaudio.chain(newChannel.webaudio)

            newInstrument.webaudioPart = new Tone.Part((time, note) => {
              newInstrument.webaudio.triggerAttackRelease(
                note.noteName,
                note.duration,
                time,
                note.velocity
              )
            }, [])

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

  nextMeasure = () => {
    // const regexBefore = /([\w]+)/gm
    // const bar = Tone.Transport.position.match(regexBefore)[0]
    // const quarter = Tone.Transport.position.match(regexBefore)[1]
    // const sixteenth = Tone.Transport.position.match(regexBefore)[2]

    // console.log(Tone.Transport.position, bar, quarter, sixteenth)

    // this.setState({
    //   measure: {
    //     bar,
    //     quarter,
    //     sixteenth
    //   }
    // })

    const oldInstruments = this.state.instruments
    let newInstruments = []

    oldInstruments.forEach((oldInstrument, i) => {
      let newInstrument = {
        id: oldInstrument.id,
        kind: oldInstrument.kind,
        name: oldInstrument.name,
        parts: [...oldInstrument.parts],
        webaudio: oldInstrument.webaudio,
        webaudioPart: this.updatePart(oldInstrument, oldInstrument),
        channel: { webaudio: oldInstrument.channel.webaudio },
        effects: oldInstrument.effects
      }

      newInstruments.push(newInstrument)
    })

    this.setState({
      instruments: newInstruments
    })
  }

  handleTogglePlay = () => {
    let { room, instruments, transportIsOn, transportScheduleId } = this.state

    if (transportIsOn) {
      Tone.Transport.pause()
      Tone.Transport.clear(transportScheduleId)
      transportIsOn = false

      // clearInterval(this.loopIntervallCall)
    } else {
      Tone.Transport.bpm.value = room.tempo
      Tone.Transport.start()

      // this.loopIntervalCall = setInterval(() => this.nextSixteenth(), 1000 / 30)

      transportScheduleId = Tone.Transport.scheduleRepeat(
        this.nextMeasure,
        '1n'
      )

      transportIsOn = true
    }

    const oldInstruments = instruments
    let newInstruments = []

    instruments.forEach((instrument, i) => {
      let newInstrument = {
        id: instrument.id,
        kind: instrument.kind,
        name: instrument.name,
        webaudioPart: this.updatePart(instrument, instrument),
        parts: [...instrument.parts]
      }

      oldInstruments.forEach((oldInstrument, i) => {
        if (instrument.id === oldInstrument.id) {
          newInstrument.webaudio = oldInstrument.webaudio
          newInstrument.channel = { webaudio: oldInstrument.channel.webaudio }
          newInstrument.effects = oldInstrument.effects
        }
      })

      newInstruments.push(newInstrument)
    })

    this.setState({
      transportIsOn,
      transportScheduleId,
      instruments: newInstruments
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

    if (settingNameNamespace == 'filter') {
      partEffect.filter[settingNameInNamespace] = value
    } else if (settingNameNamespace == 'follower') {
      partEffect.follower[settingNameInNamespace] = value
    } else {
      partEffect[property] = value
    }

    newInstruments.map((newInstrument) => {
      if (newInstrument.id === id) {
        newInstrument.parts = [...newInstrument.parts]

        newInstrument.parts.map((part) => {
          if (instrumentPart.partId === part.partId) {
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

  handleSequenceChange = (instrumentId, partId, step, note, octave) => {
    console.log(instrumentId, partId, step, note, octave)

    const { view } = this.props
    const { room, instruments, currentPartId } = this.state
    let newInstruments = [...instruments]
    let newInstrumentData = []

    let instrument = instruments.filter((instrument) => {
      if (instrument.id === instrumentId) {
        return instrument
      }
    })[0]

    let instrumentPart = instrument.parts.filter((part) => {
      if (part.partId === currentPartId) {
        return part
      }
    })[0]

    let newSequence = [...instrumentPart.sequence]
    let newSequenceStepNumbers = []

    newSequence.forEach((sequenceStep, i) => {
      const currentNote = [sequenceStep.note, sequenceStep.octave].join('')
      const newNote = [note, octave].join('')
      newSequenceStepNumbers.push(sequenceStep.step)

      if (sequenceStep.step === step && currentNote != newNote) {
        newSequence[i] = {
          step: step,
          note: note,
          octave: octave
        }
      } else if (sequenceStep.step === step && currentNote === newNote) {
        newSequence.splice(i, 1)
      }
    })

    if (!newSequenceStepNumbers.includes(step)) {
      newSequence.push({
        step: step,
        note: note,
        octave: octave
      })
    }

    console.log(newSequence)

    newInstruments.map((newInstrument) => {
      if (newInstrument.id === instrumentId) {
        newInstrument.parts = [...newInstrument.parts]

        newInstrument.parts.map((part) => {
          if (instrumentPart.partId === part.partId) {
            part.sequence = [...newSequence]
            return part
          } else {
            return part
          }
        })

        newInstrumentData = newInstrument

        // if (view === 'mixer') {
        //   newInstrument.webaudioPart = this.updatePart(newInstrument)
        // }

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

    fetch(`/rooms/${room.id}/change_sequence`, {
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

  updatePart = (oldInstrument, newInstrument) => {
    let sequence = []
    let webaudioSequence = []

    newInstrument.parts.forEach((part, i) => {
      if (part.current) {
        sequence = part.sequence
      }
    })

    sequence.forEach((step, i) => {
      const stepQuarter = step.step <= 4 ? 0 : Math.floor(step.step / 4) - 1

      const stepSixteenth =
        step.step <= 4 ? step.step - 1 : step.step - stepQuarter * 4 - 1

      const stepTick = [stepQuarter, stepSixteenth].join(':')

      const v = 1

      webaudioSequence.push({
        time: ['0', stepTick].join(':'),
        noteName: [step.note, step.octave].join(''),
        duration: '16n',
        velocity: v
      })
    })

    let { webaudioPart } = oldInstrument
    webaudioPart.clear()

    webaudioPart = new Tone.Part((time, note) => {
      oldInstrument.webaudio.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, webaudioSequence)

    webaudioPart.loop = true
    webaudioPart.loopEnd = '1m'
    webaudioPart.mute = false
    webaudioPart.start()

    return webaudioPart
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
        console.log(instrument)

        let newParts = []

        instrument.parts.forEach((part, i) => {
          let newPart = Object.assign({}, part)
          let newSequence = []

          part.sequence.forEach((sequenceStep, i) => {
            let newStep = Object.assign({}, sequenceStep)
            newSequence.push(newStep)
          })

          newPart.sequence = newSequence
          newParts.push(newPart)
        })

        let newInstrument = {
          id: instrument.id,
          kind: instrument.kind,
          name: instrument.name,
          parts: newParts
        }

        oldInstruments.forEach((oldInstrument, i) => {
          if (instrument.id === oldInstrument.id) {
            newInstrument.webaudio = oldInstrument.webaudio
            // newInstrument.webaudioPart = this.updatePart(
            //   oldInstrument,
            //   newInstrument
            // )
            newInstrument.webaudioPart = oldInstrument.webaudioPart
            newInstrument.channel = { webaudio: oldInstrument.channel.webaudio }
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
        handleSequenceChange={this.handleSequenceChange}
      />
    )
  }

  renderMixerView = () => {
    const { instruments, measure } = this.state
    return (
      <Mixer
        instruments={instruments}
        measure={measure}
        updatePart={this.updatePart}
      />
    )
  }

  render() {
    const { view, room } = this.props
    const { transportIsOn } = this.state

    return (
      <div id="mixerContainer" className="ADCSynth">
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
