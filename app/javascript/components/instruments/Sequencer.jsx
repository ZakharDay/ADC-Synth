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

  renderRow = (note) => {
    const { steps, currentPattern, patterns } = this.props
    let stepElements = []
    let current = false

    for (var i = 0; i < steps; i++) {
      if (
        patterns[currentPattern][i].step === i &&
        note ===
          patterns[currentPattern][i].note + patterns[currentPattern][i].octave
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
    return <div className="Sequencer">{this.renderGrid()}</div>
  }
}
