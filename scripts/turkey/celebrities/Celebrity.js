//exports to CelebrityList.js
export function turkeyCelebrity(celebrityObject) {
    return `
    <article class="celebrity-card">
        <ul class="list-child">
            <li class="list-item">${celebrityObject.name}</li>
        </ul>
    </article>`
}