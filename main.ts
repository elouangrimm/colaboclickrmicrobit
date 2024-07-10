enum RadioMessage {
    message1 = 49434,
    clear = 13525,
    click = 18790
}
radio.onReceivedMessage(RadioMessage.click, function () {
    clicks += 1
})
radio.onReceivedMessage(RadioMessage.clear, function () {
    clicks = 0
})
input.onButtonPressed(Button.A, function () {
    clicks += 1
    radio.sendMessage(RadioMessage.click)
})
buttonClicks.onButtonHeld(buttonClicks.AorB.B, function () {
    radio.sendMessage(RadioMessage.clear)
    clicks = 0
})
input.onButtonPressed(Button.B, function () {
    clicks += 1
    radio.sendMessage(RadioMessage.click)
})
input.onGesture(Gesture.Shake, function () {
    clicks += 1
    radio.sendMessage(RadioMessage.click)
})
let clicks = 0
radio.setGroup(1)
radio.sendMessage(RadioMessage.clear)
basic.forever(function () {
    basic.showNumber(clicks)
    basic.pause(100)
})
basic.forever(function () {
    serial.writeLine("" + (clicks))
    basic.pause(1000)
})
