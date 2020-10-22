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
import AddButton from '../controls/AddButtonNew'

export default class Effects extends React.Component {
  constructor(props) {
    super(props)
  }

  existenceСheck = (prop) => {
    if (prop) {
      prop = prop
    } else {
      prop = 0
    }
    return prop
  }

  renderEffects = () => {
    const { settings, instrument, chanheEffectSetValue } = this.props
    const instrumentId = instrument.id
    let effectItems = []

    settings.effects.forEach((effect, i) => {
      if (effect.name === 'autoFilter') {
        effectItems.push(
          <AutoFilter
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'autoPanner') {
        effectItems.push(
          <AutoPanner
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'autoWah') {
        effectItems.push(
          <AutoWah
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'bitCrusher') {
        effectItems.push(
          <BitCrusher
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'chebyshev') {
        effectItems.push(
          <Chebyshev
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'chorus') {
        effectItems.push(
          <Chorus
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'distortion') {
        effectItems.push(
          <Distortion
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'feedbackDelay') {
        effectItems.push(
          <FeedbackDelay
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'feedbackEffect') {
        effectItems.push(
          <FeedbackEffect
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'freeverb') {
        effectItems.push(
          <Freeverb
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'jcReverb') {
        effectItems.push(
          <JcReverb
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'phaser') {
        effectItems.push(
          <Phaser
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'pingPongDelay') {
        effectItems.push(
          <PingPongDelay
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'pitchShift') {
        effectItems.push(
          <PitchShift
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'reverb') {
        effectItems.push(
          <Reverb
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'stereoWidener') {
        effectItems.push(
          <StereoWidener
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'tremolo') {
        effectItems.push(
          <Tremolo
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
          />
        )
      } else if (effect.name === 'vibrato') {
        effectItems.push(
          <Vibrato
            instrumentId={instrumentId}
            settings={settings}
            chanheEffectSetValue={chanheEffectSetValue}
            createProp={this.createProp}
            existenceСheck={this.existenceСheck}
            key={Math.floor(Math.random() * 100)}
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
        <div>
          <AddButton text="Add Chorus" size="medium" />
        </div>
      </div>
    )
  }
}
