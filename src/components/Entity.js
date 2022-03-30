import useReady from '../hooks/useReady'
import { pool } from 'melonjs'

function Entity(props) {
  if (typeof props.class != 'function') throw new Error('Please supply an entity class')
  const name = props.hasOwnProperty('name') ? props.name : props.class.name
  if (typeof name != 'string') throw new Error('Please supply an entity name')
  useReady(() => {
    pool.register(name, props.class)
  })
  return null
}

export default Entity
