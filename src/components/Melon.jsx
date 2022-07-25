import {onMount, splitProps, createSignal, createContext} from 'solid-js'
import * as me from 'melonjs'
import mergeShallow from '../functions/mergeShallow.js'

const defaultStyles = {
    'text-align': 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
}

export const MelonReady = createContext(null)

function Melon(props) {
    const [local, attributes] = splitProps(props, ['children', 'scale', 'parent', 'style', 'width', 'height', 'audio', 'scaleMethod'])
    let gameCanvas
    const style = () => mergeShallow(defaultStyles, local.style)
    const [isReady, setReady] = createSignal(false)
    onMount(()=>{
        me.device.onReady(() => {
            const videoOptions = {parent: gameCanvas, scale: typeof local.scale == 'string' ? local.scale : 'auto', scaleMethod: typeof local.scaleMethod == 'string' ? local.scaleMethod : 'fill-max', consoleHeader: false}
            const initialized = me.video.init(isFinite(props.width) ? props.width : 650, isFinite(props.height) ? props.height : 480, videoOptions)
            if (!initialized) return alert("Your browser does not support HTML5 canvas.");
            if (props.audio) { // ensures its not false or an empty string
                if (typeof props.audio == 'boolean') {
                    me.audio.init('mp3,ogg')
                } else if (typeof props.audio == 'string') {
                    me.audio.init(props.audio)
                }
            }
            setReady(true)
            if (typeof props.onReady == 'function') props.onReady()
        })
    })
    return <MelonReady.Provider value={isReady}>
        <div style={style()} className="gameHolder" ref={gameCanvas} {...attributes}>
            <div style={{position: 'absolute', top: 0, left: 0, width: "100%", height: "100%"}}>
                {props.children || null}
            </div>
        </div>
    </MelonReady.Provider>
}

export default Melon