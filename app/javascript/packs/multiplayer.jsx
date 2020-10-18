import React from 'react'
import ReactDOM from 'react-dom'
import Multiplayer from '../containers/Multiplayer'

document.addEventListener('DOMContentLoaded', () => {
  const dataElement = document.getElementById('data')

  if (dataElement) {
    const props = JSON.parse(dataElement.dataset.props)

    ReactDOM.render(
      <Multiplayer {...props} />,
      document.body.appendChild(document.createElement('div'))
    )
  }
})
