const italyCityArray = [
    {
        name: "Rome"
    },
    {
        name: "Venice"
    },
    {
        name: "Milan"
    }
]

//Exports to CityList.js

export function useItalyCity() {
    return italyCityArray.slice()
}