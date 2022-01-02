import {Event} from "./Event.mjs";
import {
    CELSIUS,
    CLOUD_COVERAGE,
    FAHRENHEIT,
    INCH,
    MM,
    MPH,
    MS,
    PRECIPITATION,
    TEMPERATURE,
    WIND
} from "../util/Constants.mjs";
import ConverterUtil from "../util/ConverterUtils.mjs";

export class WeatherPrediction extends Event {
    constructor(min, max, time, place, type, unit) {
        super(time, place, type, unit);
        this.min = min
        this.max = max
    }

    getMin = () => this.min

    getMax = () => this.max

    matches = (weatherData) =>
        this.getTime() === weatherData.getTime()
        && this.getUnit() === weatherData.getUnit()
        && this.getPlace() === weatherData.getPlace()
        && this.getType() === weatherData.getType()
        && this.getMax() >= weatherData.getValue()
        && this.getMin() <= weatherData.getValue()
}

export class TemperaturePrediction extends WeatherPrediction {
    constructor(min, max, time, place, unit) {
        super(min, max, time, place, TEMPERATURE, unit);
    }

    convertToF = () => {
        if (this.unit === CELSIUS) {
            this.unit = FAHRENHEIT
            this.value = ConverterUtil.celsiusToFahrenheit(this.value)
        }
    }

    convertToC = () => {
        if (this.unit === FAHRENHEIT) {
            this.unit = CELSIUS
            this.value = ConverterUtil.fahrenheitToCelsius(this.value)
        }
    }
}


export class PrecipitationPrediction extends WeatherPrediction {
    constructor(expectedTypes, min, max, time, place, unit) {
        super(min, max, time, place, PRECIPITATION, unit);
        this.expectedTypes = expectedTypes
    }

    getExpectedTypes = () => this.expectedTypes

    matches = (weatherData) => {
        return super.matches(weatherData)
            && this.getExpectedTypes().includes(weatherData.getType())
    }

    convertToInches = () => {
        if (this.unit === MM) {
            this.unit = INCH
            this.value = ConverterUtil.millimetersToInches(this.value)
        }
        return this
    }

    convertToMM = () => {
        if (this.unit === INCH) {
            this.unit = MM
            this.value = ConverterUtil.inchesToMillimeters(this.value)
        }
        return this
    }
}


export class WindPrediction extends WeatherPrediction {
    constructor(expectedDirections, min, max, time, place, unit) {
        super(min, max, time, place, WIND, unit);
        this.expectedDirections = expectedDirections
    }

    getExpectedDirections = () => this.expectedDirections

    matches = (weatherData) => {
        return super.matches(weatherData)
            && this.getExpectedDirections().includes(weatherData.getDirection())
    }

    convertToMPH = () => {
        if (this.unit === MS) {
            this.unit = MPH
            this.value = ConverterUtil.metersPerSecondToMilesPerHour(this.value)
        }
    }

    convertToMS = () => {
        if (this.unit === MPH) {
            this.unit = MS
            this.value = ConverterUtil.milesPerHourToMetersPerSecond(this.value)
        }
    }
}

export class CloudCoveragePrediction extends WeatherPrediction {
    constructor(min, max, time, place, unit) {
        super(min, max, time, place, CLOUD_COVERAGE, unit);
    }
}

