import { details } from 'sandhands'

// This test is disabled because Melon.js loses its mind when we don't have a real window object.

const basicOutputFormat = {
  components: Object,
  hooks: Object
}

describe('Library Exports', () => {
  let lib
  it('can be imported', () => {
    expect(() => {
      lib = require('../dist/index.js')
    }).not.toThrow()
  })
  it('has the right basic structure', () => {
    expect(details(lib, basicOutputFormat)).toEqual(null)
  })
})
