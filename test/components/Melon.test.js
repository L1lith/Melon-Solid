import puppeteer from 'puppeteer'
import runCommand from '../functions/runCommand'
import { join } from 'path'

const examplesDirectory = join(__dirname, '../../examples')

describe('App.js', () => {
  let browser
  let page
  let closeServer
  beforeAll(async () => {
    browser = await puppeteer.launch()
    page = await browser.newPage()
    closeServer = runCommand('npm run dev', join(examplesDirectory, 'platformer'))
  })

  it('contains the game canvas', async () => {
    await page.goto('http://localhost:3000')
    await page.waitForSelector('canvas')
  })

  afterAll(() => {
    browser.close()
    closeServer()
  })
})
