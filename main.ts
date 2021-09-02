radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 60)
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        bitbot.stop(BBStopMode.Coast)
        basic.showIcon(IconNames.Asleep)
    } else if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 60)
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    } else if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 60)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    }
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
basic.forever(function () {
	
})
