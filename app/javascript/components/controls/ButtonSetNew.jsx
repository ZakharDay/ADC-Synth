import React from 'react'
import ButtonSetToggle from './ButtonSetToggle'

export default class ButtonSet extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let { text, set, current } = this.props
    let buttonList = []
    let firstColumn = []
    let secondColumn = []

    set.forEach((button, i) => {
      console.log(current, button)
      if (current === button) {
        buttonList.push(
          <ButtonSetToggle
            text={button}
            on={true}
            handleClick={set[button]}
            key={i}
          />
        )
      } else {
        buttonList.push(
          <ButtonSetToggle
            text={button}
            on={false}
            handleClick={set[button]}
            key={i}
          />
        )
      }
    })

    // switch (buttonList.length) {
    //   case 1:
    //     firstColumn.push(buttonList[0])
    //     break:
    //   case 2:
    //     firstColumn.push(buttonList[0])
    //     secondColumn.push(buttonList[1])
    //     break
    //   case 3:
    //     firstColumn.push(buttonList[0])
    //     secondColumn.push(buttonList[1])
    //     firstColumn.push(buttonList[2])
    //     break
    //   case 4:
    //     firstColumn.push(buttonList[0])
    //     secondColumn.push(buttonList[1])
    //     firstColumn.push(buttonList[2])
    //     secondColumn.push(buttonList[3])
    //     break
    //   case 5:
    //     firstColumn.push(buttonList[0])
    //     secondColumn.push(buttonList[1])
    //     firstColumn.push(buttonList[2])
    //     secondColumn.push(buttonList[3])
    //     firstColumn.push(buttonList[4])
    //     break
    //   case 6:
    //     firstColumn.push(buttonList[0])
    //     secondColumn.push(buttonList[1])
    //     firstColumn.push(buttonList[2])
    //     secondColumn.push(buttonList[3])
    //     firstColumn.push(buttonList[4])
    //     secondColumn.push(buttonList[5])
    //     break
    //   case 7:
    //     firstColumn.push(buttonList[0])
    //     secondColumn.push(buttonList[1])
    //     firstColumn.push(buttonList[2])
    //     secondColumn.push(buttonList[3])
    //     firstColumn.push(buttonList[4])
    //     secondColumn.push(buttonList[5])
    //     firstColumn.push(buttonList[6])
    //     break
    //   case 8:
    //     firstColumn.push(buttonList[0])
    //     secondColumn.push(buttonList[1])
    //     firstColumn.push(buttonList[2])
    //     secondColumn.push(buttonList[3])
    //     firstColumn.push(buttonList[4])
    //     secondColumn.push(buttonList[5])
    //     firstColumn.push(buttonList[6])
    //     secondColumn.push(buttonList[7])
    //     break
    // }
    // <div className="buttonSet">
    //   <div>{firstColumn}</div>
    //   <div>{secondColumn}</div>
    // </div>
    return (
      <div className="ButtonSet">
        <h3> {text}</h3>
        <div className="buttonList">{buttonList}</div>
      </div>
    )
  }
}
