function getDistance () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    duration = pins.pulseIn(DigitalPin.P2, PulseValue.High, 40000)
if (duration == 0) {
        return 0
    } else if (duration > 50000) {
        return 10000
    }
    return Math.idiv(duration, quotient)
}
let item = 0
let quotient = 0
let duration = 0
quotient = 38.66
OLED12864_I2C.init(60)
OLED12864_I2C.rect(
0,
0,
60,
30,
1
)
OLED12864_I2C.showString(
1,
1,
"Drtn",
1
)
OLED12864_I2C.showString(
1,
2,
"Dist",
0
)
basic.forever(function () {
    item = getDistance()
    OLED12864_I2C.showString(
    6,
    2,
    "        ",
    1
    )
    OLED12864_I2C.showNumber(
    6,
    2,
    item,
    1
    )
    basic.pause(100)
})
