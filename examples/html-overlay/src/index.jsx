import { render } from 'solid-js/web'
import Melon from '../../../dist/components/Melon'
import Preloader from '../../../dist/components/Preloader'
import "./_global.css"
import Stage from '../../../dist/components/Stage'
import resources from './resources'
import * as me from 'melonjs'
import data from './data'
import PlayScreen from './screens/play'


function App() {
    return (
        <Melon scaleMethod="fit-max" width={880} height={1250}>
            <Preloader callback={()=>{ 
                me.state.transition('fade', '#000000', 250)
            }} resources={resources} autoPlay>
                <Stage state={me.state.PLAY} stage={new PlayScreen()}/>
                <div style={{'font-size': '10em', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>Castles are Cool!</div>
            </Preloader>
        </Melon>
    )
}

render(App, document.getElementById('root'))