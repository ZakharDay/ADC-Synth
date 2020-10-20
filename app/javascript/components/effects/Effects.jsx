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

  existenceСheck = (prop) => {
    if (prop) {
      prop = prop
    } else {
      prop = 0
    }
    return prop
  }

  renderEffects = () => {
    const { settings, instrumentId, chanheEffectSetValue } = this.props
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
    const { settings, instrumentId, addEffects } = this.props

    settings.effects.forEach((effect, i) => {
      const name = effect.name
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
        <Select text="Add Effect" set={typeSetButtonEffects} />
        {this.renderEffects()}
      </div>
    )
  }
}
