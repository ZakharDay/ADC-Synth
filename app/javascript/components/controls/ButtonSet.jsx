import React from 'react'

import ToggleButton from './ToggleButton'

export default class ButtonSet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { text, set, current } = this.props
    let buttonList = []
    Object.keys(set).forEach((button, i) => {
      console.log(current, button)
      if (current === button) {
        buttonList.push(
          <ToggleButton
            text={button}
            on={true}
            handleClick={set[button]}
            key={i}
          />
        )
      } else {
        buttonList.push(
          <ToggleButton
            text={button}
            on={false}
            handleClick={set[button]}
            key={i}
          />
        )
      }
    })
    return <div className="ButtonSet">{buttonList}</div>
  }
}
