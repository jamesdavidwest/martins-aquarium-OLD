import { getFish } from `./database.js`

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from `/fishlist.js`

const parentHTMLElement = document.querySelector(".")

parentHTMLElement.innerHTML = FishList()