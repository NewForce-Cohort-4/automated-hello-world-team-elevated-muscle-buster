export function individualThailandLandmark(landmarkObject) {
    return `
    <article class="landmark-card">
        <ul class="list-child">
            <li class="list-item">${landmarkObject.name}</li>
        </ul>
    </article>`
}