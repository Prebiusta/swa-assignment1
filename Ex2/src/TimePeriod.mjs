export class TimePeriod {
    constructor(from, to) {
        this.from = from
        this.to = to
    }

    getFrom = () => this.from
    getTo = () => this.to

    contains = (date) => date <= this.to && date >= this.from
}