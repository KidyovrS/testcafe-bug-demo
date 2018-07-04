'use strict'

const p = require('path').resolve(__dirname, 'index.html')

fixture(`Demo page`).page(`file:///${p}`)

test('Generate screenshots', async t => {
  await t.maximizeWindow()
  await t.takeScreenshot()
})
