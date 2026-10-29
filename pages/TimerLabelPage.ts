import { $ } from '@wdio/globals'

class TimerLabelPage {
    labelButtonResourceId = 'com.android.deskclock:id/timer_label'
    labelInputClassName = 'android.widget.EditText'
    okButtonResourceId = 'android:id/button1'

    get labelButton() {
        return $(`android=new UiSelector().resourceId("${this.labelButtonResourceId}")`)
    }

    get labelInput() {
        return $(`android=new UiSelector().className("${this.labelInputClassName}")`)
    }

    get okButton() {
        return $(`android=new UiSelector().resourceId("${this.okButtonResourceId}")`)
    }

    async getLabel(): Promise<string> {
        return await this.labelButton.getText()
    }

    async setLabel(label: string) {
        await this.labelButton.waitForDisplayed()
        await this.labelButton.click()
        await this.labelInput.waitForDisplayed()
        await this.labelInput.setValue(label)
        await this.okButton.click()
    }
}

export default new TimerLabelPage()
