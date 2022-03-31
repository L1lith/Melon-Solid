import { render } from 'solid-js/web'
import Melon from '../../../dist/components/Melon'
import Entity from '../../../dist/components/Entity'
import Preloader from '../../../dist/components/Preloader'
import "./_global.css"
import CoinEntity from './CoinEntity'
import EnemyEntity from './EnemyEntity'
import PlayerEntity from './PlayerEntity'
import resources from './resources'

function App() {
    return (
        <Melon audio>
            <Preloader resources={resources} callback={()=>{}}/>
            <Entity class={EnemyEntity}/>
            <Entity class={CoinEntity}/>
            <Entity name="mainPlayer" class={PlayerEntity}/>
        </Melon>
    )
}

render(App, document.getElementById('root'))