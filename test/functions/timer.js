function timer(ms) {
  if (!isFinite(ms)) throw new Error('Please supply a valid time')
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

export default timer
