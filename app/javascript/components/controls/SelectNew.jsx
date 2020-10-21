import classnames from 'classnames'
import React from 'react'

export default class Select extends React.Component {
  constructor(props) {
    super(props)
  }

  calcSelectOptions = () => {}

  render() {
    const { current, on } = this.props

    const classes = classnames({
      SelectCurrent: true,
      open: on
    })

    return (
      <div className="SelectButton">
        <div className={classes}>
          <span>{current}</span>
        </div>
        <div className="OpenedList">
          <div className="OpenedSelect">Option 2</div>
          <div className="OpenedSelect">Option 3</div>
          <div className="OpenedSelect">Option 4</div>
          <div className="OpenedSelect">Option 5</div>
          <div className="OpenedSelect">Option 6</div>
        </div>
      </div>
    )
  }
}
