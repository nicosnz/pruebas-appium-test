import { $ } from '@wdio/globals'

class StopwatchPage {
    fabResourceId = 'com.android.deskclock:id/fab'
    leftButtonResourceId = 'com.android.deskclock:id/left_button'

    get stopwatchTab() {
        return $('~Stopwatch')
    }

    get fabButton() {
        return $(`android=new UiSelector().resourceId("${this.fabResourceId}")`)
    }

    get resetButton() {
        return $(`android=new UiSelector().resourceId("${this.leftButtonResourceId}")`)
    }

    async openStopwatchTab() {
        await this.stopwatchTab.waitForDisplayed()
        await this.stopwatchTab.click()
    }

    async isRunning(): Promise<boolean> {
        return (await this.fabButton.getAttribute('content-desc')) === 'Pause'
    }

    async start() {
        if (!(await this.isRunning())) {
            await this.fabButton.click()
        }
    }

    async pause() {
        if (await this.isRunning()) {
            await this.fabButton.click()
            await this.resetButton.click()
        }
    }
}

export default new StopwatchPage()
