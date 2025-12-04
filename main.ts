//led connectivity issues but this creates the strip with the set pixels
let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
//forever does this
basic.forever(function () {
    led.plotBarGraph(
        input.soundLevel(),
        255
    );
    //plots the sound on led up to 255, records sound level
    strip.showBarGraph(
        input.soundLevel(),
        255
    );
    //shows the graph on strip
})

