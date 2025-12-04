let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
strip.showBarGraph(0, 255)
basic.forever(function () {
    /*led.plotBarGraph(
        input.soundLevel(),
        255
    )*/
    strip.showBarGraph(
        input.soundLevel(),
        255
    );
})

