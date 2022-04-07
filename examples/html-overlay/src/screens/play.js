import * as me from 'melonjs'

class PlayScreen extends me.Stage {
  /**
   * action to perform on state change
   */
  onResetEvent() {
    me.game.reset()

    // add the background & foreground
    // add the foreground
    var background_sprite = new me.Sprite(0, 0, {
      image: me.loader.getImage('background'),
      anchorPoint: { x: 0, y: 0 }
    })
    me.game.world.addChild(background_sprite, 0)
  }
}

export default PlayScreen
