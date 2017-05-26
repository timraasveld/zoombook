import React from 'react'
import ReactDOM from 'react-dom'
import Viewport from './Viewport'
import * as THREE from 'three'
import './index.css'
import './index.html'

nw.Window.get().showDevTools()

ReactDOM.render(<Viewport />, document.getElementById('root'))
