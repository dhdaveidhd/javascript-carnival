// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

let unicorn1 = 0
let unicorn2 = 0
let unicorn3 = 0

function unicornClick1() {
  if (unicorn1 == 0) {
    document.getElementById('inflatable1').src = './images/unicorn-1.png'
  } else if (unicorn1 == 1) {
    document.getElementById('inflatable1').src = './images/unicorn-2.png'
  } else if (unicorn1 == 2) {
    document.getElementById('inflatable1').src = './images/unicorn-3.png'
  } else {
    alert('Unicorn 1 thanks you')
  }
  /*
  switch (unicorn1) {
    case 0:
      document.getElementById('inflatable1').src = './images/unicorn-1.png'
    case 1:
      document.getElementById('inflatable1').src = './images/unicorn-2.png'
    case 2:
      document.getElementById('inflatable1').src = './images/unicorn-3.png'
    case 3:
      alert('Unicorn 1 thanks you')
  }
  */
  unicorn1 += 1
}

function unicornClick2() {
  if (unicorn2 == 0) {
    document.getElementById('inflatable2').src = './images/unicorn-1.png'
  } else if (unicorn2 == 1) {
    document.getElementById('inflatable2').src = './images/unicorn-2.png'
  } else if (unicorn2 == 2) {
    document.getElementById('inflatable2').src = './images/unicorn-3.png'
  } else {
    alert('Unicorn 1 thanks you')
  }
  unicorn2 += 1
}

function unicornClick3() {
  if (unicorn3 == 0) {
    document.getElementById('inflatable3').src = './images/unicorn-1.png'
  } else if (unicorn3 == 1) {
    document.getElementById('inflatable3').src = './images/unicorn-2.png'
  } else if (unicorn3 == 2) {
    document.getElementById('inflatable3').src = './images/unicorn-3.png'
  } else {
    alert('Unicorn 1 thanks you')
  }
  unicorn3 += 1
}

console.log('Inflate The Unicorn!')
