// Variable declarations
const squares = document.querySelectorAll(".square")
const console = document.querySelector(".coal")
const timeLeft = document.getElementById("time-left")
const score = document.getElementById("score")
const startBtn = document.getElementById("start")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

// Makes console appear on random square
function randomSquare() { 
    squares.forEach(square => {
        square.classList.remove('console') // removes coal class from square if present
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('console') // adds coal class to a random square

    hitPosition = randomSquare.id // passing the random square.id that contains the coal into hitPosition
}

// Mouse down event listener
squares.forEach(square => {
    square.addEventListener("mousedown", () => { // event on mouse down
        if (square.id == hitPosition) { // if the square.id that's clicked is the same as the hitPosition (square.id with coal in it) do the below:
            result++
            score.textContent = result
            hitPosition = null // reset hitPosition for next coal apperance
        }
    })
})

// Moves random console between squares
function moveConsole() {
    timerId = setInterval(randomSquare, 500) // adds coal class to a random square every 5ms
}

moveConsole()

// Timer
function countDown() {
    currentTime-- 
    timeLeft.textContent = currentTime // minus 1 from currentTime (combined with countDownTimerId) and displays it on the screen

    if (currentTime == 0) { // resets when currentTime is 0
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert(`Game Over! Your final score is ${result}`)
        result = 0
    }
}

let countDownTimerId = setInterval(countDown, 1000) // countDown changes every 1sec
