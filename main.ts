radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        basic.showIcon(IconNames.Asleep)
    } else if (receivedNumber == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 4) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
basic.forever(function () {
	
})
