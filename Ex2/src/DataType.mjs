export class DataType {
    constructor(type, unit) {
        this.type = type
        this.unit = unit
    }

    getType = () => this.type

    getUnit = () => this.unit
}