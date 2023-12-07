import { getFish } from './fish.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from './fishlist.js'
const parentHTMLElement = document.querySelector(".fishList")

parentHTMLElement.innerHTML = FishList()