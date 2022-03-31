import { isPreloaded } from '../components/Preloader'
import { createEffect, useContext } from 'solid-js'

function usePreloaded(callback) {
  const getPreloaded = useContext(isPreloaded)
  const preloaded = getPreloaded()
  if (preloaded === null) throw new Error('Unable to find the preloader context')
  if (preloaded) callback()
  createEffect(() => {
    if (getPreloaded()) {
      callback()
    }
  })
}

export default usePreloaded
