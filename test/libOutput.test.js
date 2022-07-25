import { details } from 'sandhands'

// This test is disabled because Melon.js loses its mind when we don't have a real window object.

const basicOutputFormat = {
  components: Object,
  hooks: Object
}

describe('Library Exports', () => {
  let lib
  it('can be imported', async () => {
    lib = await import('../dist/index.js')
  })
  it('has the right basic structure', () => {
    expect(details(lib, basicOutputFormat)).toEqual(null)
  })
})
