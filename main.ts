enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const enemyBullet = SpriteKind.create()
    export const invincible = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        `)
    facingRight = false
    facingDown = false
    facingUp = true
    facingLeft = false
    music.footstep.play()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet = sprites.create(img`
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . f f f . . 
        . . . . f 5 5 f . 
        . . . . f f f . . 
        . . . . . . . . . 
        . . . . . . . . . 
        . . . . . . . . . 
        `, SpriteKind.Projectile)
    music.pewPew.play()
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f f 1 f 2 f 1 f f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        `)
})
controller.combos.attachCombo("uuddlrlrba", function () {
    info.changeLifeBy(3)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f f f f f f . 
        . . . . . . . f 2 2 2 2 2 2 f . 
        . . . . . . . f f f 2 f f f f . 
        . . . . . . . f 1 f 2 f 1 f f . 
        . . . . . . . f f f 2 f f f f . 
        . . . . . . . f 2 2 2 2 2 2 f . 
        . . . . . . . f f f f f f f f . 
        . . . . f f f . f 2 2 2 2 f . . 
        . . . . . . f f f 2 2 2 2 f . . 
        . . . . . . . . f 2 2 2 2 f . . 
        . . . . . . . . f f f f f f . . 
        . . . . . . . . . f . . f . . . 
        `)
    facingLeft = true
    facingRight = false
    facingUp = false
    facingDown = false
    music.footstep.play()
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f f 1 f 2 f 1 f f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f f 1 f 2 f 1 f f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        `)
})
info.onCountdownEnd(function () {
    game.over(true)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    info.changeLifeBy(-1)
    statusbar.value = 100
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f . . . . . . . 
        . f 2 2 2 2 2 2 f . . . . . . . 
        . f f f f 2 f f f . . . . . . . 
        . f f 1 f 2 f 1 f . . . . . . . 
        . f f f f 2 f f f . . . . . . . 
        . f 2 2 2 2 2 2 f . . . . . . . 
        . f f f f f f f f . . . . . . . 
        . . f 2 2 2 2 f . f f f . . . . 
        . . f 2 2 2 2 f f f . . . . . . 
        . . f 2 2 2 2 f . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . . . f . . f . . . . . . . . . 
        `)
    facingRight = true
    facingDown = false
    facingUp = false
    facingLeft = false
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    deadpool.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f f 1 f 2 f 1 f f . . . . . . 
        . f f f f 2 f f f f . . . . . . 
        . f 2 2 2 2 2 2 2 f . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f 2 2 2 2 2 f . . . . . . . 
        . . f f f f f f f . . . . . . . 
        . . f . . . . . f . . . . . . . 
        `)
    facingRight = false
    facingDown = true
    facingUp = false
    facingLeft = false
})
info.onLifeZero(function () {
    game.over(false, color.Darken)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    quip = randint(1, 4)
    if (quip == 1) {
        deadpool.say("See you in- Keep it G?! Come on!", 2000)
    } else if (quip == 2) {
        deadpool.say("Wooooo!", 2000)
    } else if (quip == 3) {
        deadpool.say("Sleep tight!", 2000)
    }
    info.changeScoreBy(1)
    music.knock.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    statusbar.value += -10
    music.thump.play()
})
let grunt: Sprite = null
let quip = 0
let bullet: Sprite = null
let facingLeft = false
let facingUp = false
let facingDown = false
let facingRight = false
let deadpool: Sprite = null
let statusbar: StatusBarSprite = null
tiles.loadMap(tiles.createMap(tilemap`level1`))
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
info.setLife(10)
statusbar.value = 100
statusbar.setLabel("HP")
statusbar.setBarBorder(1, 15)
deadpool = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f f f f f f f f . . . . . . . 
    . f 2 2 2 2 2 2 f . . . . . . . 
    . f f f f 2 f f f . . . . . . . 
    . f f 1 f 2 f 1 f . . . . . . . 
    . f f f f 2 f f f . . . . . . . 
    . f 2 2 2 2 2 2 f . . . . . . . 
    . f f f f f f f f . . . . . . . 
    . . f 2 2 2 2 f . f f f . . . . 
    . . f 2 2 2 2 f f f . . . . . . 
    . . f 2 2 2 2 f . . . . . . . . 
    . . f f f f f f . . . . . . . . 
    . . . f . . f . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(deadpool)
scene.cameraFollowSprite(deadpool)
info.startCountdown(100)
game.onUpdateInterval(randint(5000, 25000), function () {
    for (let value of tiles.getTilesByType(sprites.dungeon.floorLight0)) {
        grunt = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f d d d f . . . . . 
            . . f f f . f f f f f . f f f . 
            . . . . f f f c c c f f f . . . 
            . . . . . . f c c c f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . f . . . f . . . . . 
            . . . . . f f . . . f f . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnTile(grunt, value)
        grunt.follow(deadpool, 30)
    }
})
forever(function () {
    if (info.score() == 50) {
        game.over(true, color.Brighten)
    }
})
forever(function () {
    if (facingRight == true && controller.A.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . f f f . . 
            . . . . f 5 5 f . 
            . . . . f f f . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            `, deadpool, 100, 0)
    }
})
forever(function () {
    if (facingDown == true && controller.A.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . . f f f . . . 
            . . . f 5 f . . . 
            . . . f 5 f . . . 
            . . . . f . . . . 
            . . . . . . . . . 
            `, deadpool, 0, 100)
    }
})
forever(function () {
    music.playMelody("F G E F G F G E ", 183)
})
forever(function () {
    statusbar.attachToSprite(deadpool)
    statusbar.setOffsetPadding(0, -25)
})
forever(function () {
    if (facingLeft == true && controller.A.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . f f f . . . . 
            . f 5 5 f . . . . 
            . . f f f . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            `, deadpool, -100, 0)
    }
})
forever(function () {
    if (facingUp == true && controller.A.isPressed()) {
        bullet = sprites.createProjectileFromSprite(img`
            . . . . . . . . . 
            . . . . f . . . . 
            . . . f 5 f . . . 
            . . . f 5 f . . . 
            . . . f f f . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            . . . . . . . . . 
            `, deadpool, 0, -100)
    }
})
