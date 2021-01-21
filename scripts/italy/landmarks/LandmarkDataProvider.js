const italyLandmarkArray = [
    {
        name: "The Colosseum"
    },
    {
        name: "The Grand Canal"
    },
    {
        name: "Sistine Chapel"
    }
]

//Exports to LandmarkList.js

export function useItalyLandmark() {
    return italyLandmarkArray.slice()
}