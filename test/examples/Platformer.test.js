import puppeteer from 'puppeteer'
import runCommand from '../functions/runCommand'
import { join } from 'path'
import timer from '../functions/timer'
import { toMatchImageSnapshot } from 'jest-image-snapshot'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { jest } from '@jest/globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

expect.extend({ toMatchImageSnapshot })

const platformerDirectory = join(__dirname, '../../examples/platformer')

describe('Platformer Game', () => {
  let browser
  let page
  let closeServer

  jest.setTimeout(30000)
  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      args: [`---window-size=${800},${800}`] // Ensure Consistent Render Target
    })
    page = await browser.newPage()
    closeServer = runCommand('npm run dev', platformerDirectory)
    await timer(5000) // Let the web server setup
  })

  it('renders the game properly', async () => {
    await page.goto('http://localhost:9046')
    await page.waitForSelector('canvas')
    await timer(10000) // Wait 10 seconds for the game to load
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot({
      comparisonMethod: 'ssim',
      failureThreshold: 0.2, // Allow up to 20% difference as it's animated
      failureThresholdType: 'percent'
    })
  })

  afterAll(() => {
    browser.close()
    closeServer()
  })
})
