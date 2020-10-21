import React from 'react'
import ReactDOM from 'react-dom'
import SynthG from '../containers/SynthG'
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SynthG />,
    document.body.appendChild(document.createElement('div'))
  )
})
