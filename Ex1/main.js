import {TimePeriod} from "./src/TimePeriod.js";
import {CELSIUS, FAHRENHEIT, INCH, MM, MPH, MS} from "./util/Constants.js";
import {WeatherHistory} from "./src/WeatherHistory.js";
import {
    CloudCoveragePrediction,
    PrecipitationPrediction,
    TemperaturePrediction,
    WeatherPrediction,
    WindPrediction
} from "./src/WeatherPrediction.js";
import {CloudCoverage, Precipitation, Temperature, Wind} from "./src/WeatherData.js";
import {WeatherForecast} from "./src/WeatherForecast.js";


const interval = new TimePeriod(new Date("2021-09-16T12:00:00.000Z"), new Date('2021-09-18T12:13:41.706Z'))

const temp = new Temperature(12, new Date("2021-09-16T12:13:41.706Z"), "Home", CELSIUS)
const temp1 = new Temperature(12, new Date(), "Horsens", FAHRENHEIT)

const wind = new Wind("South", "80", new Date("2021-09-16T14:13:41.706Z"), "Horsens", MPH)
const wind1 = new Wind("South", "12", new Date("2021-08-16T14:13:41.706Z"), "Home", MS)

const precipitation = new Precipitation("Rain", 12, new Date("2021-09-17T12:13:41.706Z"), "Horsens", INCH)
const precipitation1 = new Precipitation("Rain", 22, new Date("2021-09-17T16:13:41.706Z"), "Horsens", INCH)

const cloudCoverage = new CloudCoverage('80', new Date("2021-09-16T12:13:41.706Z"), "Home", "%")
const cloudCoverage1 = new CloudCoverage('20', new Date("2021-09-12T12:13:41.706Z"), "Home", "%")

const weatherDataList = [temp, temp1, wind, wind1, precipitation, precipitation1, cloudCoverage, cloudCoverage1]
const history = new WeatherHistory(weatherDataList)
history.setPeriodFilter(interval)
console.log(history.getFilteredData())

const tempPred1 = new TemperaturePrediction(0, 20, new Date("2021-09-16T12:00:00.000Z"), "Home", CELSIUS)
const tempPred2 = new TemperaturePrediction(22, 80, new Date("2021-09-17T12:00:00.000Z"), "Home", FAHRENHEIT)

const windPred1 = new WindPrediction(['North', 'South'], 10, 20, new Date(), "Horsens", MPH)

const precipitationPred1 = new PrecipitationPrediction(['Rain', 'Breeze'], 5, 15, new Date("2021-09-17T12:13:41.706Z"), "Horsens", MM)
const precipitationPred2 = new PrecipitationPrediction(['Rain'], 0, 5, new Date("2021-09-18T12:13:41.706Z"), "Home", INCH)

const cloudCoveragePred1 = new CloudCoveragePrediction(30, 60, new Date("2021-09-17T12:13:41.706Z"), "Horsens", "%")


const weatherForecastsList = [tempPred1, tempPred2, windPred1, precipitationPred1, precipitationPred2, cloudCoveragePred1]
const forecast = new WeatherForecast(weatherForecastsList)
forecast.setPeriodFilter(interval)

console.log(forecast.getFilteredData())