import {exportedLandmarks} from "./LandmarkDataProvider.js"
import {individualThailandLandmark} from "./Landmark.js"

let thailandLandmarkContainer = document.querySelector(".thailandlandmark-list-container")

export function thailandLandmarkList() {

    const listOfLandmarks = exportedLandmarks()

    let newStringToPutLandmarkList = ""

    for (const currentLandmarkInTheLoop of listOfLandmarks) {
        newStringToPutLandmarkList += individualThailandLandmark(currentLandmarkInTheLoop)
    }
    thailandLandmarkContainer.innerHTML = `<h2>List of Landmarks</h2>${newStringToPutLandmarkList}`
}