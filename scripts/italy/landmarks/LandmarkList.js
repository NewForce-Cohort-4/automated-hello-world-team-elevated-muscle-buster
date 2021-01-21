import {useItalyLandmark} from "./LandmarkDataProvider.js"
import {italyLandmark} from "./Landmark.js"

let italyLandmarkContainer = document.querySelector(".Italylandmark-list-container")

// Exports to main.js
export function ItalyLandmarkList() {
    const allTheLandmarks = useItalyLandmark()

    let italyLandmarkListHTMLString = ""
    for(const currentLandmarkInLoop of allTheLandmarks) {
        italyLandmarkListHTMLString += italyLandmark(currentLandmarkInLoop)
    } 

    italyLandmarkContainer.innerHTML = `<h2>List of Landmarks</h2>${italyLandmarkListHTMLString}`
}