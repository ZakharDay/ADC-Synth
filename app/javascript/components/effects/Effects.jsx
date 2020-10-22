import React from 'react'
import Select from '../controls/Select'
// import Button from '../controls/Button'

import AutoFilter from './effects/AutoFilter'
import AutoPanner from './effects/AutoPanner'
import AutoWah from './effects/AutoWah'
import BitCrusher from './effects/BitCrusher'
import Chebyshev from './effects/Chebyshev'
import Chorus from './effects/Chorus'
import Distortion from './effects/Distortion'
import FeedbackDelay from './effects/FeedbackDelay'
import FeedbackEffect from './effects/FeedbackEffect'
import Freeverb from './effects/Freeverb'
import JcReverb from './effects/JcReverb'
import Phaser from './effects/Phaser'
import PingPongDelay from './effects/PingPongDelay'
import PitchShift from './effects/PitchShift'
import Reverb from './effects/Reverb'
import StereoWidener from './effects/StereoWidener'
import Tremolo from './effects/Tremolo'
import Vibrato from './effects/Vibrato'

export default class Effects extends React.Component {
  constructor(props) {
    super(props)
  }

  // filterEffectSettings = (name, settings) => {
  //   return settings.effects.filter((effect) => {
  //     if (effect.name === 'name') {
  //       return effect
  //     }
  //   })
  // }

  renderEffects = () => {
    const { settings, instrument, handleEffectValueChange } = this.props
    const { id } = instrument
    let effectItems = []

    settings.effects.forEach((effect, i) => {
      if (effect.name === 'autoFilter') {
        effectItems.push(
          <AutoFilter
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'autoPanner') {
        effectItems.push(
          <AutoPanner
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'autoWah') {
        effectItems.push(
          <AutoWah
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'bitCrusher') {
        effectItems.push(
          <BitCrusher
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'chebyshev') {
        effectItems.push(
          <Chebyshev
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'chorus') {
        effectItems.push(
          <Chorus
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'distortion') {
        effectItems.push(
          <Distortion
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'feedbackDelay') {
        effectItems.push(
          <FeedbackDelay
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'feedbackEffect') {
        effectItems.push(
          <FeedbackEffect
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'freeverb') {
        effectItems.push(
          <Freeverb
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'jcReverb') {
        effectItems.push(
          <JcReverb
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'phaser') {
        effectItems.push(
          <Phaser
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'pingPongDelay') {
        effectItems.push(
          <PingPongDelay
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'pitchShift') {
        effectItems.push(
          <PitchShift
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'reverb') {
        effectItems.push(
          <Reverb
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'stereoWidener') {
        effectItems.push(
          <StereoWidener
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'tremolo') {
        effectItems.push(
          <Tremolo
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      } else if (effect.name === 'vibrato') {
        effectItems.push(
          <Vibrato
            parentId={id}
            effect={effect}
            handleEffectValueChange={handleEffectValueChange}
            key={i}
          />
        )
      }
    })

    return effectItems
  }

  render() {
    const { settings, instrument, handleEffectCreate } = this.props
    const instrumentId = instrument.id

    settings.effects.forEach((effect, i) => {
      const name = effect.name
      return this.renderEffects(name)
    })

    const typeSetButtonEffects = {
      autoFilter: () => handleEffectCreate(instrumentId, 'autoFilter'),
      autoPanner: () => handleEffectCreate(instrumentId, 'autoPanner'),
      autoWah: () => handleEffectCreate(instrumentId, 'autoWah'),
      bitCrusher: () => handleEffectCreate(instrumentId, 'bitCrusher'),
      chebyshev: () => handleEffectCreate(instrumentId, 'chebyshev'),
      chorus: () => handleEffectCreate(instrumentId, 'chorus'),
      distortion: () => handleEffectCreate(instrumentId, 'distortion'),
      feedbackDelay: () => handleEffectCreate(instrumentId, 'feedbackDelay'),
      feedbackEffect: () => handleEffectCreate(instrumentId, 'feedbackEffect'),
      freeverb: () => handleEffectCreate(instrumentId, 'freeverb'),
      jcReverb: () => handleEffectCreate(instrumentId, 'jcReverb'),
      phaser: () => handleEffectCreate(instrumentId, 'phaser'),
      pingPongDelay: () => handleEffectCreate(instrumentId, 'pingPongDelay'),
      pitchShift: () => handleEffectCreate(instrumentId, 'pitchShift'),
      reverb: () => handleEffectCreate(instrumentId, 'reverb'),
      stereoWidener: () => handleEffectCreate(instrumentId, 'stereoWidener'),
      tremolo: () => handleEffectCreate(instrumentId, 'tremolo'),
      vibrato: () => handleEffectCreate(instrumentId, 'vibrato')
    }

    return (
      <div className="Effects">
        <Select text="Add Effect" set={typeSetButtonEffects} />
        {this.renderEffects()}
      </div>
    )
  }
}
