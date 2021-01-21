const thailandCityArray = [
    {
        name: "Bangkok"
    },
    {
        name: "Chiang Mi"
    },
    {
        name: "Phuket"
    }
]

export function exportedCities() {
    return thailandCityArray.slice()
}