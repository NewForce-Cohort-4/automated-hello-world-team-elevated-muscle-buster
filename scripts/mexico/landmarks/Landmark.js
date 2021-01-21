// Exports to LandmarkList.js
export function MexicoLandmark(landmarkObject) {
    return `
    <article class="celebrity-card">
        <ul class="list-child">
            <li class="list-item">${landmarkObject.landmark}</li>
        </ul>
    </article>`
}