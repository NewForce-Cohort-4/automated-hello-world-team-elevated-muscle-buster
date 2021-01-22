import {useturkeyCelebrity} from "./CelebritiesDataProvider.js"
import {turkeyCelebrity} from "./Celebrity.js"

let turkeyCelebrityContainer = document.querySelector(".turkeycelebrity-list-container")

export function turkeyCelebrityList() {
    const allTheCelebrities = useturkeyCelebrity()

    let turkeyCelebrityListHTMLString = ""
    for(const currentCelebrityInLoop of allTheCelebrities) {
        turkeyCelebrityListHTMLString += turkeyCelebrity(currentCelebrityInLoop)
    }


    turkeyCelebrityContainer.innerHTML = `<h2>List of Famous Citizens</h2>${turkeyCelebrityListHTMLString}`
}
