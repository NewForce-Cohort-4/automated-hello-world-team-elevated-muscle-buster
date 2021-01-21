const thailandLandmarkArray = [
    {
        name: "Phang Nga Bay"
    },
    {
        name: "Mu Koh Angthong"
    },
    {
        name: "Erawan Nat'l Park"
    }
]

export function exportedLandmarks() {
    return thailandLandmarkArray.slice()
}