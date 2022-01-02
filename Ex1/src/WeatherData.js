import {Event} from "./Event.js";
import {DataType} from "./DataType.js";
import {CELSIUS, CLOUD_COVERAGE, FAHRENHEIT, INCH, MM, MPH, MS, PRECIPITATION, TEMPERATURE, WIND} from "../util/Constants.js";
import ConverterUtil from "../util/ConverterUtils.js";

export const WeatherData = function (value, time, place, type, unit) {
    Event.call(this, time, place)
    DataType.call(this, type, unit)
    this.value = value

    this.getValue = () => this.value
}

export const Temperature = function (value, time, place, unit) {
    WeatherData.call(this, value, time, place, TEMPERATURE, unit)

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


export const Precipitation = function (type, value, time, place, unit) {
    WeatherData.call(this, value, time, place, PRECIPITATION, unit)
    this.precipitationType = type

    const getPrecipitation = () => this.precipitationType

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


export const Wind = function (direction, value, time, place, unit) {
    WeatherData.call(this, value, time, place, WIND, unit)
    this.direction = direction

    this.getDirection = () => this.direction

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

export const CloudCoverage = function (value, time, place, unit) {
    WeatherData.call(this, value, time, place, CLOUD_COVERAGE, unit)
}