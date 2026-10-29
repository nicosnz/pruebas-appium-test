import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import StopwatchPage from '../../pages/StopwatchPage.js'

Given('que estoy en la pestaña de cronómetro', async () => {
    await StopwatchPage.openStopwatchTab()
})

Given('que el cronómetro está detenido', async () => {
    await StopwatchPage.pause()
    expect(await StopwatchPage.isRunning()).toBe(false)
})

Given('que el cronómetro está corriendo', async () => {
    await StopwatchPage.start()
    expect(await StopwatchPage.isRunning()).toBe(true)
})

When('prendo el cronómetro', async () => {
    await StopwatchPage.start()
})

When('apago el cronómetro', async () => {
    await StopwatchPage.pause()
})

Then('el cronómetro debería estar corriendo', async () => {
    expect(await StopwatchPage.isRunning()).toBe(true)
})

Then('el cronómetro debería estar detenido', async () => {
    expect(await StopwatchPage.isRunning()).toBe(false)
})
