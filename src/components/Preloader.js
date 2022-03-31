import * as me from 'melonjs'
import useReady from '../hooks/useReady'

function Preloader(props) {
  if (!Array.isArray(props.resources)) throw new Error('Resources is not an array')
  if (typeof props.callback != 'function') throw new Error('Callback is not a function')
  useReady(() => {
    me.loader.preload(props.resources, props.callback)
  })
  return null
}

export default Preloader
