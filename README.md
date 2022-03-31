# Melon Solid
This project fuses the awesome frameworks Melon.js (for game development) and Solid.js (for making websites). By combining them together you can get the convience of HTML syntax while developing games using Melon.js

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
