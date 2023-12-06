

const database = {
    fish: [
        {
            species: "",
            name: "",
            length: "",
            size: ,
            harvestLocation: "",
            diet: ""
        }
    ]
}

export const getFish= () => {
    return database.fish.map(fish => ({...fish}))
}