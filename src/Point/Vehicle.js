import Graph from '../Graph.js'
import Cesium from 'cesium/Source/Cesium.js'
import Point from '../Point/Point.js'
import * as mu from '../mapUtil.js'

export default class Vehicle extends Point {

  initShape() {
    this.ent = this.addShape({
      id: 'vehicle_' + Graph.seq++,
      model: {
        uri: '../../../static/model/GroundVehiclePBR/GroundVehiclePBR.gltf',
        scale: new Cesium.CallbackProperty((time, result) => this.scale, false),
        color: new Cesium.CallbackProperty((time, result) => {
          if (this.highLighted) {
            return Cesium.Color.fromBytes(...this.color, this.alpha*256).brighten(0.6, new Cesium.Color())
          } else {
            return Cesium.Color.fromBytes(...this.color, this.alpha*256)
          }
        }, false),
      }
    })

    this.color = [ 128, 0, 255]
    this.alpha = 0.80
    this.propEditor.addColor(this, 'color')
    this.propEditor.add(this, 'alpha', 0, 1)

    this.scale = 10000
    this.propEditor.add(this, 'scale', 0, 30000)
  }

}