import React from 'react'
import ReactDOM from 'react-dom'
import ADCSynth from '../containers/ADCSynth'
import ToneSynth from '../components/instruments/ToneSynth'

document.addEventListener('DOMContentLoaded', () => {
  // const props = JSON.parse(document.getElementById('data').dataset.props)

  // <ADCSynth />,
  ReactDOM.render(
    <ToneSynth />,
    document.body.appendChild(document.createElement('div'))
  )
})
