// Exports to CityList.js
export function MexicoCity(cityObject) {
    return `
    <article class="city-card">
        <ul class="list-child">
            <li class="list-item">${cityObject.city}</li>
        </ul>
    </article>`
}