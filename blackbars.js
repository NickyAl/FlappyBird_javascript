
export function draw(gameBoard) {
    const leftBar = document.createElement('div')
    leftBar.style.left = -20 + 'vmin'
    leftBar.classList.add('blackbar')
    gameBoard.appendChild(leftBar)

    const rightBar = document.createElement('div')
    rightBar.style.left = 100 + 'vmin'
    rightBar.classList.add('blackbar')
    gameBoard.appendChild(rightBar)
}