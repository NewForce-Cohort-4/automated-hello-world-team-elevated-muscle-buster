import {useturkeyLandmark} from "./LandmarkDataProvider.js"
import {turkeyLandmark} from "./Landmark.js"

let turkeyLandmarkContainer = document.querySelector(".turkeylandmark-list-container")

// Exports to main.js
export function turkeyLandmarkList() {
    const allTheLandmarks = useturkeyLandmark()

    let turkeyLandmarkListHTMLString = ""
    for(const currentLandmarkInLoop of allTheLandmarks) {
        turkeyLandmarkListHTMLString += turkeyLandmark(currentLandmarkInLoop)
    } 

    turkeyLandmarkContainer.innerHTML = `<h2>List of Landmarks</h2>${turkeyLandmarkListHTMLString}`
}