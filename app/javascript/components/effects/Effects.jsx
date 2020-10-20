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
      const name = effect.name
      effectItems.push(effect.name)
      if (name === 'chorus') {
        // effectItems.push(<Chorus settings={settings} />)
      } else if (name === 'feedbackDelay') {
        // effectItems.push(<FeedbackDelay settings={settings} />)
      } else if (name === 'distortion') {
        // effectItems.push(<Distortion settings={settings} />)
      }
    })

    return effectItems
  }

  render() {
    // const typeSetButtonEffects = ['distortion', 'feedbackDelay', 'tremolo']
    // this.renderEffects()
    // <ButtonSet
    //   property="oscillator.type"
    //   set={typeSetButtonEffects}
    //   value=""
    //   handleChange={this.handleAddEffects}
    // />
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
        {this.renderEffects()} <div>Add Effect</div>
      </div>
    )
  }
}
