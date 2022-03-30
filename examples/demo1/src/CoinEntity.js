import { Collectable } from 'melonjs'

export default class CoinEntity extends Collectable {
  // extending the init function is not mandatory
  // unless you need to add some extra initialization
  constructor(x, y, settings) {
    // call the parent constructor
    super(x, y, settings)

    // this item collides ONLY with PLAYER_OBJECT
    this.body.setCollisionMask(me.collision.types.PLAYER_OBJECT)
  }

  // this function is called by the engine, when
  // an object is touched by something (here collected)
  onCollision(response, other) {
    // do something when collected

    // make sure it cannot be collected "again"
    this.body.setCollisionMask(me.collision.types.NO_OBJECT)

    // remove it
    me.game.world.removeChild(this)

    return false
  }
}
