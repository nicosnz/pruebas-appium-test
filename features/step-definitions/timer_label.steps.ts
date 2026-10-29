import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import TimerPage from '../../pages/TimerPage.js'
import TimerLabelPage from '../../pages/TimerLabelPage.js'

const TIMER_SECONDS = 30

Given('que tengo un timer corriendo', async () => {
    await TimerPage.openTimerTab()
    await TimerPage.start(TIMER_SECONDS)
    expect(await TimerPage.isRunning()).toBe(true)
})

When('le pongo la etiqueta {string} al timer', async (label: string) => {
    await TimerLabelPage.setLabel(label)
})

Then('el timer debería mostrar la etiqueta {string}', async (label: string) => {
    expect(await TimerLabelPage.getLabel()).toBe(label)
})
