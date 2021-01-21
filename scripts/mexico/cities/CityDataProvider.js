const mexicoCityArray = [
    {
        city: "Mexico City"
    },
    {
        city: "Ecatepec"
    },
    {
        city: "Guadalajara"
    }
]

// Exports to CityList.js
export function useMexicoCity() {
    return mexicoCityArray.slice()
}