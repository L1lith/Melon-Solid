import { resourceList } from './Preloader'
import { useContext } from 'solid-js'

function Resource(props) {
  const resources = useContext(resourceList)
  if (resources === null) throw new Error('Could not access the resource list')
  if (!props.hasOwnProperty('name')) throw new Error('Please supply a name')
  if (!props.hasOwnProperty('type')) throw new Error('Please supply a type')
  if (!props.hasOwnProperty('src')) throw new Error('Please supply a src')
  resources.push({ src: props.src, type: props.type, name: props.name })
  return null
}

export default Resource
