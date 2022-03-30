import {onMount, splitProps, createSignal, createContext} from 'solid-js'
import * as me from 'melonjs'
import mergeShallow from '../functions/mergeShallow'

const defaultStyles = {
    'text-align': 'center',
    height: '100vh',
    width: '100vw'
}

export const MelonReady = createContext(null)

function Melon(props) {
    const [local, attributes] = splitProps(props, ['children', 'scale', 'parent', 'style', 'width', 'height'])
    let gameCanvas
    const style = () => mergeShallow(defaultStyles, local.style)
    const [isReady, setReady] = createSignal(false)
    onMount(()=>{
        me.device.onReady(() => {
            const videoOptions = {parent: gameCanvas, scale: local.hasOwnProperty('scale') ? local.scale : 'auto', scaleMethod: local.hasOwnProperty('scaleMethod') ? local.scaleMethod : 'fill-min', consoleHeader: false}
            const initialized = me.video.init(isFinite(props.width) ? props.width : 650, isFinite(props.height) ? props.height : 480, videoOptions)
            if (!initialized) return alert("Your browser does not support HTML5 canvas.");
            setReady(true)
        })
    })
    return <MelonReady.Provider value={isReady}>
        <div style={style()} className="gameHolder" ref={gameCanvas} {...attributes}>
        {props.children || null}
        </div>
    </MelonReady.Provider>
}

export default Melon