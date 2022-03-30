function mergeShallow(...objects) {
  const output = {}
  for (let i = 0, l = objects.length; i < l; i++) {
    const object = objects[i]
    if (typeof object != 'object' || object === null) continue
    //   throw new Error('Please supply a valid object')
    Object.assign(output, object)
  }
  return output
}

export default mergeShallow
