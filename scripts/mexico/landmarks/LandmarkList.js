import {useMexicoLandmark} from "./LandmarkDataProvider.js"
import {MexicoLandmark} from "./Landmark.js"

let mexicoLandmarkContainer = document.querySelector(".Mexicolandmark-list-container")

// Exports to main.js
export function MexicoLandmarkList() {
    const allTheLandmarks = useMexicoLandmark()

    let mexicoLandmarkListHTMLString = ""
    for(const currentLandmarkInLoop of allTheLandmarks) {
        mexicoLandmarkListHTMLString += MexicoLandmark(currentLandmarkInLoop)
    } 

    mexicoLandmarkContainer.innerHTML = `<h2>List of Landmarks</h2>${mexicoLandmarkListHTMLString}`
}