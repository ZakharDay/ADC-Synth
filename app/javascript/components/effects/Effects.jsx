import React from 'react'
import ButtonSet from '../controls/ButtonSet'
import Button from '../controls/Button'

export default class Effects extends React.Component {
  constructor(props) {
    super(props)
  }

  renderEffects = () => {
    const effects = this.props.effect
    let effectItems = []
    console.log(effects.length)
    if (effects.length != 0) {
      effects.forEach((effect, i) => {
        effectItems.push(<div key={i}>effect</div>)
      })
    } else {
      effectItems.push(
        <div key={Math.floor(Math.random() * 100)}>No effect</div>
      )
    }

    return effectItems
  }

  render() {
    const typeSetButtonEffects = ['distortion', 'feedbackDelay', 'tremolo']
    this.renderEffects()
    return (
      <div>
        <ButtonSet
          property="oscillator.type"
          set={typeSetButtonEffects}
          value=""
          handleChange={this.handleAddEffects}
        />

        <Button
          name="button"
          property="no"
          option={true}
          text="Add Effect"
          current={true}
          handleClick={this.props.handleCreateEffect}
        />
        {this.renderEffects()}
      </div>
    )
  }
}
