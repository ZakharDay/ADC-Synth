import React from 'react'
// import * as Tone from 'tone'

import ToggleButton from '../controls/ToggleButton'

import { notes } from '../../utilities/notes'

export default class Sequencer extends React.Component {
  constructor(props) {
    super(props)
  }

  renderGrid = () => {
    let gridElements = []
    let octave = 0

    for (var i = 0; i < 8; i++) {
      Object.keys(notes).forEach((noteKey, i) => {
        const fullNote = noteKey + octave
        gridElements.push(this.renderRow(fullNote, noteKey, octave))
      })

      octave++
    }

    return gridElements
  }

  // thiggerAttackRelease = () => {
  //   const {
  //     synth,
  //     steps,
  //     currentPattern,
  //     patterns,
  //     currentQuarter
  //   } = this.props
  //
  //   const currentPatternSteps = patterns[currentPattern]
  //
  //   currentPatternSteps.forEach((patternStep, i) => {
  //     if (patternStep.step == currentQuarter) {
  //       synth.webaudio.triggerAttackRelease(
  //         patternStep.note + patternStep.octave,
  //         '4n'
  //       )
  //     }
  //   })
  // }

  renderRow = (note, noteKey, octave) => {
    const { instrumentId, settings, handleSequenceChange } = this.props
    const currentPatternSteps = settings.sequence
    const steps = currentPatternSteps.length
    let stepElements = []
    let current = false

    for (var i = 0; i < steps; i++) {
      let step = i
      if (
        currentPatternSteps[i].step === i &&
        note === currentPatternSteps[i].note + currentPatternSteps[i].octave
      ) {
        current = true
      } else {
        current = false
      }

      stepElements.push(
        <ToggleButton
          text={note}
          on={current}
          handleClick={() =>
            handleSequenceChange(instrumentId, step, noteKey, octave)
          }
          key={i}
        />
      )
    }

    return (
      <div className="row" key={Math.floor(Math.random() * 1000000)}>
        {stepElements}
      </div>
    )
  }

  render() {
    return <div className="Sequencer">{this.renderGrid()}</div>
  }
}
