import React from 'react'
import * as Tone from 'tone'

import Button from '../controls/Button'

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
        const note = noteKey + octave
        gridElements.push(this.renderRow(note))
      })

      octave++
    }

    return gridElements
  }

  thiggerAttackRelease = () => {
    const {
      synth,
      steps,
      currentPattern,
      patterns,
      currentQuarter
    } = this.props

    const currentPatternSteps = patterns[currentPattern]

    currentPatternSteps.forEach((patternStep, i) => {
      if (patternStep.step == currentQuarter) {
        synth.webaudio.triggerAttackRelease(
          patternStep.note + patternStep.octave,
          '4n'
        )
      }
    })
  }

  renderRow = (note) => {
    const { steps, currentPattern, patterns } = this.props
    const currentPatternSteps = patterns[currentPattern]
    let stepElements = []
    let current = false

    for (var i = 0; i < steps; i++) {
      if (
        currentPatternSteps[i].step === i &&
        note === currentPatternSteps[i].note + currentPatternSteps[i].octave
      ) {
        current = true
      } else {
        current = false
      }

      stepElements.push(
        <Button
          name="button"
          property="no"
          option={true}
          text=""
          current={current}
          handleClick=""
          key={i}
        />
      )
    }

    return (
      <div className="row" key={Math.floor(Math.random() * 1000000)}>
        <div className="note">{note}</div>
        {stepElements}
      </div>
    )
  }

  render() {
    this.thiggerAttackRelease()

    return <div className="Sequencer">{this.renderGrid()}</div>
  }
}
