//Export to CityList.js

export function italyCity(cityObject) {
    return `
    <article class="city-card">
        <ul class="list-child">
            <li class="list-item">${cityObject.name}</li>
        </ul>
    </article>
    `
}
