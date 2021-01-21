const mexicoLandmarkArray = [
    {
        landmark: "Ángel de la Independencia"
    },
    {
        landmark: "Zócalo"
    },
    {
        landmark: "Catedral Metropolitana"
    }
]

// Exports to LandmarkList.js
export function useMexicoLandmark() {
    return mexicoLandmarkArray.slice()
}