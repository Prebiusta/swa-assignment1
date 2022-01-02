export const TimePeriod = function (from, to) {
    this.from = from
    this.to = to

    this.getFrom = () => this.from
    this.getTo = () => this.to

    this.contains = (date) => date <= this.to && date >= this.from
}
