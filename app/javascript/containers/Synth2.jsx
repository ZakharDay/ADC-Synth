import React from 'react'
import * as Tone from 'tone'

import { notes } from '../../utilities/notes'

export default class Synth2 extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      band: []
    }
  }

  componentDidMount() {
    // this.setInstrument()
  }

  handleCreateSynth = () => {
    let { band } = this.state

    let synth = new Tone.PolySynth().toDestination()

    band.push({ instrument: synth, isPlaying: false, note: 'C4', effects: [] })

    this.setState({
      band
    })
  }

  renderSynths = () => {
    const { band } = this.state
    let synths = []
    if (band.length != 0) {
      band.forEach((synth, i) => {
        synths.push(
          <div className="Synth" key={`${i}_synth`}>
            <h1>Synth {i}</h1>
            <div onClick={() => this.handleSynthTogglePlay(i)} key={i}>
              {synth.isPlaying ? 'Stop' : 'Start'}
            </div>
            <div key={`${i}_notes`}>{this.renderNotes(i)}</div>
            <div onClick={() => this.handleAddEffect(i)}>
              {synth.effects.length != 0
                ? 'Remove Distortion'
                : 'Add Distortion'}
            </div>
            _____________________________________________________
          </div>
        )
      })
      return synths
    }
  }

  handleAddEffect = (effect) => {
    const { band } = this.state
    if (band[effect].effects.length != 0) {
      band[effect].effects.pop()
    } else {
      band[effect].effects.push({ name: 'distortion', value: 1 })
    }

    this.setState({
      band
    })
  }

  playEffect = (synth) => {
    let value = synth.effects[0].value
    const dist = new Tone.Distortion(value).toDestination()

    synth.instrument.connect(dist).triggerAttack(synth.note)
  }

  handleChangeNote = (id, note) => {
    const { band } = this.state
    band[id].note = note
    this.setState({
      band
    })
  }

  renderNotes = (id) => {
    let notesItems = []
    Object.keys(notes).forEach((note, i) => {
      notesItems.push(
        <span onClick={() => this.handleChangeNote(id, `${note}4`)} key={i}>
          | {`${note}4`} ||
        </span>
      )
    })
    return notesItems
  }

  handleSynthTogglePlay = (id) => {
    const { band } = this.state

    if (band[id].isPlaying) {
      band[id].instrument.triggerRelease(band[id].note)
      band[id].isPlaying = false
      this.setState({
        band
      })
    } else {
      if (band[id].effects.length != 0) {
        this.playEffect(band[id])
      } else {
        band[id].instrument.triggerAttack(band[id].note)
      }
      band[id].isPlaying = true
      this.setState({
        band
      })
    }
  }

  render() {
    return (
      <div>
        {this.renderSynths()}
        <div onClick={this.handleCreateSynth} className="Synth">
          Create Synth
        </div>
      </div>
    )
  }
}
