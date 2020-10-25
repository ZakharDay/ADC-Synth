import React, { PureComponent } from 'react'

import ToggleButton from '../controls/ToggleButton'
import RecedingToggleButton from '../controls/RecedingToggleButton'
import AddButtonNew from '../controls/AddButtonNew'

export default class InstrumentMenu extends PureComponent {
  constructor(props) {
    super(props)
  }

  renderToggleButtons = (buttons) => {
    let toggleItems = []
    buttons.forEach((button, i) => {
      if (this.props.name === 'Parts') {
        toggleItems.push(
          <RecedingToggleButton
            text={button.name}
            on={button.isOn}
            handleClick={button.handleClick}
            remove={() => console.log('Remove')}
            key={i}
          />
        )
      } else {
        toggleItems.push(
          <ToggleButton
            text={button.name}
            on={button.isOn}
            handleClick={button.handleClick}
            key={i}
          />
        )
      }
    })
    return toggleItems
  }

  render() {
    const { name, buttons, open, handlePartCreate } = this.props

    return (
      <div className={'InstrumentMenu'}>
        <div className={'barHeading'}>
          <span>{name}</span>
        </div>

        <div className="ToggleButtons">{this.renderToggleButtons(buttons)}</div>

        {name === 'Parts' ? (
          <AddButtonNew
            text={'Add part'}
            handleClick={handlePartCreate}
            size={'Medium'}
          />
        ) : open === 'none' ? (
          <div className="closeButton"></div>
        ) : (
          <div className="closeButton open"></div>
        )}
      </div>
    )
  }
}
