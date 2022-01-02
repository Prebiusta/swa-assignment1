export const Event = function (time, place) {
    this.time = time
    this.place = place

    this.getTime = () => this.time
    this.getPlace = () => this.place
}

