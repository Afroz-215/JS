let canvas = document.querySelector('canvas')
let pen = canvas.getContext('2d')
let snakecells = [[0, 0]]
let cell = 50
let direction = 'right'
let gameOver = false
let score = 0
let foodCell = generateRandomCell()

let id = setInterval(() => {
    draw()
    update()


}, 200)

document.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowUp') {
        direction = 'up'

    }
    else if (e.key === 'ArrowDown') {
        direction = 'down'

    }
    else if (e.key === 'ArrowLeft') {
        direction = 'left'

    }
    else {
        direction = 'right'

    }
})


function draw() {
    if (gameOver == true) {
        clearInterval(id)
        pen.fillStyle = 'red'
        pen.font = '50px Arial'
        pen.fillText('game over', 200, 150)
        // console.log('first')
        return
    }
    pen.clearRect(0, 0, 700, 400)
    for (let i of snakecells) {
        pen.fillRect(i[0], i[1], cell, cell)
    }
    pen.fillStyle = 'red'
    pen.fillRect(foodCell[0], foodCell[1], 50, 50)
    pen.fillStyle = 'white'
    pen.font = '40px sans-serif'
    pen.fillText(`${score} score`, 100, 200)

}



function update() {
    let headX = snakecells[snakecells.length - 1][0]
    let headY = snakecells[snakecells.length - 1][1]


    let newX
    let newY

    if (direction === 'right') {
        newX = headX + cell
        newY = headY
        if (newX === 700) {
            gameOver = true
        }
    } else if (direction === 'left') {
        newX = headX - cell
        newY = headY
        if (newX < 0) {
            gameOver = true
        }
    } else if (direction === 'up') {
        newX = headX
        newY = headY - cell
        if (newY < 0) {
            gameOver = true
        }
    }
    else {
        newX = headX
        newY = headY + cell
        if (newY === 400) {
            gameOver = true
        }
    }


    snakecells.push([newX, newY])
    if (foodCell[0] === headX && foodCell[1] === headY) {
        foodCell = generateRandomCell()
        score += 1
    } else {
        snakecells.shift()
    }


}

function generateRandomCell() {
    return [
        Math.round((Math.random() * (650)) / 50) * 50,
        Math.round((Math.random() * (350)) / 50) * 50
    ]
}

