import {TPPR} from "./game.js"
import {getScore} from "./score.js"

let wallX = 85
let wallY = 0
let holeEnd = randomEnd()
let holeStart = randomStart()

export function update() {

    let score = getScore()

    if(score >= 40) {
        wallX -= 70 * TPPR
    } else {
        wallX -= (30 + score) * TPPR
    }
    
    
    if(wallX < -15) {
        wallX = 100
        holeEnd = randomEnd()
        holeStart = randomStart()
    }
}

export function draw(gameBoard) {
    const wallElementTop = document.createElement('div')
    wallElementTop.style.left = wallX + 'vmin'
    wallElementTop.style.top = wallY + 'vmin' 
    wallElementTop.style.height = holeStart + 'vmin'
    wallElementTop.classList.add('wall')
    gameBoard.appendChild(wallElementTop)

    const capElementTop = document.createElement('div')
    capElementTop.style.left = (wallX - 1) + 'vmin'
    capElementTop.style.top = (holeStart - 1) + 'vmin' 
    capElementTop.style.height = 2 + 'vmin'
    capElementTop.style.width = 13 + 'vmin'
    capElementTop.classList.add('wall')
    gameBoard.appendChild(capElementTop)

    const wallElementBottom = document.createElement('div')
    wallElementBottom.style.left = wallX + 'vmin'
    wallElementBottom.style.top = (holeStart + holeEnd) + 'vmin' 
    wallElementBottom.style.height = (100 - (holeStart + holeEnd)) + 'vmin'
    wallElementBottom.classList.add('wall')
    gameBoard.appendChild(wallElementBottom)

    const capElementBottom = document.createElement('div')
    capElementBottom.style.left = (wallX - 1) + 'vmin'
    capElementBottom.style.top = ((holeStart + holeEnd) - 1) + 'vmin' 
    capElementBottom.style.height = 2 + 'vmin'
    capElementBottom.style.width = 13 + 'vmin'
    capElementBottom.classList.add('wall')
    gameBoard.appendChild(capElementBottom)
}

function randomEnd()
{
    return Math.floor(Math.random() * 15) + 25
}

function randomStart()
{
    return Math.floor(Math.random() * 40) + 20
}

export function getHoleLocation(){
    return {
        xStart: wallX,
        xEnd: wallX + 12,
        yStart: holeStart,
        yEnd: (holeStart + holeEnd)
    }
}