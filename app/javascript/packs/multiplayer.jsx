import React from 'react'
import ReactDOM from 'react-dom'
import Multiplayer from '../containers/Multiplayer'
import { ActionCableProvider } from 'react-actioncable-provider'

document.addEventListener('DOMContentLoaded', () => {
  const dataElement = document.getElementById('data')

  if (dataElement) {
    const props = JSON.parse(dataElement.dataset.props)

    ReactDOM.render(
      <ActionCableProvider url="ws://localhost:3000/cable">
        <Multiplayer {...props} />
      </ActionCableProvider>,
      document.body.appendChild(document.createElement('div'))
    )
  }
})
