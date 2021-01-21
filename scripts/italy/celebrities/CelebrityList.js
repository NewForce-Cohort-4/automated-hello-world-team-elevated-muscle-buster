import {useItalyCelebrity} from "./CelebritiesDataProvider.js"
import {italyCelebrity} from "./Celebrity.js"

let italyCelebrityContainer = document.querySelector(".Italycelebrity-list-container")

export function ItalyCelebrityList() {
    const allTheCelebrities = useItalyCelebrity()

    let italyCelebrityListHTMLString = ""
    for(const currentCelebrityInLoop of allTheCelebrities) {
        italyCelebrityListHTMLString += italyCelebrity(currentCelebrityInLoop)
    }


    italyCelebrityContainer.innerHTML = `<h2>List of Famous Citizens</h2>${italyCelebrityListHTMLString}`
}
