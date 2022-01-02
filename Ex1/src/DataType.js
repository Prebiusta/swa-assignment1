export const DataType = function (type, unit) {
    this.type = type
    this.unit = unit

    this.getType = () => this.type
    this.getUnit = () => this.unit
}
