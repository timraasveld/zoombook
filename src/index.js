import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '../public/index.html'

nw.Window.get().showDevTools()

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
