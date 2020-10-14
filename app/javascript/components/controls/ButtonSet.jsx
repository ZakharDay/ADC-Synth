import React from 'react'

import Button from './Button'

export default class ButtonSet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { property, set, value, handleChange } = this.props
    let buttons = []

    set.forEach((option, i) => {
      buttons.push(
        <Button
          name={name}
          property={property}
          option={option}
          text={option}
          current={value}
          handleClick={handleChange}
          key={i}
        />
      )
    })

    return <div className="ButtonSet">{buttons}</div>
  }
}
