const mexicoCelebrityArray = [
    {
        name: "El Chapo Guzman"
    },
    {
        name: "Carlos Santana"
    },
    {
        name: "Canelo Alvarez"
    }
]

// Exports to CelebrityList.js
export function useMexicoCelebrity() {
    return mexicoCelebrityArray.slice()
}

