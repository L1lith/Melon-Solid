import * as me from 'melonjs'
import useReady from '../hooks/useReady'
import { createSignal, createContext } from 'solid-js'

export const isPreloaded = createContext(null)
export const resourceList = createContext(null)

function Preloader(props) {
  //if (!Array.isArray(props.resources)) throw new Error('Resources is not an array')
  //if (typeof props.callback != 'function') throw new Error('Callback is not a function')
  const [preloaded, setPreloaded] = createSignal(false)
  const resources = []
  useReady(() => {
    let outputResources = resources
    if (props.hasOwnProperty('resources')) {
      outputResources = outputResources.concat(props.resources)
    }
    me.loader.preload(outputResources, () => {
      setPreloaded(true)
      if (typeof props.callback == 'function') props.callback()
      if (props.autoPlay === true) {
        me.state.change(me.state.PLAY)
      }
    })
  })
  return (
    <resourceList.Provider value={resources}>
      <isPreloaded.Provider value={preloaded}>{props.children || null}</isPreloaded.Provider>
    </resourceList.Provider>
  )
}

export default Preloader
