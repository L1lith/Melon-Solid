import usePreload from '../hooks/usePreload'
import * as me from 'melonjs'

function Stage(props) {
  usePreload(() => {
    me.state.set(props.state, props.stage)
  })
  return null
}

export default Stage
