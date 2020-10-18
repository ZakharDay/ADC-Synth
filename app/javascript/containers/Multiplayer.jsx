import * as Tone from 'tone'
import React from 'react'

import Menubar from '../components/views/Menubar'
import Musician from '../components/views/Musician'
import Mixer from '../components/views/Mixer'

import * as effectInitials from '../utilities/effects'

export default class ADCSynth extends React.Component {
  constructor(props) {
    super(props)

    // console.log(props)

    const { view, instruments, room } = props

    let state = {
      room,
      transportIsOn: false
    }

    if (view === 'mixer') {
      state.instruments = instruments
    }

    this.state = state
  }

  componentDidMount() {
    const { instruments } = this.state
    let newInstruments = []

    if (instruments) {
      instruments.forEach((instrument, i) => {
        let newInstrument = Object.assign({}, instrument)

        if (instrument.effects.length) {
          let effect = { name: instrument.effects[0] }

          console.log(instrument.parts[0].effects)

          instrument.parts[0].effects.forEach((e, i) => {
            if (e.name === 'feedbackDelay') {
              console.log('Yo')
              effect.webaudio = new Tone.FeedbackDelay({
                delayTime: e.delayTime,
                maxDelay: e.maxDelay
              }).toDestination()
            } else if (e.name === 'chorus') {
              effect.webaudio = new Tone.Chorus({
                frequency: e.frequency,
                delayTime: e.delayTime,
                depth: e.depth,
                type: e.type,
                spread: e.spread
              }).toDestination()
            } else if (e.name === 'distortion') {
              effect.webaudio = new Tone.Distortion({
                distortion: e.distortion,
                oversample: e.oversample
              }).toDestination()
            }
          })

          console.log(effect.webaudio)

          effect.webaudio.wet.value = 1

          newInstrument.effects = [effect]
          newInstrument.webaudio = new Tone.Synth()
          newInstrument.webaudio.chain(effect.webaudio)

          newInstruments.push(newInstrument)
        } else {
          newInstrument.webaudio = new Tone.Synth().toDestination()
          newInstruments.push(newInstrument)
        }
      })

      this.setState({
        instruments: newInstruments
      })
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

  renderMusicianView = () => {
    return <Musician />
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
        <Menubar
          view={view}
          tempo={room.tempo}
          transportIsOn={transportIsOn}
          handleTogglePlay={this.handleTogglePlay}
          handleBpmChange={this.handleBpmChange}
          handleSynthCreate={this.handleSynthCreate}
          handleSamplerCreate={this.handleSamplerCreate}
          handleAudioCreate={this.handleAudioCreate}
          handlePartCreate={this.handlePartCreate}
        />

        {
          // prettier-ignore
          view === 'musician' ? this.renderMusicianView() : this.renderMixerView()
        }
      </div>
    )
  }
}
