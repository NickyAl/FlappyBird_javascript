import { getAcceleration } from "./input.js"
import {TPPR} from "./game.js"

let birdX = 10
let birdY = 0

export function update() {
    const acceleration = getAcceleration()
    if(acceleration.up > 0) acceleration.up -= 100 * TPPR
    birdY += (acceleration.down - acceleration.up) * TPPR
}

export function draw(gameBoard) {
    const birdElement = document.createElement('div')
    birdElement.style.left = birdX + 'vmin'
    birdElement.style.top = birdY + 'vmin' 
    birdElement.classList.add('bird')
    gameBoard.appendChild(birdElement)
}

export function getLocation() {
    return {
        xStart: birdX,
        xEnd: birdX + 7,
        yStart: birdY,
        yEnd: birdY + 7
    }
}