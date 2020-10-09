import React from 'react'
import ReactDOM from 'react-dom'
import Synth from '../containers/Synth'

document.addEventListener('DOMContentLoaded', () => {
  // const props = JSON.parse(document.getElementById('data').dataset.props)

  ReactDOM.render(
    <Synth />,
    document.body.appendChild(document.createElement('div'))
  )
})
