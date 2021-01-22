// Exports to LandmarkList.js
export function turkeyLandmark(landmarkObject) {
    return `
    <article class="landmark-card">
        <ul class="list-child">
            <li class="list-item">${landmarkObject.name}</li>
        </ul>
    </article>`
}