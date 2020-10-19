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
              } else if (effectName === 'chorus' && effect.name === 'chorus') {
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

    console.log(this.state)

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
