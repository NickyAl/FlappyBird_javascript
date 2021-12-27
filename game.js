import { update as updateBird, draw as drawBird, getLocation as getBirdLocation} from './bird.js'
import { update as updateWall, draw as drawWall, getHoleLocation} from './wall.js'
import {draw as drawScore, addToScore, restart as restartScore, getScore} from './score.js'
import {draw as drawBlackBars} from './blackbars.js'

let lastRenderTime = 0
let gameOver = false
const FPS_LIMIT = 60
const gameBoard = document.getElementById('game-board')
export let TPPR = 0 //time passed per frame

export function main(currentTime) {
    checkGameState()

    if (gameOver) {
        if(confirm('You lost. Your score is ' + getScore() + ' Press ok to restart.')) {
            window.location = '/'
        }

        restartScore();

        return
    }
   
    window.requestAnimationFrame(main) //browser tells when we can render the frame

    TPPR = (currentTime-lastRenderTime) / 1000
    if(TPPR < 1 / FPS_LIMIT) return
   
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateBird()
    updateWall()
}

function draw() {
    gameBoard.innerHTML = ''
    drawBlackBars(gameBoard)
    drawScore(gameBoard)
    drawBird(gameBoard)
    drawWall(gameBoard)
    
}

let hasEntered = false

function checkGameState() {
    let holeLoc = getHoleLocation()
    let birdLoc = getBirdLocation()

    if(holeLoc.xStart < birdLoc.xEnd && holeLoc.xEnd > birdLoc.xStart) {

        hasEntered = true

        if(holeLoc.yStart > birdLoc.yStart || holeLoc.yEnd < birdLoc.yEnd) {
            gameOver = true
        }
    } else if(hasEntered) {
        addToScore()
        hasEntered = false
    }
}