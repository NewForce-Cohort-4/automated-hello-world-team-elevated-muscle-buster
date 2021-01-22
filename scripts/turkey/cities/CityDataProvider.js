const turkeyCityArray = [
    {
        name: "Istanbul"
    },
    {
        name: "Antalya"
    },
    {
        name: "Bursa"
    }
]

//Exports to CityList.js

export function useturkeyCity() {
    return turkeyCityArray.slice()
}