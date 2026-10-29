import { $ } from '@wdio/globals'

class CityPage {
    cityNameResourceId = 'com.android.deskclock:id/city_name'

    get clockTab() {
        return $('~Clock')
    }

    get citiesFab() {
        return $('~Cities')
    }

    get navigateUpButton() {
        return $('~Navigate up')
    }

    getCityCheckbox(cityName: string) {
        return $(`~${cityName}`)
    }

    getWorldClockCity(cityName: string) {
        return $(`android=new UiSelector().resourceId("${this.cityNameResourceId}").text("${cityName}")`)
    }

    async openClockTab() {
        await this.clockTab.waitForDisplayed()
        await this.clockTab.click()
    }

    async openCityPicker() {
        await this.citiesFab.waitForDisplayed()
        await this.citiesFab.click()
    }

    async confirmCitySelection() {
        await this.navigateUpButton.waitForDisplayed()
        await this.navigateUpButton.click()
    }

    async isCityInWorldClockList(cityName: string): Promise<boolean> {
        return await this.getWorldClockCity(cityName).isExisting()
    }

    private async setCitySelected(cityName: string, selected: boolean) {
        await this.openCityPicker()
        const checkbox = this.getCityCheckbox(cityName)
        await checkbox.waitForDisplayed()
        const isChecked = (await checkbox.getAttribute('checked')) === 'true'
        if (isChecked !== selected) {
            await checkbox.click()
        }
        await this.confirmCitySelection()
    }

    async addCity(cityName: string) {
        await this.setCitySelected(cityName, true)
    }

    async removeCity(cityName: string) {
        await this.setCitySelected(cityName, false)
    }
}

export default new CityPage()
