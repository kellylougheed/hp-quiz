let number = 1
let seconds = 60

let titles = ["sorcerer's stone", "chamber of secrets", "prisoner of azkaban", "goblet of fire", "order of the phoenix", "half-blood prince", "deathly hallows"]

let secondsDisplay = document.querySelector("#seconds")
let result = document.querySelector("#results")

let inputs = document.querySelectorAll("input")
inputs.forEach((input) => {
  if (input.id != "one") {
    input.style.visibility = "hidden"
  }
})

window.addEventListener("keypress", e => {
  if (e.keyCode == 13) {
    checkAnswer(e)
  }
})

const checkAnswer = (e) => {
  if (titles.includes(e.target.value.toLowerCase())) {
    e.target.style.backgroundColor = "rgba(0,0,0,0.5)"
    number++
    if (number <= 7) {
      goToNextInput(number)
    } else {
      win()
    }
  } else {
    e.target.style.backgroundColor = "rgba(255,0,0,0.5)"
  }
}

const goToNextInput = (number) => {
  let box
  switch (number) {
    case 2:
      box = document.querySelector("#two")
      break
    case 3:
      box = document.querySelector("#three")
      break
    case 4:
      box = document.querySelector("#four")
      break
    case 5:
      box = document.querySelector("#five")
      break
    case 6:
      box = document.querySelector("#six")
      break
    case 7:
      box = document.querySelector("#seven")
      break
  }
  box.style.visibility = "visible"
  box.focus()
}

const countdown = () => {
  seconds--
  secondsDisplay.innerHTML = seconds
  checkForLoss()
}

let countdownInterval = setInterval(countdown, 1000)

const win = () => {
  let remaining = 60 - seconds
  result.innerHTML = "You win with " + remaining + " seconds to spare!"
}

const checkForLoss = () => {
  if (seconds <= 0) {
    secondsDisplay.style.color = "red"
    inputs.forEach((input) => {
      input.setAttribute("disabled", "disabled")
    })
    result.style.color = "red"
    alert("Time's up!")
    clearInterval(countdownInterval)
  }
}
