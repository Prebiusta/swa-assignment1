import {Event} from "./Event.js";
import {DataType} from "./DataType.js";
import {CELSIUS, CLOUD_COVERAGE, FAHRENHEIT, INCH, MM, MPH, MS, PRECIPITATION, TEMPERATURE, WIND} from "../util/Constants.js";
import ConverterUtil from "../util/ConverterUtils.js";

export const WeatherPrediction = function (min, max, time, place, type, unit) {
    Event.call(this, time, place)
    DataType.call(this, type, unit)
    this.min = min
    this.max = max

    this.getMin = () => this.min
    this.getMax = () => this.max
    this.matches = (weatherData) => weatherData.getValue() >= this.min && weatherData.getValue() <= this.max
}

export const TemperaturePrediction = function (min, max, time, place, unit) {
    WeatherPrediction.call(this, min, max, time, place, TEMPERATURE, unit)

    this.convertToF = () => {
        if (this.unit === CELSIUS) {
            this.unit = FAHRENHEIT
            this.value = ConverterUtil.celsiusToFahrenheit(this.value)
        }
    }
    this.convertToC = () => {
        if (this.unit === FAHRENHEIT) {
            this.unit = CELSIUS
            this.value = ConverterUtil.fahrenheitToCelsius(this.value)
        }
    }
}


export const PrecipitationPrediction = function (expectedTypes, min, max, time, place, unit) {
    WeatherPrediction.call(this, min, max, time, place, PRECIPITATION, unit)
    this.expectedTypes = expectedTypes

    this.getExpectedTypes = () => this.expectedTypes

    this.matches = (weatherData) => {
        return this.getTime() === weatherData.getTime()
            && this.getUnit() === weatherData.getUnit()
            && this.getPlace() === weatherData.getPlace()
            && this.getValue() === weatherData.getValue()
            && this.getType() === weatherData.getType()
            && this.getMax() >= weatherData.getValue()
            && this.getMin() <= weatherData.getValue()
            && this.getExpectedTypes().includes(weatherData.getType())
    }

    this.convertToInches = () => {
        if (this.unit === MM) {
            this.unit = INCH
            this.value = ConverterUtil.millimetersToInches(this.value)
        }
        return this
    }

    this.convertToMM = () => {
        if (this.unit === INCH) {
            this.unit = MM
            this.value = ConverterUtil.inchesToMillimeters(this.value)
        }
        return this
    }
}


export const WindPrediction = function (expectedDirections, min, max, time, place, unit) {
    WeatherPrediction.call(this, min, max, time, place, WIND, unit)
    this.expectedDirections = expectedDirections

    this.getExpectedDirections = () => this.expectedDirections

    this.matches = (weatherData) => {
        return this.getTime() === weatherData.getTime()
            && this.getUnit() === weatherData.getUnit()
            && this.getPlace() === weatherData.getPlace()
            && this.getValue() === weatherData.getValue()
            && this.getType() === weatherData.getType()
            && this.getMax() >= weatherData.getValue()
            && this.getMin() <= weatherData.getValue()
            && this.getExpectedDirections().includes(weatherData.getDirection())
    }

    this.convertToMPH = () => {
        if (this.unit === MS) {
            this.unit = MPH
            this.value = ConverterUtil.metersPerSecondToMilesPerHour(this.value)
        }
    }

    this.convertToMS = () => {
        if (this.unit === MPH) {
            this.unit = MS
            this.value = ConverterUtil.milesPerHourToMetersPerSecond(this.value)
        }
    }
}

export const CloudCoveragePrediction = function (min, max, time, place, unit) {
    WeatherPrediction.call(this, min, max, time, place, CLOUD_COVERAGE, unit)
}

