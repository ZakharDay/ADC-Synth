import React from 'react'
import ReactDOM from 'react-dom'
import Refactoring from '../containers/Refactoring'

document.addEventListener('DOMContentLoaded', () => {
  // const props = JSON.parse(document.getElementById('data').dataset.props)

  // <ADCSynth />,
  ReactDOM.render(
    <Refactoring />,
    document.body.appendChild(document.createElement('div'))
  )
})
