import { $, $$ } from '@wdio/globals'

class AlarmPage {
    onoffResourceId = 'com.android.deskclock:id/onoff'

    get alarmTab() {
        return $('~Alarm')
    }

    get alarmSwitches() {
        return $$(`android=new UiSelector().resourceId("${this.onoffResourceId}")`)
    }

    getAlarmSwitch(index: number) {
        return $(`android=new UiSelector().resourceId("${this.onoffResourceId}").instance(${index})`)
    }

    async openAlarmTab() {
        await this.alarmTab.waitForDisplayed()
        await this.alarmTab.click()
    }

    async isAlarmOn(index: number): Promise<boolean> {
        return (await this.getAlarmSwitch(index).getAttribute('checked')) === 'true'
    }

    async toggleAlarm(index: number) {
        const alarmSwitch = this.getAlarmSwitch(index)
        await alarmSwitch.waitForDisplayed()
        await alarmSwitch.click()
    }
}

export default new AlarmPage()
