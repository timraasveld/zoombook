import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import React3 from 'react-three-renderer'
import * as THREE from 'three'
import Browser from './Browser'
import MapControls from 'three-map-controls'
import uuid from 'uuid/v4'

const fov = 75

const maxDistance = 1500              // zoomed out
const minDistance = maxDistance / 4   // zoomed in

const zoomSpeed = 0.6

class Viewport extends Component {
  constructor() {
    super()

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      cameraPosition: new THREE.Vector3(0, 0, maxDistance),
      browsers: [
        { url: 'http://nu.nl', position: new THREE.Vector3(0, 0, 0) },
        { url: 'https://tweakers.net', position: new THREE.Vector3(500, 500, 0) }
      ].map(function(browser) {
        browser.uuid = uuid()
        return browser
      })
    }

    // Render CSS output outside ReactDOM context
    this.cssRenderer = new THREE.CSS3DRenderer()
    this.cssRenderer.setSize(this.state.width, this.state.height)
    this.cssRenderer.domElement.className = 'css-renderer'
    this.cssRenderer.domElement.style.position = 'absolute'
    this.cssRenderer.domElement.style.top = 0
    document.body.appendChild(this.cssRenderer.domElement)
  }

  componentDidMount() {
    const { camera, scene } = this.refs

    var controls = new MapControls(camera, document.body, {
      target: new THREE.Plane(new THREE.Vector3(0, 0, 1), 0),
      minDistance: minDistance,
      maxDistance: maxDistance,
      zoomSpeed: zoomSpeed
    })

    this.controls = controls

    window.onresize = this.handleResize.bind(this)

    // needed for threejs-inspector
    window.THREE = THREE
    window.scene = this.refs.scene
  }

  handleResize() {
    const [width, height] = [window.innerWidth, window.innerHeight]

    this.setState({
      width: width,
      height: width
    })
    this.cssRenderer.setSize(width, height)
  }

  animate() {
    const {scene, camera} = this.refs

    this.controls.update()

    this.cssRenderer.render(scene, camera)
  }

  render() {
    const { width, height, cameraPosition } = this.state

    return (
      <React3 mainCamera="camera"
              width={width}
              height={height}
              onAnimate = {() => this.animate()}>
      <scene ref="scene">
        <perspectiveCamera
          name="camera"
          ref="camera"
          fov={fov}
          aspect={width / height}
          near={0.1}
          far={maxDistance}
          position={cameraPosition}
        />
        {this.renderBrowsers()}
      </scene>
      </React3>
    )
  }

  renderBrowsers() {
    return this.state.browsers.map(function(browser) {
      return (
        <Browser key={browser.uuid} {...browser} />
      )
    })
  }
}

export default Viewport
