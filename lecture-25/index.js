let canvas = document.querySelector('canvas')
let pen = canvas.getContext('2d')
// pen.fillStyle ="dark pink"
let snakecells = [[0, 0]]
let cell = 50
let direction = 'right'
let gameOver =false

let id =setInterval(()=>{
    draw()
    update()


},200)

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
    if(gameOver == true){
        clearInterval(id)
        console.log('first')
        return
    }
    pen.clearRect(0, 0, 700, 400)
    for (let i of snakecells) {
        pen.fillRect(i[0], i[1], cell, cell)
    }
}


function update() {
    let headX = snakecells[snakecells.length - 1][0]
    let headY = snakecells[snakecells.length - 1][1]
   

    let newX
    let newY

    if (direction === 'right') {
         newX = headX + cell
         newY = headY
          if(newX === 700) {
            gameOver =true
        }
    } else if (direction === 'left') {
        newX = headX - cell
        newY = headY
         if(newX < 0) {
            gameOver =true
        }
    } else if (direction === 'up') {
        newX = headX
        newY = headY - cell
         if(newY < 0) {
            gameOver =true
        }
    }
    else {
        newX = headX
        newY = headY + cell
         if(newY === 400) {
            gameOver =true
        }
    }


    snakecells.push([newX, newY])
    snakecells.shift()


}

// setInterval(() => {
//     draw()
//     update()
// }, 200);

