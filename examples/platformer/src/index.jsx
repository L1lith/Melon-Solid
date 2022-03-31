import { render } from 'solid-js/web'
import Melon from '../../../dist/components/Melon'
import Entity from '../../../dist/components/Entity'
import Preloader from '../../../dist/components/Preloader'
import Stage from '../../../dist/components/Stage'
import "./_global.css"
import CoinEntity from './entities/coin'
import {FlyEnemyEntity, SlimeEnemyEntity} from './entities/enemies'
import PlayerEntity from './entities/player'
import resources from './resources'
import PlayScreen from './screens/play'
import * as me from 'melonjs'
import game from './game'

function App() {
    return (
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
    )
}

render(App, document.getElementById('root'))