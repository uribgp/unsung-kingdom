import { calibur } from '../event/calibur'
import { appleCollection } from '../event/lute'
export default {
  create (scene) {
    const sword = scene.map.getObjectById(3)
    const nikke = scene.map.getObjectById(2)
    calibur(scene, sword, nikke)
    Array.range(4, 5).forEach(id => appleCollection(scene, scene.map.getObjectById(id), `a9_${id}`))
  }
}