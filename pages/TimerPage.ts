import { $ } from '@wdio/globals'

class TimerPage {
    fabResourceId = 'com.android.deskclock:id/fab'
    leftButtonResourceId = 'com.android.deskclock:id/left_button'
    digitResourceIdPrefix = 'com.android.deskclock:id/timer_setup_digit_'

    get timerTab() {
        return $('~Timer')
    }

    get fabButton() {
        return $(`android=new UiSelector().resourceId("${this.fabResourceId}")`)
    }

    get deleteButton() {
        return $(`android=new UiSelector().resourceId("${this.leftButtonResourceId}")`)
    }

    getDigitButton(digit: string) {
        return $(`android=new UiSelector().resourceId("${this.digitResourceIdPrefix}${digit}")`)
    }

    async openTimerTab() {
        await this.timerTab.waitForDisplayed()
        await this.timerTab.click()
    }

    async exists(): Promise<boolean> {
        return await this.deleteButton.isExisting()
    }

    async isRunning(): Promise<boolean> {
        return (await this.fabButton.getAttribute('content-desc')) === 'Stop'
    }

    async setDuration(seconds: number) {
        for (const digit of String(seconds).split('')) {
            await this.getDigitButton(digit).click()
        }
    }

    async start(seconds: number) {
        if (await this.exists()) {
            if (!(await this.isRunning())) {
                await this.fabButton.click()
            }
        } else {
            await this.setDuration(seconds)
            await this.fabButton.click()
        }
    }

    async pause() {
        if (await this.isRunning()) {
            await this.fabButton.click()
        }
    }

    async delete() {
        if (await this.exists()) {
            await this.deleteButton.click()
        }
    }
}

export default new TimerPage()
