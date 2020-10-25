import React, { Component } from 'react'

import ToggleButton from '../controls/ToggleButton'

import { notes } from '../../utilities/notes'

export default class Sequencer extends Component {
  constructor(props) {
    super(props)
  }

  renderGrid = () => {
    console.log('renderGrid')
    let gridElements = []
    let octave = 0

    for (var i = 0; i < 8; i++) {
      Object.keys(notes).forEach((noteKey, index) => {
        const fullNote = noteKey + octave
        gridElements.push(this.renderRow(fullNote, noteKey, octave, index, i))
      })

      octave++
    }

    return gridElements
  }

  renderRow = (note, noteKey, octave, rowIndex, rowIndex2) => {
    console.log('renderRow')
    const { instrument, settings, handleSequenceChange } = this.props
    const currentPatternSteps = settings.sequence
    // prettier-ignore
    const stepCounter = ['','','','','','','','','','','','','','','','']
    let stepElements = []

    stepCounter.forEach((nothing, i) => {
      //   let current = false
      //   let step = i
      //
      //   currentPatternSteps.forEach((currentPatternStep, i) => {
      //     if (
      //       currentPatternStep.step === i &&
      //       currentPatternStep.note + currentPatternStep.octave === note
      //     ) {
      //       current = true
      //     }
      //   })
      //
      currentPatternSteps.forEach((currentPatternStep, index) => {
        if (
          currentPatternStep.step - 1 == i &&
          currentPatternStep.note + currentPatternStep.octave == note
        ) {
          stepCounter[i] = currentPatternStep
        }
      })
    })

    stepCounter.forEach((item, i) => {
      if (item === '') {
        stepElements.push(
          <ToggleButton
            text={note}
            on={false}
            handleClick={() =>
              handleSequenceChange(
                instrument.id,
                settings.partId,
                i + 1,
                noteKey,
                octave
              )
            }
            key={i}
          />
        )
      } else {
        stepElements.push(
          <ToggleButton
            text={note}
            on={true}
            handleClick={() =>
              handleSequenceChange(
                instrument.id,
                settings.partId,
                i + 1,
                noteKey,
                octave
              )
            }
            key={i}
          />
        )
      }
    })

    return (
      <div className="row" key={'row' + rowIndex + '_' + rowIndex2}>
        {stepElements}
      </div>
    )
  }

  render() {
    console.log('render')
    return <div className="Sequencer">{this.renderGrid()}</div>
  }
}
