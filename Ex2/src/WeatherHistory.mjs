export class WeatherHistory {
    constructor(weatherDataList) {
        this.data = weatherDataList || []
        this.placeFilter = null
        this.typeFilter = null
        this.periodFilter = null
    }

    getPlaceFilter = () => this.placeFilter
    setPlaceFilter = (placeFilter) => {
        this.placeFilter = placeFilter
    }
    clearPlaceFilter = () => {
        this.placeFilter = null
    }


    getTypeFilter = () => this.typeFilter
    setTypeFilter = (typeFilter) => {
        this.typeFilter = typeFilter
    }
    clearTypeFilter = () => {
        this.typeFilter = null
    }


    getPeriodFilter = () => this.periodFilter
    setPeriodFilter = (periodFilter) => {
        this.periodFilter = periodFilter
    }
    clearPeriodFilter = () => {
        this.periodFilter = null
    }


    convertToUSUnits = () => {
        this.data
            .filter(entry => entry.getType() === TEMPERATURE)
            .forEach(entry => entry.convertToF())

        this.data
            .filter(entry => entry.getType() === WIND)
            .forEach(entry => entry.convertToMPH())

        this.data
            .filter(entry => entry.getType() === PRECIPITATION)
            .forEach(entry => entry.convertToInches())
    }
    convertToInternationalUnits = () => {
        this.data
            .filter(entry => entry.getType() === TEMPERATURE)
            .forEach(entry => entry.convertToC())

        this.data
            .filter(entry => entry.getType() === WIND)
            .forEach(entry => entry.convertToMS())

        this.data
            .filter(entry => entry.getType() === PRECIPITATION)
            .forEach(entry => entry.convertToMM())
    }

    add = (weatherData) => this.data.push(weatherData)

    getFilteredData = () => {
        return this.data
            .filter(entry => !this.placeFilter || entry.getPlace() === this.placeFilter)
            .filter(entry => !this.typeFilter || entry.getType() === this.typeFilter)
            .filter(entry => !this.periodFilter || this.periodFilter.contains(entry.getTime()))
    }
}