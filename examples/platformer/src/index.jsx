import { render } from 'solid-js/web'
import Melon from '../../../dist/components/Melon'
import Entity from '../../../dist/components/Entity'
import Preloader from '../../../dist/components/Preloader'
import Stage from '../../../dist/components/Stage'
import "./_global.css"
import CoinEntity from './entities/coin'
import {FlyEnemyEntity, SlimeEnemyEntity} from './entities/enemies'
import PlayerEntity from './entities/player'
//import resources from './resources'
import Resource from '../../../dist/components/Resource'
import PlayScreen from './screens/play'
import * as me from 'melonjs'
import game from './game'

function App() {
    return (
        <Melon audio>
            <Preloader callback={()=>{
                me.state.transition('fade', '#FFFFFF', 250)
                game.texture = new me.TextureAtlas(me.loader.getJSON('texture'), me.loader.getImage('texture'))
            }} autoPlay>
                <Resource name="tileset" type="image" src="data/img/tileset.png" />
                <Resource name="background" type="image" src="data/img/background.png" />
                <Resource name="clouds" type="image" src="data/img/clouds.png" />
                <Resource name="map1" type="tmx" src="data/map/map1.tmx" />
                <Resource name="map2" type="tmx" src="data/map/map2.json" />
                <Resource name="tileset" type="tsx" src="data/map/tileset.json" />
                <Resource name="dst-gameforest" type="audio" src="data/bgm/" />
                <Resource name="cling" type="audio" src="data/sfx/" />
                <Resource name="die" type="audio" src="data/sfx/" />
                <Resource name="enemykill" type="audio" src="data/sfx/" />
                <Resource name="jump" type="audio" src="data/sfx/" />
                <Resource name="texture" type="json" src="data/img/texture.json" />
                <Resource name="texture" type="image" src="data/img/texture.png" />
                <Resource name="PressStart2P" type="image" src="data/fnt/PressStart2P.png" />
                <Resource name="PressStart2P" type="binary" src="data/fnt/PressStart2P.fnt"/>
                <Stage state={me.state.PLAY} stage={new PlayScreen()}/>
                <Entity name="FlyEntity" class={FlyEnemyEntity}/>
                <Entity name="SlimeEntity" class={SlimeEnemyEntity}/>
                <Entity name="CoinEntity" class={CoinEntity}/>
                <Entity name="mainPlayer" class={PlayerEntity}/>
            </Preloader>
        </Melon>
    )
}

render(App, document.getElementById('root'))