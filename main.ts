// Basic sound checking script made by Git-coder-plus
basic.forever(function () {
    led.plotBarGraph( // as of current plots on micro:bit will add to led strip
        input.soundLevel(), // Detects sound
        255
    )
})

