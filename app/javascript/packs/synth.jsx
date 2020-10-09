import React from 'react'
import ReactDOM from 'react-dom'
import ADCSynth from '../containers/ADCSynth'

document.addEventListener('DOMContentLoaded', () => {
  // const props = JSON.parse(document.getElementById('data').dataset.props)

  ReactDOM.render(
    <ADCSynth />,
    document.body.appendChild(document.createElement('div'))
  )
})
