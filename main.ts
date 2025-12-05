// Above notes like these are for context and understanding of the code

// This code creates a sound level visualizer using an LED strip connected to pin P0
// It uses the neopixel library to control the LED strip and displays the sound level as a bar graph

// Import the neopixel library
// we assume the neopixel library is already included in the makecode environment
// if not, we need to add it via the extensions

let strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB) // create a neopixel strip on pin P0 with 30 pixels in RGB mode
strip.setBrightness(20) // sets the brightness of the strip to 20

//forever does this
basic.forever(function () {
    //plots the sound level on the led
    // old code for led
    // once we fix the led connectivity issues we can remove this led part below
    led.plotBarGraph(
        input.soundLevel(),
        255
    );
    // code below works in the makecode simulator, but we are having connectivity issues with the led strip
    // once this basic functionallity is complete we can add more features like changing colors based on sound levels
    // once the led strip is working we can also remove the led.plotBarGraph part above
    strip.showBarGraph( // new code for led strip instead of led
        input.soundLevel(), //plots the sound level on the led strip up to 255
        255
    );
    //shows the graph on strip
})

// extra comments (remove later to reduce bloat):
//
// Issues:
//
// need to fix the led strip connectivity issues to get the full functionality of the code, as the code works in the makecode simulator
//
// Code snippets:
//
// - Sound Threshold:
//
//  - sets the sound threshold to 128
//  - we should uncomment this if we want to use sound threshold
//  - input.setSoundThreshold(SoundThreshold.Loud, 128)
//
// Possible Features:
//
// - We can add more features like changing colors based on sound levels
// - We can also add different patterns based on sound levels
// - We can also add a feature to change the brightness based on sound levels
// - We can also add a feature to change the speed of the patterns based on sound levels
//
// Future improvements(we actually might implement):
//
// - Add a feature to change the color of the LED strip based on sound levels
//
// Notes:
// 
// I revised the comments to be more descriptive and clear about the functionality of the code and potential future features.
// I also revised this code in makecode to ensure it works in the simulation and that there is less bloat
// Any unnecessary code comments were removed to make the code cleaner and easier to read.
// 
// Uncategorized:
//
// - The code is written in TypeScript for the MakeCode environment
// 
// OT5 add notes here when you dont wanna catagorise them now
