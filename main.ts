let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 3 3 3 . . 3 3 . . . . . 
    . . . 3 3 1 3 . . 3 1 3 . . . . 
    . . . . 3 3 3 . . 3 3 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . 3 . . . . 
    . . . . . . . . . . . 3 . . . . 
    . 6 6 3 3 3 3 3 3 3 3 . . . . . 
    . . 6 6 6 6 6 6 6 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
