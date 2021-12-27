let score = 0

export function draw(gameBoard) {
    const scoreElement = document.createElement('h1')
    scoreElement.textContent = score
    scoreElement.classList.add('score')
    gameBoard.appendChild(scoreElement)
}

export function restart() {
    score = 0
}

export function addToScore() {
    score++
}

export function getScore() {
    return score
}