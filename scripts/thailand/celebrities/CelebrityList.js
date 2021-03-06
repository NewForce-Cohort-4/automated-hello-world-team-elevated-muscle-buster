import {exportedCelebrities} from "./CelebritiesDataProvider.js"
import {individualThailandCelebrity} from "./Celebrity.js"

let thailandCelebrityContainer = document.querySelector(".thailandcelebrity-list-container")

export function thailandCelebrityList() {

    const listOfCelebrities = exportedCelebrities()

    let newStringToPutCelebrityList = ""

    for (const currentCelbrityInTheLoop of listOfCelebrities) {
        newStringToPutCelebrityList += individualThailandCelebrity(currentCelbrityInTheLoop)
    }
    thailandCelebrityContainer.innerHTML = `<h2>List of Famous Citizens</h2>${newStringToPutCelebrityList}`
}