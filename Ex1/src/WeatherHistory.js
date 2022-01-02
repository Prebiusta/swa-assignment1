export const WeatherHistory = function (weatherDataList) {
    this.data = weatherDataList || []
    this.placeFilter = null
    this.typeFilter = null
    this.periodFilter = null

    this.getPlaceFilter = () => this.placeFilter
    this.setPlaceFilter = (placeFilter) => {
        this.placeFilter = placeFilter
    }
    this.clearPlaceFilter = () => {
        this.placeFilter = null
    }


    this.getTypeFilter = () => this.typeFilter
    this.setTypeFilter = (typeFilter) => {
        this.typeFilter = typeFilter
    }
    this.clearTypeFilter = () => {
        this.typeFilter = null
    }


    this.getPeriodFilter = () => this.periodFilter
    this.setPeriodFilter = (periodFilter) => {
        this.periodFilter = periodFilter
    }
    this.clearPeriodFilter = () => {
        this.periodFilter = null
    }


    this.convertToUSUnits = () => {
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
    this.convertToInternationalUnits = () => {
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

    this.add = (weatherData) => this.data.push(weatherData)

    this.getFilteredData = () => {
        return this.data
            .filter(entry => !this.placeFilter || entry.getPlace() === this.placeFilter)
            .filter(entry => !this.typeFilter || entry.getType() === this.typeFilter)
            .filter(entry => !this.periodFilter || this.periodFilter.contains(entry.getTime()))
    }
}
