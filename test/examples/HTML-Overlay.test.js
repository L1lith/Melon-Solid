import puppeteer from 'puppeteer'
import runCommand from '../functions/runCommand'
import { join } from 'path'
import timer from '../functions/timer'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend({ toMatchImageSnapshot })

const overlayDirectory = join(__dirname, '../../examples/html-overlay')

describe('HTML Overlay', () => {
  let browser
  let page
  let closeServer

  jest.setTimeout(30000)
  beforeAll(async () => {
    browser = await puppeteer.launch({
      //headless: false,
      args: [`---window-size=${1000},${1500}`] // Ensure Consistent Render Target
    })
    page = await browser.newPage()
    closeServer = runCommand('npm run dev', overlayDirectory)
  })

  it('renders the html overlay properly', async () => {
    await page.goto('http://localhost:8052')
    await page.waitForSelector('canvas')
    await timer(10000) // Wait 10 seconds for the game to load
    const image = await page.screenshot()
    expect(image).toMatchImageSnapshot({
      comparisonMethod: 'ssim',
      failureThreshold: 0.005, // Allow up to 0.5% difference as it should always be the same
      failureThresholdType: 'percent'
    })
  })

  afterAll(() => {
    browser.close()
    closeServer()
  })
})
