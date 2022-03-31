import { render } from 'solid-js/web'
import Melon from '../../../dist/components/Melon'
import Preloader from '../../../dist/components/Preloader'
import "./_global.css"
import Stage from '../../../dist/components/Stage'
import resources from './resources'
import * as me from 'melonjs'
import data from './data'
import PlayScreen from '../../platformer/src/screens/play'


function App() {
    return (
        <Melon onReady={()=>{
            me.timer.maxfps = 30;
            me.save.add({hiscore : 0});
            // set the local hiscore value
            data.hiscore = me.save.hiscore;
        }} audio>
            <Preloader callback={()=>{ 

                // set a fade transition effect
                me.state.transition('fade', '#000000', 250)

                // start the game
                me.state.change(me.state.PLAY)
            }} resources={resources}>
                <Stage state={me.state.PLAY} stage={new PlayScreen()}></Stage>
            </Preloader>
        </Melon>
    )
}

render(App, document.getElementById('root'))