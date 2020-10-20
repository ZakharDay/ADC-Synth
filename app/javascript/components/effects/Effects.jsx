import React from 'react'
import ButtonSet from '../controls/ButtonSet'
// import Button from '../controls/Button'

import Chorus from './effects/Chorus'
import FeedbackDelay from './effects/FeedbackDelay'
import Distortion from './effects/Distortion'

export default class Effects extends React.Component {
  constructor(props) {
    super(props)
  }

  renderEffects = () => {
    const { settings } = this.props
    let effectItems = []
    settings.effects.forEach((effect, i) => {
      if (effect.name === 'autoFilter') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'autoPanner') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'autoWah') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'bitCrusher') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'chebyshev') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'chorus') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'distortion') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'feedbackDelay') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'feedbackEffect') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'freeverb') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'jcReverb') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'phaser') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'pingPongDelay') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'pitchShift') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'reverb') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'stereoWidener') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'tremolo') {
        effectItems.push(<div>{effect.name}</div>)
      } else if (effect.name === 'vibrato') {
        effectItems.push(<div>{effect.name}</div>)
      }
    })

    console.log(effectItems)
    return effectItems
  }

  render() {
    const { settings, instrumentId, addEffects } = this.props

    console.log(settings.effects)

    settings.effects.forEach((effect, i) => {
      const name = effect.name
      console.log(name)
      return this.renderEffects(name)
    })

    const typeSetButtonEffects = {
      autoFilter: () => addEffects(instrumentId, 'autoFilter'),
      autoPanner: () => addEffects(instrumentId, 'autoPanner'),
      autoWah: () => addEffects(instrumentId, 'autoWah'),
      bitCrusher: () => addEffects(instrumentId, 'bitCrusher'),
      chebyshev: () => addEffects(instrumentId, 'chebyshev'),
      chorus: () => addEffects(instrumentId, 'chorus'),
      distortion: () => addEffects(instrumentId, 'distortion'),
      feedbackDelay: () => addEffects(instrumentId, 'feedbackDelay'),
      feedbackEffect: () => addEffects(instrumentId, 'feedbackEffect'),
      freeverb: () => addEffects(instrumentId, 'freeverb'),
      jcReverb: () => addEffects(instrumentId, 'jcReverb'),
      phaser: () => addEffects(instrumentId, 'phaser'),
      pingPongDelay: () => addEffects(instrumentId, 'pingPongDelay'),
      pitchShift: () => addEffects(instrumentId, 'pitchShift'),
      reverb: () => addEffects(instrumentId, 'reverb'),
      stereoWidener: () => addEffects(instrumentId, 'stereoWidener'),
      tremolo: () => addEffects(instrumentId, 'tremolo'),
      vibrato: () => addEffects(instrumentId, 'vibrato')
    }

    // this.renderEffects()
    //
    // <Button
    //   name="button"
    //   property="no"
    //   option={true}
    //   text="Add Effect"
    //   current={true}
    //   handleClick={this.props.handleCreateEffect}
    // />
    // {this.renderEffects()}
    return (
      <div className="Effects">
        <ButtonSet text="Add Effect" set={typeSetButtonEffects} />
        {this.renderEffects()}
      </div>
    )
  }
}
