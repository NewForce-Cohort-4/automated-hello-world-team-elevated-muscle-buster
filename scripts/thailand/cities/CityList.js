import {exportedCities} from "./CityDataProvider.js"
import {individualThailandCity} from "./City.js"

let thailandCityContainer = document.querySelector(".thailandcity-list-container")

export function thailandCityList() {

    const listOfCities = exportedCities()

    let newStringToPutCityList = ""

    for (const currentCityInTheLoop of listOfCities) {
        newStringToPutCityList += individualThailandCity(currentCityInTheLoop)
    }
    thailandCityContainer.innerHTML = `<h2>List of Cities</h2>${newStringToPutCityList}`
}