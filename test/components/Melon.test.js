import puppeteer from 'puppeteer'
import runCommand from '../functions/runCommand'
import { join } from 'path'

const platformerDirectory = join(__dirname, '../../examples/platformer')

describe('Melon.jsx', () => {
  let browser
  let page
  let closeServer
  beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    closeServer = runCommand('npm run dev', platformerDirectory)
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
