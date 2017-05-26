import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import THREE from './CSS3DRenderer'

export default class CSS3D extends Component {
  componentDidMount() {
    // Use separate ReactDOM tree for rendering contents
    this.HTMLElement = document.createElement('div')
    ReactDOM.render(this.props.children, this.HTMLElement)

    this._createCSS3DObject()
  }

  _createCSS3DObject() {
    var CSS3DObject = new THREE.CSS3DObject(this.HTMLElement)
    this.refs.group.add(CSS3DObject)
  }

  render() {
    return (
      <group ref="group"
             position={this.props.position}
             rotation={this.props.rotation} >
        <mesh>
          <planeGeometry width={125}
                         height={200}
                         widthSegments={10}
                         heightSegments={10}/>
          <meshBasicMaterial wireframe={true} transparent={true} opacity={0} />
        </mesh>
      </group>
    )
  }
}
