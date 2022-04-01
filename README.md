# Melon Solid

This project fuses the awesome frameworks [Melon.js](https://www.melonjs.org) (for game development) and [Solid.js](https://www.solidjs.com/) (for making websites). By combining them together you can get the convience of HTML syntax for super easy development

When using plain Melon.js we write our games like this (from the platformer example):

```jsx
function onload() {
    if (!me.video.init(800, 600, {
      parent: 'screen',
      scaleMethod: 'flex-width',
      renderer: me.video.AUTO,
      preferWebGL1: false,
      subPixel: false
    })) {
        alert('Your browser does not support HTML5 canvas.')
        return
    }
    
    me.audio.init('mp3,ogg')
    me.loader.preload(resources, () => {
        me.state.set(me.state.PLAY, new PlayScreen())
        me.state.transition('fade', '#FFFFFF', 250)
        me.pool.register('mainPlayer', PlayerEntity)
        me.pool.register('SlimeEntity', SlimeEnemyEntity)
        me.pool.register('FlyEntity', FlyEnemyEntity)
        me.pool.register('CoinEntity', CoinEntity, true)
    }
    me.state.change(me.state.PLAY)
}
```

Now making games is as easy as writing HTML:

```jsx
function App(){
    <Melon audio>
        <Preloader callback={()=>{
            me.state.transition('fade', '#FFFFFF', 250)
            game.texture = new me.TextureAtlas(me.loader.getJSON('texture'), me.loader.getImage('texture'))
        }} resources={resources} autoPlay>
            <Stage state={me.state.PLAY} stage={new PlayScreen()}/>
            <Entity name="FlyEntity" class={FlyEnemyEntity}/>
            <Entity name="SlimeEntity" class={SlimeEnemyEntity}/>
            <Entity name="CoinEntity" class={CoinEntity}/>
            <Entity name="mainPlayer" class={PlayerEntity}/>
        </Preloader>
    </Melon>
}
```

Plus, if we want to add some HTML to serve as our GUI, we can simple put it directly inside our Melon game!

## Examples

Want to see a few examples? I've implemented the Whack-a-Mole and Platformer games (taken from Melon.js) Look in the examples folder

## TODO:

## Documentation

There's currently no documentation yet, sorry. I have implemented tests though so it is working, and if you want to see how to use it try looking in the examples directory.

### Multiple Games/Games Unloading Properly

Melon.js Currently breaks when you try to have multiple games at once, or if you load a game, unload it, and reload it again. This is a limitation within Melon.js that will hopefully be fixed soon.
