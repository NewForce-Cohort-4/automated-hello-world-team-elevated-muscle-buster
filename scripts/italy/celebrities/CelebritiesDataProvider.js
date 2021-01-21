 const italyCelebrityArray = [
            {
                name: "Michaelangelo"
            },
            {
                name: "Julius Ceasar"
            },
            {
                name: "Leonardo Da Vinci"
            }
]

//Exports to Celebrity.js
export function useItalyCelebrity() {
    return italyCelebrityArray.slice()
}

