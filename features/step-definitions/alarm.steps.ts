import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import AlarmPage from '../../pages/AlarmPage.js'

const FIRST_ALARM_INDEX = 0

Given('que estoy en la pestaña de alarmas', async () => {
    await AlarmPage.openAlarmTab()
})

Given('la primera alarma está apagada', async () => {
    if (await AlarmPage.isAlarmOn(FIRST_ALARM_INDEX)) {
        await AlarmPage.toggleAlarm(FIRST_ALARM_INDEX)
    }
    await expect(AlarmPage.getAlarmSwitch(FIRST_ALARM_INDEX)).toHaveAttribute('checked', 'false')
})

Given('la primera alarma está prendida', async () => {
    if (!(await AlarmPage.isAlarmOn(FIRST_ALARM_INDEX))) {
        await AlarmPage.toggleAlarm(FIRST_ALARM_INDEX)
    }
    await expect(AlarmPage.getAlarmSwitch(FIRST_ALARM_INDEX)).toHaveAttribute('checked', 'true')
})

When('prendo la primera alarma', async () => {
    await AlarmPage.toggleAlarm(FIRST_ALARM_INDEX)
})

When('apago la primera alarma', async () => {
    await AlarmPage.toggleAlarm(FIRST_ALARM_INDEX)
})

Then('la primera alarma debería estar prendida', async () => {
    await expect(AlarmPage.getAlarmSwitch(FIRST_ALARM_INDEX)).toHaveAttribute('checked', 'true')
})

Then('la primera alarma debería estar apagada', async () => {
    await expect(AlarmPage.getAlarmSwitch(FIRST_ALARM_INDEX)).toHaveAttribute('checked', 'false')
})
