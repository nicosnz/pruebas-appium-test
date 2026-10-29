import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import CityPage from '../../pages/CityPage.js'

const CITY_NAME = 'Abidjan'

Given('que estoy en la pestaña de reloj', async () => {
    await CityPage.openClockTab()
})

Given('que Abidjan no está en la lista de relojes mundiales', async () => {
    if (await CityPage.isCityInWorldClockList(CITY_NAME)) {
        await CityPage.removeCity(CITY_NAME)
    }
    expect(await CityPage.isCityInWorldClockList(CITY_NAME)).toBe(false)
})

Given('que Abidjan está en la lista de relojes mundiales', async () => {
    if (!(await CityPage.isCityInWorldClockList(CITY_NAME))) {
        await CityPage.addCity(CITY_NAME)
    }
    expect(await CityPage.isCityInWorldClockList(CITY_NAME)).toBe(true)
})

When('agrego la ciudad Abidjan', async () => {
    await CityPage.addCity(CITY_NAME)
})

When('quito la ciudad Abidjan', async () => {
    await CityPage.removeCity(CITY_NAME)
})

Then('Abidjan debería estar en la lista de relojes mundiales', async () => {
    expect(await CityPage.isCityInWorldClockList(CITY_NAME)).toBe(true)
})

Then('Abidjan no debería estar en la lista de relojes mundiales', async () => {
    expect(await CityPage.isCityInWorldClockList(CITY_NAME)).toBe(false)
})
