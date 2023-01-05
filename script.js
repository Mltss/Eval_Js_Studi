var rollDiceBtn = document.getElementById('rollDice')
var newGameBtn = document.getElementById('newGame')
var holdBtn = document.getElementById('hold')

var player1Global = document.getElementById('player1Global')
var player2Global = document.getElementById('player2Global')

var player1Current = document.getElementById('player1Current')
var player2Current = document.getElementById('player2Current')

var dot1 = document.getElementsByClassName('dotPlayer1')
var dot2 = document.getElementsByClassName('dotPlayer2')

var dice = document.getElementById('dice')
var arrayDice = ['null', './Images/diceOne.png', './Images/diceTwo.png', './Images/diceThree.png', './Images/diceFour.png', './Images/diceFive.png', './Images/diceSix.png']


var Player = class {
  constructor(name, turn, score, scoredisplay, global, globaldisplay) {
    this.name = name
    this.turn = turn
    this.score = score
    this.scoredisplay = scoredisplay
    this.global = global
    this.globaldisplay = globaldisplay
  }
}

var player1 = new Player('Player1', true, 0, player1Current, 0, player1Global)
var player2 = new Player('Player2', false, 0, player2Current, 0, player2Global)

var playerActiv = player1
var playerNotActiv = player2
var temp = 0


rollDiceBtn.addEventListener('click', randomNumber)
holdBtn.addEventListener('click', holdBtnPressed)
newGameBtn.addEventListener('click', resetGame)

// Roll Dice button
function randomNumber() {
  let i = Math.round(Math.random() * (6 - 1) + 1)
  dice.src=arrayDice[i]
  if (i !== 1) {
    temp += i
    playerActiv.score = temp
    playerActiv.scoredisplay.innerText = temp
  } else {
    temp = 0
    playerActiv.score = temp
    playerActiv.scoredisplay.innerText = temp
    playerActiv.turn = false
    playerNotActiv.turn = true
    check()
  }
}

// Hold button
function holdBtnPressed() {
  if (temp > 1) {
    playerActiv.global += temp
    playerActiv.globaldisplay.innerText = playerActiv.global
    if (playerActiv.global >= 100) {
      alert(`${playerActiv.name} Remporte la partie !`)
      holdBtn.disabled = true
      rollDiceBtn.disabled = true
    } else {
      temp = 0
      playerActiv.scoredisplay.innerText = temp
      playerActiv.turn = false
      playerNotActiv.turn = true
      check()
    }
  }
}

// check who got true
function check () {
  if (player1.turn === true) {
    playerActiv = player1
    dot1[0].style.display = "block"
    playerNotActiv = player2
    dot2[0].style.display = "none"
  } else {
    playerActiv = player2
    dot2[0].style.display = "block"
    playerNotActiv = player1
    dot1[0].style.display = "none"
  }
}

// Reset game button
function resetGame() {
  temp = 0
  holdBtn.disabled = false
  rollDiceBtn.disabled = false
  player1 = new Player('Player1', true, 0, player1Current, 0, player1Global)
  player2 = new Player('Player2', false, 0, player2Current, 0, player2Global)
  player1.scoredisplay.innerText = temp
  player2.scoredisplay.innerText = temp
  player1.globaldisplay.innerText = temp
  player2.globaldisplay.innerText = temp
  check()
}

function cheat() {
  player1 = new Player('Player1', true, 0, player1Current, 99, player1Global)
  player2 = new Player('Player2', false, 0, player2Current, 99, player2Global)
  player1.globaldisplay.innerText = 99
  player2.globaldisplay.innerText = 99
  check()
}

