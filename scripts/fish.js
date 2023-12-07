// new ImageData(width, height)

// function imageResize(database.fish.image) {

// }

const database = {
    fish: [
        {
            image: "https://archive.knoxnews.com/Services/image.ashx?domain=www.knoxnews.com&file=060808bass_5401849_ver1.0_640_480.jpg&resize=",
            species: "Striped Bass",
            name: "Rockefeller",
            length: "27.2 inches",
            location: "Boone Lake",
            diet: "Small fish, insects, crustaceans, invertebrates, mollusks, zooplankton, and even some human foods."
        },{
            image: "https://www.elizabethton.com/wp-content/uploads/sites/36/2019/08/SP0818-EAST-TENNESSEE-OUTDOORS-1.jpeg",
            species: "Brown Trout",
            name: "Roscoe",
            length: "32.9 inches",
            location: "Old Hickory Reservoir",
            diet: "Insects, crayfish, mollusks, salamanders, frogs and other small mammals, and sometimes even other, smaller trout"
        },{
            image: "https://365angler.com/wp-content/uploads/2021/01/big-pennsylvania-freshwater-drum.jpg",
            species: "Freshwater Drum",
            name: "Babe Ruth",
            length: "37.25 inches",
            location: "Nickajack Reservoir",
            diet: "Small fish, aquatic insects like mayflies and mollusks."
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}