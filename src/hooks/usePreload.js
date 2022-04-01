import { isPreloaded } from '../components/Preloader'
import { createEffect, useContext } from 'solid-js'

function usePreloaded(callback, repeat = false) {
  const getPreloaded = useContext(isPreloaded)
  const preloaded = getPreloaded()
  if (preloaded === null) throw new Error('Unable to find the preloader context')
  if (preloaded) {
    callback()
    if (!repeat) return
  }
  let run = false
  createEffect(() => {
    if (run & !repeat) return
    if (getPreloaded()) {
      run = true
      callback()
    }
  })
}

export default usePreloaded
