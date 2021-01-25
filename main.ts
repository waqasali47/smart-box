input.onGesture(Gesture.LogoUp, function () {
    soundExpression.happy.playUntilDone()
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.show()
    OLED.writeStringNewLine("opening")
    basic.pause(2000)
    OLED.clear()
})
input.onGesture(Gesture.ScreenDown, function () {
    soundExpression.yawn.playUntilDone()
    OLED.writeStringNewLine("closing yaaaaaaaaaaaaaaaaawn")
    strip.show()
    strip.clear()
    basic.pause(2000)
    OLED.clear()
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
OLED.init(128, 64)
basic.forever(function () {
	
})
