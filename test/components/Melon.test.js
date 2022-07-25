import puppeteer from 'puppeteer'
import runCommand from '../functions/runCommand'
import { join } from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import timer from '../functions/timer'
import { jest } from '@jest/globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const platformerDirectory = join(__dirname, '../../examples/platformer')

describe('Melon.jsx', () => {
  let browser
  let page
  let closeServer
  jest.setTimeout(30000)
  beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    closeServer = runCommand('npm run dev', platformerDirectory)
    await timer(5000) // Let the web server setup
  })

  it('contains the game canvas', async () => {
    await page.goto('http://localhost:9046')
    await page.waitForSelector('canvas')
  })

  afterAll(() => {
    browser.close()
    closeServer()
  })
})
