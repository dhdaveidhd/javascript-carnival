// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let headCounter = 0
let bodyCounter = 0
let shoeCounter = 0
let clothingIndex = 0

window.addEventListener(
  'keydown',
  function (event) {
    if (event.defaultPrevented) {
      return // Do nothing if the event was already processed
    }

    switch (event.key) {
      case 'ArrowDown':
        clothingIndex += 1
        // Do something for "up arrow" key press.
        if (clothingIndex > 2) {
          clothingIndex = 0
        }
        break
      case 'ArrowUp':
        clothingIndex -= 1
        // Do something for "down arrow" key press.
        if (clothingIndex < 0) {
          clothingIndex = 2
        }
        break
      case 'ArrowLeft':
        // Do something for "left arrow" key press.
        if (clothingIndex == 0) {
          if (headCounter < 0) {
            headCounter = 5
          }
          changeClownHead()
          headCounter -= 1
          break
        } else if (clothingIndex == 1) {
          if (bodyCounter < 0) {
            bodyCounter = 5
          }
          changeClownHead()
          bodyCounter -= 1
          break
        } else if (clothingIndex == 2) {
          if (shoeCounter < 0) {
            shoeCounter = 5
          }
          changeClownHead()
          shoeCounter -= 1
          break
        }
      case 'ArrowRight':
        // Do something for "right arrow" key press.
        if (clothingIndex == 0) {
          if (headCounter > 5) {
            headCounter = 0
          }
          changeClownHead()
          headCounter += 1
          break
        } else if (clothingIndex == 1) {
          if (bodyCounter > 5) {
            bodyCounter = 0
          }
          changeClownHead()
          bodyCounter += 1
          break
        } else if (clothingIndex == 2) {
          if (shoeCounter > 5) {
            shoeCounter = 0
          }
          changeClownHead()
          shoeCounter += 1
          break
        }

      default:
        return // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault()
  },
  true
)

function changeClownHead() {
  if (clothingIndex == 0) {
    let headSrc = './images/head' + headCounter + '.png'
    document.getElementById('head').src = headSrc
  } else if (clothingIndex == 1) {
    let bodySrc = './images/body' + bodyCounter + '.png'
    document.getElementById('body').src = bodySrc
  } else if (clothingIndex == 2) {
    let shoeSrc = './images/shoes' + shoeCounter + '.png'
    document.getElementById('shoes').src = shoeSrc
  }
}
console.log('Dress The Clown!')
