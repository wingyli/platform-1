// hero.js file

class Hero {
  constructor() {
    // todo
    console.log('calling constructor')
    this.x = gridSize * 3.5
    this.y = 0
    this.dx = 0
    this.dy = 0
    this.airborne = true
  }
  moveLeft() {
    // this.dx = this.dx - (gridSize * 1/10)
    this.dx = gridSize * -(1/10)
  }
  moveRight() {
    this.dx = gridSize * 1/10
  }
  jump() {
    // todo if the hero is already airborne, exit early
    if (this.airborne) {
      return
    }
    this.dy = gridSize * -(1/3)
  }
  step() {
    // todo move the hero position (x,y) by speed (dx,dy)
    this.x += this.dx
    this.y += this.dy

    // todo apply "friction" to x movement (slow down)
    this.dx *= 0.7

    // todo apply "gravity" to y movement (speed up)
    this.dy += 1/60 * gridSize

    // todo check if hero hits ground
    let ground = canvas.height
    if (this.y > ground) {
      this.airborne = false
      this.dy = 0
      this.y = ground
    }
  }
  draw() {
    console.log('calling draw')
    // todo figure out which sprite to draw
    console.log('status of hero stand sprite', heroStandSprite.loaded)
    let image = heroStandSprite.image
    if (this.airborne) { // same as if (this.airborne === true)
      // we know the hero is in the air already
      image = heroJumpSprite.image
    } else if (Math.abs(this.dx) > 0) {
      // we know the hero is moving
      image = heroWalkSprite1.image
    }
    
    // todo draw the sprite
    ctx.drawImage(image, this.x - gridSize / 2, this.y - gridSize, gridSize, gridSize)
    
    // todo draw the logical position
    ctx.fillStyle = 'red'
    ctx.beginPath()
    ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI)
    ctx.fill()
  }
}
