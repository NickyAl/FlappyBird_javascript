let acceleration= {up: 0, down: 50}

window.addEventListener('keydown', e => {
    acceleration.up = 110
})

window.addEventListener('click', e => {
    acceleration.up = 110
})

export function getAcceleration() {
    return acceleration
}