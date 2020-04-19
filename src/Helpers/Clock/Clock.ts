import { IRepeater } from "../../services/repeater/Repeater";
import { IDateTimeProvider } from "../../services/DateTimeProvider/IDateTimeProvider";
import { Moment } from "./Moment";
import { injectable, inject } from "inversify";
import { Types } from "../../IoC/Types";

export class TimeAction
{
    constructor(
        public Time: Moment,
        public Action: (time: Moment) => void)
    { }
}

@injectable()
export class Clock
{
    private actions: TimeAction[] = [];

    constructor(
        @inject(Types.IRepeater) private _repeater: IRepeater,
        @inject(Types.IDateTimeProvider) private _dateTimeProvider: IDateTimeProvider)
    {
        this._repeater.EveryMinute(() =>
        {
            this.actions.forEach(a =>
            {
                if (a.Time.IsItNow(_dateTimeProvider.Now))
                {
                    a.Action(a.Time);
                }
            })
        });
    }

    public At(moment: Moment, callback: (moment: Moment) => void): void
    {
        this.actions.push(new TimeAction(moment, callback));
    }
}