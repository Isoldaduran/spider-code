GHBit.onEvent(GHBit.enButton.B4, function () {
    radio.sendString("H")
})
GHBit.onEvent(GHBit.enButton.B2, function () {
    radio.sendString("F")
})
GHBit.onEvent(GHBit.enButton.B3, function () {
    radio.sendString("G")
})
GHBit.onEvent(GHBit.enButton.B1, function () {
    radio.sendString("E")
})
basic.showIcon(IconNames.Heart)
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendString("A")
        basic.showArrow(ArrowNames.North)
    } else if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendString("B")
        basic.showArrow(ArrowNames.South)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("C")
        basic.showArrow(ArrowNames.West)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("D")
        basic.showArrow(ArrowNames.East)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("I")
        basic.showIcon(IconNames.No)
    } else if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        radio.sendString("0")
        basic.showIcon(IconNames.No)
    }
})
