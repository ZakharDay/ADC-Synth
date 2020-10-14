import React from 'react'

export default class Keyboard extends React.Component {
  constructor(props) {
    super(props)
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

  render() {
    return <div className="keyboard">{this.props.renderNoteButtons()}</div>
  }
}
