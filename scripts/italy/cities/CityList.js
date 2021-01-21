import {italyCity} from "./City.js"
import {useItalyCity} from "./CityDataProvider.js"

let italyCityContainer = document.querySelector(".Italycity-list-container")

//export to main.js
export function ItalyCityList(){
    const allTheCities = useItalyCity()

    let italyCityListHTMLString = ""
    for(const currentCityInLoop of allTheCities) {
        italyCityListHTMLString += italyCity(currentCityInLoop)
    }

    italyCityContainer.innerHTML = `<h2>List of Cities</h2>${italyCityListHTMLString}`
}