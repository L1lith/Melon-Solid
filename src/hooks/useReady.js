import { MelonReady } from '../components/Melon'
import { createEffect, useContext } from 'solid-js'

function useReady(callback) {
  const getReady = useContext(MelonReady)
  const isReady = getReady()
  if (isReady === null) throw new Error('Unable to find the melon context')
  if (isReady) callback()
  createEffect(() => {
    if (getReady()) {
      callback()
    }
  })
}

export default useReady
