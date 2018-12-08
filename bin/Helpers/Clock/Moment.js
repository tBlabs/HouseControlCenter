"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Moment {
    constructor(Time, Days) {
        this.Time = Time;
        this.Days = Days;
    }
    IsItNow(now) {
        return this.Days.includes(now.getDay()) && this.Time.Hour === now.getHours() && this.Time.Minute === now.getMinutes();
    }
}
exports.Moment = Moment;
//# sourceMappingURL=Moment.js.map