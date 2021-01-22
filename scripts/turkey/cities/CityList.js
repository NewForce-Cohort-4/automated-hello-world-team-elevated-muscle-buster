import {turkeyCity} from "./City.js"
import {useturkeyCity} from "./CityDataProvider.js"

let turkeyCityContainer = document.querySelector(".turkeycity-list-container")

//export to main.js
export function turkeyCityList(){
    const allTheCities = useturkeyCity()

    let turkeyCityListHTMLString = ""
    for(const currentCityInLoop of allTheCities) {
        turkeyCityListHTMLString += turkeyCity(currentCityInLoop)
    }

    turkeyCityContainer.innerHTML = `<h2>List of Cities</h2>${turkeyCityListHTMLString}`
}