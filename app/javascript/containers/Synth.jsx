import React from 'react'
import * as Tone from 'tone'

import Keyboard from '../components/instruments/Keyboard'
import PianoButton from '../components/controls/PianoButton'

const synth = new Tone.PolySynth().toDestination()

export default class Synth extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      keyboards: []
    }
  }

  mergeNote = (id) => {
    const { notes, octave } = this.state.keyboards[0]
    let note = ''
    if (id <= 11) {
      note = notes[id].note + `${octave}`
    } else if (id >= 12) {
      note = notes[id].note + `${octave + 1}`
    }
    return note
  }

  calcId = (i) => {}

  createKeyboard = (i) => {
    let { keyboards } = this.state

    let notes = [
      {
        note: 'C',
        key: 'a',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'C#',
        key: 'w',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'D',
        key: 's',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'D#',
        key: 'e',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'E',
        key: 'd',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'F',
        key: 'f',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'F#',
        key: 't',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'G',
        key: 'g',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'G#',
        key: 'y',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'A',
        key: 'h',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'A#',
        key: 'u',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'B',
        key: 'j',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'C',
        key: 'k',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'C#',
        key: 'o',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'D',
        key: 'l',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      },
      {
        note: 'D#',
        key: 'p',
        isPlaying: false,
        classList: ['PianoBlackKey']
      },
      {
        note: 'E',
        key: ';',
        isPlaying: false,
        classList: ['PianoWhiteKey']
      }
    ]

    let keyboard = {
      id: i,
      octave: 4,
      isPlaying: false,
      notes
    }

    keyboards.push(keyboard)

    this.setState({
      keyboards
    })

    console.log(keyboards)
  }

  renderNoteButtons = () => {
    const { notes } = this.state.keyboards[0]

    let noteButtons = []
    notes.forEach((note, i) => {
      noteButtons.push(
        <PianoButton
          text={note.note}
          handleDown={() => this.startPlayingNote(i)}
          handleUp={() => this.stopPlayingNote(i)}
          keyDown={this.handleFactoryDown(i)}
          keyUp={this.handleFactoryUp(i)}
          classes={note.classList}
          key={i}
          buttonId={i}
        />
      )
    })

    return noteButtons
  }

  renderKeyboard = () => {
    const { keyboards } = this.state
    let keyboardElements = []
    let id = -1

    keyboards.forEach((keyboard, i) => {
      keyboardElements.push(
        <Keyboard
          renderNoteButtons={this.renderNoteButtons}
          keyboards={keyboards}
          synth={synth}
          key={i}
        />
      )
      id = i
    })

    return (
      <div>
        <div onClick={() => this.createKeyboard(id)}>Create Keyboard</div>
        {keyboardElements}
      </div>
    )
  }

  handleFactoryDown = (id) => {
    const { notes } = this.state.keyboards[0]
    return (event) => {
      if (event.key == notes[id].key) {
        this.handleKeyDown(id)
      }
    }
  }
  handleFactoryUp = (id) => {
    const { notes } = this.state.keyboards[0]
    return (event) => {
      if (event.key == notes[id].key) {
        this.handleKeyUp(id)
      }
    }
  }

  handleKeyDown = (id) => {
    let { notes, octave } = this.state.keyboards[0]

    if (!notes[id].isPlaying) {
      notes[id].isPlaying = true
      notes[id].classList.push('on')

      synth.triggerAttack(this.mergeNote(id))
    }
    this.setState({
      notes
    })
  }

  handleKeyUp = (id) => {
    const { notes, octave } = this.state.keyboards[0]

    synth.triggerRelease(this.mergeNote(id))

    notes[id].isPlaying = false
    notes[id].classList.pop()

    this.setState({
      notes
    })
  }

  startPlayingNote = (id) => {
    const { notes, octave } = this.state.keyboards[0]
    synth.triggerAttack(this.mergeNote(id))
    notes[id].isPlaying = true
    notes[id].classList.push('on')

    this.setState({
      notes
    })
  }
  stopPlayingNote = (id) => {
    const { notes, octave } = this.state.keyboards[0]
    synth.triggerRelease(this.mergeNote(id))
    notes[id].isPlaying = false
    notes[id].classList.pop()

    this.setState({
      notes
    })
  }

  render() {
    return <div>{this.renderKeyboard()}</div>
  }
}
