import {useMexicoCelebrity} from "./CelebritiesDataProvider.js"
import {mexicoCelebrity} from "./Celebrity.js"

let mexicoCelebrityContainer = document.querySelector(".celebrity-list-container")


// Exports to main.js
export function MexicoCelebrityList() {
    const allTheCelebrities = useMexicoCelebrity()

    let mexicoCelebrityListHTMLString = ""
    for(const currentCelebrityInLoop of allTheCelebrities) {
        mexicoCelebrityListHTMLString += mexicoCelebrity(currentCelebrityInLoop)
    }

    mexicoCelebrityContainer.innerHTML = `<h2>List of Famous Citizens</h2>${mexicoCelebrityListHTMLString}`
}