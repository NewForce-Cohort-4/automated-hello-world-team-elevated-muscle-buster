//Export to CityList.js

export function turkeyCity(cityObject) {
    return `
    <article class="city-card">
        <ul class="list-child">
            <li class="list-item">${cityObject.name}</li>
        </ul>
    </article>
    `
}
