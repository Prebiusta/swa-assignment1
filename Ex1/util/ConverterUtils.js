const fahrenheitToCelsius = (value) => (value - 32) * 5 / 9

const celsiusToFahrenheit = (value) => (value * 9 / 5) + 32

const millimetersToInches = (value) => value / 25.4

const inchesToMillimeters = (value) => value * 25.4

const metersPerSecondToMilesPerHour = (value) => value * 2.236936

const milesPerHourToMetersPerSecond = (value) => value / 2.236936

const ConverterUtil = {
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    millimetersToInches,
    inchesToMillimeters,
    metersPerSecondToMilesPerHour,
    milesPerHourToMetersPerSecond
}

export default ConverterUtil