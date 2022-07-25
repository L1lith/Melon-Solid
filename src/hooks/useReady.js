import { MelonReady } from '../components/Melon.js'
import { createEffect, useContext } from 'solid-js'

function useReady(callback, repeat = false) {
  const getReady = useContext(MelonReady)
  const isReady = getReady()
  if (isReady === null) throw new Error('Unable to find the melon context')
  if (isReady) {
    callback()
    if (!repeat) return
  }
  let run = false
  createEffect(() => {
    if (run & !repeat) return
    if (getReady()) {
      run = true
      callback()
    }
  })
}

export default useReady
