const turkeyLandmarkArray = [
    {
        name: "HAGIA SOPHIA"
    },
    {
        name: "SULTANAHMET MOSQUE"
    },
    {
        name: "DOLMABAHCE PALACEL"
    }
]

//Exports to LandmarkList.js

export function useturkeyLandmark() {
    return turkeyLandmarkArray.slice()
}