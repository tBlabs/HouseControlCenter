"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Moment_1 = require("./Moment");
const Time_1 = require("./Time");
const Day_1 = require("./Day");
test(`defined moment should pass for fitting date`, () => {
    const moment = new Moment_1.Moment(new Time_1.Time(7, 30), [Day_1.Day.Monday]);
    const now = new Date(2018, 11, 31, 7, 30, 0); // Last day of DECEMBER is Monday
    const isItNow = moment.IsItNow(now);
    expect(isItNow).toBe(true);
});
test(`${Moment_1.Moment.name} should not pass given date for selected moment`, () => {
    const moment = new Moment_1.Moment(new Time_1.Time(7, 30), [Day_1.Day.Monday]);
    const december = 11;
    const now = new Date(2018, december, 30, 7, 30, 0);
    const isItNow = moment.IsItNow(now);
    expect(isItNow).toBe(false);
});
test(`${Moment_1.Moment.name} should not pass given date for selected moment`, () => {
    const moment = new Moment_1.Moment(new Time_1.Time(7, 31), [Day_1.Day.Monday]);
    const now = new Date(2018, 11, 31, 7, 30, 0); // Last day of DECEMBER is Monday
    const isItNow = moment.IsItNow(now);
    expect(isItNow).toBe(false);
});
//# sourceMappingURL=Moment.test.js.map