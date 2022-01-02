import {WeatherHistory} from "./WeatherHistory.mjs";

export class WeatherForecast extends WeatherHistory {
    constructor(weatherPredictions) {
        super(weatherPredictions);
    }
}