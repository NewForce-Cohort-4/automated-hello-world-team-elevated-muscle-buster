// Exports to LandmarkList.js
export function italyLandmark(landmarkObject) {
    return `
    <article class="landmark-card">
        <ul class="list-child">
            <li class="list-item">${landmarkObject.landmark}</li>
        </ul>
    </article>`
}