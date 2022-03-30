import { render } from 'solid-js/web'
import Melon from '../../../dist/components/Melon'
import Entity from '../../../dist/components/Entity'
import "./_global.css"
import CoinEntity from './CoinEntity'
import EnemyEntity from './EnemyEntity'
import PlayerEntity from './PlayerEntity'

function App() {
    return (
        <Melon>
            <Entity class={EnemyEntity}/>
            <Entity class={CoinEntity}/>
            <Entity name="mainPlayer" class={PlayerEntity}/>
        </Melon>
    )
}

render(App, document.getElementById('root'))