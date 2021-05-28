// game.js file

let hero = new Hero()

let keyPressed = {}
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
  console.log(event.code)
})
window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})

function loop() {
  // change state
  if (keyPressed['Space']) {
    hero.jump()
  } // this was the fix!
  if (keyPressed['ArrowLeft']) {
    hero.moveLeft()
  } // this was the fix!
  if (keyPressed['ArrowRight']) {
    hero.moveRight()
  }

  hero.step()

  // draw all
  erase()
  hero.draw()

  setTimeout(() => loop(), 1000 / 60)
}

// wait for images to load
async function loadGame() {
  await heroStandSprite.loaded
  await heroJumpSprite.loaded
  await heroWalkSprite1.loaded
  await heroWalkSprite2.loaded
  await groundSprite.loaded
  await groundTopSprite.loaded
  loop()
}
loadGame()
