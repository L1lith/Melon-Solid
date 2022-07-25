import usePreload from '../hooks/usePreload.js'
import { pool } from 'melonjs'

function Entity(props) {
  if (typeof props.class != 'function') throw new Error('Please supply an entity class')
  const name = props.hasOwnProperty('name') ? props.name : props.class.name
  if (typeof name != 'string') throw new Error('Please supply an entity name')
  usePreload(() => {
    pool.register(name, props.class)
  })
  return null
}

export default Entity
