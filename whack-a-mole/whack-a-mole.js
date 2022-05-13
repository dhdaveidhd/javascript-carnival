// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let board = document.getElementsByTagName('td')
let randomIndex = getRandomInt(0, board.length)
let moleImg = document.createElement('img')
moleImg.src = 'mole.PNG'
moleImg.setAttribute('id', 'molePic')

let audio = new Audio('whack-audio.wav')

function showMole(index) {
  board[index].appendChild(moleImg)
}

function whackedMole() {
  board[randomIndex].removeChild(moleImg)
  randomIndex = getRandomInt(0, board.length)
  audio.play()
  showMole(randomIndex)
}
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

showMole(randomIndex)

for (i = 0; i < board.length; i++) {
  board[i].onclick = whackedMole
}

console.log('Whack-a-Mole!')
