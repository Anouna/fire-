controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 9 1 8 . . . . . . 
        . . . . . 8 8 9 9 8 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 9 9 9 9 8 . . . . . 
        . . . . . 8 8 9 9 8 8 . . . . . 
        . . . . . . 8 8 8 8 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, extinguisher, 50, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 200)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 200)
})
let Fire: Sprite = null
let projectile: Sprite = null
let extinguisher: Sprite = null
scene.setBackgroundColor(7)
extinguisher = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . . . . . f f . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . . f . 2 2 2 2 2 f . . . . 
    . . . f f . 2 1 1 1 2 f . . . . 
    . . . f f . 2 1 1 1 2 f f f . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 1 1 1 2 . . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(extinguisher, 100, 100)
extinguisher.setPosition(10, 10)
game.onUpdateInterval(500, function () {
    Fire = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 4 2 . 4 . 2 . . . . . . 
        . . . . 4 4 2 4 2 4 . . . . . . 
        . . . . 2 4 5 4 5 4 . . . . . . 
        . . . . 2 4 5 4 5 4 . . . . . . 
        . . . . 2 2 5 5 5 2 . . . . . . 
        . . . . 2 2 2 2 2 . . . . . . . 
        . . . . . . 2 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Fire.setPosition(160, randint(0, 120))
    Fire.setVelocity(randint(-100, -10), 0)
})
