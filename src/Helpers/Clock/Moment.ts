import { Time } from "./Time";
import { Day } from "./Day";

export class Moment
{
    constructor(
        public Time: Time,
        public Days: Day[])
    { }

    public IsItNow(now: Date): boolean
    {
        return this.Days.includes(now.getDay()) && this.Time.Hour === now.getHours() && this.Time.Minute === now.getMinutes();
    }
}
