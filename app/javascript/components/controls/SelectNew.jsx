import classnames from 'classnames'
import React, { PureComponent } from 'react'
import SelectToggleButton from './SelectToggleButton'

export default class Select extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      optionsList: [],
      isOpened: false
    }
  }

  calcSelectOptions = () => {
    const { options } = this.props
    const { optionsList, isOpened } = this.state

    let selectOptions = []

    options.forEach((option, i) => {
      selectOptions.push(
        <SelectToggleButton onClick={console.log(1)} text={option[i]} key={i} />
      )
    })

    if (isOpened == false) {
      this.setState({
        optionsList: selectOptions,
        isOpened: !isOpened
      })
    } else {
      this.setState({
        optionsList: [],
        isOpened: !isOpened
      })
    }
  }

  render() {
    const { current, on, options } = this.props
    const { optionsList, isOpened } = this.state

    const classes = classnames({
      select: true,
      on: isOpened
    })

    return (
      <div className={classes}>
        <div onClick={() => this.calcSelectOptions()} className="selectCurrent">
          <span>{current}</span>
        </div>
        <div className="openedList">{optionsList}</div>
      </div>
    )
  }
}
