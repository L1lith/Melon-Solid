import puppeteer from 'puppeteer'
import runCommand from '../functions/runCommand'
import { join } from 'path'
import timer from '../functions/timer'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

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
  })

  it('renders the game properly', async () => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('canvas')
    await timer(10000) // Wait 10 seconds for the game to load
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot({
      comparisonMethod: 'ssim',
      failureThreshold: 0.01,
      failureThresholdType: 'percent'
    })
  })

  afterAll(() => {
    browser.close()
    closeServer()
  })
})
