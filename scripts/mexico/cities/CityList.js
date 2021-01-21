import {useMexicoCity} from "./CityDataProvider.js"
import {MexicoCity} from "./City.js"

let mexicoCityContainer = document.querySelector(".Mexicocity-list-container")

// Exports to main.js
export function MexicoCityList() {
    const allTheCities = useMexicoCity()

    let mexicoCityListHTMLString = ""
    for(const currentCityInLoop of allTheCities) {
        mexicoCityListHTMLString += MexicoCity(currentCityInLoop)
    }

    mexicoCityContainer.innerHTML = `<h2>List of Cities</h2>${mexicoCityListHTMLString}`
}