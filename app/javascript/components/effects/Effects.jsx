import React, { PureComponent } from 'react'

import Select from '../controls/Select'
import AddButtonNew from '../controls/AddButtonNew'

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

export default class Effects extends PureComponent {
  constructor(props) {
    super(props)
  }

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
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'autoPanner') {
        effectItems.push(
          <AutoPanner
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'autoWah') {
        effectItems.push(
          <AutoWah
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'bitCrusher') {
        effectItems.push(
          <BitCrusher
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'chebyshev') {
        effectItems.push(
          <Chebyshev
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'chorus') {
        effectItems.push(
          <Chorus
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'distortion') {
        effectItems.push(
          <Distortion
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'feedbackDelay') {
        effectItems.push(
          <FeedbackDelay
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'feedbackEffect') {
        effectItems.push(
          <FeedbackEffect
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'freeverb') {
        effectItems.push(
          <Freeverb
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'jcReverb') {
        effectItems.push(
          <JcReverb
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'phaser') {
        effectItems.push(
          <Phaser
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'pingPongDelay') {
        effectItems.push(
          <PingPongDelay
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'pitchShift') {
        effectItems.push(
          <PitchShift
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'reverb') {
        effectItems.push(
          <Reverb
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'stereoWidener') {
        effectItems.push(
          <StereoWidener
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'tremolo') {
        effectItems.push(
          <Tremolo
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
            key={i}
          />
        )
      } else if (effect.name === 'vibrato') {
        effectItems.push(
          <Vibrato
            parentId={id}
            effect={effect}
            handleEffectValueChange={(id, property, value) =>
              handleEffectValueChange(id, effect.name, property, value)
            }
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
      autoFilter: {
        name: 'Auto Filter',
        callback: () => handleEffectCreate(instrumentId, 'autoFilter')
      },
      autoPanner: {
        name: 'Auto Panner',
        callback: () => handleEffectCreate(instrumentId, 'autoPanner')
      },
      autoWah: {
        name: 'Auto Wah',
        callback: () => handleEffectCreate(instrumentId, 'autoWah')
      },
      bitCrusher: {
        name: 'Bit Crusher',
        callback: () => handleEffectCreate(instrumentId, 'bitCrusher')
      },
      chebyshev: {
        name: 'Chebyshev',
        callback: () => handleEffectCreate(instrumentId, 'chebyshev')
      },
      chorus: {
        name: 'Chorus',
        callback: () => handleEffectCreate(instrumentId, 'chorus')
      },
      distortion: {
        name: 'Distortion',
        callback: () => handleEffectCreate(instrumentId, 'distortion')
      },
      feedbackDelay: {
        name: 'Feedback Delay',
        callback: () => handleEffectCreate(instrumentId, 'feedbackDelay')
      },
      feedbackEffect: {
        name: 'Feedback Effect',
        callback: () => handleEffectCreate(instrumentId, 'feedbackEffect')
      },
      freeverb: {
        name: 'Freeverb',
        callback: () => handleEffectCreate(instrumentId, 'freeverb')
      },
      jcReverb: {
        name: 'JC Reverb',
        callback: () => handleEffectCreate(instrumentId, 'jcReverb')
      },
      phaser: {
        name: 'Phaser',
        callback: () => handleEffectCreate(instrumentId, 'phaser')
      },
      pingPongDelay: {
        name: 'Ping-Pong Delay',
        callback: () => handleEffectCreate(instrumentId, 'pingPongDelay')
      },
      pitchShift: {
        name: 'Pitch Shift',
        callback: () => handleEffectCreate(instrumentId, 'pitchShift')
      },
      reverb: {
        name: 'Reverb',
        callback: () => handleEffectCreate(instrumentId, 'reverb')
      },
      stereoWidener: {
        name: 'Stereo Widener',
        callback: () => handleEffectCreate(instrumentId, 'stereoWidener')
      },
      tremolo: {
        name: 'Tremolo',
        callback: () => handleEffectCreate(instrumentId, 'tremolo')
      },
      vibrato: {
        name: 'Vibrato',
        callback: () => handleEffectCreate(instrumentId, 'vibrato')
      }
    }

    let addEffectButtons = []

    Object.keys(typeSetButtonEffects).forEach((key, i) => {
      addEffectButtons.push(
        <AddButtonNew
          text={typeSetButtonEffects[key].name}
          size={'Medium'}
          handleClick={typeSetButtonEffects[key].callback}
          key={i}
        />
      )
    })

    return (
      <div className="Effects">
        {this.renderEffects()}

        <div>
          <div className="effectsBar">
            <div>
              <span>Effects</span>
            </div>
          </div>
          <div className="addButtonsContainer">{addEffectButtons}</div>
        </div>
      </div>
    )
  }
}
