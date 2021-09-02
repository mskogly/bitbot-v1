radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        bitbot.go(BBDirection.Forward, 60)
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 2) {
        bitbot.go(BBDirection.Reverse, 30)
        basic.showIcon(IconNames.Asleep)
    } else if (receivedNumber == 3) {
        bitbot.rotate(BBRobotDirection.Left, 40)
        basic.showLeds(`
            . . . . .
            . . . # .
            # # # # #
            . . . # .
            . . . . .
            `)
    } else if (receivedNumber == 4) {
        bitbot.rotate(BBRobotDirection.Right, 40)
        basic.showLeds(`
            . . . . .
            . # . . .
            # # # # #
            . # . . .
            . . . . .
            `)
    } else if (receivedNumber == 5) {
        bitbot.go(BBDirection.Forward, 0)
        basic.showIcon(IconNames.Giraffe)
    }
})
basic.showIcon(IconNames.Happy)
radio.setGroup(1)
bitbot.select_model(BBModel.XL)
basic.forever(function () {
	
})
