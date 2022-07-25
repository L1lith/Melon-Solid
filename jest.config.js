import { join } from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  testMatch: [join(__dirname, 'test/**/*.test.js')]
  //testEnvironment: 'jsdom'
}
