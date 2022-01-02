import {Event} from "./Event.mjs";
import {CELSIUS, CLOUD_COVERAGE, FAHRENHEIT, INCH, MM, PRECIPITATION, TEMPERATURE, WIND} from "../util/Constants.mjs";
import ConverterUtil from "../util/ConverterUtils.mjs";
import {MPH, MS} from "../../Ex1/util/Constants.js";

export class WeatherData extends Event {
    constructor(value, time, place, type, unit) {
        super(time, place, type, unit);
        this.value = value
    }

    getValue() {
        return this.value
    }
}

export class Temperature extends WeatherData {
    constructor(value, time, place, unit) {
        super(value, time, place, TEMPERATURE, unit);
    }

    convertToF() {
        if (this.unit === CELSIUS) {
            this.unit = FAHRENHEIT
            this.value = ConverterUtil.celsiusToFahrenheit(this.value)
        }
    }

    convertToC() {
        if (this.unit === FAHRENHEIT) {
            this.unit = CELSIUS
            this.value = ConverterUtil.fahrenheitToCelsius(this.value)
        }
    }
}

export class Precipitation extends WeatherData {
    constructor(precipitationType, value, time, place, unit) {
        super(value, time, place, PRECIPITATION, unit);
        this.precipitationType = precipitationType
    }

    getPrecipitationType() {
        return this.precipitationType
    }

    convertToInches() {
        if (this.unit === MM) {
            this.unit = INCH
            this.value = ConverterUtil.millimetersToInches(this.value)
        }
        return this
    }

    convertToMM() {
        if (this.unit === INCH) {
            this.unit = MM
            this.value = ConverterUtil.inchesToMillimeters(this.value)
        }
        return this
    }
}

export class Wind extends WeatherData {
    constructor(direction, value, time, place, unit) {
        super(value, time, place, WIND, unit);
        this.direction = direction
    }

    getDirection() {
        return this.direction
    }

    convertToMPH() {
        if (this.unit === MS) {
            this.unit = MPH
            this.value = ConverterUtil.metersPerSecondToMilesPerHour(this.value)
        }
    }

    convertToMS() {
        if (this.unit === MPH) {
            this.unit = MS
            this.value = ConverterUtil.milesPerHourToMetersPerSecond(this.value)
        }
    }
}

export class CloudCoverage extends WeatherData {
    constructor(value, time, place, unit) {
        super(value, time, place, CLOUD_COVERAGE, unit);
    }
}