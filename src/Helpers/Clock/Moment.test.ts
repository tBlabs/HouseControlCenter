import { Moment } from "./Moment";
import { Time } from "./Time";
import { Day } from "./Day";

test(`defined moment should pass for fitting date`, () =>
{
    const moment = new Moment(new Time(7, 30), [Day.Monday]);

    const now = new Date(2018, 11, 31, 7, 30, 0); // Last day of DECEMBER is Monday
    const isItNow = moment.IsItNow(now);

    expect(isItNow).toBe(true);
});

test(`${Moment.name} should not pass given date for selected moment`, () =>
{
    const moment = new Moment(new Time(7, 30), [Day.Monday]);

    const december = 11;
    const now = new Date(2018, december, 30, 7, 30, 0);
    const isItNow = moment.IsItNow(now);

    expect(isItNow).toBe(false);
});

test(`${Moment.name} should not pass given date for selected moment`, () =>
{
    const moment = new Moment(new Time(7, 31), [Day.Monday]);

    const now = new Date(2018, 11, 31, 7, 30, 0); // Last day of DECEMBER is Monday
    const isItNow = moment.IsItNow(now);

    expect(isItNow).toBe(false);
});