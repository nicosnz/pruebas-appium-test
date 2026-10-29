import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import TimerPage from '../../pages/TimerPage.js'

const TIMER_SECONDS = 10

Given('que estoy en la pestaña de timer', async () => {
    await TimerPage.openTimerTab()
})

Given('que no hay ningún timer', async () => {
    await TimerPage.delete()
    expect(await TimerPage.exists()).toBe(false)
})

Given('que el timer está corriendo', async () => {
    await TimerPage.start(TIMER_SECONDS)
    expect(await TimerPage.isRunning()).toBe(true)
})

When('configuro un timer de 10 segundos y lo inicio', async () => {
    await TimerPage.start(TIMER_SECONDS)
})

When('pauso el timer', async () => {
    await TimerPage.pause()
})

When('elimino el timer', async () => {
    await TimerPage.delete()
})

Then('el timer debería estar corriendo', async () => {
    expect(await TimerPage.isRunning()).toBe(true)
})

Then('no debería haber ningún timer', async () => {
    expect(await TimerPage.exists()).toBe(false)
})
