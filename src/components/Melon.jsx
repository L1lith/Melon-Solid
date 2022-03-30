import {onMount, splitProps} from 'solid-js'
import * as me from 'melonjs'
import mergeShallow from '../functions/mergeShallow'

const defaultStyles = {
    'text-align': 'center'
}

function Melon(props) {
    const [local, attributes] = splitProps(props, ['children', 'scale', 'parent', 'style', 'width', 'height'])
    let gameCanvas
    const style = ()=>{
        return mergeShallow(defaultStyles, local.style)
    }
    onMount(()=>{
        me.device.onReady(() => {
            const videoOptions = {parent: gameCanvas, scale: local.hasOwnProperty('scale') ? local.scale : 'auto', scaleMethod: local.hasOwnProperty('scaleMethod') ? local.scaleMethod : 'fill-min'}
            me.video.init(isFinite(props.width) ? props.width : 650, isFinite(props.height) ? props.height : 480, videoOptions)
        })
    })
    return <>
        <div style={style()} className="gameHolder" ref={gameCanvas} {...attributes}>
        {props.children || null}
        </div>
    </>
}

export default Melon