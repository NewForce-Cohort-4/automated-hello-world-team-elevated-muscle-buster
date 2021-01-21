import {useItalyCelebrity} from "./CelebritiesDataProvider.js"
import {ItalyCelebrity} from "./Celebrity.js"

let italyCelebrityContainer = document.querySelector(".celebrity-list-container")

export function ItalyCelebrityList() {
    const allTheCelebrities = useItalyCelebrity()

    let italyCelebrityListHTMLString = ""
    for(const currentCelebrityInLoop of allTheCelebrities) {
        italyCelebrityListHTMLString += ItalyCelebrity(currentCelebrityInLoop)
    }

    italyCelebrityContainer.innerHTML = `<h2>List of Famous Citizens</h2>${italyCelebrityListHTMLString}`
}